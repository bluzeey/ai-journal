import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

interface JournalFormProps {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
  tags: string[];
  setTags: (tags: string[]) => void;
}

function JournalForm({
  title,
  setTitle,
  content,
  setContent,
  tags,
  setTags,
}: JournalFormProps) {
  return (
    <>
      <div className="mb-4 flex items-center justify-between gap-8">
        <Input
          type="text"
          placeholder="Entry Title (optional)"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          className="w-2/3 text-2xl font-bold bg-white dark:bg-gray-700 dark:text-white"
        />
        <Input
          type="datetime-local"
          defaultValue={new Date().toISOString().slice(0, 16)}
          className="w-1/5 bg-white dark:bg-gray-700 dark:text-white"
        />
      </div>
      <Textarea
        placeholder="Write your journal entry here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="mb-4 min-h-[300px] bg-white dark:bg-gray-700 dark:text-white"
      />
    </>
  );
}

export default JournalForm;
