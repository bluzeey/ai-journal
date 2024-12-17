import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";
import TextStyle from "@tiptap/extension-text-style";
import CharacterCount from "@tiptap/extension-character-count";
import Collaboration from "@tiptap/extension-collaboration";
import ListItem from "@tiptap/extension-list-item";
import * as Y from "yjs";

const CHARACTER_LIMIT = 1000;

export const useCustomEditor = (ydoc: Y.Doc, onSave: (snapshot: any) => void) => {
  return useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { keepMarks: true, keepAttributes: false },
        orderedList: { keepMarks: true, keepAttributes: false },
      }),
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      TextStyle,
      CharacterCount.configure({ limit: CHARACTER_LIMIT }),
      Collaboration.configure({
        document: ydoc,
        field: "content",
        ySyncOptions: {},
        yUndoOptions: {},
        onFirstRender: () => console.log("Content rendered for the first time."),
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      const snapshot = editor.getJSON();
      onSave(snapshot);
    },
  });
};
