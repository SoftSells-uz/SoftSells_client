import { Box, Container, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import useWindowSize from "src/hooks/useWindowSize";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Services = () => {
  const [value, setValue] = React.useState(0);
  const windowWidth = useWindowSize();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    console.log(windowWidth);
  }, [windowWidth]);
  return (
    <Container sx={{ my: 4 }}>
      <Grid
        display="flex"
        flexDirection={windowWidth < 992 ? "column" : "row"}
        sx={{ width: "100%" }}
      >
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Tabs
            orientation={windowWidth < 992 ? "horizontal" : "vertical"}
            // variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider", width: "100%" }}
          >
            <Tab label="Web dasturlash" {...a11yProps(0)} />
            <Tab label="Mobil dasturlash" {...a11yProps(1)} />
            <Tab label="Grafik dizayn" {...a11yProps(2)} />
            <Tab label="SMM" {...a11yProps(3)} />
          </Tabs>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
