/** @jsxImportSource @emotion/react */
import { EuiPanel, EuiTabbedContent } from "@elastic/eui";
import { tabsData } from "@/constants/Data";
import { css } from "@emotion/react";

export default () => {
  const containerStyle = css`
    border-radius: 12px;
    padding: 12px;
  `;
  return (
    <EuiPanel css={containerStyle} hasShadow={false} hasBorder>
      <EuiTabbedContent
        color="subdued"
        size="s"
        tabs={tabsData}
        initialSelectedTab={tabsData[0]}
        autoFocus="selected"
      />
    </EuiPanel>
  );
};
