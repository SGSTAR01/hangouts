"use client";

import { redirect } from "next/navigation";
import { authClient } from "./auth-client";
import { auth } from "./auth";
import { signInSchema, signUpSchema, FormState } from "../schemas/auth-definitions";


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

  const { name,username,email,password } = validatedFields.data;
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
  redirect("/");
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
  const  { email, password } = validatedFields.data;
  const { data, error } = await authClient.signIn.email({
    email: email,
    password: password,
  });
  if (error) {
    return {
      message: error.message,
    };
  }
  redirect("/");
}

export async function signout() {
  await authClient.signOut();
  redirect("/login");
}