// libs
import validator from "validator";

// interfaces
import { FormFields, FormErrors } from "@/interfaces/interfaces";

/**
 * Validates contact form fields.
 *
 * Checks:
 * - First name: required, letters only, length 2–20
 * - Last name: required, letters only, length 2–20
 * - Email: required, valid
 * - Message: required, length 10–500
 *
 * @param {FormFields} fields - The form fields to validate.
 * @returns {FormErrors} An object containing validation error messages.
 */
export default function validateForm(fields: FormFields): FormErrors {
  const errors: FormErrors = {};

  // Validate first name: required, letters only, length
  if (validator.isEmpty(fields.firstName)) {
    errors.firstName = "First Name is required";
  } else if (!validator.isAlpha(fields.firstName, "en-US")) {
    errors.firstName = "First Name must contain letters only";
  } else if (!validator.isLength(fields.firstName, { min: 2, max: 20 })) {
    errors.firstName = "First Name must be 2-20 characters";
  }

  // Validate last name: required, letters only, length
  if (validator.isEmpty(fields.lastName)) {
    errors.lastName = "Last Name is required";
  } else if (!validator.isAlpha(fields.lastName, "en-US")) {
    errors.lastName = "Last Name must contain letters only";
  } else if (!validator.isLength(fields.lastName, { min: 2, max: 20 })) {
    errors.lastName = "Last Name must be 2-20 characters";
  }

  // Validate email: required, valid format
  if (validator.isEmpty(fields.email)) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(fields.email)) {
    errors.email = "Enter a valid email";
  }

  // Validate message: required, length
  if (validator.isEmpty(fields.message)) {
    errors.message = "Message is required";
  } else if (!validator.isLength(fields.message, { min: 10, max: 500 })) {
    errors.message = "Message must be 10-500 characters";
  }

  return errors;
}
