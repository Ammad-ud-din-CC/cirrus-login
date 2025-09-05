/** @jsxImportSource @emotion/react */
import { performersData } from "@/constants/Data";
import DonutChart from "../recaharts/PercentageCircle";
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiImage,
  EuiPanel,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import { css } from "@emotion/react";

const TopLowPerformer = () => {
  const containerStyle = css`
    height: fit-content;
  `;
  const cardStyle = css`
    position: relative;
    padding: 12px;
    border-radius: 12px;
    border: 1px solid #ddd;
    height: fit-content;
  `;

  const caretIcon = css`
    position: absolute;
    right: 8px;
    color: var(--secondary) !important;
  `;

  const avatars = Array(5).fill("/Dashboard/Performers/Avatar.png");

  return (
    <EuiFlexGroup
      direction="column"
      gutterSize="m"
      justifyContent="spaceBetween"
      css={css`
        border: 1px solid #ddd;
        border-radius: 16px;
        padding: 12px;
      `}
    >
      {performersData.map((item) => (
        <EuiFlexGroup
          direction="column"
          gutterSize="s"
          css={containerStyle}
          key={item.id}
        >
          <EuiFlexGroup
            className="metropolis"
            justifyContent="flexStart"
            alignItems="center"
            gutterSize="m"
            css={cardStyle}
          >
            {/* LEFT ITEM DOUGHNUT */}
            <EuiFlexItem grow={false}>
              <DonutChart value={item.score} size={60} />
            </EuiFlexItem>

            {/* RIGHT ITEM PERFORMER */}
            <EuiFlexItem grow={false}>
              <EuiText size="xs" style={{ fontWeight: 500 }}>
                <p>{item.performerCategory} Performer</p>
              </EuiText>

              <EuiSpacer size="s" />

              <EuiFlexGroup
                gutterSize="s"
                alignItems="center"
                justifyContent="flexStart"
              >
                <EuiImage
                  size={20}
                  src="/Dashboard/Performers/Avatar.png"
                  alt="Avatar"
                />

                <EuiText style={{ fontSize: "12px", fontWeight: 300 }}>
                  <p>{item.employeeName}</p>
                </EuiText>
              </EuiFlexGroup>
            </EuiFlexItem>

            {/* CARET ICON */}
            <EuiIcon size="s" css={caretIcon} type="playFilled" />
          </EuiFlexGroup>

          <EuiFlexGroup gutterSize="s">
            {avatars.map((src, index) => (
              <EuiImage
                key={index}
                size={25}
                src={src}
                alt={`Avatar ${index + 1}`}
              />
            ))}
          </EuiFlexGroup>
        </EuiFlexGroup>
      ))}
    </EuiFlexGroup>
  );
};

export default TopLowPerformer;
