export default function Button({
  buttonText,
  type = "button",
  disabled = false,
}: {
  buttonText: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      type={type}
      className="bg-black-900 text-white text-fluid-sm rounded-full px-5 py-4 cursor-pointer hover:bg-black-700 transition-colors active:duration-100 active:bg-purple disabled:bg-black-200 disabled:cursor-not-allowed focus:outline-none focus-visible:bg-black-700"
    >
      {buttonText}
    </button>
  );
}
