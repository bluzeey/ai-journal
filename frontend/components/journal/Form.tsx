import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

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
  const [date, setDate] = useState<Date | undefined>(new Date());

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
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={`w-[280px] justify-start text-left font-normal bg-white dark:bg-gray-700 dark:text-white`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
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
