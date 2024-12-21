import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Brain, Lightbulb } from "lucide-react"; // Import the relevant icons

const features = [
  {
    icon: Book, // Add an icon for this feature
    title: "Intuitive Journaling",
    description:
      "Easy-to-use interface for capturing your thoughts and feelings.",
  },
  {
    icon: Brain, // Another icon for this feature
    title: "AI-Powered Insights",
    description:
      "Get personalized analysis and understanding of your journal entries.",
  },
  {
    icon: Lightbulb, // Another icon for this feature
    title: "Emotional Intelligence",
    description:
      "Develop greater self-awareness and emotional intelligence over time.",
  },
];

export function Features() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center justify-center w-20 h-20 bg-blue-200 rounded-full mb-4">
                <feature.icon className="h-10 w-10 text-blue-600" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-semibold mt-4">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
