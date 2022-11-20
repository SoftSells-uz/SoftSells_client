import { Box, Grid, styled } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledBox = styled(Grid)({
  width: "100%",
  border: "1px solid #c4c4c4",
  "&:hover": {
    "-webkit-box-shadow": "0px 0px 14px 2px rgba(34, 60, 80, 0.2)",
    "-moz-box-shadow": "0px 0px 14px 2px rgba(34, 60, 80, 0.2)",
    boxShadow: "0px 0px 14px 2px rgba(34, 60, 80, 0.2)",
  },
  cursor: "pointer",
  "&:hover .hoveredImg": {
    scale: "1.1",
  },
});

const ArrowWrapper = styled(Box)({
  width: "48px",
  height: "48px",
  position: "absolute",
  bottom: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTop: "1px solid #c4c4c4",
  borderLeft: "1px solid #c4c4c4",
  cursor: "pointer",
});

const StyledDescriptionService = styled("p")({
  color: "#323232",
  fontSize: "16px",
  fontWeight: 300,
  lineHeight: 1.3,
  whiteSpace: "pre-wrap",
});

const CardWithoutImg = (props) => {
  return (
    <StyledBox container>
      <Grid item xs={12} sm={4} md={4} sx={{ overflow: "hidden" }}>
        <Box
          component="img"
          className="hoveredImg"
          width="100%"
          height="100%"
          src={props.img}
          sx={{ objectFit: "cover", transition: ".8s ease-in-out" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={8}
        sx={{ padding: "28px", position: "relative" }}
      >
        <h2 style={{ marginBottom: "5px", color: "#ddd" }}>{props.title}</h2>
        <StyledDescriptionService>{props.description}</StyledDescriptionService>
        <ArrowWrapper>
          <ArrowForwardIcon
            sx={{
              width: "36px",
              height: "36px",
              transition: ".2s ease-in",
              "&:hover": { marginLeft: "5px" },
            }}
          />
        </ArrowWrapper>
      </Grid>
    </StyledBox>
  );
};

export default CardWithoutImg;
