import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Text Tools",
  description: "Read our terms of service for using Text Tools.",
}

export default function TermsOfServicePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        By using Text Tools, you agree to comply with and be bound by the following terms and conditions of use. Please
        review these terms carefully.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using Text Tools, you agree to these Terms of Service and all applicable laws and regulations.
        If you do not agree with any part of these terms, you may not use our services.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use of Services</h2>
      <p className="mb-4">
        You may use Text Tools for lawful purposes only. You must not use our services in any way that causes, or may
        cause, damage to the website or impairment of the availability or accessibility of Text Tools.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Intellectual Property</h2>
      <p className="mb-4">
        The content, features, and functionality of Text Tools are owned by us and are protected by international
        copyright, trademark, patent, trade secret, and other intellectual property laws.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Limitation of Liability</h2>
      <p className="mb-4">
        Text Tools is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, and
        hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions
        of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other
        violation of rights.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms of Service at any time. We will notify users of any changes by
        updating the date at the bottom of this page.
      </p>
      <p className="mt-6">
        If you have any questions about these Terms of Service, please contact us through our contact page.
      </p>
      <p className="mt-4 text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  )
}

