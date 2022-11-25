import { Box, styled } from "@mui/material";
import React, { useEffect, useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const StyledCarouselItemWrapper = styled(Box)({
  width: "100%",
  height: "740px",
  position: "relative",
  background: "transparent",
  borderRight: "1px solid rgba(196, 178, 178, 0.66)",
  borderLeft: "1px solid rgba(196, 178, 178, 0.66)",
  cursor: "pointer",
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
  "&:hover": {
    background: "linear-gradient(180deg,rgba(0,0,0,.32),rgba(0,0,0,.64))",
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
    height: "auto",
    bottom: "10px",
  },
  "@media (max-width: 576px)": {
    "&:hover .text-wrapper": {
      height: "auto",
      bottom: "10px",
    },
  },
  "@media (max-width: 700px)": {
    "&:hover .text-wrapper": {
      height: "auto",
      bottom: "10px",
    },
  },
  "&:hover p": {
    visibility: "visible",
    wordWrap: "break-word",
    opacity: 1,
  },
  "&:hover a": {
    visibility: "visible",
    opacity: 1,
  },
});

const TextWrapperDiv = styled(Box)({
  width: "100%",
  height: "100px",
  background: "transparent",
  color: "#fff",
  position: "absolute",
  bottom: "50px",
  transition: ".5s ease-in",
  padding: "30px",
  "@media (max-width: 576px)": {
    padding: "10px",
  },
});

const StyledH1Slider = styled("h1")({
  width: "100%",
  fontSize: "32px",
  fontWeight: 900,
  lineHeight: 1.2,
  margin: "10px 0",
  "@media (max-width: 576px)": {
    fontSize: "28px",
  },
});

const StyledParagraphSlider = styled("p")({
  fontSize: "20px",
  lineHeight: "25px",
  visibility: "hidden",
  wordWrap: "break-word",
  opacity: 0,
  "@media (max-width: 576px)": {
    fontSize: "18px",
    lineHeight: "20px",
  },
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
    divRef.current.addEventListener("mouseover" || "click", () => {
      bgChanger(img);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
