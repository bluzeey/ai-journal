"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// Function to generate a unique username
const generateUniqueUsername = async (supabase: any, baseUsername: string) => {
  let username = baseUsername;
  let count = 1;

  // Check for existing usernames
  const { data: existingUsernames } = await supabase
    .from("profile")
    .select("username")
    .eq("username", username);

  while (existingUsernames.length > 0) {
    username = `${baseUsername}_${count}`;
    const { data: moreUsernames } = await supabase
      .from("profile")
      .select("username")
      .eq("username", username);
    if (moreUsernames.length === 0) break;
    count++;
  }

  return username;
};

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/signup",
      "Email and password are required"
    );
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });
  console.log(data);

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/signup", error.message);
  } else {
    // Automatically assign a username
    const baseUsername = email.split("@")[0]; // Base username from email
    const username = await generateUniqueUsername(supabase, baseUsername);
    // Create a new profile record in the 'profile' table
    const { error: profileError } = await supabase
      .schema("public")
      .from("profile")
      .insert([
        {
          user_id: data.user?.id,
          username,
          email: data.user?.email, // Optional: Store the email in the profile
        },
      ]);

    if (profileError) {
      console.error("Profile creation error:", profileError);
      return encodedRedirect(
        "error",
        "/signup",
        "Could not create user profile."
      );
    }

    return encodedRedirect(
      "success",
      "/signup",
      "Thanks for signing up! Please check your email for a verification link."
    );
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/login", error.message);
  }

  return redirect("/dashboard");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password"
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password."
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();
  const password = formData.get("password")?.toString();
  const confirmPassword = formData.get("confirmPassword")?.toString();

  if (!password || !confirmPassword) {
    return encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password and confirm password are required"
    );
  }

  if (password !== confirmPassword) {
    return encodedRedirect(
      "error",
      "/protected/reset-password",
      "Passwords do not match"
    );
  }

  const { error } = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    return encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed"
    );
  }

  return encodedRedirect(
    "success",
    "/protected/reset-password",
    "Password updated"
  );
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/login");
};
