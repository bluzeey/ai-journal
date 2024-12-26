import { NextRequest, NextResponse } from "next/server";
import { Message as VercelChatMessage, Stre } from "ai";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createClient } from "@supabase/supabase-js";
import { HttpResponseOutputParser } from "langchain/output_parsers";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
export const runtime = "edge";

// Initialize OpenAI client with streaming
const openai = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4o-mini",
  streaming: true,
});

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    console.log(requestBody.prompt);
    const { entryId, userId } = JSON.parse(requestBody.prompt);

    if (!entryId || !userId) {
      return NextResponse.json(
        { error: "Journal entry ID and User ID are required" },
        { status: 400 }
      );
    }

    // Fetch the specific journal entry
    const { data: specificJournalEntry, error: specificEntryError } =
      await supabase
        .from("journal_entries")
        .select("content, date")
        .eq("id", entryId)
        .eq("user_id", userId)
        .single();

    if (specificEntryError) {
      console.error(
        "Error fetching specific journal entry:",
        specificEntryError
      );
      return NextResponse.json(
        { error: "Error fetching specific journal entry" },
        { status: 500 }
      );
    }

    if (!specificJournalEntry) {
      return NextResponse.json(
        { error: "Journal entry not found" },
        { status: 404 }
      );
    }

    // Fetch previous entries for context
    const { data: previousEntries, error: previousEntriesError } =
      await supabase
        .from("journal_entries")
        .select("content")
        .eq("user_id", userId)
        .lt("date", specificJournalEntry.date)
        .order("date", { ascending: false })
        .limit(5);

    if (previousEntriesError) {
      console.error(
        "Error fetching previous journal entries:",
        previousEntriesError
      );
      return NextResponse.json(
        { error: "Error fetching previous journal entries" },
        { status: 500 }
      );
    }

    // Combine entries for context
    let combinedEntriesText = (previousEntries || [])
      .map((entry) => entry.content)
      .join("\n\n");
    combinedEntriesText += "\n\n" + specificJournalEntry.content;

    // Generate insight using OpenAI with streaming
    const systemTemplate =
      "Analyze the provided journal entries, including past context, and act as a therapist and advisor. Provide holistic insights with tough love.";

    const promptTemplate = ChatPromptTemplate.fromMessages([
      ["system", systemTemplate],
      ["user", "{text}"],
    ]);

    const formattedPrompt = await promptTemplate.format({
      text: combinedEntriesText,
    });

    const outputParser = new HttpResponseOutputParser();

    const chain = promptTemplate.pipe(openai).pipe(outputParser);

    const stream = await chain.stream({
      chat_history: formattedPrompt,
      text: specificJournalEntry,
    });

    // Convert the stream to a format compatible with AI SD

    // Return a StreamingTextResponse, which sets the appropriate headers and streams the response
    return new NextResponse(stream, {
      status: 200,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
