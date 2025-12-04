import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CustomersList() {
  const [customers, setCustomers] = useState([
    {
      customerId: 1,
      fullName: "Sita Verma",
      email: "sita.verma@example.com",
      mobileNumber: "9898989898",
      aadharNo: "1234 5678 9012",
      panNo: "ABCDE1234F",
      address: "Mumbai, Maharashtra"
    },
    {
      customerId: 2,
      fullName: "Arjun Rao",
      email: "arjun.rao@example.com",
      mobileNumber: "9090909090",
      aadharNo: "2345 6789 0123",
      panNo: "BCDEA4567G",
      address: "Hyderabad, Telangana"
    },
  ]);

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((c) => c.customerId !== id));
  };
 const navigate = useNavigate();
  return (
    <div className="p-6">
        <Button onClick={()=>navigate(-1)}>
            Back
        </Button>
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Customers List</CardTitle>
        </CardHeader>

        <CardContent>
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b">
                <th className="p-2">Customer ID</th>
                <th className="p-2">Full Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Mobile Number</th>
                <th className="p-2">Aadhar No</th>
                <th className="p-2">PAN No</th>
                <th className="p-2">Address</th>
                <th className="p-2 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((cust) => (
                <tr key={cust.customerId} className="border-b hover:bg-muted/30">
                  <td className="p-3">{cust.customerId}</td>
                  <td className="p-3">{cust.fullName}</td>
                  <td className="p-3">{cust.email}</td>
                  <td className="p-3">{cust.mobileNumber}</td>
                  <td className="p-3">{cust.aadharNo}</td>
                  <td className="p-3">{cust.panNo}</td>
                  <td className="p-3">{cust.address}</td>

                  <td className="p-3 flex justify-center gap-2">
                    <Button variant="outline" size="sm">
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteCustomer(cust.customerId)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </CardContent>
      </Card>
    </div>
  );
}