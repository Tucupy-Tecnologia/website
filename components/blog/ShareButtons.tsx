'use client'

import { Twitter, Linkedin, Copy, ExternalLink, Check } from "lucide-react"
import { useState } from "react"

interface ShareButtonsProps {
  title: string
  url: string
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareOnTwitter = () => {
    const text = encodeURIComponent(title)
    const shareUrl = encodeURIComponent(url)
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`,
      '_blank',
      'width=600,height=400'
    )
  }

  const shareOnLinkedIn = () => {
    const shareUrl = encodeURIComponent(url)
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      '_blank',
      'width=600,height=400'
    )
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const openInNewTab = () => {
    window.open(url, '_blank')
  }

  return (
    <div>
      <h3 className="text-sm font-semibold mb-4">Share this article</h3>
      <div className="flex gap-3">
        <button
          onClick={shareOnTwitter}
          className="p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="size-4" />
        </button>
        <button
          onClick={shareOnLinkedIn}
          className="p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="size-4" />
        </button>
        <button
          onClick={copyToClipboard}
          className="p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 transition-colors relative"
          aria-label="Copy link"
        >
          {copied ? (
            <Check className="size-4 text-green-500" />
          ) : (
            <Copy className="size-4" />
          )}
        </button>
        <button
          onClick={openInNewTab}
          className="p-2 rounded-md border border-neutral-800 hover:bg-neutral-800 transition-colors"
          aria-label="Open in new tab"
        >
          <ExternalLink className="size-4" />
        </button>
      </div>
    </div>
  )
}