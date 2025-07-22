import React from "react";
import WordTooltip from "./WordTooltip";

const Reader = ({ text }) => {
  const [tooltip, setTooltip] = React.useState(null);

  const handleWordClick = (word, event) => {
    const rect = event.target.getBoundingClientRect();
    setTooltip({
      word,
      position: { x: rect.left + window.scrollX, y: rect.top + window.scrollY },
    });
  };

  const hideTooltip = () => setTooltip(null);

  const renderWords = (sentence) => {
    return sentence.split(" ").map((word, idx) => (
      <span
        key={idx}
        className="cursor-pointer hover:underline"
        onClick={(e) => handleWordClick(word, e)}
      >
        {word + " "}
      </span>
    ));
  };

  return (
    <div className="relative p-4 border-t">
      <h2 className="text-xl font-bold mb-2">Reader</h2>
      <div className="leading-relaxed">
        {text.split("\n").map((line, idx) => (
          <p key={idx}>{renderWords(line)}</p>
        ))}
      </div>
      {tooltip && (
        <WordTooltip
          word={tooltip.word}
          position={tooltip.position}
          onClose={hideTooltip}
        />
      )}
    </div>
  );
};

export default Reader;
