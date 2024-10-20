"use client"

import React from "react"
import Highlight from "@tiptap/extension-highlight"
import TextAlign from "@tiptap/extension-text-align"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import { Button } from "@/components/ui/button"

const MenuBar = ({ editor }) => {
  if (!editor) return null

  return (
    <div className="flex flex-wrap gap-2 rounded-t-lg border-b border-gray-200 bg-gray-100 p-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 })
            ? "bg-primary text-primary-foreground"
            : ""
        }
      >
        H1
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive("heading", { level: 2 })
            ? "bg-primary text-primary-foreground"
            : ""
        }
      >
        H2
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive("heading", { level: 3 })
            ? "bg-primary text-primary-foreground"
            : ""
        }
      >
        H3
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive("paragraph")
            ? "bg-primary text-primary-foreground"
            : ""
        }
      >
        P
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold") ? "bg-primary text-primary-foreground" : ""
        }
      >
        B
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic") ? "bg-primary text-primary-foreground" : ""
        }
      >
        I
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike") ? "bg-primary text-primary-foreground" : ""
        }
      >
        S
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={
          editor.isActive("highlight")
            ? "bg-primary text-primary-foreground"
            : ""
        }
      >
        H
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={
          editor.isActive({ textAlign: "left" })
            ? "bg-primary text-primary-foreground"
            : ""
        }
      >
        Left
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={
          editor.isActive({ textAlign: "center" })
            ? "bg-primary text-primary-foreground"
            : ""
        }
      >
        Center
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={
          editor.isActive({ textAlign: "right" })
            ? "bg-primary text-primary-foreground"
            : ""
        }
      >
        Right
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={
          editor.isActive({ textAlign: "justify" })
            ? "bg-primary text-primary-foreground"
            : ""
        }
      >
        Justify
      </Button>
    </div>
  )
}

const RichTextEditor = ({ initialContent, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Highlight,
    ],
    content: initialContent || "",
    onUpdate({ editor }) {
      const html = editor.getHTML()
      onChange && onChange(html)
    },
  })

  return (
    <div className="editor-container rounded-lg border shadow-sm">
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="min-h-[200px] p-4 focus:outline-none"
      />
    </div>
  )
}

export default RichTextEditor
