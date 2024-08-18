import { MouseEventHandler } from "react";

type SubmitButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  label?: string;
  disabled?: boolean;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  label = "Submit",
  disabled = false,
}) => {
  return (
    <button
      type="submit"
      className={`rounded px-4 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500
      ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-500 hover:bg-indigo-400"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default SubmitButton;
