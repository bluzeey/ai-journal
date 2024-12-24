"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PrimarySidebar } from "@/components/shared/sidebar";

interface User {
  username: string;
  points: number;
}

export default function LeaderboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const fetchAllProfiles = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("profile")
      .select("username, points")
      .order("points", { ascending: false });

    if (error) {
      console.error("Error fetching profiles:", error);
      return;
    }

    setUsers(data || []);
  };

  useEffect(() => {
    fetchAllProfiles();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <PrimarySidebar />
      <div className="flex-1 overflow-auto p-6">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Full Leaderboard
            </CardTitle>
            <Input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-2"
            />
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {currentUsers.map((user, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold w-8">
                      {indexOfFirstUser + index + 1}.
                    </span>
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
              ))}
            </ul>
            <div className="mt-4 flex justify-center space-x-2">
              {Array.from(
                { length: Math.ceil(filteredUsers.length / usersPerPage) },
                (_, i) => (
                  <Button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                  >
                    {i + 1}
                  </Button>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
