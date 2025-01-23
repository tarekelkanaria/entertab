import * as yup from "yup";

export const contactSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(1, "Full Name cannot be blank.")
    .max(50, "Full Name must be less than 50 characters long")
    .required("Full Name cannot be blank."),
  email: yup
    .string()
    .trim()
    .email("Email is not a valid email address.")
    .required("Email cannot be blank."),
  message: yup
    .string()
    .trim()
    .min(1, "Message cannot be blank.")
    .max(1500, "Message must be less than 1500 characters long")
    .required("Message cannot be blank."),
});

export const contactValidation = async (data: FormData) => {
  try {
    await contactSchema.validate(
      {
        fullName: data.get("fullName") || "",
        email: data.get("email") || "",
        message: data.get("message") || "",
      },
      { abortEarly: false }
    );

    return null;
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const errors = error.inner.reduce((acc: Record<string, string>, curr) => {
        if (curr.path) {
          acc[curr.path] = curr.message;
        }
        return acc;
      }, {});

      return errors;
    }
    throw error;
  }
};
