import Link from "next/link"

export function LegalAndSupport() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Legal and Support</h2>
      <div className="space-y-4">
        <div>
          <Link
            href="/privacy-policy"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
        <div>
          <Link
            href="/terms-of-service"
            className="text-blue-600 hover:underline"
          >
            Terms of Service
          </Link>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Support Contact</h3>
          <p>Email: support@aijournal.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </section>
  )
}
