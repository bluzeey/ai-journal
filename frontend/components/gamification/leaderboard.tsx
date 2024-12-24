"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

interface User {
  username: string;
  points: number;
}

export function Leaderboard() {
  const [topUsers, setTopUsers] = useState<User[]>([]);
  const [optedIn, setOptedIn] = useState(false);

  const fetchProfiles = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("profile")
      .select("username, points")
      .order("points", { ascending: false })
      .limit(3);

    if (error) {
      console.error("Error fetching profiles:", error);
      return;
    }

    setTopUsers(data || []);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const handleOptInChange = () => {
    setOptedIn((oldValue) => !oldValue);
    // Implement opt-in functionality here
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
                      src={"/default-avatar.jpg"}
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
            <li>No users found.</li>
          )}
        </ul>
        <div className="mt-4 text-center">
          <Link href="/leaderboard" className="text-blue-500 hover:underline">
            View Full Leaderboard
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
