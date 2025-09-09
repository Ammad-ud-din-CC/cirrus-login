"use client";
/** @jsxImportSource @emotion/react */ import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiProgress,
  EuiSpacer,
  EuiText,
  EuiToolTip,
} from "@elastic/eui";
import { css } from "@emotion/react";

interface Issue {
  id: number;
  text: string;
  percentage: number;
}
interface IssueListProps {
  issues: Issue[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  const issueListStyle = css`
    font-size: 11px;
    font-weight: 300;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    width: 260px;
    cursor: default;
  `;

  return (
    <EuiPanel
      paddingSize="none"
      grow={false}
      hasBorder={false}
      hasShadow={false}
    >
      {issues.map((issue) => (
        <EuiPanel
          paddingSize="none"
          hasBorder={false}
          hasShadow={false}
          key={issue.id}
        >
          <EuiPanel
            paddingSize="none"
            hasBorder={false}
            hasShadow={false}
            grow={false}
          >
            <EuiFlexGroup justifyContent="spaceBetween" gutterSize="s">
              <EuiFlexItem grow={1}>
                <EuiToolTip content={issue.text} position="left">
                  <EuiPanel
                    hasBorder={false}
                    hasShadow={false}
                    paddingSize="none"
                    css={issueListStyle}
                  >
                    {issue.text}
                  </EuiPanel>
                </EuiToolTip>
              </EuiFlexItem>

              <EuiFlexItem grow={false}>
                <EuiText
                  css={css`
                    font-size: 11px;
                    font-weight: 700;
                  `}
                >
                  <p>{issue.percentage.toFixed(2)}%</p>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>

            <EuiProgress
              value={issue.percentage}
              max={100}
              color={"#ff0000"}
              size="s"
            />
          </EuiPanel>
          <EuiSpacer size="s" />
        </EuiPanel>
      ))}
    </EuiPanel>
  );
};

export default IssueList;
