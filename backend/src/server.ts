import express, { Express, Request, Response } from "express";
import OpenAI from "openai";
import dotenv from "dotenv"; // Import the OpenAI library
// Add this import
require("dotenv").config();
const app = express();
app.use(express.json());

// Ensure that the server can parse JSON request bodies

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); // Initialize OpenAI client

// New route to interact with OpenAI
app.post("/openai/chat", async (req: Request, res: Response) => {
  const messageContent = req.body.message; // Expecting message body to have a `message` field

  if (!messageContent) {
    return res.status(400).send("Message content is required");
  }

  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: messageContent }],
      model: "gpt-3.5-turbo", // Change model if needed
    });

    res.send(chatCompletion);
  } catch (error) {
    res.status(500).send("Error calling OpenAI: " + (error as Error).message);
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
