import { Box, styled, Typography } from "@mui/material";
import React from "react";

const StyledTab = styled(Box)({
  padding: "10px 0",
  width: "100%",
  "@media (max-width: 576px)": { padding: "10px" },
  "@media (min-width: 576px)": { padding: "10px" },
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
      {value === index && <Box sx={{ px: isMd ? "" : 3 }}>{children}</Box>}
    </StyledTab>
  );
};

export default TabPanel;
