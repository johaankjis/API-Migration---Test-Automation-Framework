import { Card } from "@/components/ui/card"
import { TrendingUp, CheckCircle2 } from "lucide-react"

const metrics = [
  {
    label: "Test Coverage",
    value: "85%",
    change: "+50%",
    trend: "up",
    icon: CheckCircle2,
    description: "From 35% baseline",
  },
  {
    label: "Breaking Changes",
    value: "0",
    change: "0",
    trend: "neutral",
    icon: CheckCircle2,
    description: "Zero downstream issues",
  },
  {
    label: "Response Time",
    value: "-25%",
    change: "-25%",
    trend: "up",
    icon: TrendingUp,
    description: "Average improvement",
  },
  {
    label: "Build Cycle Time",
    value: "-30%",
    change: "-30%",
    trend: "up",
    icon: TrendingUp,
    description: "CI/CD optimization",
  },
]

export function MetricsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.label} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-3xl font-bold tracking-tight">{metric.value}</p>
              </div>
              <div className={`rounded-lg p-2 ${metric.trend === "up" ? "bg-accent/10" : "bg-muted"}`}>
                <Icon className={`h-5 w-5 ${metric.trend === "up" ? "text-accent" : "text-muted-foreground"}`} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              {metric.trend === "up" && (
                <span className="flex items-center text-sm font-medium text-accent">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  {metric.change}
                </span>
              )}
              <span className="text-sm text-muted-foreground">{metric.description}</span>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
