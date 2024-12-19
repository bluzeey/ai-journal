"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prompts_1 = require("@langchain/core/prompts");
const dotenv_1 = __importDefault(require("dotenv")); // Import the OpenAI library
const openai_1 = require("@langchain/openai");
const supabase_js_1 = require("@supabase/supabase-js");
const cors_1 = __importDefault(require("cors"));
// Add this import
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Ensure that the server can parse JSON request bodies
const supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const openai = new openai_1.ChatOpenAI({ model: "gpt-4o-mini" });
// New route to interact with OpenAI
app.post("/api/insights", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { entryId, userId } = req.body.body;
    console.log(req.body.body);
    if (!entryId || !userId) {
        return res.status(400).send("Journal entry ID and User ID are required");
    }
    try {
        // Fetch the specific journal entry with its ID
        const { data: specificJournalEntry, error: specificEntryError } = yield supabase
            .from("journal_entries")
            .select("content, date")
            .eq("id", entryId)
            .eq("user_id", userId)
            .single();
        if (specificEntryError) {
            return res
                .status(500)
                .send("Error fetching specific journal entry: " + specificEntryError.message);
        }
        if (!specificJournalEntry) {
            return res.status(404).send("Journal entry not found.");
        }
        // Fetch previous entries for the user for context, sorted by date
        const { data: previousEntries, error: previousEntriesError } = yield supabase
            .from("journal_entries")
            .select("content")
            .eq("user_id", userId)
            .lt("date", specificJournalEntry.date)
            .order("date", { ascending: false })
            .limit(5); // Limit to a reasonable number of previous entries for context
        if (previousEntriesError) {
            return res
                .status(500)
                .send("Error fetching previous journal entries: " +
                previousEntriesError.message);
        }
        // Concatenate previous entries with the current entry for comprehensive context
        let combinedEntriesText = (previousEntries || [])
            .map((entry) => entry.content)
            .join("\n\n");
        combinedEntriesText += "\n\n" + specificJournalEntry.content;
        // Generate insight using OpenAI with combined entries
        const systemTemplate = "Analyze the provided journal entries, including past context, and act as a therapist and advisor. Provide holistic insights with tough love.";
        const promptTemplate = prompts_1.ChatPromptTemplate.fromMessages([
            ["system", systemTemplate],
            ["user", "{text}"],
        ]);
        const formattedPrompt = yield promptTemplate.format({
            text: combinedEntriesText,
        });
        try {
            const result = yield openai.invoke(formattedPrompt);
            const insight = result.content || "No insight generated.";
            res.json({ insight });
        }
        catch (error) {
            console.error("Error calling OpenAI: ", error);
            res.status(500).send("Error generating insight from OpenAI.");
        }
    }
    catch (error) {
        res
            .status(500)
            .send("Unexpected server error: " + error.message);
    }
}));
app.get("/", (req, res) => {
    res.send("Hello I am working, my friend OpenAI <3");
});
app.get("*", (req, res) => {
    res.send("Hello again, I am working, my friend, to the moon and beyond <3");
});
app.listen(8000, () => {
    console.log(`> Ready on http://localhost:8000`);
});
