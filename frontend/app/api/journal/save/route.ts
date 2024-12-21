import { NextRequest, NextResponse } from "next/server";

import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Initialize OpenAI client
const openai = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-4",
});

export async function POST(request: NextRequest) {
  try {
    const { userId, title, content, date } = await request.json();

    if (!userId || !content) {
      return NextResponse.json(
        { error: "User ID and content are required" },
        { status: 400 }
      );
    }

    // AI analysis for tags and mood
    const analysisPrompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "Analyze the following journal entry. Provide 3-5 relevant tags and determine the overall mood of the entry. " +
          "The mood must be one of the following values: 'happy', 'sad', 'angry', 'neutral', or 'excited'. " +
          "Format your response as JSON with 'tags' (array of strings) and 'mood' (one of the specified values).",
      ],
      ["user", content],
    ]);

    const formattedPrompt = await analysisPrompt.format({ content });
    const result = await openai.invoke(formattedPrompt);

    let aiAnalysis;

    try {
      // Do some cleanup on the result before parsing
      const rawResponse = String(result.content);

      // Clean the JSON string to remove unwanted text
      const jsonString = rawResponse.replace(/```json|```/g, "").trim(); // Remove Markdown formatting

      aiAnalysis = jsonString
        ? JSON.parse(jsonString)
        : { tags: [], mood: "Unknown" }; // Parse the clean JSON
    } catch (error) {
      console.error("Error parsing AI response:", error);
      aiAnalysis = { tags: [], mood: "Unknown" }; // Default if parsing fails
    }

    // Prepare the entry to be saved
    const newEntry = {
      user_id: userId,
      title,
      content,
      tags: Array.isArray(aiAnalysis.tags) ? aiAnalysis.tags : [], // Ensure tags is an array
      mood: typeof aiAnalysis.mood === "string" ? aiAnalysis.mood : "Unknown", // Ensure mood is a string
      date: date || new Date().toISOString(),
      word_count: content.split(/\s+/).filter(Boolean).length,
    };

    // Save to Supabase
    const { data, error } = await supabase
      .from("journal_entries")
      .insert([newEntry])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, entry: data[0] });
  } catch (error) {
    console.error("Error saving journal entry:", error);
    return NextResponse.json(
      { error: "Failed to save journal entry" },
      { status: 500 }
    );
  }
}
