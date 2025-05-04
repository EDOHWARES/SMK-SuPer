import React, { useEffect, useState } from "react";
import axios from "axios";

const Pibg = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchPayments = async () => {
    try {
      const res = await axios.get("/api/payments");
      setPayments(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch payments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchPayments();
  }, []);

  const handleStatusChange = async (id, status) => {
    setUpdatingId(id);
    try {
      await axios.patch(`/api/payments/${id}`, { status });
      fetchPayments();
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };

  const downloadReport = async () => {
    try {
      const res = await axios.get("/api/payments/report", {
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
      alert("Failed to download report");
    }
  };

  return (
    <section className="mt-12 p-6">
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
                <th className="px-4 py-2 border">Child Name</th>
                <th className="px-4 py-2 border">Class</th>
                <th className="px-4 py-2 border">Amount (₦)</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Receipt</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p._id}>
                  <td className="px-4 py-2 border">{p.childName}</td>
                  <td className="px-4 py-2 border">{p.class}</td>
                  <td className="px-4 py-2 border">₦{p.amount}</td>
                  <td className="px-4 py-2 border">
                    {new Date(p.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border capitalize">{p.status || "pending"}</td>
                  <td className="px-4 py-2 border">
                    <a
                      href={`/${p.receipt}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View
                    </a>
                  </td>
                  <td className="px-4 py-2 border">
                    <select
                      value={p.status || "pending"}
                      disabled={updatingId === p._id}
                      onChange={(e) => handleStatusChange(p._id, e.target.value)}
                      className="border rounded px-2 py-1"
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
