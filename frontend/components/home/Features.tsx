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
    <section className="bg-[#031F40] text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-transparent p-6 rounded-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 bg-blue-200 rounded-full mb-4 border border-white ">
                <div className="absolute w-12 h-12 sm:w-20 sm:h-20 rounded-full blur-sm bg-gradient-to-br from-white/20 via-white/50 to-white/70 z-1"></div>
                <feature.icon className="h-5 w-5 sm:h-10 sm:w-10 text-blue-600 z-10" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold mt-4">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-white">{feature.description}</p>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
