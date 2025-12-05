"use client";

// imports

// hooks
import { useState } from "react";

// components
import InputField from "@/components/UI/inputField";
import CTA from "@/components/UI/CTA";

// utils
import validateForm from "@/utils/validate";

// interfaces
import type { FormErrors } from "@/interfaces/interfaces";

/**
 * Contact form component with client-side validation.
 * Handles input state, validation, and submission via FormSubmit.
 *
 * @returns {React.JSX.Element} The rendered contact form.
 */
export default function Form(): React.JSX.Element {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  /**
   * Handles input changes, updates form data, and clears individual field errors.
   *
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - Input or textarea change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  /**
   * Validates form inputs on submit and prevents submission if errors exist.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - Form submit event
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) {
      e.preventDefault();
    }
  };

  return (
    <form
      action="https://formsubmit.co/devbyyousef@gmail.com"
      method="POST"
      onSubmit={handleSubmit}
    >
      {/* Required FormSubmit hidden fields */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="box" />
      <input type="hidden" name="_next" value={`${process.env.NEXT_PUBLIC_SITE_URL}/contact/success`} />
      <input type="hidden" name="_error" value={`${process.env.NEXT_PUBLIC_SITE_URL}/contact/error`} />

      {/* Name fields */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <InputField
          label="First Name"
          name="firstName"
          id="firstName"
          type="text"
          placeholder="Yousef"
          required
          className="w-full"
          value={formData.firstName}
          handleChange={handleChange}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          id="lastName"
          type="text"
          placeholder="Osama"
          required
          className="w-full"
          value={formData.lastName}
          handleChange={handleChange}
          error={errors.lastName}
        />
      </div>

      {/* Email field */}
      <InputField
        label="E-mail"
        name="email"
        id="email"
        type="email"
        placeholder="example@example.com"
        required
        className="w-full mb-4"
        value={formData.email}
        handleChange={handleChange}
        error={errors.email}
      />

      {/* Message textarea */}
      <InputField
        label="Message"
        name="message"
        id="message"
        textarea
        placeholder="Message"
        required
        className="w-full mb-4"
        value={formData.message}
        handleChange={handleChange}
        error={errors.message}
      />

      {/* Submit button */}
      <div className="flex justify-center">
        <CTA type="submit" className="cursor-pointer max-w-50 w-full">
          Send
        </CTA>
      </div>
    </form>
  );
}
