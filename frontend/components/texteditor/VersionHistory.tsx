import React from "react";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

interface VersionHistoryProps {
  versions: any[];
  currentVersionIndex: number;
  onSeekVersion: (versionIndex: number) => void;
  isPaneOpen: boolean;
  setIsPaneOpen: (isOpen: boolean) => void;
}

const VersionHistory: React.FC<VersionHistoryProps> = ({
  versions,
  currentVersionIndex,
  onSeekVersion,
  isPaneOpen,
  setIsPaneOpen,
}) => {
  return (
    <Sheet open={isPaneOpen} onOpenChange={setIsPaneOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Clock className="mr-2 h-4 w-4" />
          Version History
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Version History</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-100px)] mt-4">
          {versions.map((version, index) => (
            <Card
              key={index}
              className={`mb-4 cursor-pointer ${
                index === currentVersionIndex ? "border-primary" : ""
              }`}
              onClick={() => onSeekVersion(index)}
            >
              <CardContent className="p-4">
                <h4 className="text-sm font-semibold mb-2">Version {index + 1}</h4>
                <p className="text-sm text-muted-foreground">
                  {version.content && version.content[0]?.content?.[0]?.text
                    ? version.content[0].content[0].text.slice(0, 50)
                    : "No preview available"}
                  {version.content && version.content[0]?.content?.[0]?.text.length > 50 && "..."}
                </p>
              </CardContent>
            </Card>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default VersionHistory;
