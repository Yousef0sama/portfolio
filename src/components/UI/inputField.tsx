

interface BaseProps {
  label?: string;
  name: string;
  error?: string;
  className?: string;
  textarea?: boolean;
  type?: string;
  required?: boolean;
  id: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function InputField({
  label,
  name,
  type = "text",
  error,
  className = "",
  textarea = false,
  required,
  id,
  value,
  handleChange,
  placeholder,
}: BaseProps) {
  const errorId = `${id}-error`;
  const InputTag = textarea ? "textarea" : "input";

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
          {required && <span className="text-red-600 dark:text-red-400 ms-1">*</span>}
        </label>
      )}

      <InputTag
        id={id}
        name={name}
        type={textarea ? undefined : type}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        placeholder={placeholder}
        className={`
          w-full rounded-lg border px-3 py-2 text-sm
          focus:outline-none transition
          focus:ring-2 focus:ring-primary/50
          ${error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:border-primary"}
          ${textarea ? "min-h-[120px] resize-none" : ""}
        `}
        value={value}
        onChange={handleChange}
      />

      {error && (
        <p id={errorId} className="text-sm text-red-600" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}
