"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { googleSignIn, signin } from "@/lib/auth-actions";
import { facebookSignIn } from "@/lib/auth-actions";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [signInState, signInAction, isLoading] = useActionState(
    signin,
    undefined
  );
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <form
        action={signInAction}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="user@example.com"
              name="email"
              autoCapitalize="none"
              autoCorrect="off"
              autoComplete="email webauthn"
              disabled={isLoading}
            />
            {signInState?.errors?.email && (
              <p className="text-sm text-red-500">{signInState.errors.email}</p>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <div className="relative">
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type={passwordVisible ? "text" : "password"}
                autoCapitalize="none"
                autoCorrect="off"
                autoComplete="current-password"
                disabled={isLoading}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center opacity-30"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {signInState?.errors?.password && (
              <p className="text-sm text-red-500">
                {signInState.errors.password}
              </p>
            )}
            {signInState?.message && (
              <p className="text-sm text-center text-red-500">
                {signInState.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full cursor-pointer"
          >
            Login
          </Button>
        </div>
      </form>
      <div className="m-2 relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-2">
        <Button
          onClick={googleSignIn}
          variant="outline"
          className="cursor-pointer"
          disabled={isLoading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="mr-2 h-4 w-4"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Google
        </Button>
        <Button
          onClick={facebookSignIn}
          variant="outline"
          className="cursor-pointer"
          disabled={isLoading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="mr-2 h-4 w-4"
            fill="#1877F2"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </Button>
      </div>

      <Button
        onClick={async () => {
          await authClient.signIn.passkey({
            fetchOptions: {
              onSuccess(context) {
                router.push("/profile");
              },
              onError(context) {
                toast.error(context.error.message);
              },
            },
          });
        }}
        variant="outline"
        className="w-full cursor-pointer"
        disabled={isLoading}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="mr-2 h-4 w-4"
          fill="currentColor"
        >
          <path d="M9.5 12a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
          <path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
          <path d="M12 6.5a5.5 5.5 0 0 1 5.5 5.5c0 .738-.146 1.442-.41 2.086l1.448 1.447a.75.75 0 0 1-.53 1.28.74.74 0 0 1-.53-.22l-1.448-1.446A5.5 5.5 0 1 1 12 6.5Z" />
        </svg>
        Login with Passkey
      </Button>
      <div className="text-center text-sm m-2">
        Don&apos;t have an account?{" "}
        <a href="/signup" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </div>
  );
}
