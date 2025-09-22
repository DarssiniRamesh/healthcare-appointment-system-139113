import React, { useState, useEffect } from "react";

/**
 * PUBLIC_INTERFACE
 * PatientInfoForm collects essential patient details.
 */
export default function PatientInfoForm({ initial, onBack, onSubmit }) {
  const [values, setValues] = useState(
    initial || {
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      notes: "",
      consent: false,
    }
  );
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initial) setValues((prev) => ({ ...prev, ...initial }));
  }, [initial]);

  const update = (key, val) => setValues((v) => ({ ...v, [key]: val }));

  const validate = () => {
    const e = {};
    if (!values.fullName.trim()) e.fullName = "Full name is required.";
    if (!values.email.match(/^\S+@\S+\.\S+$/)) e.email = "Valid email is required.";
    if (!values.phone.match(/^[0-9+\-() ]{7,}$/)) e.phone = "Valid phone number is required.";
    if (!values.dob) e.dob = "Date of birth is required.";
    if (!values.consent) e.consent = "Consent is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (validate()) onSubmit(values);
  };

  return (
    <form className="content-card form" onSubmit={submit} noValidate>
      <h1 className="h1">Patient Information</h1>
      <p className="subtle">Enter your details so we can prepare for your visit.</p>

      <div className="form-row">
        <label htmlFor="fullName">Full name</label>
        <input
          id="fullName"
          className="input"
          placeholder="e.g., Taylor Morgan"
          value={values.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-err" : undefined}
        />
        {errors.fullName && (
          <span id="fullName-err" style={{ color: "var(--color-error)", fontSize: 12 }}>
            {errors.fullName}
          </span>
        )}
      </div>

      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="input"
          type="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-err" : undefined}
        />
        {errors.email && (
          <span id="email-err" style={{ color: "var(--color-error)", fontSize: 12 }}>
            {errors.email}
          </span>
        )}
      </div>

      <div className="form-row">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          className="input"
          placeholder="+1 (555) 000-0000"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-err" : undefined}
        />
        {errors.phone && (
          <span id="phone-err" style={{ color: "var(--color-error)", fontSize: 12 }}>
            {errors.phone}
          </span>
        )}
      </div>

      <div className="form-row">
        <label htmlFor="dob">Date of birth</label>
        <input
          id="dob"
          className="input"
          type="date"
          value={values.dob}
          onChange={(e) => update("dob", e.target.value)}
          aria-invalid={!!errors.dob}
          aria-describedby={errors.dob ? "dob-err" : undefined}
        />
        {errors.dob && (
          <span id="dob-err" style={{ color: "var(--color-error)", fontSize: 12 }}>
            {errors.dob}
          </span>
        )}
      </div>

      <div className="form-row">
        <label htmlFor="notes">Notes (optional)</label>
        <textarea
          id="notes"
          className="textarea"
          rows={4}
          placeholder="Symptoms, preferences, or other details..."
          value={values.notes}
          onChange={(e) => update("notes", e.target.value)}
        />
      </div>

      <div className="form-row" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <input
          id="consent"
          type="checkbox"
          checked={values.consent}
          onChange={(e) => update("consent", e.target.checked)}
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "consent-err" : undefined}
        />
        <label htmlFor="consent" style={{ margin: 0 }}>
          I consent to the processing of my personal data for appointment scheduling.
        </label>
      </div>
      {errors.consent && (
        <span id="consent-err" style={{ color: "var(--color-error)", fontSize: 12 }}>
          {errors.consent}
        </span>
      )}

      <div className="actions">
        <button type="button" className="btn btn-ghost" onClick={onBack}>
          Back
        </button>
        <button type="submit" className="btn btn-primary" aria-label="Review and confirm">
          Review & Confirm
        </button>
      </div>
    </form>
  );
}
