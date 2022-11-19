import { Box, Container, Grid, styled, Tab, Tabs } from "@mui/material";
import React from "react";
import useWindowSize from "src/hooks/useWindowSize";
import TabPanel from "./TabPanel";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ isLarge }) => {
    console.log(isLarge);
    return {
      textTransform: "none",
      textAlign: "left",
      alignItems: "flex-start",
      fontWeight: 800,
      fontSize: "24px",
      width: isLarge ? "auto" : "350px",
      color: "#ddd",
      transition: ".2s ease-in",
      borderTop: !isLarge ? "1px solid #ddd" : "",
      paddingLeft: 0,
      "&.Mui-selected": {
        color: "#000",
        borderBottom: "3px solid blue !important",
      },
      "&:last-child": {
        borderBottom: !isLarge ? "1px solid #ddd" : "",
        alignItems: !isLarge ? "flex-start" : "flex-end",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)",
      },
      "&:hover": {
        color: "#000",
      },
      "@media (max-width: 576px)": {
        fontWeight: 500,
      },
      "@media (min-width: 576px)": {
        fontWeight: 600,
      },
      "@media (min-width: 768px)": {
        fontWeight: 700,
      },
      "@media (min-width: 992px)": {
        fontWeight: 800,
      },
    };
  }
);

const StyledHeaderTabs = styled("h1")({
  fontSize: "32px",
  fontWeight: 900,
  float: "left",
  textAlign: "right",
  lineHeight: "60px",
  color: "#000",
  textAlign: "center",
});

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
        container
        display="flex"
        flexDirection={windowWidth < 992 ? "column" : "row"}
        sx={{ width: "100%" }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <StyledHeaderTabs>Bizning xizmatlar</StyledHeaderTabs>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Tabs
            orientation={windowWidth < 992 ? "horizontal" : "vertical"}
            variant="scrollable"
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              sx: {
                display: "none",
                borderRight: "none",
              },
            }}
            aria-label="Vertical tabs example"
            sx={{ width: "100%" }}
          >
            <StyledTab
              isLarge={windowWidth < 992}
              label="Web dasturlash"
              {...a11yProps(0)}
            />
            <StyledTab
              isLarge={windowWidth < 992}
              label="Mobil dasturlash"
              {...a11yProps(1)}
            />
            <StyledTab
              isLarge={windowWidth < 992}
              label="Grafik dizayn"
              {...a11yProps(2)}
            />
            <StyledTab
              isLarge={windowWidth < 992}
              label="SMM"
              {...a11yProps(3)}
            />
          </Tabs>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
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
