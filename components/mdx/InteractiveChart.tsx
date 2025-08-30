"use client"

import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface DataPoint {
  label: string
  value: number
}

interface InteractiveChartProps {
  data: DataPoint[]
  title?: string
}

export function InteractiveChart({ data, title = "Interactive Chart" }: InteractiveChartProps) {
  const [chartType, setChartType] = useState<"bar" | "line">("bar")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <div className="border border-neutral-800 rounded-lg p-6 my-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <ToggleGroup type="single" value={chartType} onValueChange={(value) => value && setChartType(value as "bar" | "line")}>
          <ToggleGroupItem value="bar" className="text-xs">
            Bar
          </ToggleGroupItem>
          <ToggleGroupItem value="line" className="text-xs">
            Line
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="h-64 flex items-end justify-between gap-2 mb-4">
        {data.map((point, index) => {
          const height = (point.value / maxValue) * 200
          const isHovered = hoveredIndex === index
          
          return (
            <div
              key={point.label}
              className="flex-1 flex flex-col items-center cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative flex-1 flex items-end">
                {chartType === "bar" ? (
                  <div
                    className={`w-full rounded-t transition-all duration-300 ${
                      isHovered ? "bg-primary" : "bg-primary/70"
                    }`}
                    style={{ height: `${height}px` }}
                  />
                ) : (
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isHovered ? "bg-primary scale-150" : "bg-primary"
                    }`}
                    style={{ marginBottom: `${height}px` }}
                  />
                )}
                
                {isHovered && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {point.value}
                  </div>
                )}
              </div>
              
              <div className="text-xs text-neutral-400 mt-2 text-center">
                {point.label}
              </div>
            </div>
          )
        })}
      </div>

      {chartType === "line" && (
        <svg
          className="w-full h-64 absolute inset-0 pointer-events-none"
          style={{ marginTop: "2.5rem" }}
        >
          <polyline
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            points={data
              .map((point, index) => {
                const x = (index / (data.length - 1)) * 100
                const y = 100 - (point.value / maxValue) * 80
                return `${x}%,${y}%`
              })
              .join(" ")}
          />
        </svg>
      )}
    </div>
  )
}