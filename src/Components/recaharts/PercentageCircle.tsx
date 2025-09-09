/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { PieChart, Pie, Cell } from "recharts";
import styled from "@emotion/styled";
import { EuiPanel } from "@elastic/eui";

const getColorByValue = (value: number) => {
  if (value < 40) return "#D32F2F";
  if (value < 70) return "var(--secondary)";
  return "#00C853";
};

interface CenteredTextProps {
  size: number;
  color: string;
}

const CenteredText = styled("div")<CenteredTextProps>(({ size, color }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: `${size * 0.2}px`,
  fontWeight: "bold",
  color: color,
}));

export default function DonutChart({ value = 83, size = 120 }) {
  const clampedValue = Math.min(Math.max(value, 0), 100);
  const color = getColorByValue(clampedValue);

  const data = [
    { name: "Completed", value: clampedValue },
    { name: "Remaining", value: 100 - clampedValue },
  ];

  const COLORS = [color, "#e0e0e0"];

  return (
    <EuiPanel
      hasBorder={false}
      paddingSize="none"
      hasShadow={false}
      style={{ width: size, height: size, position: "relative" }}
    >
      <PieChart width={size} height={size}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={size * 0.35}
          outerRadius={size * 0.48}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <CenteredText size={size} color={color}>
        {`${clampedValue}%`}
      </CenteredText>
    </EuiPanel>
  );
}

DonutChart.propTypes = {
  value: PropTypes.number,
  size: PropTypes.number,
};
