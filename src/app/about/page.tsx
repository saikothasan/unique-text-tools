import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Text Tools",
  description: "Learn more about our comprehensive text conversion and manipulation tools.",
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Text Tools</h1>
      <p className="mb-4">
        Text Tools is a comprehensive suite of text conversion and manipulation utilities designed for developers, data
        analysts, and tech enthusiasts. Our goal is to provide a user-friendly platform for various text-related
        operations.
      </p>
      <p className="mb-4">
        Whether you need to convert between different number systems, encode/decode URLs, format JSON, or analyze text
        statistics, Text Tools has got you covered. We offer a wide range of tools to make your text processing tasks
        easier and more efficient.
      </p>
      <p className="mb-4">
        Our tools are built with modern web technologies, ensuring fast performance and a responsive design that works
        across all devices. We're constantly working to improve our existing tools and add new ones based on user
        feedback.
      </p>
      <p>
        If you have any suggestions for new tools or improvements to existing ones, please don't hesitate to reach out
        to us through our contact page. We appreciate your feedback and support!
      </p>
    </div>
  )
}

