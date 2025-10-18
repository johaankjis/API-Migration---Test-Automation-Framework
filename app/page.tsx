import { Header } from "@/components/header"
import { MetricsOverview } from "@/components/metrics-overview"
import { TestCoverageChart } from "@/components/test-coverage-chart"
import { ApiEndpointsStatus } from "@/components/api-endpoints-status"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { MilestonesTimeline } from "@/components/milestones-timeline"
import { CicdPipeline } from "@/components/cicd-pipeline"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-balance">API Migration & Test Automation Framework</h1>
          <p className="text-muted-foreground text-lg">
            Real-time monitoring of API migration progress, test coverage, and CI/CD pipeline status
          </p>
        </div>

        <MetricsOverview />

        <div className="grid gap-6 lg:grid-cols-2">
          <TestCoverageChart />
          <PerformanceMetrics />
        </div>

        <ApiEndpointsStatus />

        <div className="grid gap-6 lg:grid-cols-2">
          <MilestonesTimeline />
          <CicdPipeline />
        </div>
      </main>
    </div>
  )
}
