import React from "react";

interface EditorStatusProps {
  characterCount: number;
  wordCount: number;
  limit: number;
  isLimitReached: boolean;
}

const EditorStatus: React.FC<EditorStatusProps> = ({
  characterCount,
  wordCount,
  limit,
  isLimitReached,
}) => {
  const percentage = Math.round((100 / limit) * characterCount);

  return (
    <div
      className={`character-count flex items-center gap-2 ${
        isLimitReached ? "character-count--warning" : ""
      }`}
    >
      <svg height="20" width="20" viewBox="0 0 20 20">
        <circle r="10" cx="10" cy="10" fill="#e9ecef" />
        <circle
          r="5"
          cx="10"
          cy="10"
          fill="transparent"
          stroke="currentColor"
          strokeWidth="10"
          strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
          transform="rotate(-90) translate(-20)"
        />
        <circle r="6" cx="10" cy="10" fill="white" />
      </svg>
      {characterCount} / {limit} characters ({wordCount} words)
    </div>
  );
};

export default EditorStatus;
