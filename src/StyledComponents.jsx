import Link from "next/link";
import {Box, Button, Grid, styled} from "@mui/material";

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const transition = "0.4s ease-in";

export const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
});

export const StyledNavLink = styled(Link)({
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "24px",
  color: "#fff",
  textDecoration: "none",
  transition,
  textTransform: "uppercase",
  "&:hover": {
    color: "#ddd",
  },
});

export const StyledHeaderBox = styled(Box)({
  height: "100vh",
  width: "100%",
  backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('assets/bg_img.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: "center",
  position: "relative",
  '@media (max-width: 576px)': {
    height: "80vh",
  }
});

export const StyledNavbar = styled(Box)({
  position: "sticky",
  top: "0",
  left: "0",
  height: "80px",
  width: "100%",
  paddingInline: "10%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  '@media (max-width: 576px)': {
    paddingInline: "5%",
  }
});

export const StyledLogoWrapper = styled(Box)({
  height: "40px",
  width: "40px",
  center,
});

export const StyledLogo = styled(Box)({
  width: "40px",
  height: "40px",
  display: "block",
  borderRadius: "50%",
  cursor: "pointer",
});

// styled navigations

export const StyledNavWrapper = styled(Box)({
  '@media (max-width: 768px)': {
    display: "none"
  },
  '@media (min-width: 768px)': {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 4,
  },
  '@media (min-width: 800px)': {
    flex: 3,
  },
  '@media (min-width: 900px)': {
    flex: 2,
  },
  '@media (min-width: 1200px)': {
    flex: 1,
  },
});

export const StyledContactButton = styled(Button)({
  padding: "8px 20px",
  borderRadius: "20px",
  fontSize: "14px",
  fontWeight: 500,
  backgroundColor: "#06248c",
  color: "#fff",
  transition,
  "&:hover": {
    color: "#ddd",
    backgroundColor: "#06aa8c",
  }
});

export const HiddenButton = styled(Button)({
  '@media (max-width: 768px)': {
    display: "block"
  },
  '@media (min-width: 768px)': {
    display: "none",
  },
  transition: "1s ease-in",
  minWidth: "30px",
  maxWidth: "30px",
  minHeight: "30px",
  maxHeight: "30px",
  padding: 0,
  paddingTop: "3px",
  center,
})

export const HeaderBody = styled(Grid)({
  position: "absolute",
  top: "80px",
  height: "calc(100vh - 80px)",
  paddingInline: "10%",
  paddingTop: '10%',
});

export const StyledHeaderText = styled('h1')({
  fontWeight: 700,
  color: '#fff',
  fontSize: "56px",
  '@media (max-width: 576px)': {
    fontSize: "26px",
  },
  '@media (min-width: 576px)': {
    fontSize: "36px",
  },
  '@media (min-width: 768px)': {
    fontSize: "46px",
  },
  '@media (min-width: 992px)': {
    fontSize: "56px",
  },
});

export const StyledHeaderParagraph = styled('p')({
  fontSize: "18px",
  color: "#ddd",
  marginTop: '30px',
  marginBottom: '30px',
});