/** @jsxImportSource @emotion/react */
"use client";

import { agentsColumns, metricsColumns } from "@/constants/Data";
import {
  EuiPanel,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
  EuiSpacer,
} from "@elastic/eui";
import { css } from "@emotion/react";

interface MetricsTableProps {
  columns: string[];
  rows: Record<string, string>[];
}

const tableStyle = css`
  font-size: 12px;
  border: 1px solid #d3dae6;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
`;

const headerStyle = css`
  font-size: 12px;
  font-weight: 500 !important;
  background-color: var(--tertiary);
  padding: 12px;
  border-bottom: 1px solid #d3dae6;
`;

const rowStyle = css`
  font-size: 12px;
  font-weight: 400;
  padding: 12px;
  border-bottom: 1px solid #d3dae6;
  &:last-of-type {
    border-bottom: none;
  }
  &:nth-of-type(odd) {
    background: #f1f1f0;
  }
`;

const cellStyle = css`
  flex: 1;
  min-width: 100px;
`;

const scrollContainerStyle = css`
  max-height: 400px;
  overflow-y: auto;
`;

const MetricsTable = ({ columns, rows }: MetricsTableProps) => {
  return (
    <EuiPanel grow css={tableStyle} paddingSize="none" hasShadow={false}>
      {/* Header */}
      <EuiFlexGroup css={headerStyle} gutterSize="s">
        {columns.map((col, idx) => (
          <EuiFlexItem key={idx} css={cellStyle}>
            {col}
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>

      {/* Scrollable rows */}
      <EuiPanel
        paddingSize="none"
        hasBorder={false}
        hasShadow={false}
        css={scrollContainerStyle}
      >
        {rows.map((row, rowIndex) => (
          <EuiFlexGroup key={rowIndex} css={rowStyle} gutterSize="s">
            {columns.map((col, colIndex) => (
              <EuiFlexItem
                className={
                  columns === metricsColumns && colIndex === 0
                    ? "rowPeriod"
                    : undefined
                }
                key={`cell-${rowIndex}-${colIndex}`}
                css={cellStyle}
              >
                {row[col] ?? "-"}
              </EuiFlexItem>
            ))}
          </EuiFlexGroup>
        ))}
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

export default MetricsTable;
