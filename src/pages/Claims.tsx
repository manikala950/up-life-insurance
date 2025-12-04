import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Claim {
  id: number;
  customer: string;
  policy: string;
  amount: number;
  status: "Pending" | "Approved" | "Rejected";
}

interface SearchFilters {
  claimId: string;
  customer: string;
  status: string;
}

export default function Claims() {
  const [search, setSearch] = useState<SearchFilters>({
    claimId: "",
    customer: "",
    status: "",
  });

  const claims: Claim[] = [
    { id: 501, customer: "Akhil", policy: "Car Shield", amount: 15000, status: "Pending" },
    { id: 502, customer: "Sita", policy: "Health Plus", amount: 32000, status: "Approved" },
  ];

  const filtered = claims.filter((c) =>
    (search.claimId === "" || c.id.toString().includes(search.claimId)) &&
    (search.customer === "" || c.customer.toLowerCase().includes(search.customer.toLowerCase())) &&
    (search.status === "" || c.status === search.status)
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
const navigate=useNavigate()
  return (
    <div className="p-6 space-y-6">
      <Button onClick={()=>navigate(-1)}>
        Back
      </Button>
      <h2 className="text-3xl font-bold">Insurance Claims</h2>

      {/* Filters */}
      <div className="bg-white p-6 shadow rounded space-y-4">
        <h3 className="text-xl font-semibold">Search Filters</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name="claimId"
            placeholder="Claim ID"
            className="border p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="customer"
            placeholder="Customer"
            className="border p-2 rounded"
            onChange={handleChange}
          />

          <select
            name="status"
            className="border p-2 rounded"
            onChange={handleChange}
          >
            <option value="">Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-6 shadow rounded">
        <h3 className="text-xl font-semibold">Claim List</h3>

        <table className="w-full mt-3 border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Claim ID</th>
              <th className="border p-2">Customer</th>
              <th className="border p-2">Policy</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td className="border p-2">{c.id}</td>
                <td className="border p-2">{c.customer}</td>
                <td className="border p-2">{c.policy}</td>
                <td className="border p-2">₹{c.amount}</td>
                <td className="border p-2">{c.status}</td>
                <td className="border p-2">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
