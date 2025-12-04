import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
interface Notice {
  id: number;
  text: string;
  time: string;
}
 

export default function Notice() {
  const [newNotice, setNewNotice] = useState("");
  const [notices, setNotices] = useState<Notice[]>([
    { id: 1, text: "Policy renewal reminder sent", time: "2h ago" },
    { id: 2, text: "Scheduled downtime — Saturday 2AM–3AM", time: "1d ago" },
  ]);

  const handleAdd = () => {
    if (!newNotice.trim()) return;

    setNotices([
      { id: Date.now(), text: newNotice, time: "Just now" },
      ...notices,
    ]);

    setNewNotice("");
  };
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <Button onClick={()=>navigate(-1)}>
        Back
      </Button>
      <h2 className="text-3xl font-bold">Notices</h2>

      {/* New Notice */}
      <div className="bg-white p-6 shadow rounded space-y-4">
        <h3 className="text-xl font-semibold">Create Notice</h3>

        <textarea
          className="border p-3 rounded w-full"
          rows={3}
          placeholder="Type notice..."
          value={newNotice}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setNewNotice(e.target.value)
          }
        ></textarea>

        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded w-full"
        >
          Post Notice
        </button>
      </div>

      {/* Notice List */}
      <div className="bg-white p-6 shadow rounded">
        <h3 className="text-xl font-semibold">All Notices</h3>

        <ul className="space-y-3 mt-3">
          {notices.map((n) => (
            <li
              key={n.id}
              className="border p-3 rounded flex justify-between bg-gray-50"
            >
              <span>{n.text}</span>
              <small className="text-blue-600">{n.time}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
