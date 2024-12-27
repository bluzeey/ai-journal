"use client";

import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

interface TagsAndWordCountProps {
  tags: string[];
  setTags: (tags: string[]) => void;
  content: string;
}

export default function TagsAndWordCount({
  tags,
  setTags,
  content,
}: TagsAndWordCountProps) {
  return (
    <div className="my-4  flex items-center justify-between">
      <div className="flex space-x-2">
        {/* <Button variant="outline" onClick={() => setTags([...tags, ""])}>
          <Tag className="mr-2 h-4 w-4" /> Add Tag
        </Button>
        <Button variant="outline">
          <span>Set Mood</span>
        </Button> */}
      </div>
      <span className="text-sm text-gray-500">
        Word Count: {content.split(/\s+/).filter(Boolean).length}
      </span>
    </div>
  );
}
