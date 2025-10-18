import { Card } from "@/components/ui/card"
import { CheckCircle2, Circle, Clock } from "lucide-react"

const milestones = [
  {
    title: "Compatibility Adapters & OpenAPI Specs",
    period: "Week 1-2",
    status: "completed",
    description: "Built adapters and baseline specifications",
  },
  {
    title: "JUnit/Mockito Test Suites",
    period: "Week 3-4",
    status: "completed",
    description: "Developed test framework with JaCoCo integration",
  },
  {
    title: "API Performance Optimizations",
    period: "Week 5-6",
    status: "completed",
    description: "Applied optimizations and measured gains",
  },
  {
    title: "Jenkins Pipeline Integration",
    period: "Week 7-8",
    status: "in-progress",
    description: "Integrating quality gates and automation",
  },
]

export function MilestonesTimeline() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-xl font-semibold">Project Milestones</h3>
        <p className="text-sm text-muted-foreground">8-week implementation timeline</p>
      </div>
      <div className="space-y-6">
        {milestones.map((milestone, index) => {
          const isCompleted = milestone.status === "completed"
          const isInProgress = milestone.status === "in-progress"
          const Icon = isCompleted ? CheckCircle2 : isInProgress ? Clock : Circle

          return (
            <div key={milestone.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`rounded-full p-1 ${
                    isCompleted ? "bg-accent/10" : isInProgress ? "bg-chart-3/10" : "bg-muted"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      isCompleted ? "text-accent" : isInProgress ? "text-chart-3" : "text-muted-foreground"
                    }`}
                  />
                </div>
                {index < milestones.length - 1 && (
                  <div className={`w-0.5 h-16 mt-2 ${isCompleted ? "bg-accent/20" : "bg-border"}`} />
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold">{milestone.title}</h4>
                  <span className="text-sm text-muted-foreground">{milestone.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{milestone.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
