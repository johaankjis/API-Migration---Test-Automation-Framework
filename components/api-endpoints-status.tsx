import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock, AlertTriangle } from "lucide-react"

const endpoints = [
  {
    path: "/api/v2/users",
    method: "GET",
    status: "migrated",
    compatibility: "100%",
    tests: 24,
    coverage: 92,
  },
  {
    path: "/api/v2/products",
    method: "GET",
    status: "migrated",
    compatibility: "100%",
    tests: 18,
    coverage: 88,
  },
  {
    path: "/api/v2/orders",
    method: "POST",
    status: "migrated",
    compatibility: "100%",
    tests: 32,
    coverage: 95,
  },
  {
    path: "/api/v2/auth/login",
    method: "POST",
    status: "migrated",
    compatibility: "100%",
    tests: 16,
    coverage: 90,
  },
  {
    path: "/api/v2/search",
    method: "GET",
    status: "in-progress",
    compatibility: "85%",
    tests: 12,
    coverage: 78,
  },
  {
    path: "/api/v2/analytics",
    method: "GET",
    status: "pending",
    compatibility: "0%",
    tests: 0,
    coverage: 0,
  },
]

const statusConfig = {
  migrated: {
    label: "Migrated",
    icon: CheckCircle2,
    variant: "default" as const,
    color: "text-accent",
  },
  "in-progress": {
    label: "In Progress",
    icon: Clock,
    variant: "secondary" as const,
    color: "text-chart-3",
  },
  pending: {
    label: "Pending",
    icon: AlertTriangle,
    variant: "outline" as const,
    color: "text-muted-foreground",
  },
}

export function ApiEndpointsStatus() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-xl font-semibold">API Endpoints Status</h3>
        <p className="text-sm text-muted-foreground">Migration progress and compatibility tracking</p>
      </div>
      <div className="space-y-4">
        {endpoints.map((endpoint) => {
          const config = statusConfig[endpoint.status as keyof typeof statusConfig]
          const Icon = config.icon
          return (
            <div
              key={endpoint.path}
              className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                <Icon className={`h-5 w-5 ${config.color}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <code className="text-sm font-mono font-medium">{endpoint.path}</code>
                    <Badge variant="outline" className="text-xs">
                      {endpoint.method}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Compatibility: {endpoint.compatibility}</span>
                    <span>Tests: {endpoint.tests}</span>
                    <span>Coverage: {endpoint.coverage}%</span>
                  </div>
                </div>
              </div>
              <Badge variant={config.variant}>{config.label}</Badge>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
