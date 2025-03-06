import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

/**
 * Interface defining the structure of chart data.
 */
interface ChartData {
  category: string;
  vehicleCost: number;
  averageCost: number;
}

interface CostChartProps {
  data: ChartData[];
}

/**
 * Custom tooltip component for displaying cost details.
 */
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="backdrop-blur-sm"
        style={{
          color: "#000A12",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <p style={{ fontWeight: "bold", marginBottom: "5px" }}>{label}</p>
        <p style={{ margin: 0 }}>
          Vehicle's cost:{" "}
          <strong style={{ color: "#1D88BB" }}>
            {Number(payload[0].value).toFixed(2)}
          </strong>
        </p>
        <p style={{ margin: 0 }}>
          Average cost:{" "}
          <strong style={{ color: "#81C241" }}>
            {Number(payload[1].value).toFixed(2)}
          </strong>
        </p>
      </div>
    );
  }

  return null;
};

const CostChart: React.FC<CostChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart data={data} margin={{ left: 10, bottom: 30 }}>
        <XAxis dataKey="category">
          <Label value="Cost Types" offset={-20} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label
            value="Cost (€)"
            angle={-90}
            position="insideLeft"
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <Tooltip
          formatter={(value) => Number(value).toFixed(2)}
          content={<CustomTooltip />}
        />
        <Legend
          verticalAlign="top"
          align="right"
          wrapperStyle={{ paddingBottom: "10px" }}
        />
        <Bar dataKey="vehicleCost" fill="#1D88BB" name="Vehicle's cost" radius={[5, 5, 0, 0]} />
        <Bar dataKey="averageCost" fill="#81C241" name="Average cost" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CostChart;
