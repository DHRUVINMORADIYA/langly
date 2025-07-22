import React from "react";

const TextInput = ({ onSubmit }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = () => {
    if (value.trim()) onSubmit(value);
  };

  return (
    <div className="p-4">
      <textarea
        className="w-full h-40 p-2 border rounded"
        placeholder="Paste or type your text here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleSubmit}
      >
        Load into Reader
      </button>
    </div>
  );
};

export default TextInput;
