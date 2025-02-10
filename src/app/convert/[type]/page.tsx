import type { Metadata } from "next"
import ConversionTool from "@/components/ConversionTool"
import { getConversionByType } from "@/lib/conversions"

export const runtime = "edge"

interface PageProps {
  params: { type: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const conversion = getConversionByType(params.type)
  if (!conversion) {
    return {
      title: "Conversion Not Found - Text Tools",
      description: "The requested conversion tool does not exist.",
    }
  }

  return {
    title: `${conversion.name} - Text Tools`,
    description: conversion.description,
    keywords: `${conversion.from}, ${conversion.to}, conversion, text tools`,
    openGraph: {
      title: `${conversion.name} - Text Tools`,
      description: conversion.description,
      url: `https://text-tools.vercel.app/convert/${conversion.type}`,
      siteName: "Text Tools",
      images: [
        {
          url: "https://text-tools.vercel.app/og-image.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en-US",
      type: "website",
    },
  }
}

export default function ConversionPage({ params }: PageProps) {
  const conversion = getConversionByType(params.type)

  if (!conversion) {
    return <div>Conversion not found</div>
  }

  return <ConversionTool conversion={conversion} />
}

