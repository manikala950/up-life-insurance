import { ArrowLeft } from "lucide-react";
import { useState, ChangeEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface Agent {
  id: number;
  name: string;
  state: string;
  district: string;
  mandal: string;
}

interface AgentFilters {
  id: string;
  name: string;
  state: string;
  district: string;
  mandal: string;
}

export default function Agents() {
  const [search, setSearch] = useState<AgentFilters>({
    id: "",
    name: "",
    state: "",
    district: "",
    mandal: "",
  });

  const agents: Agent[] = [
    { id: 101, name: "Arun Kumar", state: "AP", district: "Guntur", mandal: "Mangalagiri" },
    { id: 102, name: "Ravi Teja", state: "TS", district: "Hyderabad", mandal: "LB Nagar" },
  ];

  const filtered = agents.filter((a) =>
    (search.id === "" || a.id.toString().includes(search.id)) &&
    (search.name === "" || a.name.toLowerCase().includes(search.name.toLowerCase())) &&
    (search.state === "" || a.state === search.state) &&
    (search.district === "" || a.district.toLowerCase().includes(search.district.toLowerCase())) &&
    (search.mandal === "" || a.mandal.toLowerCase().includes(search.mandal.toLowerCase()))
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
   const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
       <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 mb-6 text-primary hover:text-primary/80 font-medium self-start"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Agents List
      </button>
      <h2 className="text-3xl font-bold">Agents</h2>

      {/* Filters */}
      <div className="bg-white p-6 shadow rounded space-y-4">
        <h3 className="text-xl font-semibold">Search Filters</h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <input name="id" placeholder="ID" className="border p-2 rounded" onChange={handleChange} />
          <input name="name" placeholder="Name" className="border p-2 rounded" onChange={handleChange} />

          <select name="state" className="border p-2 rounded" onChange={handleChange}>
            <option value="">State</option>
            <option value="AP">AP</option>
            <option value="TS">TS</option>
          </select>

          <input
            name="district"
            placeholder="District"
            className="border p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="mandal"
            placeholder="Mandal"
            className="border p-2 rounded"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-6 shadow rounded">
        <h3 className="text-xl font-semibold">Agent List</h3>

        <table className="w-full mt-3 border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">State</th>
              <th className="border p-2">District</th>
              <th className="border p-2">Mandal</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((a) => (
              <tr key={a.id}>
                <td className="border p-2">{a.id}</td>
                <td className="border p-2">{a.name}</td>
                <td className="border p-2">{a.state}</td>
                <td className="border p-2">{a.district}</td>
                <td className="border p-2">{a.mandal}</td>
                <td className="border p-2">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
