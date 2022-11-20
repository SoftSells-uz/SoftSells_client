import { Box, styled } from "@mui/material";
import React from "react";
import CountUp from "react-countup";

const StyledH2 = styled("h2")({
  fontSize: "40px",
  fontWeight: 900,
  color: "#091e6c",
  lineHeight: 1.2,
});

const StyledP = styled("p")({
  fontSize: "24px",
  lineHeight: 1.22,
  color: "#323232",
});

const Counter = (props) => {
  const { number, txt, id } = props;

  return (
    <Box>
      <StyledH2>
        {id === 1 ? number : <CountUp end={number} duration={2} />}
      </StyledH2>
      <StyledP>{txt}</StyledP>
    </Box>
  );
};

export default Counter;
