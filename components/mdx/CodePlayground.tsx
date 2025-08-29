"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Copy, Check } from "lucide-react"

interface CodePlaygroundProps {
  code: string
  language?: string
  title?: string
}

export function CodePlayground({ code, language = "javascript", title = "Code Playground" }: CodePlaygroundProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState("")
  const [copied, setCopied] = useState(false)

  const runCode = async () => {
    setIsRunning(true)
    // Simulate code execution
    await new Promise(resolve => setTimeout(resolve, 1000))
    setOutput("// Output:\nconsole.log('Hello from the playground!')")
    setIsRunning(false)
  }

  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden my-8">
      <div className="flex items-center justify-between bg-neutral-900 px-4 py-2 border-b border-neutral-800">
        <h3 className="text-sm font-medium">{title}</h3>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={copyCode}
            className="h-7 text-xs"
          >
            {copied ? (
              <>
                <Check className="size-3 mr-1" />
                Copied
              </>
            ) : (
              <>
                <Copy className="size-3 mr-1" />
                Copy
              </>
            )}
          </Button>
          <Button
            size="sm"
            onClick={runCode}
            disabled={isRunning}
            className="h-7 text-xs"
          >
            <Play className="size-3 mr-1" />
            {isRunning ? "Running..." : "Run"}
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-4">
          <pre className="text-sm overflow-x-auto">
            <code className={`language-${language}`}>{code}</code>
          </pre>
        </div>
        
        <div className="p-4 bg-neutral-950 border-l border-neutral-800">
          <div className="text-xs text-neutral-400 mb-2">Output:</div>
          <pre className="text-sm text-green-400 overflow-x-auto">
            {output || "// Click 'Run' to execute the code"}
          </pre>
        </div>
      </div>
    </div>
  )
}