import { Button } from "@/components/ui/button";

interface JournalActionsProps {
  loading: boolean;
  handleSave: () => void;
  handleDelete: () => void;
  handleAIInsights: () => void;
}

function JournalActions({
  loading,
  handleSave,
  handleDelete,
  handleAIInsights,
}: JournalActionsProps) {
  return (
    <div className="flex justify-between">
      <div className="space-x-2">
        <Button onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </Button>
        <Button variant="outline" onClick={handleDelete}>
          <span>Delete</span>
        </Button>
      </div>
      <Button variant="secondary" onClick={handleAIInsights}>
        AI Insights
      </Button>
    </div>
  );
}

export default JournalActions;
