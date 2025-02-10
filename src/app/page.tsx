"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { conversions } from "@/lib/conversions"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredConversions = conversions.filter(
    (conversion) =>
      conversion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conversion.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const categories = [
    {
      name: "Text Conversion",
      types: [
        "text-to-binary",
        "binary-to-text",
        "text-to-ascii",
        "ascii-to-text",
        "text-to-hex",
        "hex-to-text",
        "text-to-octal",
        "octal-to-text",
      ],
    },
    {
      name: "Number Systems",
      types: [
        "decimal-to-binary",
        "binary-to-decimal",
        "hex-to-binary",
        "binary-to-hex",
        "octal-to-binary",
        "binary-to-octal",
        "hex-to-decimal",
        "decimal-to-hex",
        "octal-to-decimal",
        "decimal-to-octal",
        "hex-to-octal",
        "octal-to-hex",
      ],
    },
    { name: "Data Formats", types: ["json-formatter", "csv-to-json", "url-encoder", "base64-encoder"] },
    { name: "Text Analysis", types: ["text-statistics", "text-case"] },
    { name: "Generators", types: ["lorem-ipsum"] },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Text Conversion and Manipulation Tools</h1>
      <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
        Choose from our wide range of text utilities for conversion, analysis, and generation
      </p>
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search for a tool..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>
      {categories.map((category) => (
        <div key={category.name} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredConversions
              .filter((conversion) => category.types.includes(conversion.type))
              .map((conversion) => (
                <Link
                  key={conversion.type}
                  href={`/convert/${conversion.type}`}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold mb-2">{conversion.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{conversion.description}</p>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

