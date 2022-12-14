import { Box, styled } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledBox = styled(Box)({
  width: "100%",
  border: "1px solid #c4c4c4",
  padding: "34px",
  position: "relative",
  "&:hover": {
    "-webkit-box-shadow": "0px 0px 14px 2px rgba(34, 60, 80, 0.2)",
    "-moz-box-shadow": "0px 0px 14px 2px rgba(34, 60, 80, 0.2)",
    boxShadow: "0px 0px 14px 2px rgba(34, 60, 80, 0.2)",
  },
  height: "100%",
  cursor: "pointer",
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

const CardWithImg = (props) => {
  return (
    <StyledBox>
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
    </StyledBox>
  );
};

export default CardWithImg;
