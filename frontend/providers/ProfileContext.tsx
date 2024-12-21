"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { createClient } from "@/utils/supabase/client";
import { AuthUser } from "@supabase/supabase-js"; // Importing user types if needed for TypeScript

interface ProfileContextType {
  points: number; // Points value managed in the context
  isLoggedIn: boolean; // Track login state
  fetchProfile: () => Promise<void>; // Function to fetch user profile
  incrementPoints: () => Promise<void>; // Function to increment points
}

// Context creation
const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [points, setPoints] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  // Fetch user info and profile
  const fetchUserAndProfile = useCallback(async () => {
    const supabase = createClient();
    const {
      data: { user: currentUser },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error("Error fetching user:", error);
      return;
    }

    setUser(currentUser); // Set user info
    setIsLoggedIn(!!currentUser); // Update logged-in state

    if (currentUser) {
      await fetchProfile(currentUser.id); // Fetch profile if user is authenticated
    } else {
      resetProfile(); // Reset profile state if user is not authenticated
    }
  }, []);

  // Effect to fetch user information on mount and on auth state change
  useEffect(() => {
    fetchUserAndProfile(); // Fetch user data on mount and whenever user state changes

    const { supabase } = createClient();
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      fetchUserAndProfile(); // Re-fetch user data upon login/logout
    });

    return () => {
      subscription?.unsubscribe(); // Clean up subscription on unmount
    };
  }, [fetchUserAndProfile]);

  // Fetch user profile based on user ID
  const fetchProfile = async (userId: string) => {
    const supabase = createClient();

    const { data, error } = await supabase
      .from("profile")
      .select("points")
      .eq("user_id", userId)
      .single();

    if (error) {
      console.error("Error fetching user profile:", error);
      return;
    }

    if (data) {
      setPoints(data.points || 0); // Set points from the profile table or default to 0
    }
  };

  // Reset profile information if user is not logged in
  const resetProfile = () => {
    setPoints(0);
  };

  // Increment user points
  const incrementPoints = async () => {
    if (!user) return; // Prevent increment if user is not logged in

    const supabase = createClient();

    const { error } = await supabase
      .from("profile")
      .update({ points: points + 100 }) // Increment points
      .eq("user_id", user.id);

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
        fetchProfile: () => (user ? fetchProfile(user.id) : Promise.resolve()), // Safe call
        incrementPoints,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

// Custom hook for context consumption
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
