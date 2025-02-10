"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { performConversion } from "@/lib/conversions"
import { useToast } from "@/hooks/use-toast"
import { CopyIcon, ReplaceIcon as SwapIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface ConversionToolProps {
  conversion: {
    name: string
    description: string
    from: string
    to: string
    type: string
    instructions: string
    about: string
    features: string[]
    faq: { question: string; answer: string }[]
  }
}

export default function ConversionTool({ conversion }: ConversionToolProps) {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [options, setOptions] = useState<any>({})
  const { toast } = useToast()

  const handleConvert = async () => {
    if (!input.trim() && conversion.type !== "lorem-ipsum") {
      setError("Input is empty. Please enter some text to convert.")
      return
    }

    setIsLoading(true)
    setError(null)
    try {
      const result = await performConversion(conversion.type, input, options)
      setOutput(result)
    } catch (error) {
      setError(`Conversion failed: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(output)
    toast({
      title: "Copied to clipboard",
      description: "The converted text has been copied to your clipboard.",
    })
  }

  const handleSwap = () => {
    setInput(output)
    setOutput("")
    setError(null)
  }

  const renderOptions = () => {
    switch (conversion.type) {
      case "url-encoder":
      case "base64-encoder":
        return (
          <Select onValueChange={(value) => setOptions({ decode: value === "decode" })}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select operation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="encode">Encode</SelectItem>
              <SelectItem value="decode">Decode</SelectItem>
            </SelectContent>
          </Select>
        )
      case "lorem-ipsum":
        return (
          <Input
            type="number"
            placeholder="Number of paragraphs"
            min="1"
            max="10"
            onChange={(e) => setOptions({ paragraphs: Number.parseInt(e.target.value) })}
          />
        )
      case "text-case":
        return (
          <Select onValueChange={(value) => setOptions({ case: value })}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select case" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="upper">UPPERCASE</SelectItem>
              <SelectItem value="lower">lowercase</SelectItem>
              <SelectItem value="title">Title Case</SelectItem>
              <SelectItem value="sentence">Sentence case</SelectItem>
            </SelectContent>
          </Select>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{conversion.name}</h1>
      <Tabs defaultValue="convert" className="mb-6">
        <TabsList>
          <TabsTrigger value="convert">Convert</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>
        <TabsContent value="convert">
          <p className="mb-4 text-gray-600 dark:text-gray-400">{conversion.description}</p>
          <Alert className="mb-4">
            <AlertTitle>Instructions</AlertTitle>
            <AlertDescription>{conversion.instructions}</AlertDescription>
          </Alert>
          {renderOptions()}
          <div className="mb-4">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Enter your ${conversion.from} here`}
              className="min-h-[100px]"
            />
          </div>
          <div className="flex space-x-2 mb-4">
            <Button onClick={handleConvert} disabled={isLoading}>
              {isLoading ? "Converting..." : "Convert"}
            </Button>
            {output && (
              <>
                <Button onClick={handleCopy} variant="outline">
                  <CopyIcon className="mr-2 h-4 w-4" /> Copy
                </Button>
                <Button onClick={handleSwap} variant="outline">
                  <SwapIcon className="mr-2 h-4 w-4" /> Swap
                </Button>
              </>
            )}
          </div>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="mt-4">
            <Textarea
              value={output}
              readOnly
              placeholder={`Converted ${conversion.to} will appear here`}
              className="min-h-[100px]"
            />
          </div>
        </TabsContent>
        <TabsContent value="about">
          <h2 className="text-2xl font-semibold mb-4">About {conversion.name}</h2>
          <p className="text-gray-600 dark:text-gray-400">{conversion.about}</p>
        </TabsContent>
        <TabsContent value="features">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            {conversion.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="faq">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {conversion.faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  )
}

