/** @jsxImportSource @emotion/react */
"use client";
import DashboardMetrics from "@/Components/DashboardPage/DashboardMetrics";
import KeyAreasTab from "@/Components/DashboardPage/KeyAreasTab";
import MetricsTable from "@/Components/DashboardPage/dynamic/Table";
import TopLowPerformer from "@/Components/DashboardPage/TopLowPerformer";
import CallVolumeChart from "@/Components/recaharts/CallVolumeChart";
import {
  agentsColumns,
  agentsRows,
  metricsColumns,
  metricsRows,
} from "@/constants/Data";
import {
  EuiFlexGrid,
  EuiFlexItem,
  EuiPanel,
  EuiSpacer,
  EuiTitle,
} from "@elastic/eui";
import { css } from "@emotion/react";

const DashboardPage = () => {
  const gridColumns = css`
    grid-template-columns: repeat(5, 1fr) !important;
  `;
  return (
    <EuiPanel hasBorder={false} hasShadow={false} paddingSize="l">
      <EuiTitle
        size="m"
        className="metropolis"
        css={css({
          fontWeight: 500,
        })}
      >
        <h1>Dashboard</h1>
      </EuiTitle>

      <EuiSpacer size="l" />

      <EuiFlexGrid gutterSize="l" responsive={false} css={gridColumns}>
        <EuiFlexItem
          css={css`
            grid-column: span 1;
          `}
        >
          <DashboardMetrics />
        </EuiFlexItem>
        <EuiFlexItem
          css={css`
            grid-column: span 1;
          `}
        >
          <TopLowPerformer />
        </EuiFlexItem>
        <EuiFlexItem
          css={css`
            grid-column: span 1;
          `}
        >
          <KeyAreasTab />
        </EuiFlexItem>
        <EuiFlexItem
          css={css`
            grid-column: span 2;
          `}
        >
          <MetricsTable rows={metricsRows} columns={metricsColumns} />
        </EuiFlexItem>
      </EuiFlexGrid>
      <EuiSpacer size="l" />
      <EuiFlexGrid gutterSize="l" responsive={false} css={gridColumns}>
        <EuiFlexItem
          css={css`
            grid-column: span 3;
          `}
        >
          <CallVolumeChart />
        </EuiFlexItem>

        <EuiFlexItem
          grow={false}
          css={css`
            grid-column: span 2;
          `}
        >
          <MetricsTable rows={agentsRows} columns={agentsColumns} />
        </EuiFlexItem>
      </EuiFlexGrid>
    </EuiPanel>
  );
};

export default DashboardPage;
