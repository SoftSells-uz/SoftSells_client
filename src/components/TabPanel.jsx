import { Box, styled, Typography } from "@mui/material";
import React from "react";

const StyledTab = styled(Box)({
  backgroundColor: "#f8f8f8",
  padding: "10px 0",
  "@media (max-width: 576px)": { padding: "10px" },
});

const TabPanel = (props) => {
  const { children, value, index, isMd, ...other } = props;

  return (
    <StyledTab
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: isMd ? "" : 3, pt: isMd ? 3 : "" }}>{children}</Box>
      )}
    </StyledTab>
  );
};

export default TabPanel;
