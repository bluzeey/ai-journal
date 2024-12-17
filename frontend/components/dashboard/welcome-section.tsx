import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation"; // Import next/router for redirection

export function WelcomeSection() {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Initialize the router for redirection
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const quote = "The only way to do great work is to love what you do.";

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();

      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        router.push("/login"); // Redirect to login if there's an error or no user
        return;
      }

      // Fetch the user's profile from the 'profile' table
      const { data: profileData, error: profileError } = await supabase
        .from("profile")
        .select("username")
        .eq("user_id", user.id) // Match the user id with the profile table
        .single(); // Fetch a single row

      if (profileError) {
        console.error("Error fetching user profile:", profileError);
        return;
      }

      // Default to "User" if the username is not found
      setUserName(profileData?.username || "User");
      setLoading(false); // Stop loading when the user is fetched
    };

    fetchUser();
  }, [router]); // Ensure useEffect runs only once on component mount

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or loading component
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="mb-2 text-2xl font-bold">Welcome back, {userName}!</h2>
        <p className="mb-4 text-muted-foreground">{today}</p>
        <p className="italic">&ldquo;{quote}&rdquo;</p>
      </CardContent>
    </Card>
  );
}
