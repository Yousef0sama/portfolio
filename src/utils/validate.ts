import validator from "validator";

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export default function validateForm(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  // ===== First Name =====
  if (validator.isEmpty(fields.firstName)) {
    errors.firstName = "First Name is required";
  } else if (!validator.isAlpha(fields.firstName, "en-US")) {
    errors.firstName = "First Name must contain letters only";
  } else if (!validator.isLength(fields.firstName, { min: 2, max: 20 })) {
    errors.firstName = "First Name must be 2-20 characters";
  }

  // ===== Last Name =====
  if (validator.isEmpty(fields.lastName)) {
    errors.lastName = "Last Name is required";
  } else if (!validator.isAlpha(fields.lastName, "en-US")) {
    errors.lastName = "Last Name must contain letters only";
  } else if (!validator.isLength(fields.lastName, { min: 2, max: 20 })) {
    errors.lastName = "Last Name must be 2-20 characters";
  }

  // ===== Email =====
  if (validator.isEmpty(fields.email)) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(fields.email)) {
    errors.email = "Enter a valid email";
  }

  // ===== Message =====
  if (validator.isEmpty(fields.message)) {
    errors.message = "Message is required";
  } else if (!validator.isLength(fields.message, { min: 10, max: 500 })) {
    errors.message = "Message must be 10-500 characters";
  }

  return errors;
}
