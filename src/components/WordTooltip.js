import React from "react";

const WordTooltip = ({ word, position, onClose }) => {
  return (
    <div
      className="absolute bg-white border p-2 rounded shadow"
      style={{ top: position.y + 20, left: position.x }}
    >
      <strong>{word}</strong>
      <div>Definition: [mock meaning]</div>
      <button className="text-xs text-blue-600 mt-1" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default WordTooltip;
