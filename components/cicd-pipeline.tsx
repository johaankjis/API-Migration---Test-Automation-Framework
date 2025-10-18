import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Clock, TrendingUp } from "lucide-react"

const builds = [
  {
    id: "#1247",
    branch: "main",
    status: "success",
    duration: "4m 32s",
    coverage: "85%",
    tests: "156/156",
    timestamp: "2 hours ago",
  },
  {
    id: "#1246",
    branch: "feature/api-optimization",
    status: "success",
    duration: "4m 18s",
    coverage: "84%",
    tests: "154/154",
    timestamp: "5 hours ago",
  },
  {
    id: "#1245",
    branch: "main",
    status: "success",
    duration: "4m 45s",
    coverage: "83%",
    tests: "152/152",
    timestamp: "8 hours ago",
  },
  {
    id: "#1244",
    branch: "feature/test-suite",
    status: "in-progress",
    duration: "2m 15s",
    coverage: "—",
    tests: "—",
    timestamp: "12 hours ago",
  },
]

const statusConfig = {
  success: {
    icon: CheckCircle2,
    color: "text-accent",
    variant: "default" as const,
  },
  failed: {
    icon: XCircle,
    color: "text-destructive",
    variant: "destructive" as const,
  },
  "in-progress": {
    icon: Clock,
    color: "text-chart-3",
    variant: "secondary" as const,
  },
}

export function CicdPipeline() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">CI/CD Pipeline</h3>
          <div className="flex items-center gap-2 text-sm text-accent">
            <TrendingUp className="h-4 w-4" />
            <span className="font-medium">30% faster builds</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Recent Jenkins pipeline executions</p>
      </div>
      <div className="space-y-3">
        {builds.map((build) => {
          const config = statusConfig[build.status as keyof typeof statusConfig]
          const Icon = config.icon
          return (
            <div
              key={build.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                <Icon className={`h-5 w-5 ${config.color}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-sm font-medium">{build.id}</span>
                    <code className="text-xs text-muted-foreground">{build.branch}</code>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{build.duration}</span>
                    <span>Coverage: {build.coverage}</span>
                    <span>Tests: {build.tests}</span>
                    <span>{build.timestamp}</span>
                  </div>
                </div>
              </div>
              <Badge variant={config.variant} className="capitalize">
                {build.status}
              </Badge>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
