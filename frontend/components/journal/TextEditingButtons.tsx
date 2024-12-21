"use client";

import { Bold, Italic, Underline, List, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TextFormattingButtons() {
  return (
    <div className="mb-4 flex space-x-2">
      <Button variant="outline" size="icon">
        <Bold className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Italic className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Underline className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <List className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon">
        <Image className="h-4 w-4" />
      </Button>
    </div>
  );
}
