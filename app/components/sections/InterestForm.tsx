"use client";

import { useState } from "react";
import Button from "../ui/Button";
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
    <section className="bg-ink text-cream-light pb-20 lg:pb-24">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="text-center mb-10">
          <p className="font-script italic text-2xl text-cream-light/70">
            Express Your Interest
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-black/40 border border-cream-light/10 p-6 lg:p-10 space-y-5"
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
          placeholder="investor@institutional.com"
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
        placeholder="Tell us about your investment focus..."
        className={`${fieldClass} resize-none`}
      />
    </Field>
  );
}

function SubmitArea() {
  return (
    <>
      <Button type="submit" variant="red" fullWidth className="!py-4 !text-[12px]">
        Submit My Interest
      </Button>
      <p className="text-[10px] text-cream-light/50 text-center leading-relaxed">
        By submitting, you agree to receive investor communications from
        Advanced Automatons. Your data is encrypted and never shared.
      </p>
    </>
  );
}
