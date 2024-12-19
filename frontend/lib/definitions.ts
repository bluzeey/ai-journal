export type JournalEntry = {
  id: string;
  title: string;
  date: string;
  snippet?: string;
  content: string;
  tags: string[];
  wordCount: Number;
};
