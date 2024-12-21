"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { AuthUser } from "@supabase/supabase-js"; // Importing user types if needed for TypeScript

interface ProfileContextType {
  points: number; // Points value managed in the context
  isLoggedIn: boolean; // Track login state
  fetchProfile: () => void; // Function to fetch user profile
  incrementPoints: () => Promise<void>; // Function to increment points
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [points, setPoints] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track logged-in state
  const [user, setUser] = useState<AuthUser | null>(null); // Store user information

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const {
        data: { user: currentUser },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
        return;
      }

      if (currentUser) {
        setUser(currentUser); // Store user information
        setIsLoggedIn(true);
        await fetchProfile(currentUser.id); // Pass user ID to fetchProfile
      } else {
        setIsLoggedIn(false);
      }
    };

    fetchUser();
  }, []); // Run once on mount

  const fetchProfile = async (userId: string) => {
    const supabase = createClient();

    const { data, error } = await supabase
      .from("profile")
      .select("points")
      .eq("user_id", userId) // Use the passed userId
      .single(); // Get a single row

    if (error) {
      console.error("Error fetching user profile:", error);
      return;
    }

    if (data) {
      setPoints(data.points || 0); // Set points from the profile table
    }
  };

  const incrementPoints = async () => {
    if (!user) return; // Ensure user is defined

    const supabase = createClient();

    // Increment points by 100 and update in Supabase
    const { error } = await supabase
      .from("profile")
      .update({ points: points + 100 }) // Update points
      .eq("user_id", user.id); // Use user.id

    if (error) {
      console.error("Error updating points:", error);
    } else {
      setPoints((prevPoints) => prevPoints + 100); // Update local state
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        points,
        isLoggedIn,
        fetchProfile: () => fetchProfile(user?.id!),
        incrementPoints,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
