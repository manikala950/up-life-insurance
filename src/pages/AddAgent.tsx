import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AddAgent() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    agentId: "",
    name: "",
    email: "",
    phone: "",
    aadhar: "",
    accountNo: "",
    ifscCode: "",
    panNo: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Agent form submitted:", form);

    alert("Agent added successfully!");
  };

  return (
    <div className="max-h-screen w-full flex flex-col items-center pt-8 px-4 bg-muted/20">

      {/* Back button */}
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 mb-6 text-primary hover:text-primary/80 font-medium self-start"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Agents List
      </button>

      {/* Main Card */}
      <Card className="w-full max-w-2xl glass-card shadow-2xl rounded-2xl border border-primary/10">
        <CardHeader className="pb-2">
          <CardTitle className="text-center text-2xl font-semibold text-primary">
            Add New Agent
          </CardTitle>
          <p className="text-center text-sm text-muted-foreground">
            Enter the agent details below to register a new insurance agent.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 md:grid-cols-2 gap-4 pt-2">

            <Input
              name="agentId"
              placeholder="Agent ID"
              value={form.agentId}
              onChange={handleChange}
              required
            />

            <Input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <Input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <Input
              name="aadhar"
              placeholder="Aadhar Number"
              value={form.aadhar}
              maxLength={12}
              pattern="[0-9]{12}"
              onChange={handleChange}
              required
            />

            <Input
              name="accountNo"
              placeholder="Bank Account Number"
              value={form.accountNo}
              onChange={handleChange}
              required
              
            />

            <Input
              name="ifscCode"
              placeholder="IFSC Code"
              value={form.ifscCode}
              onChange={handleChange}
              required
            />

            <Input
              name="panNo"
              placeholder="PAN Number"
              value={form.panNo}
              onChange={handleChange}
              required
            />

            <Input
              name="password"
              type="password"
              placeholder="Create Password"
              value={form.password}
              onChange={handleChange}

              required
            />

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 mt-2">
              <Button type="submit" className="w-full h-full text-md">
                Add Agent
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

    </div>
  );
}