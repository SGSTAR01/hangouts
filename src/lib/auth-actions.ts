"use client";

import { redirect } from "next/navigation";
import { authClient } from "./auth-client";
import { auth } from "./auth";
import {
  signInSchema,
  signUpSchema,
  FormState,
} from "../schemas/auth-definitions";

import { toast } from "sonner";

export async function signup(prevState: FormState, formData: FormData) {
  const validatedFields = signUpSchema.safeParse({
    name: formData.get("name"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, username, email, password } = validatedFields.data;
  const { data, error } = await authClient.signUp.email({
    name: name,
    username: username,
    email: email,
    password: password,
  });
  if (error) {
    return {
      message: error.message,
    };
  }
  redirect("/profile");
}

export async function signin(prevState: FormState, formData: FormData) {
  const validatedFields = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { email, password } = validatedFields.data;
  const { data, error } = await authClient.signIn.email({
    email: email,
    password: password,
  });
  if (error) {
    return {
      message: error.message,
    };
  }
  redirect("/profile");
}

export const facebookSignIn = async () => {
  try {
    const data = await authClient.signIn.social({
      provider: "facebook",
      callbackURL: "/profile",
    });
  } catch (error) {
    console.error(error);
    redirect("/login");
  }
};

export const googleSignIn = async () => {
  try {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/profile",
    });
  } catch (error) {
    console.error(error);
    redirect("/login");
  }
};

export const addPasskey = async () => {
    const data = await authClient.passkey.addPasskey({
      name:"hangouts",
      fetchOptions: {
        onSuccess(context) {
          toast.success("Passkey added successfully");
        },
        onError(context) {
          toast.error(context.error.message);
        },
      },
    });
};


export async function signout() {
  await authClient.signOut();
  redirect("/login");
}
