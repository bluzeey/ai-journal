"use client";

import { useEffect, useState } from "react";
import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Lock } from "lucide-react";

export default function Login({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; error?: any }>;
}) {
  const [message, setMessage] = useState<Message | null>(null);

  // Fetch and set the searchParams
  useEffect(() => {
    const fetchParams = async () => {
      const params = await searchParams; // Await the promise for searchParams
      if (params.success) {
        setMessage({ message: decodeURIComponent(params.success) }); // Decode and set the success message
      } else if (params.error) {
        setMessage({ message: decodeURIComponent(params.error) }); // Handle the error message
      }
    };

    fetchParams();
  }, [searchParams]);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await signInAction(formData);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  size={18}
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Link
                  className="text-xs text-primary hover:underline"
                  href="/forgot-password"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  size={18}
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Your password"
                  minLength={6}
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <SubmitButton type="submit" className="w-full">
              Sign in
            </SubmitButton>
            {message && <FormMessage message={message} />}{" "}
            {/* Display message if available */}
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              className="text-primary font-medium hover:underline"
              href="/signup"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
