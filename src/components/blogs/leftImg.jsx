import React from "react";
import { styled, Grid, Box } from "@mui/material";

const StyledTopBox = styled(Grid)({
  "& .hoveredImg": {
    width: "100%",
    height: "100%",
    position: "relative",
    top: 0,
    left: 0,
  },
  "&:hover .hoveredImg": {
    scale: 1.2,
  },
});

const LeftImg = ({ item }) => {
  return (
    <StyledTopBox container>
      <Grid item xs={12} sm={6} md={6}>
        <Box
          component="img"
          alt={item.alt}
          src={item.img}
          className="hoveredImg"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6}></Grid>
    </StyledTopBox>
  );
};

export default LeftImg;
