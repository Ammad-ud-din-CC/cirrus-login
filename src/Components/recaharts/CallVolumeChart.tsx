/** @jsxImportSource @emotion/react */
"use client";

import {
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiLink,
  EuiButtonGroup,
  EuiSpacer,
} from "@elastic/eui";
import { css } from "@emotion/react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  Tooltip,
} from "chart.js";
import { chartData, timeRanges } from "@/constants/Data";

// Register chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  Tooltip
);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { mode: "index" as const, intersect: false },
  },
  scales: {
    y: {
      title: { display: true, text: "Call Volumes" },
      ticks: { stepSize: 600 },
      min: 0,
      max: 2400,
    },
    x: {
      title: { display: false },
    },
  },
};

const CallVolumeChart = () => {
  return (
    <EuiPanel
      grow
      hasShadow={false}
      hasBorder
      paddingSize="none"
      css={css`
        padding: 12px;
        border-radius: 12px;
        width: 100%;
        height: auto;
      `}
    >
      {/* Header */}
      <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
        <EuiFlexItem grow={false}>
          <EuiButtonGroup
            legend="Time range"
            options={timeRanges.map((label) => ({
              id: label,
              label,
            }))}
            idSelected="1Y"
            onChange={() => {}}
            type="single"
            buttonSize="compressed"
          />
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiText textAlign="right">
            <h3 style={{ color: "var(--secondary)", margin: 0 }}>17,056</h3>
            <small style={{ fontSize: "12px" }}>Total Calls</small>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiPanel
        hasBorder={false}
        paddingSize="none"
        hasShadow={false}
        css={css`
          position: relative;
          height: 350px;
          width: 100%;
        `}
      >
        <Line data={chartData} options={chartOptions} />
      </EuiPanel>
      <EuiSpacer size="m" />
      <EuiPanel
        css={css`
          text-align: right;
        `}
        hasBorder={false}
        paddingSize="m"
        hasShadow={false}
      >
        <EuiLink
          href="#"
          css={css`
            font-size: 14px;
            color: #fb9845;
          `}
        >
          More Details
        </EuiLink>
      </EuiPanel>
    </EuiPanel>
  );
};

export default CallVolumeChart;
