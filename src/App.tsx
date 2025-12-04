import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import React, { Suspense } from "react";
import CustomersList from "./pages/Customerlist";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Process = React.lazy(() => import("./pages/Process"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Login = React.lazy(() => import("./pages/Login"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const AdminDashboard = React.lazy(() => import("./pages/AdminDashboard"));
const AgentDashboard = React.lazy(() => import("./pages/AgentDashboard"));
const AddAgent = React.lazy(() => import("./pages/AddAgent"));
const AddCustomer = React.lazy(() => import("./pages/AddCustomer"));
const Claims = React.lazy(() => import("./pages/Claims"));
const Agents = React.lazy(() => import("./pages/agentlist"));
const Notice = React.lazy(() => import("./pages/notices"));

const queryClient = new QueryClient();

const Layout = () => {
  const location = useLocation();

  const hiddenLayoutRoutes = ["/admin", "/agent","/notices","/claims","/add-customer","/add-agent","/agentslist","/customerslist"];

  const hideLayout = hiddenLayoutRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
          {!hideLayout && <Navigation />}

          <main className="flex-grow">
            
          <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/process" element={<Process />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/agent" element={<AgentDashboard />} />
    <Route path="/add-agent" element={<AddAgent />} />
    <Route path="/add-customer" element={<AddCustomer />} />
    <Route path="/claims" element={<Claims />} />
    <Route path="/agentslist" element={<Agents />} />
    <Route path="/customerslist" element={<CustomersList />} />
    <Route path="/notices" element={<Notice />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</Suspense>
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;