"use server";

import { contactValidation } from "validation/contact-validation";
import type { IActionState } from "types";

export const submitMessage = async (
  _prevState: IActionState,
  formData: FormData
) => {
  try {
    const errors = await contactValidation(formData);

    if (errors) {
      return { message: Object.values(errors).join(" "), status: "error" };
    }

    return {
      message: "Your message has been submitted successfully",
      status: "success",
    };
  } catch (error) {
    console.log(`Error happened when submit message Error: ${error}`);
    return {
      message: "Something went wrong, Please try again",
      status: "error",
    };
  }
};
