import React from "react";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  X,
  Trash2,
  Pilcrow,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  List,
  ListOrdered,
  Quote,
  Minus,
  CornerDownLeft,
  Undo,
  Redo,
  Palette,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MenuBarProps {
  editor: Editor | null;
}

export default function MenuBar({ editor }: MenuBarProps) {
  if (!editor) return null;

  const ToolbarButton = ({ 
    onClick, 
    disabled = false, 
    isActive = false, 
    icon, 
    tooltip 
  }: { 
    onClick: () => void, 
    disabled?: boolean, 
    isActive?: boolean, 
    icon: React.ReactNode, 
    tooltip: string 
  }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={isActive ? "default" : "outline"}
            size="icon"
            onClick={onClick}
            disabled={disabled}
            className="h-8 w-8"
          >
            {icon}
            <span className="sr-only">{tooltip}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <div className="flex flex-wrap gap-1 p-1 bg-background rounded-t-md">
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
        icon={<Bold className="h-4 w-4" />}
        tooltip="Toggle bold"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
        icon={<Italic className="h-4 w-4" />}
        tooltip="Toggle italic"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
        icon={<Strikethrough className="h-4 w-4" />}
        tooltip="Toggle strikethrough"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        isActive={editor.isActive("code")}
        icon={<Code className="h-4 w-4" />}
        tooltip="Toggle code"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        icon={<X className="h-4 w-4" />}
        tooltip="Clear marks"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().clearNodes().run()}
        icon={<Trash2 className="h-4 w-4" />}
        tooltip="Clear nodes"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().setParagraph().run()}
        isActive={editor.isActive("paragraph")}
        icon={<Pilcrow className="h-4 w-4" />}
        tooltip="Set paragraph"
      />
      {[1, 2, 3, 4, 5, 6].map((level:number) => (
        <ToolbarButton
          key={level}
          onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
          isActive={editor.isActive("heading", { level })}
          icon={
            level === 1 ? <Heading1 className="h-4 w-4" /> :
            level === 2 ? <Heading2 className="h-4 w-4" /> :
            level === 3 ? <Heading3 className="h-4 w-4" /> :
            level === 4 ? <Heading4 className="h-4 w-4" /> :
            level === 5 ? <Heading5 className="h-4 w-4" /> :
            <Heading6 className="h-4 w-4" />
          }
          tooltip={`Toggle heading ${level}`}
        />
      ))}
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
        icon={<List className="h-4 w-4" />}
        tooltip="Toggle bullet list"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
        icon={<ListOrdered className="h-4 w-4" />}
        tooltip="Toggle ordered list"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive("codeBlock")}
        icon={<Code className="h-4 w-4" />}
        tooltip="Toggle code block"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockquote")}
        icon={<Quote className="h-4 w-4" />}
        tooltip="Toggle blockquote"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        icon={<Minus className="h-4 w-4" />}
        tooltip="Insert horizontal rule"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().setHardBreak().run()}
        icon={<CornerDownLeft className="h-4 w-4" />}
        tooltip="Insert hard break"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        icon={<Undo className="h-4 w-4" />}
        tooltip="Undo"
      />
      <ToolbarButton
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        icon={<Redo className="h-4 w-4" />}
        tooltip="Redo"
      />
    </div>
  );
}