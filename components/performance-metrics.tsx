"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { endpoint: "/api/users", before: 450, after: 320 },
  { endpoint: "/api/products", before: 380, after: 290 },
  { endpoint: "/api/orders", before: 520, after: 380 },
  { endpoint: "/api/auth", before: 280, after: 210 },
  { endpoint: "/api/search", before: 650, after: 480 },
]

const chartConfig = {
  before: {
    label: "Before",
    color: "hsl(var(--muted-foreground))",
  },
  after: {
    label: "After",
    color: "hsl(var(--chart-1))",
  },
}

export function PerformanceMetrics() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-xl font-semibold">API Response Times</h3>
        <p className="text-sm text-muted-foreground">Average response time comparison (ms)</p>
      </div>
      <ChartContainer config={chartConfig} className="h-[300px] w-full">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="endpoint"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.split("/").pop() || ""}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => `${value}ms`} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="before" fill="hsl(var(--muted-foreground))" radius={4} />
          <Bar dataKey="after" fill="hsl(var(--chart-1))" radius={4} />
        </BarChart>
      </ChartContainer>
    </Card>
  )
}
