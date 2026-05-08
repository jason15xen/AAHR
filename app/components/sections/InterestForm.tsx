"use client";

import { useState } from "react";
import Field, { fieldClass } from "./form/Field";
import SuccessMessage from "./form/SuccessMessage";

const tierOptions = [
  "Select a tier...",
  "Associate — $25K",
  "Principal — $100K",
  "Patron — $500K",
  "Custom Amount",
];

type FormState = {
  name: string;
  email: string;
  tier: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  tier: tierOptions[0],
  message: "",
};

export default function InterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Interest submitted:", form);
    setSubmitted(true);
  };

  return (
    <section className="bg-ink text-cream-light pb-16 lg:pb-20">
      <div className="px-6 md:px-12 lg:px-16">
        <div className="text-center mb-8">
          <p className="font-script text-[36px] text-gold leading-none">
            Express Your Interest
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-ink border-4 border-gold p-6 lg:p-10 space-y-5"
        >
          {submitted ? (
            <SuccessMessage />
          ) : (
            <>
              <NameAndEmail form={form} onChange={handleChange} />
              <TierSelector value={form.tier} onChange={handleChange} />
              <MessageField value={form.message} onChange={handleChange} />
              <SubmitArea />
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function NameAndEmail({
  form,
  onChange,
}: {
  form: FormState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <Field label="Full Name">
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={onChange}
          placeholder="Your full name"
          className={fieldClass}
        />
      </Field>
      <Field label="Email Address">
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={onChange}
          placeholder="jls@advancedautomatons.org"
          className={fieldClass}
        />
      </Field>
    </div>
  );
}

function TierSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <Field label="Investment Tier">
      <select name="tier" value={value} onChange={onChange} className={fieldClass}>
        {tierOptions.map((t) => (
          <option key={t} value={t} className="bg-ink text-cream-light">
            {t}
          </option>
        ))}
      </select>
    </Field>
  );
}

function MessageField({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <Field label="Message">
      <textarea
        name="message"
        rows={4}
        value={value}
        onChange={onChange}
        placeholder="Tell us about your investment goals..."
        className={`${fieldClass} resize-none`}
      />
    </Field>
  );
}

function SubmitArea() {
  return (
    <>
      <button
        type="submit"
        className="w-full py-4 bg-red text-cream-light border-4 border-gold font-script text-[24px] hover:bg-red-dark transition-colors"
      >
        Submit My Interest
      </button>
      <p className="font-body italic text-[12px] text-cream-light/55 text-center leading-snug">
        Not an offer to sell securities. All investments require accredited
        investor verification. Advanced Automatons Inc. is a private company.
      </p>
    </>
  );
}
