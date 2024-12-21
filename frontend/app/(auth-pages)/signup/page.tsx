"use client";

import { useEffect, useState } from "react";
import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Lock } from "lucide-react";

export default function Signup({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; error?: any }>;
}) {
  const [message, setMessage] = useState<Message | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const params = await searchParams; // Await the promise for searchParams
      if (params.success) {
        setMessage({ message: decodeURIComponent(params.success) }); // Decode and set the success message
      }
    };

    fetchParams();
  }, [searchParams]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await signUpAction(formData);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Sign up
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
              <Label htmlFor="password" className="text-sm font-medium">
                Password
              </Label>
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
            <SubmitButton
              type="submit"
              pendingText="Signing up..."
              className="w-full"
            >
              Sign up
            </SubmitButton>
            {message && <FormMessage message={message} />}{" "}
            {/* Display message if available */}
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              className="text-primary font-medium hover:underline"
              href="/login"
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
      <Separator className="my-8" />
      <SmtpMessage />
    </div>
  );
}
