import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Target, Flame, Zap } from "lucide-react"

const stats = [
  {
    title: "Total Wins",
    value: "1,247",
    change: "+12.5%",
    icon: Trophy,
    color: "text-secondary",
    glowColor: "rgba(74,222,128,0.3)",
  },
  {
    title: "Win Rate",
    value: "68.3%",
    change: "+5.2%",
    icon: Target,
    color: "text-primary",
    glowColor: "rgba(120,119,198,0.3)",
  },
  {
    title: "Win Streak",
    value: "15",
    change: "Current",
    icon: Flame,
    color: "text-accent",
    glowColor: "rgba(253,224,71,0.3)",
  },
  {
    title: "Total Matches",
    value: "1,825",
    change: "+18 today",
    icon: Zap,
    color: "text-chart-3",
    glowColor: "rgba(74,222,128,0.3)",
  },
]

const detailedStats = [
  { label: "Total Knockouts", value: "3,421" },
  { label: "Perfect Wins", value: "284" },
  { label: "Combo Max", value: "67 hits" },
  { label: "Damage Dealt", value: "1.2M" },
  { label: "Time Played", value: "342h" },
  { label: "Tournaments", value: "18" },
]

export function StatsGrid() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card
              key={stat.title}
              className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all"
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.title}
                </CardTitle>
                <Icon
                  className={`h-5 w-5 ${stat.color}`}
                  style={{ filter: `drop-shadow(0 0 4px ${stat.glowColor})` }}
                />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-foreground text-xl" style={{ fontFamily: "var(--font-display)" }}>
            Combat Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {detailedStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 rounded-lg border border-border/30 bg-muted/20 backdrop-blur-sm p-4 hover:border-primary/30 transition-all"
              >
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                <span className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
