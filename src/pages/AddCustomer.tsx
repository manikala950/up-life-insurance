import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

// TYPE DEFINITIONS
interface Customer {
  customerId?: string;
  id?: string;
  name: string;
  email: string;
  number: string;
  aadhar?: string;
  aadhaar?: string;
  pan: string;
  address: string;
  createdDate?: string;
}

export default function AddCustomer() {
  const navigate = useNavigate();

  const [customerList, setCustomerList] = useState<Customer[]>([]);
  const [search, setSearch] = useState("");
  const [success, setSuccess] = useState("");

  const [customer, setCustomer] = useState<Customer>({
    id: "",
    name: "",
    email: "",
    number: "",
    aadhaar: "",
    pan: "",
    address: "",
  });

  // LOAD API DATA
  const loadData = async () => {
    try {
      const res = await fetch("http://localhost:8080/public/customer/all");
      const data: Customer[] = await res.json();
      setCustomerList(data);
    } catch (err) {
      console.error("Error loading customers:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // HANDLE CHANGE
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  // SUBMIT FORM
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const today = new Date().toISOString().slice(0, 10);

    try {
      const res = await fetch("http://localhost:8080/public/customer/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...customer, createdDate: today }),
      });

      if (res.ok) {
        setSuccess("Customer Added Successfully ✔");

        setTimeout(() => setSuccess(""), 2000);

        setCustomerList([
          ...customerList,
          { ...customer, createdDate: today },
        ]);

        setCustomer({
          id: "",
          name: "",
          email: "",
          number: "",
          aadhaar: "",
          pan: "",
          address: "",
        });
      } else {
        alert("Failed to save customer");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold">Customer Registration</h1>

      {success && (
        <div className="p-3 bg-green-200 text-green-700 rounded">{success}</div>
      )}

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow rounded space-y-4"
      >
        {/* Customer ID */}
        <input
          className="border p-2 rounded w-full"
          name="id"
          value={customer.id || ""}
          placeholder="Customer ID (10 digits)"
          required
          maxLength={10}
          pattern="[0-9]{10}"
          onChange={handleChange}
        />

        {/* Name */}
        <input
          className="border p-2 rounded w-full"
          name="name"
          value={customer.name}
          placeholder="Full Name"
          required
          onChange={handleChange}
        />

        {/* Email */}
        <input
          className="border p-2 rounded w-full"
          name="email"
          type="email"
          value={customer.email}
          placeholder="Email"
          onChange={handleChange}
        />

        {/* Mobile Number */}
        <input
          className="border p-2 rounded w-full"
          name="number"
          value={customer.number}
          placeholder="Mobile Number"
          required
          maxLength={10}
          pattern="[0-9]{10}"
          onChange={handleChange}
        />

        {/* Aadhaar */}
        <input
          className="border p-2 rounded w-full"
          name="aadhaar"
          value={customer.aadhaar || ""}
          placeholder="Aadhaar Number"
          required
          maxLength={12}
          pattern="[0-9]{12}"
          onChange={handleChange}
        />

        {/* PAN */}
        <input
          className="border p-2 rounded w-full"
          name="pan"
          value={customer.pan}
          placeholder="PAN Number"
          required
          maxLength={10}
          pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
          onChange={handleChange}
        />

        {/* Address */}
        <input
          className="border p-2 rounded w-full"
          name="address"
          value={customer.address}
          placeholder="Address"
          onChange={handleChange}
        />

        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Save Customer
        </button>
      </form>

      {/* SEARCH */}
      <input
        placeholder="Search..."
        className="border p-2 rounded w-full"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      {/* TABLE */}
      <div className="bg-white p-6 shadow rounded">
        <h3 className="text-xl font-semibold">Customer List</h3>

        <table className="w-full mt-3 border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Mobile</th>
              <th className="border p-2">Aadhaar</th>
              <th className="border p-2">PAN</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Added</th>
            </tr>
          </thead>

          <tbody>
            {customerList
              .filter((c) =>
                JSON.stringify(c)
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((c, i) => (
                <tr key={i}>
                  <td className="border p-2">{c.customerId}</td>
                  <td className="border p-2">{c.name}</td>
                  <td className="border p-2">{c.number}</td>
                  <td className="border p-2">{c.aadhar || c.aadhaar}</td>
                  <td className="border p-2">{c.pan}</td>
                  <td className="border p-2">{c.address}</td>
                  <td className="border p-2">{c.createdDate}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
