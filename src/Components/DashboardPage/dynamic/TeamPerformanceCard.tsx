import { EuiPanel, EuiText } from "@elastic/eui";
import { css } from "@emotion/react";
import React from "react";

interface TeamPerformanceCardProps {
  company: string;
  lead: string;
  performance: string;
}

const TeamPerformanceCard: React.FC<TeamPerformanceCardProps> = ({
  company,
  lead,
  performance,
}) => {
  const performanceValue = parseFloat(performance);
  const performanceColor = performanceValue < 80 ? "#ff0000" : "#fb9845";
  const performanceBackgroundColor =
    performanceValue < 80 ? "rgba(255, 0, 0, 0.1)" : "rgba(251, 152, 69, 0.15)";

  const TeamsPerformancecardStyle = css`
    width: 200px;
    height: 100px;
    border-radius: 12px;
  `;

  return (
    <EuiPanel
      hasBorder
      hasShadow
      css={TeamsPerformancecardStyle}
      paddingSize="none"
    >
      <EuiText
        css={css`
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 12px;
          font-size: 12px !important;
          background-color: ${performanceBackgroundColor};
          line-height: 1.5;
        `}
      >
        <p>{company}</p>
        <p>Lead By: {lead}</p>
        <p>
          Performance:{" "}
          <span style={{ fontWeight: 500, color: performanceColor }}>
            {performance}
          </span>
        </p>
      </EuiText>
    </EuiPanel>
  );
};

export default TeamPerformanceCard;
