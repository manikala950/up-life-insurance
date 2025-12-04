import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  ClipboardCheck,
  ClipboardList,
  CalendarClock,
  Users,
  TrendingUp,
  MessageSquare,
  Upload,
  Phone,
  Mail,
  Plus,
  Filter,
  Search,
  ChevronRight,
  Activity,
  Target,
  Clock,
  UserPlus,
  User,
  Users as CustomerIcon,
  LucideIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

// ---------------------------
// ✅ Interface for Quick Actions
// ---------------------------
interface QuickAction {
  icon: LucideIcon;
  label: string;
  description: string;
  color: string;
  onClick?: () => void;
}

const AgentDashboard = () => {
  const stats = [
    {
      label: "Active Cases",
      value: "24",
      change: "+3",
      trend: "up",
      helper: "On-going claim files",
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      label: "Pending Docs",
      value: "7",
      change: "-2",
      trend: "down",
      helper: "Need customer follow-up",
      icon: ClipboardList,
      color: "bg-amber-500",
    },
    {
      label: "Today's Tasks",
      value: "11",
      change: "+4",
      trend: "up",
      helper: "Calls / emails to complete",
      icon: CalendarClock,
      color: "bg-emerald-500",
    },
    {
      label: "Satisfaction",
      value: "94%",
      change: "+2%",
      trend: "up",
      helper: "Customer rating",
      icon: Users,
      color: "bg-purple-500",
    },
  ];

  const myCases = [
    {
      id: "CLM-2025-1010",
      customer: "Sanjana Rao",
      policy: "Health Plus Family",
      stage: "Docs Pending",
      stageColor: "bg-amber-100 text-amber-800 border-amber-200",
      nextAction: "Collect discharge summary",
      priority: "High",
      daysOpen: 2,
    },
    {
      id: "CLM-2025-1007",
      customer: "Vikram Singh",
      policy: "UP Life Care",
      stage: "In Assessment",
      stageColor: "bg-blue-100 text-blue-800 border-blue-200",
      nextAction: "Update medical reports",
      priority: "Medium",
      daysOpen: 5,
    },
    {
      id: "CLM-2025-1003",
      customer: "Neha Gupta",
      policy: "Cancer Protect",
      stage: "Final Approval",
      stageColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      nextAction: "Confirm bank details",
      priority: "Low",
      daysOpen: 12,
    },
    {
      id: "CLM-2025-1005",
      customer: "Rahul Mehta",
      policy: "Car Shield Pro",
      stage: "Investigation",
      stageColor: "bg-rose-100 text-rose-800 border-rose-200",
      nextAction: "Get police report",
      priority: "High",
      daysOpen: 1,
    },
    {
      id: "CLM-2025-1009",
      customer: "Priya Sharma",
      policy: "Life Secure",
      stage: "Processing",
      stageColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
      nextAction: "Verify beneficiary",
      priority: "Medium",
      daysOpen: 8,
    },
  ];

  // ------------------------------
  // ✅ Quick Actions with Types
  // ------------------------------
  const quickActions: QuickAction[] = [
    {
      icon: Plus,
      label: "Start New Claim",
      description: "Create new claim case",
      color: "bg-emerald-500",
      onClick: () => console.log("Start New Claim clicked"),
    },
    {
      icon: Upload,
      label: "Upload Documents",
      description: "Submit missing files",
      color: "bg-amber-500",
      onClick: () => console.log("Upload Documents clicked"),
    },
    {
      icon: Phone,
      label: "Call Customers",
      description: "5 pending calls today",
      color: "bg-blue-500",
      onClick: () => console.log("Call Customers clicked"),
    },
    {
      icon: Mail,
      label: "Email Follow-ups",
      description: "3 emails to send",
      color: "bg-purple-500",
      onClick: () => console.log("Email Follow-ups clicked"),
    },
    {
      icon: MessageSquare,
      label: "Add Case Note",
      description: "Update case progress",
      color: "bg-rose-500",
      onClick: () => console.log("Add Case Note clicked"),
    },
    {
      icon: Activity,
      label: "Generate Report",
      description: "Weekly performance",
      color: "bg-cyan-500",
      onClick: () => console.log("Generate Report clicked"),
    },
  ];

  const performanceMetrics = [
    { label: "Closure Rate", value: 85, target: 90 },
    { label: "Avg. Resolution Time", value: 72, target: 65 },
    { label: "Customer Satisfaction", value: 94, target: 95 },
  ];

  // ---------------------------------------
  // ✅ FIXED: Type-safe quick action handler
  // ---------------------------------------
  const handleQuickAction = (action: QuickAction) => {
    action.onClick?.();
    console.log(`Quick action: ${action.label}`);
  };
  const navigate=useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* ---------------- Header ---------------- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Agent Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">
              Welcome back! Manage your customers and claims efficiently.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search customers or cases..."
                className="pl-9 w-full md:w-64"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button onClick={()=>navigate("/add-customer")}>
              <UserPlus className="mr-2 h-4 w-4" />
              New Customer
            </Button>
          </div>
        </div>

        {/* ---------------- Stats Grid ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            const isPositive = item.trend === "up";

            return (
              <Card
                key={item.label}
                className="overflow-hidden border shadow-sm hover:shadow-md transition"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-3xl font-bold">{item.value}</span>
                        <span
                          className={`text-sm font-medium ${
                            isPositive ? "text-emerald-600" : "text-rose-600"
                          }`}
                        >
                          {item.change}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {item.helper}
                      </p>
                    </div>

                    <div className={`${item.color} p-3 rounded-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Progress bar only for Pending Docs */}
                  {index === 1 && (
                    <div className="mt-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Document Completion</span>
                        <span>62%</span>
                      </div>
                      <Progress value={62} className="h-2" />
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ======================================================
                    MAIN GRID (LEFT: Cases + Performance)
                    RIGHT: Quick Actions + Panels
        ======================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ---------------- Left Column ---------------- */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cases Table */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <ClipboardCheck className="h-5 w-5 text-primary" />
                      My Assigned Cases
                    </CardTitle>
                    <CardDescription>
                      Manage your active cases and track progress
                    </CardDescription>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <CustomerIcon className="mr-2 h-4 w-4" />
                      Customers
                    </Button>
                    <Button size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      New Case
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Claim ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Stage</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Days Open</TableHead>
                      <TableHead>Next Action</TableHead>
                      <TableHead className="text-right"></TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {myCases.map((c) => (
                      <TableRow key={c.id} className="hover:bg-muted/50">
                        <TableCell className="font-mono font-medium">
                          {c.id}
                        </TableCell>

                        <TableCell>
                          <p className="font-medium">{c.customer}</p>
                          <p className="text-xs text-muted-foreground">
                            {c.policy}
                          </p>
                        </TableCell>

                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`${c.stageColor} border`}
                          >
                            {c.stage}
                          </Badge>
                        </TableCell>

                        <TableCell>
                          <Badge
                            variant={
                              c.priority === "High"
                                ? "destructive"
                                : c.priority === "Medium"
                                ? "default"
                                : "outline"
                            }
                          >
                            {c.priority}
                          </Badge>
                        </TableCell>

                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            {c.daysOpen} days
                          </div>
                        </TableCell>

                        <TableCell>
                          <p className="text-sm">{c.nextAction}</p>
                        </TableCell>

                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View All Cases
                    </Button>
                    <Button variant="outline" size="sm">
                      <User className="mr-2 h-4 w-4" />
                      Customer List
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Showing 5 of 24 cases
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Performance Metrics
                </CardTitle>
                <CardDescription>
                  Track your performance against targets
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {performanceMetrics.map((metric) => {
                  const barColor =
                    metric.value >= metric.target
                      ? "bg-emerald-500"
                      : metric.value >= metric.target - 10
                      ? "bg-amber-500"
                      : "bg-rose-500";

                  return (
                    <div key={metric.label} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {metric.label}
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-sm font-bold ${
                              metric.value >= metric.target
                                ? "text-emerald-600"
                                : "text-rose-600"
                            }`}
                          >
                            {metric.value}%
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Target: {metric.target}%
                          </span>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="relative">
                        <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${barColor} transition-all duration-700`}
                            style={{ width: `${metric.value}%` }}
                          />
                        </div>

                        {/* Marker */}
                        <div
                          className="absolute top-0 h-3 w-0.5 bg-background border-x border-muted-foreground"
                          style={{ left: `${metric.target}%` }}
                        />
                      </div>

                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Current</span>
                        <span className="font-medium">
                          {metric.value >= metric.target
                            ? "✓ Above Target"
                            : "Below Target"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* ---------------- Right Column ---------------- */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Complete daily tasks to keep things moving
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => {
                    const Icon = action.icon;

                    return (
                      <Button
                        key={action.label}
                        variant="outline"
                        className="h-auto py-4 px-3 flex flex-col items-center justify-center gap-2 hover:shadow-md transition hover:scale-[1.02]"
                        onClick={() => handleQuickAction(action)}
                      >
                        <div className={`${action.color} p-2 rounded-lg`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">{action.label}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {action.description}
                          </p>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Customer Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Customer Management
                </CardTitle>
                <CardDescription>
                  Manage your customer relationships
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Total Customers</p>
                        <p className="text-2xl font-bold">42</p>
                      </div>
                    </div>
                    <Badge variant="outline">+3 this week</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600 font-medium">
                        Active Policies
                      </p>
                      <p className="text-xl font-bold">38</p>
                    </div>

                    <div className="p-3 bg-emerald-50 rounded-lg">
                      <p className="text-sm text-emerald-600 font-medium">
                        Renewals Due
                      </p>
                      <p className="text-xl font-bold">5</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => console.log("Search Customer clicked")}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Search Customer
                  </Button>

                  <Button
                    className="w-full justify-start"
                    onClick={() => console.log("Add New Customer clicked")}
                  >
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add New Customer
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Today's Priorities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Today's Priorities
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {/* Priority Items */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                        <Phone className="h-4 w-4 text-rose-600" />
                      </div>
                      <div>
                        <p className="font-medium">Call Sanjana Rao</p>
                        <p className="text-xs text-muted-foreground">
                          Discharge summary follow-up
                        </p>
                      </div>
                    </div>
                    <Badge variant="destructive">Now</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Upload className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">
                          Upload Vikram's reports
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Medical assessment files
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">10 AM</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Mail className="h-4 w-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium">Email Neha Gupta</p>
                        <p className="text-xs text-muted-foreground">
                          Bank details confirmation
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">2 PM</Badge>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View Full Schedule
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Summary */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">
                  Weekly Summary
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">New Customers</span>
                    <span className="font-bold text-emerald-600">3</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cases Closed</span>
                    <span className="font-bold text-emerald-600">8</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Avg. Resolution</span>
                    <span className="font-bold">3.2 days</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm">Customer Calls</span>
                    <span className="font-bold">16</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
