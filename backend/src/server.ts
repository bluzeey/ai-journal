import express, { Express, Request, Response } from "express";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import dotenv from "dotenv"; // Import the OpenAI library
import { ChatOpenAI } from "@langchain/openai";
import { createClient } from "@supabase/supabase-js";
import cors from "cors";

// Add this import
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Ensure that the server can parse JSON request bodies
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

const openai = new ChatOpenAI({ model: "gpt-4o-mini" });

// New route to interact with OpenAI
app.post("/api/insights", async (req: Request, res: Response) => {
  const { entryId, userId } = req.body.body;
  console.log(req.body.body);
  if (!entryId || !userId) {
    return res.status(400).send("Journal entry ID and User ID are required");
  }

  try {
    // Fetch the specific journal entry with its ID
    const { data: specificJournalEntry, error: specificEntryError } =
      await supabase
        .from("journal_entries")
        .select("content, date")
        .eq("id", entryId)
        .eq("user_id", userId)
        .single();

    if (specificEntryError) {
      return res
        .status(500)
        .send(
          "Error fetching specific journal entry: " + specificEntryError.message
        );
    }

    if (!specificJournalEntry) {
      return res.status(404).send("Journal entry not found.");
    }

    // Fetch previous entries for the user for context, sorted by date
    const { data: previousEntries, error: previousEntriesError } =
      await supabase
        .from("journal_entries")
        .select("content")
        .eq("user_id", userId)
        .lt("date", specificJournalEntry.date)
        .order("date", { ascending: false })
        .limit(5); // Limit to a reasonable number of previous entries for context

    if (previousEntriesError) {
      return res
        .status(500)
        .send(
          "Error fetching previous journal entries: " +
            previousEntriesError.message
        );
    }

    // Concatenate previous entries with the current entry for comprehensive context
    let combinedEntriesText = (previousEntries || [])
      .map((entry) => entry.content)
      .join("\n\n");

    combinedEntriesText += "\n\n" + specificJournalEntry.content;

    // Generate insight using OpenAI with combined entries
    const systemTemplate =
      "Analyze the provided journal entries, including past context, and act as a therapist and advisor. Provide holistic insights with tough love.";

    const promptTemplate = ChatPromptTemplate.fromMessages([
      ["system", systemTemplate],
      ["user", "{text}"],
    ]);

    const formattedPrompt = await promptTemplate.format({
      text: combinedEntriesText,
    });

    try {
      const result = await openai.invoke(formattedPrompt);
      const insight = result.content || "No insight generated.";
      res.json({ insight });
    } catch (error) {
      console.error("Error calling OpenAI: ", error);
      res.status(500).send("Error generating insight from OpenAI.");
    }
  } catch (error) {
    res
      .status(500)
      .send("Unexpected server error: " + (error as Error).message);
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello I am working, my friend OpenAI <3");
});

app.get("*", (req: Request, res: Response) => {
  res.send("Hello again, I am working, my friend, to the moon and beyond <3");
});

app.listen(8000, () => {
  console.log(`> Ready on http://localhost:8000`);
});
