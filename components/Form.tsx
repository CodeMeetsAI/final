export function TextField({
  label,
  type = "text",
  placeholder,
  required = false,
  id,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-sand bg-[#F4F5F3] px-3.5 py-3 text-[14px] transition-colors focus:border-brand-600 focus:bg-white focus:outline-none"
      />
    </div>
  );
}

export function TextAreaField({
  label,
  placeholder,
  required = false,
  id,
  rows = 5,
}: {
  label: string;
  placeholder?: string;
  required?: boolean;
  id?: string;
  rows?: number;
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-ink">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        required={required}
        className="w-full resize-y rounded-lg border border-sand bg-[#F4F5F3] px-3.5 py-3 text-[14px] transition-colors focus:border-brand-600 focus:bg-white focus:outline-none"
      />
    </div>
  );
}

export function SelectField({
  label,
  options,
  id,
}: {
  label: string;
  options: string[];
  id?: string;
}) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-semibold text-ink">
        {label}
      </label>
      <select
        id={id}
        className="w-full rounded-lg border border-sand bg-[#F4F5F3] px-3.5 py-3 text-[14px] transition-colors focus:border-brand-600 focus:bg-white focus:outline-none"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

export function FormShell({
  children,
  title,
  maxWidth = "max-w-none",
}: {
  children: React.ReactNode;
  title?: string;
  maxWidth?: string;
}) {
  return (
    <form
      action="#"
      className={`reveal rounded-[20px] border border-sand bg-white p-8 shadow-card ${maxWidth}`}
    >
      {title && <h3 className="mb-6 text-[19px] font-bold text-ink">{title}</h3>}
      {children}
    </form>
  );
}

export function SubmitButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="w-full rounded-lg bg-accent-500 px-6 py-3.5 text-[15px] font-bold text-brand-900 transition-colors hover:bg-accent-600"
    >
      {children}
    </button>
  );
}
