/** @jsxImportSource @emotion/react */
import { dashboardMetrics } from "@/constants/Data";
import { EuiFlexGroup, EuiFlexItem, EuiImage, EuiText } from "@elastic/eui";
import { css } from "@emotion/react";

const DashboardMetrics = () => {
  const iconStyle = css(`
    background : #dcf2ff;
    border-radius: 80px;
    padding: 14px;
    `);

  const cardStyle = css`
    padding: 12px;
    border-radius: 16px;
    box-shadow: 0 0.9px 4px rgba(0, 0, 0, 0.08), 0 2.6px 8px rgba(0, 0, 0, 0.06),
      0 5.7px 12px rgba(0, 0, 0, 0.05), 0 15px 15px rgba(0, 0, 0, 0.04);
  `;

  return (
    <EuiFlexGroup direction="column" gutterSize="m">
      {dashboardMetrics.map((item) => (
        <EuiFlexGroup
          key={item.id}
          className="metropolis"
          justifyContent="flexStart"
          alignItems="center"
          gutterSize="m"
          css={cardStyle}
        >
          <EuiFlexItem grow={false}>
            <EuiImage
              css={iconStyle}
              size={60}
              src={item.icon}
              alt={item.title}
            />
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            <EuiText size="xs">
              <p>{item.title}</p>
            </EuiText>
            <EuiText
              size="m"
              css={{
                color: "#63b3e7",
              }}
            >
              <h2>{item.number}</h2>
            </EuiText>
            {item.extraText && (
              <EuiText style={{ fontSize: "10px", lineHeight: "1" }}>
                <p>{item.extraText}</p>
              </EuiText>
            )}
          </EuiFlexItem>
        </EuiFlexGroup>
      ))}
    </EuiFlexGroup>
  );
};

export default DashboardMetrics;
