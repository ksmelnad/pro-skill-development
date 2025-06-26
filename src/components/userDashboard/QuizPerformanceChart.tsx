"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { format } from "date-fns";

interface QuizResult {
  id: string;
  quizTitle: string;
  percent: number;
  createdAt: Date;
}

interface QuizPerformanceChartProps {
  data: QuizResult[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white border rounded-md shadow-lg">
        <p className="font-bold">{`${payload[0].payload.quizTitle}`}</p>
        <p className="text-sm">{`Score: ${payload[0].value}%`}</p>
        <p className="text-xs text-gray-500">{`Date: ${label}`}</p>
      </div>
    );
  }
  return null;
};

export function QuizPerformanceChart({ data }: QuizPerformanceChartProps) {
  const chartData = data
    .map((result) => ({
      ...result,
      // Format date for the X-axis label
      formattedDate: format(new Date(result.createdAt), "MMM d"),
    }))
    .reverse(); // Reverse to show oldest to newest

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="formattedDate" tick={{ fontSize: 12 }} />
        <YAxis
          tickFormatter={(value) => `${value}%`}
          domain={[0, 100]}
          tick={{ fontSize: 12 }}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: "rgba(206, 212, 218, 0.2)" }}
        />
        <Legend />
        <Bar dataKey="percent" name="Score" barSize={20}>
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.percent >= 70 ? "#22c55e" : "#ef4444"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
