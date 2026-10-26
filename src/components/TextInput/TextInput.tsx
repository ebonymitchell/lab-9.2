
import type { ChangeEvent } from "react";
import type { TextInputProps } from "../../types";

export function TextInput({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}: TextInputProps) {
  // Handle changes whenever the user types.
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    // Send the updated text to the parent component.
    onTextChange(event.target.value);
  };

  return (
    <div className="text-input">
      <label htmlFor="text-content">Your Text</label>

      <textarea
        id="text-content"
        name="text-content"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={handleChange}
        rows={8}
      />
    </div>
  );
}
