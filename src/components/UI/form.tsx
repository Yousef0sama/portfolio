"use client"
import InputField from "@/components/UI/inputField";
import CTA from "@/components/UI/CTA";
import validateForm from "@/utils/validate";
import { useState } from "react";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export default function Form() {

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

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

      {/* FormSubmit required hidden fields */}
      <input type="hidden" name="_captcha" value="false" />

      <input
        type="hidden"
        name="_template"
        value="box"
      />

      <input
        type="hidden"
        name="_next"
        value={`${process.env.NEXT_PUBLIC_SITE_URL}/contact/success`}
      />

      <input
        type="hidden"
        name="_error"
        value={`${process.env.NEXT_PUBLIC_SITE_URL}/contact/error`}
      />

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

      <div className="flex justify-center">
        <CTA type="submit" className="cursor-pointer max-w-50 w-full">
          Send
        </CTA>
      </div>
    </form>
  )
}
