"use client";

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "JAN", value: 75000 },
  { name: "FEB", value: 25000 },
  { name: "MAR", value: 120000 },
  { name: "APR", value: 60000 },
  { name: "MAY", value: 140000 },
  { name: "JUN", value: 110000 },
  { name: "JUL", value: 25000 },
  { name: "AUG", value: 150000 },
  { name: "SEP", value: 85000 },
  { name: "OCT", value: 125000 },
  { name: "NOV", value: 45000 },
  { name: "DEC", value: 90000 },
];

const MonthlyOverviewChart = () => {
  const formatYAxis = (value: number) => {
    if (value === 0) return "0";
    return `$${value / 1000}K`;
  };

  return (
    <div className="p-6 h-75">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12, fontWeight: 500 }}
            dy={10}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12, fontWeight: 500 }}
            tickFormatter={formatYAxis}
            ticks={[0, 50000, 100000, 150000]}
          />

          <Bar
            dataKey="value"
            fill="#8b5cf6"
            barSize={44}
            radius={[7, 7, 7, 7]}
            background={{ fill: "#cecece", radius: 7 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyOverviewChart;
