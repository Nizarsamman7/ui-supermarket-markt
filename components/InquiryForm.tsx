"use client";

import { useState } from "react";

type Field = { name: string; label: string; type?: string; options?: string[] };

export function InquiryForm({
  fields,
  submitLabel,
}: {
  fields: Field[];
  submitLabel: string;
}) {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <p className="form-success" role="status">
        Saved in this browser only. Connect email or a database before launch.
      </p>
    );
  }
  return (
    <form
      className="inquiry-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      {fields.map((field) => (
        <label key={field.name}>
          <span>{field.label}</span>
          {field.type === "textarea" ? (
            <textarea name={field.name} required rows={4} />
          ) : field.type === "select" ? (
            <select name={field.name} required defaultValue="">
              <option value="" disabled>
                Choose
              </option>
              {(field.options ?? []).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input name={field.name} type={field.type ?? "text"} required />
          )}
        </label>
      ))}
      <button type="submit">{submitLabel}</button>
    </form>
  );
}
