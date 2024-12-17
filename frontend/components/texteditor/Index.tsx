import React, { useState, useEffect, useRef, useCallback } from "react";
import { useCustomEditor } from "./useCustomEditor";
import MenuBar from "./MenuBar";
import VersionHistory from "./VersionHistory";
import BranchingTimeline from "./BranchingTimeline";
import EditorStatus from "./EditorStatus";
import { EditorContent } from "@tiptap/react";
import * as Y from "yjs";
import { debounce } from "@/lib/utils";

const CHARACTER_LIMIT = 1000;

const TextEditor: React.FC = () => {
  const ydoc = new Y.Doc();
  const [branches, setBranches] = useState({
    branch1: {
      versions: [],
      metadata: { originBranch: "branch1", originVersionIndex: -1 },
    },
  });
  const [branchCount, setBranchCount] = useState(2); // Counter for branch names
  const [currentBranch, setCurrentBranch] = useState("branch1");
  const currentBranchRef = useRef(currentBranch);
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0);
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  useEffect(() => {
    currentBranchRef.current = currentBranch;
  }, [currentBranch]);

  const debouncedSaveSnapshot = useCallback(
    debounce((snapshot) => {
      setBranches((prevBranches) => {
        const branchName = currentBranchRef.current;
        if (branchName in prevBranches) {
          return {
            ...prevBranches,
            [branchName]: {
              ...prevBranches[branchName],
              versions: [...prevBranches[branchName].versions, snapshot],
            },
          };
        }
        return prevBranches;
      });
      setCurrentVersionIndex((prevIndex) => prevIndex + 1);
    }, 500),
    []
  );

  const editor = useCustomEditor(ydoc, debouncedSaveSnapshot);

  if (!editor) return null;

  const handleCreateBranch = () => {
    const newBranchName = `branch${branchCount}`;
    const initialContent =
      branches[currentBranch]?.versions?.[currentVersionIndex - 1] ||
      editor.getJSON();
    const branchMetadata = {
      originBranch: currentBranch,
      originVersionIndex: currentVersionIndex - 1,
    };

    setBranches((prevBranches) => ({
      ...prevBranches,
      [newBranchName]: { versions: [initialContent], metadata: branchMetadata },
    }));
    setCurrentBranch(newBranchName);
    setCurrentVersionIndex(0);
    setBranchCount((prevCount) => prevCount + 1); // Increment the branch counter
  };

  const handleSeekVersion = (versionIndex: number) => {
    const branchTimeline = branches[currentBranch]?.versions;
    if (editor && branchTimeline && branchTimeline[versionIndex]) {
      editor.commands.setContent(branchTimeline[versionIndex]);
      setCurrentVersionIndex(versionIndex);
    }
  };

  const handleSelectBranch = (branchName: string) => {
    setCurrentBranch(branchName);
    const branchTimeline = branches[branchName]?.versions;
    if (editor && branchTimeline && branchTimeline.length > 0) {
      editor.commands.setContent(branchTimeline[branchTimeline.length - 1]);
      setCurrentVersionIndex(branchTimeline.length - 1);
    }
  };

  const characterCount = editor.storage.characterCount.characters();
  const wordCount = editor.storage.characterCount.words();
  const isLimitReached = characterCount >= CHARACTER_LIMIT;

  return (
    <div className="p-4 rounded-md">
      <div className="flex justify-between">
        <MenuBar editor={editor} />
        <VersionHistory
          versions={branches[currentBranch].versions}
          currentVersionIndex={currentVersionIndex}
          onSeekVersion={handleSeekVersion}
          isPaneOpen={isPaneOpen}
          setIsPaneOpen={setIsPaneOpen}
        />
      </div>

      <EditorContent
        editor={editor}
        className="mt-4 mb-4 p-2 bg-gray-50 border rounded-md w-full"
      />
      <EditorStatus
        characterCount={characterCount}
        wordCount={wordCount}
        limit={CHARACTER_LIMIT}
        isLimitReached={isLimitReached}
      />
      <BranchingTimeline
        branches={branches}
        currentBranch={currentBranch}
        currentVersionIndex={currentVersionIndex}
        onSeek={handleSeekVersion}
        onCreateBranch={handleCreateBranch}
        onSelectBranch={handleSelectBranch}
      />
    </div>
  );
};

export default TextEditor;
