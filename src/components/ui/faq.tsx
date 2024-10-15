import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQAccordion() {
  const faqs = [
    {
      question: "What kind of workflows can I automate with AI?",
      answer:
        "AI can automate a wide range of workflows, including data processing, content generation, customer service interactions, and more. The specific workflows depend on your industry and needs.",
    },
    {
      question: "Why not use existing automation platforms?",
      answer:
        "While existing platforms are useful, AI-powered automation offers more flexibility, can handle complex tasks, and can adapt to changing conditions more effectively.",
    },
    {
      question: "Is it free?",
      answer:
        "We offer a free tier with basic features. For more advanced capabilities, we have paid plans that cater to different needs and scales.",
    },
    {
      question: "How do I get started?",
      answer:
        "You can get started by signing up on our website, exploring our documentation, and trying out our tutorials. We also offer onboarding support for new users.",
    },
    {
      question: "What's your policy on file upload privacy?",
      answer:
        "We take privacy seriously. All uploaded files are encrypted, stored securely, and only accessed for the purpose of running your automations. We never share or sell your data.",
    },
    {
      question: "Can I collaborate with others on my automations?",
      answer:
        "Yes, we offer collaboration features that allow you to share and work on automations with team members or other users, depending on your plan.",
    },
    {
      question: "I'm having a technical issue, where do I get support?",
      answer:
        "We provide support through our help center, community forums, and direct support tickets. Premium plans include priority support options.",
    },
  ]

  return (
    <div className="font-inter lg:py-30 mx-auto max-w-5xl px-6 py-12 sm:py-32 md:w-2/3 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-2xl font-bold text-black">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="my-1 text-left text-black">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-black">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
