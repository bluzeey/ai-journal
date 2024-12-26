import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy: React.FC = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Privacy Policy for AI Journal App
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">
              This Privacy Policy outlines how AI Journal App collects, uses,
              maintains, and discloses information collected from users of our
              application.
            </p>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                1. Information Collection
              </h2>
              <p>
                We collect personal information that you provide directly to us,
                such as when you create an account or use our services. This may
                include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Name and email address</li>
                <li>User-generated content within the app</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                2. Use of Information
              </h2>
              <p>
                We use the collected information for various purposes,
                including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Improving user experience</li>
                <li>
                  Communicating with users about their accounts or the service
                </li>
                <li>Ensuring the security and integrity of our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">3. Data Protection</h2>
              <p>
                We implement appropriate data collection, storage, and
                processing practices and security measures to protect against
                unauthorized access, alteration, disclosure, or destruction of
                your personal information and data stored on our platform.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                4. Sharing of Information
              </h2>
              <p>
                We do not sell, trade, or rent users' personal identification
                information to others. We may share generic aggregated
                demographic information not linked to any personal
                identification information regarding visitors and users with our
                business partners and trusted affiliates for the purposes
                outlined above.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                5. Third-party Services
              </h2>
              <p>
                We may use third-party service providers to help us operate our
                business and the application or administer activities on our
                behalf. We may share your information with these third parties
                for those limited purposes provided that you have given us your
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                6. Compliance with Laws
              </h2>
              <p>
                We will disclose your personal information where required to do
                so by law or subpoena or if we believe that such action is
                necessary to comply with the law and the reasonable requests of
                law enforcement or to protect the security or integrity of our
                Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">7. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal
                information. You can do this through your account settings or by
                contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                8. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date at the bottom of
                this page.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:{" "}
                <a
                  href="mailto:privacy@aijournal.app"
                  className="text-blue-500 hover:underline"
                >
                  privacy@aijournal.app
                </a>
              </p>
            </section>
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-2 text-sm text-muted-foreground">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        <p>Version: 1.0</p>
      </CardFooter>
    </Card>
  );
};

export default PrivacyPolicy;
