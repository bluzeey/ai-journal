"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client"; // Adjust path
import { useRouter } from "next/navigation"; // Import next/router for redirection
import { useJournal } from "@/providers/JournalContext";
import { ThemeSwitcher } from "../theme-switcher"; // Adjust based on your context path

export function UserInformation() {
  const { isLoggedIn } = useJournal(); // Check login status
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("/placeholder-avatar.jpg");
  const [loading, setLoading] = useState(true); // Loading state
  const router = useRouter(); // Initialize the router for redirection

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (isLoggedIn) {
        const supabase = createClient();

        // Fetch the current user
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          router.push("/login"); // Redirect to login if there's an error or no user
          return;
        }

        // Fetch the user's profile from the 'profile' table
        const { data: profileData, error: profileError } = await supabase
          .from("profile")
          .select("username, email") // Fetch username, email, and avatar_url fields
          .eq("user_id", user.id) // Match the user ID with the profile table
          .single(); // Fetch a single row

        if (profileError) {
          console.error("Error fetching user profile:", profileError);
          return;
        }

        // Set the fetched values or defaults
        setUsername(profileData?.username || ""); // Optional default handling
        setEmail(profileData?.email || user.email || ""); // Fallback to user's email if not in profile
        setAvatarUrl(profileData?.avatar_url || "/placeholder-avatar.jpg"); // Default avatar

        setLoading(false); // Set loading to false when done
      }
    };

    fetchUserInfo();
  }, [isLoggedIn, router]); // Fetch user info only when the user is logged in

  const handlePictureChange = () => {
    // Placeholder for avatar change functionality
    alert("Picture change functionality is not implemented yet.");
  };

  const handleSave = async () => {
    const supabase = createClient();

    const { error } = await supabase
      .from("profile") // Update the user's profile table
      .update({
        username,
        email,
        // avatar_url: newAvatarUrl // Uncomment when avatar upload logic is implemented
      })
      .eq("user_id", user.id); // Ensure you update the right user

    if (error) {
      console.error("Error updating user information:", error);
    } else {
      alert("User information updated successfully!");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loading indicator
  }

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">User Information</h2>
      {/* <div className="flex items-center space-x-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src={avatarUrl} alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
        <Button onClick={handlePictureChange}>Change Picture</Button>
      </div> */}
      {/* TODO: Implement avatar image upload functionality */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <Button onClick={handleSave}>Save Changes</Button>
    </section>
  );
}
