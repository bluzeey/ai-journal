"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const AppearanceSettings = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const ICON_SIZE = 16;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Appearance Settings</h2>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size={"sm"}>
            <div className="flex items-center gap-2">
              {theme === "light" ? (
                <>
                  <Sun size={ICON_SIZE} className={"text-muted-foreground"} />
                  <span>Light</span>
                </>
              ) : theme === "dark" ? (
                <>
                  <Moon size={ICON_SIZE} className={"text-muted-foreground"} />
                  <span>Dark</span>
                </>
              ) : (
                <>
                  <Laptop
                    size={ICON_SIZE}
                    className={"text-muted-foreground"}
                  />
                  <span>System</span>
                </>
              )}
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-content" align="start">
          <DropdownMenuRadioGroup
            value={theme}
            onValueChange={(e) => setTheme(e)}
          >
            <DropdownMenuRadioItem
              className="flex items-center gap-2"
              value="light"
            >
              <Sun size={ICON_SIZE} className="text-muted-foreground" />
              <span>Light</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              className="flex items-center gap-2"
              value="dark"
            >
              <Moon size={ICON_SIZE} className="text-muted-foreground" />
              <span>Dark</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              className="flex items-center gap-2"
              value="system"
            >
              <Laptop size={ICON_SIZE} className="text-muted-foreground" />
              <span>System</span>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export { AppearanceSettings };
