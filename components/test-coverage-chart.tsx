"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { week: "Week 1", coverage: 35, target: 85 },
  { week: "Week 2", coverage: 42, target: 85 },
  { week: "Week 3", coverage: 55, target: 85 },
  { week: "Week 4", coverage: 68, target: 85 },
  { week: "Week 5", coverage: 75, target: 85 },
  { week: "Week 6", coverage: 82, target: 85 },
  { week: "Week 7", coverage: 85, target: 85 },
  { week: "Week 8", coverage: 85, target: 85 },
]

const chartConfig = {
  coverage: {
    label: "Coverage",
    color: "hsl(var(--chart-1))",
  },
  target: {
    label: "Target",
    color: "hsl(var(--chart-2))",
  },
}

export function TestCoverageChart() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-xl font-semibold">Test Coverage Progress</h3>
        <p className="text-sm text-muted-foreground">JaCoCo coverage tracking over 8-week period</p>
      </div>
      <ChartContainer config={chartConfig} className="h-[300px] w-full">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="week" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => `${value}%`} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="target"
            stroke="hsl(var(--chart-2))"
            fill="hsl(var(--chart-2))"
            fillOpacity={0.1}
            strokeWidth={2}
            strokeDasharray="5 5"
          />
          <Area
            type="monotone"
            dataKey="coverage"
            stroke="hsl(var(--chart-1))"
            fill="hsl(var(--chart-1))"
            fillOpacity={0.3}
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  )
}
