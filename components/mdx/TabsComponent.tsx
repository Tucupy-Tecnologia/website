"use client"

import { useState, ReactNode } from "react"

interface Tab {
  label: string
  content: ReactNode
}

interface TabsComponentProps {
  tabs: Tab[]
  defaultTab?: number
}

export function TabsComponent({ tabs, defaultTab = 0 }: TabsComponentProps) {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden my-8">
      <div className="flex border-b border-neutral-800 bg-neutral-900">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === index
                ? "bg-background text-foreground border-b-2 border-primary"
                : "text-neutral-400 hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="p-6">
        {tabs[activeTab]?.content}
      </div>
    </div>
  )
}

// Helper component for code tabs
interface CodeTabsProps {
  children: React.ReactNode
}

export function CodeTabs({ children }: CodeTabsProps) {
  return <div className="space-y-4">{children}</div>
}

interface CodeTabProps {
  label: string
  language?: string
  children: string
}

export function CodeTab({ label, language = "javascript", children }: CodeTabProps) {
  return (
    <div>
      <div className="text-xs text-neutral-400 mb-2">{label}</div>
      <pre className="bg-neutral-900 p-4 rounded-lg overflow-x-auto border border-neutral-800">
        <code className={`language-${language} text-sm`}>
          {children}
        </code>
      </pre>
    </div>
  )
}