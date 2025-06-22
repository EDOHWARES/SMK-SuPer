import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Pibg = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  const rawApiUrl = import.meta.env.VITE_API_URL;
  const baseUrl = rawApiUrl.replace(/\/api\/?$/, "");

  const fetchPayments = async () => {
    const api_url = import.meta.env.VITE_API_URL;
    try {
      const res = await axios.get(`${api_url}/pibg`);
      setPayments(res.data);      
    } catch (err) {
      console.error(err);
      alert("Failed to fetch payments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleStatusChange = async (id, status) => {
    const api_url = import.meta.env.VITE_API_URL;
    setUpdatingId(id);
    try {
      await axios.patch(`${api_url}/pibg/${id}`, { status });
      fetchPayments();
      toast.success("Updated status sent to user!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };

  const downloadReport = async () => {
    const api_url = import.meta.env.VITE_API_URL;
    try {
      const res = await axios.get(`${api_url}/pibg/report`, {
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "payment_report.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error(err);
      toast.error("Failed to download report");
    }
  };

  return (
    <section className="p-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Payment Records</h2>
        <button
          onClick={downloadReport}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Download CSV
        </button>
      </div>

      {loading ? (
        <p>Loading payments...</p>
      ) : payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Parent Name</th>
                <th className="px-4 py-2 border">Child Name</th>
                <th className="px-4 py-2 border">Class</th>
                <th className="px-4 py-2 border">Form</th>
                <th className="px-4 py-2 border">Amount (MYR)</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Receipt</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p._id}>
                  <td className="px-4 py-2 border text-center">
                    {p.email}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {p.parentName}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {p.childName}
                  </td>
                  <td className="px-4 py-2 border text-center">{p.class}</td>
                  <td className="px-4 py-2 border text-center">{p.form ? `Form ${p.form}` : "-"}</td>
                  <td className="px-4 py-2 border text-center">
                    <span className="font-bold mr-1">RM</span>
                    {p.amount}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {new Date(p.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border capitalize text-center mx-auto">
                    {p.status || "pending"}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    <a
                      href={`${baseUrl}/${p.receipt}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline text-center"
                    >
                      View
                    </a>
                  </td>
                  <td className="px-4 py-2 border text-center">
                    <select
                      value={p.status || "pending"}
                      disabled={updatingId === p._id}
                      onChange={(e) =>
                        handleStatusChange(p._id, e.target.value)
                      }
                      className="border rounded px-2 py-1 text-center"
                    >
                      <option value="pending">Pending</option>
                      <option value="verified">Verified</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default Pibg;
