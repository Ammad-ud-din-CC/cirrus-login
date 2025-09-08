import { TeamPerformance } from "@/constants/Data";
import { EuiFlexGroup, EuiPanel, EuiText } from "@elastic/eui";
import React from "react";
import TeamPerformanceCard from "./dynamic/TeamPerformanceCard";
import { css } from "@emotion/react";

const TeamsPerformanceGroup = () => {
  return (
    <EuiFlexGroup
      direction="row"
      alignItems="center"
      justifyContent="spaceBetween"
      gutterSize="l"
    >
      <EuiText
        size="xs"
        css={css`
          font-weight: 600;
          white-space: nowrap;
        `}
      >
        <p>Top Performing Teams</p>
      </EuiText>

      <EuiPanel
        hasBorder={false}
        hasShadow={false}
        paddingSize="none"
        css={css`
          width: calc(100% - 200px);
          overflow-x: auto;
          white-space: nowrap;
        `}
      >
        <EuiFlexGroup
          direction="row"
          alignItems="center"
          justifyContent="flexStart"
          gutterSize="m"
          wrap={false}
        >
          {TeamPerformance.map((item) => (
            <TeamPerformanceCard
              company={item.company}
              lead={item.lead}
              performance={item.performance}
              key={item.id}
            />
          ))}
        </EuiFlexGroup>
      </EuiPanel>
    </EuiFlexGroup>
  );
};

export default TeamsPerformanceGroup;
