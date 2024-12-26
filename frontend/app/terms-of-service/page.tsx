import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfService: React.FC = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Terms of Service for AI Journal App
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">
              These terms govern the use of the AI Journal application,
              outlining the rights and responsibilities of both the user and the
              service provider.
            </p>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                1. Acceptance of Terms
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  By using the service, users agree to be bound by these terms.
                </li>
                <li>
                  Terms might be updated, and continued use after changes
                  constitutes acceptance of new terms.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">2. User Account</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Account creation requires meeting certain criteria (e.g., age
                  restrictions, validity of information).
                </li>
                <li>
                  Users are responsible for maintaining the confidentiality of
                  their account and password.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">3. Use of Service</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Users are granted a limited, non-exclusive, non-transferable
                  license to access and use the service.
                </li>
                <li>
                  Prohibited activities include reverse engineering, data
                  scraping, or using the service for illegal activities.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">4. Content</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Users retain ownership of their content but grant the app a
                  license to use, modify, and display the content for the
                  purpose of providing the service.
                </li>
                <li>
                  Content guidelines include no offensive language and respect
                  for privacy of others.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">5. Privacy</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  User data is collected, used, and protected as outlined in our
                  privacy policy.
                </li>
                <li>
                  Data sharing with third parties is limited and subject to our
                  privacy policy.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                6. Intellectual Property
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  The app and its original content, features, and functionality
                  are and will remain the exclusive property of the service
                  provider.
                </li>
                <li>
                  Users are not allowed to copy, modify, or create derivative
                  works of the app without permission.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">7. Termination</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  The service provider can terminate or suspend an account under
                  certain conditions.
                </li>
                <li>
                  Users have the right to terminate their account at any time.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                8. Disclaimers and Warranties
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  The service is provided "as is" without warranties of any
                  kind, either express or implied.
                </li>
                <li>
                  The service provider's liability for any damages or losses
                  arising from the use of the service is limited.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">9. Governing Law</h2>
              <p>
                These terms are governed by the laws of [Jurisdiction], and any
                disputes will be settled in the courts of [Jurisdiction].
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-2">
                10. Contact Information
              </h2>
              <p>
                For questions about these terms or the service, please contact
                us at:{" "}
                <a
                  href="mailto:support@aijournal.app"
                  className="text-blue-500 hover:underline"
                >
                  support@aijournal.app
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

export default TermsOfService;
