import { useNavigate, useLocation } from "react-router-dom";
import { 
  Home, 
  Users, 
  UserCircle, 
  Bell, 
  BarChart3, 
  AlertTriangle,
  Shield,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Users, label: "Agents", path: "/agentslist" },
  { icon: UserCircle, label: "Customers", path: "/customerslist" },
  { icon: Bell, label: "Notices", path: "/notices" },
  { icon: BarChart3, label: "Reports", path: "/reports" },
  { icon: AlertTriangle, label: "Claims", path: "/claims" },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 bg-sidebar border-r border-sidebar-border",
          "transform transition-transform duration-300 ease-out",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close button (mobile) */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-lg hover:bg-sidebar-accent lg:hidden transition-colors"
        >
          <X className="w-5 h-5 text-sidebar-foreground" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-sidebar-border">
          <div className="p-2 rounded-xl bg-primary/10 neon-glow">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">InsureAdmin</h2>
            <p className="text-xs text-muted-foreground">Management Panel</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-3 py-6">
          <p className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Menu
          </p>
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <button
                    onClick={() => {
                      navigate(item.path);
                      onClose();
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium",
                      "transition-all duration-200",
                      isActive
                        ? "bg-primary/10 text-primary neon-glow"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className={cn(
                      "w-5 h-5",
                      isActive && "animate-pulse-slow"
                    )} />
                    {item.label}
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
          <div className="glass-card p-3 rounded-lg">
            <p className="text-xs text-muted-foreground">System Status</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm font-medium text-foreground">All systems operational</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
