import React, { useState } from "react";

interface ButtonCopyProps {
  dataValue: string;
}

const ButtonCopy: React.FC<ButtonCopyProps> = ({ dataValue }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    // Create a temporary textarea element to copy the text
    const textarea = document.createElement("textarea");
    textarea.value = dataValue;

    // Append the textarea element to the DOM
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Perform the copy operation
    document.execCommand("copy");

    // Remove the textarea element
    document.body.removeChild(textarea);

    // Set the copied status to true and update the button text
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div>
      <button
        className={`px-2 py-1 border border-rose-500 rounded-md mx-auto flex justify-center items-center gap-3 text-white bg-rose-400 hover:bg-white hover:text-rose-500`}
        onClick={handleCopyClick}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

export default ButtonCopy;
