import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Text Tools",
  description: "Read our privacy policy to understand how we handle your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At Text Tools, we take your privacy seriously. This Privacy Policy describes how we collect, use, and protect
        your personal information when you use our website.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
      <p className="mb-4">
        We do not collect any personal information unless you voluntarily provide it to us, such as when you contact us
        through our contact form. In such cases, we may collect your name and email address.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
      <p className="mb-4">
        We use the information you provide solely for the purpose of responding to your inquiries or improving our
        services. We do not share your personal information with third parties.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Data Security</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to protect your personal information against
        unauthorized or unlawful processing, accidental loss, destruction, or damage.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
        Privacy Policy on this page.
      </p>
      <p className="mt-6">
        If you have any questions about this Privacy Policy, please contact us through our contact page.
      </p>
    </div>
  )
}

