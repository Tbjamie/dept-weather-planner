export default function Input({
  type = "text",
  required = true,
  placeholder = "",
}: {
  type?: "text" | "email";
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <input
      type={type}
      required={required}
      placeholder={placeholder}
      className="text-center px-5 py-4 border-solid border border-black-900 text-black-900 rounded-full focus:border-purple outline-none text-fluid-sm"
    />
  );
}
