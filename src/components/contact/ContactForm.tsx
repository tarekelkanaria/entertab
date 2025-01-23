"use client";

import { submitMessage } from "actions/submit-message";
import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  type FormEvent,
} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { contactSchema } from "validation/contact-validation";
import type { IContactFormData } from "types";

const initialState = {
  message: "",
  status: "",
};
export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
    mode: "onTouched",
    resolver: yupResolver(contactSchema),
  });
  const [state, formAction, isPending] = useActionState(
    submitMessage,
    initialState
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(() => {
      startTransition(() => formAction(new FormData(formRef.current!)));
    })(event);
  };

  useEffect(() => {
    if (state?.status === "success" && state.message) {
      toast.success(state.message, {
        duration: 10000,
      });
    } else if (state.status === "error" && state.message) {
      toast.error(state.message, {
        duration: 5000,
      });
    }
  }, [state?.status, state?.message]);

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={onSubmit}
      className="w-full md:w-3/4 mx-auto text-center"
      noValidate
    >
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <fieldset className="form-group flex-grow">
          <label
            className={`label ${
              errors.fullName?.message ? "text-errorSolid-50" : "text-main-400"
            }`}
            htmlFor="full-name-input"
          >
            Full Name*
          </label>
          <input
            type="text"
            id="full-name-input"
            placeholder="Full Name"
            {...register("fullName")}
            className={`input-field ${
              errors.fullName?.message
                ? "text-errorSolid-50 caret-errorSolid-50"
                : "text-main-400 caret-main-400"
            }`}
          />
          {errors.fullName?.message && (
            <p className="text-errorSolid-50">{errors.fullName.message}</p>
          )}
        </fieldset>
        <fieldset className="form-group flex-grow">
          <label
            className={`label ${
              errors.email?.message ? "text-errorSolid-50" : "text-main-400"
            }`}
            htmlFor="user-mail"
          >
            Email*
          </label>
          <input
            type="text"
            id="user-mail"
            placeholder="Email"
            {...register("email")}
            className={`input-field ${
              errors.email?.message
                ? "text-errorSolid-50 caret-errorSolid-50"
                : "text-main-400 caret-main-400"
            }`}
          />
          {errors.email?.message && (
            <p className="text-errorSolid-50">{errors.email.message}</p>
          )}
        </fieldset>
      </div>
      <fieldset className="form-group">
        <label
          className={`label ${
            errors.message?.message ? "text-errorSolid-50" : "text-main-400"
          }`}
          htmlFor="user-message"
        >
          Message*
        </label>
        <textarea
          id="user-message"
          placeholder="Message"
          {...register("message")}
          className={`input-field min-h-52 ${
            errors.message?.message
              ? "text-errorSolid-50 caret-errorSolid-50"
              : "text-main-400 caret-main-400"
          }`}
        />
        {errors.message?.message && (
          <p className="text-errorSolid-50">{errors.message.message}</p>
        )}
      </fieldset>
      <button
        type="submit"
        disabled={isPending}
        className="w-full md:w-2/5 h-9 bg-tealSolid-200 text-white main-btn py-2 px-1.5 rounded-hover-btn transition-btn disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
