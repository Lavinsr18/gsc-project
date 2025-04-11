import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <header className="bg-white shadow-md p-4 mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Search Console Dashboard
        </h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Clicks", value: "--" },
          { label: "Impressions", value: "--" },
          { label: "Average CTR", value: "--" },
          { label: "Average Position", value: "--" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-sm text-gray-500 mb-1">{item.label}</h2>
            <p className="text-xl font-bold text-gray-800">{item.value}</p>
          </div>
        ))}
      </section>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Performance Report</h2>
        <select className="p-2 border border-gray-300 rounded-lg">
          <option>Last 7 days</option>
          <option>Last 28 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Query
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Clicks
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Impressions
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                CTR
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Position
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-6 py-4 text-sm text-gray-800">--</td>
              <td className="px-6 py-4 text-sm text-gray-800">--</td>
              <td className="px-6 py-4 text-sm text-gray-800">--</td>
              <td className="px-6 py-4 text-sm text-gray-800">--</td>
              <td className="px-6 py-4 text-sm text-gray-800">--</td>
            </tr>
            {/* Data rows will go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
