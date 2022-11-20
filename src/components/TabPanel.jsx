import { Box, Typography } from "@mui/material";
import React from "react";

const TabPanel = (props) => {
  const { children, value, index, isMd, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: isMd ? "" : 3, pt: isMd ? 3 : "" }}>{children}</Box>
      )}
    </div>
  );
};

export default TabPanel;
