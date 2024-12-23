"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client"; // Adjust import based on your setup
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function Leaderboard() {
  const [topUsers, setTopUsers] = useState([]);
  const [optedIn, setOptedIn] = useState(false); // State for the opt-in switch

  // Fetch user profiles from Supabase
  const fetchProfiles = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("profile")
      .select("username, points") // Assuming these are the column names in your database
      .order("points", { ascending: false }); // Sort by points

    if (error) {
      console.error("Error fetching profiles:", error);
      return;
    }

    setTopUsers(data || []); // Set top users with the fetched data
  };

  useEffect(() => {
    fetchProfiles();
  }, []); // Fetch profiles when the component mounts

  const handleOptInChange = () => {
    setOptedIn((oldValue) => !oldValue);
    // (Optional) Implement functionality that occurs when the user opts in
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Leaderboard
          <div className="flex items-center space-x-2">
            <Switch
              id="leaderboard-opt-in"
              checked={optedIn}
              onCheckedChange={handleOptInChange}
            />
            <Label htmlFor="leaderboard-opt-in">Opt-in</Label>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {topUsers.length > 0 ? (
            topUsers.map((user, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">{index + 1}.</span>
                  <Avatar>
                    <AvatarImage
                      src={"/default-avatar.jpg"} // You may replace this with a real user's avatar if available
                      alt={user.username}
                    />
                    <AvatarFallback>
                      {user.username?.charAt(0) || "?"}
                    </AvatarFallback>
                  </Avatar>
                  <span>{user.username}</span>
                </div>
                <span className="font-semibold">{user.points} pts</span>
              </li>
            ))
          ) : (
            <li>No users found.</li> // Gracefully handle case where no users are returned
          )}
        </ul>
      </CardContent>
    </Card>
  );
}
