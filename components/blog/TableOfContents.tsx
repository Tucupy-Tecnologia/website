"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: TocItem[]
  onThisPageText: string
}

export function TableOfContents({ headings, onThisPageText }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-100px 0px -66% 0px",
        threshold: 0.1
      }
    )

    // Wait for MDX content to be fully rendered
    const setupObserver = () => {
      let foundElements = 0
      headings.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.observe(element)
          foundElements++
        }
      })
      return foundElements
    }

    // Retry multiple times to catch all headings as they render
    let attempts = 0
    const maxAttempts = 10
    const retrySetup = () => {
      const found = setupObserver()
      if (found < headings.length && attempts < maxAttempts) {
        attempts++
        setTimeout(retrySetup, 200)
      }
    }

    retrySetup()

    return () => {
      observer.disconnect()
    }
  }, [headings])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100 // Account for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActiveId(id)
    }
  }

  if (headings.length === 0) return null

  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold mb-4">{onThisPageText}</h3>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <Link
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm transition-colors ${activeId === heading.id
              ? "text-foreground font-medium"
              : "text-neutral-400 hover:text-foreground"
              }`}
            style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}
            onClick={(e) => handleClick(e, heading.id)}
          >
            {heading.text}
          </Link>
        ))}
      </nav>
    </div>
  )
}
