import { Box, styled } from "@mui/material";
import React, { useEffect, useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledCarouselItemWrapper = styled(Box)({
  width: "100%",
  height: "740px",
  background: "rgba(196, 178, 178, 0.07)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(0.9px)",
  "-webkit-backdrop-filter": "blur(0.9px)",
  position: "relative",
  borderRight: "1px solid rgba(196, 178, 178, 0.66)",
  borderLeft: "1px solid rgba(196, 178, 178, 0.66)",
  zIndex: 999,
  "&:first-child": {
    borderLeft: "none",
  },
  "&:last-child": {
    borderRight: "none",
  },
  overflow: "hidden",
  transition: ".5s ease-in-out",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "0 25px",
  "&:hover": {
    background: "rgba(196, 178, 178, 0.18)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(2.1px)",
    "-webkit-backdrop-filter": "blur(2.1px)",
    borderRight: "1px solid rgba(196, 178, 178, 0.66)",
    borderLeft: "1px solid rgba(196, 178, 178, 0.66)",
    zIndex: 999,
    "&:first-child": {
      borderLeft: "none",
    },
    "&:last-child": {
      borderRight: "none",
    },
  },
  "&:hover .text-wrapper": {
    bottom: "100px",
  },
  "&:hover p": {
    visibility: "visible",
    opacity: 1,
  },
  "&:hover a": {
    visibility: "visible",
    opacity: 1,
  },
});

const TextWrapperDiv = styled(Box)({
  height: "100px",
  width: "100%",
  background: "transparent",
  color: "#fff",
  position: "absolute",
  bottom: "0",
  transition: ".5s ease-in",
});

const StyledH1Slider = styled("h1")({
  fontSize: "32px",
  fontWeight: 900,
  lineHeight: 1.2,
  margin: "10px 0",
});

const StyledParagraphSlider = styled("p")({
  fontSize: "20px",
  lineHeight: "25px",
  visibility: "hidden",
  opacity: 0,
});

const StyledLink = styled("a")({
  fontSize: "20px",
  fontWeight: 700,
  visibility: "hidden",
  opacity: 0,
  marginTop: "10px",
  textDecoration: "none",
  color: "#d1f",
});

const Carouseltem = (props) => {
  const { title, description, link, img, bgChanger } = props;
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.addEventListener("mouseover", () => {
      bgChanger(img);
      console.log("mouse is over", link);
    });
  }, []);
  return (
    <StyledCarouselItemWrapper ref={divRef}>
      <TextWrapperDiv className="text-wrapper">
        <StyledH1Slider>{title}</StyledH1Slider>
        <StyledParagraphSlider>{description}</StyledParagraphSlider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#d1f",
          }}
        >
          <StyledLink href={link}>Batafsil</StyledLink>
          <ArrowForwardIcon
            sx={{ fontSize: "25px", marginTop: "7px", marginLeft: "10px" }}
          />
        </Box>
      </TextWrapperDiv>
    </StyledCarouselItemWrapper>
  );
};

export default Carouseltem;
