import React, { useRef } from "react";
import {
  HeaderBody,
  HiddenButton,
  StyledContactButton,
  StyledHeaderBox,
  StyledHeaderParagraph,
  StyledHeaderText,
  StyledLogo,
  StyledLogoWrapper,
  StyledNavbar,
  StyledNavLink,
  StyledNavWrapper,
} from "src/StyledComponents";
import { AppBar, Box, Container, Grid, styled, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import Message from "./Message";
import NavbarDrawer from "./drawers/NavbarDrawer";
// import NavbarDrawer from "./drawers/NavbarDrawer";

const StyledAppBar = styled(AppBar)(({ props }) => ({
  boxShadow: "none",
  backgroundColor: props ? props.bg : "transparent",
  display: "flex",
  justifyContent: "center",
  height: "80px",
}));

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "&": {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

const Navbar = () => {
  const [color, setColor] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const divRef = useRef(null);
  const location = useRouter();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
    setOpen(!open);
  };

  const listenScrollEvent = () => {
    if (window.scrollY > 80) {
      setColor({ text: "#000", bg: "#fff" });
    } else {
      setColor("");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <>
      <StyledAppBar
        position="fixed"
        props={color}
        sx={{
          boxShadow: color ? "0px 0px 47px -8px rgba(34, 60, 80, 0.2)" : "",
        }}
      >
        <Container>
          <CustomToolbar>
            <StyledLogoWrapper>
              <StyledLogo
                component="img"
                src={color ? "assets/black_logo.jpg" : "assets/softsells.jpg"}
              />
            </StyledLogoWrapper>
            <StyledNavWrapper>
              <StyledNavLink
                href="/services"
                sx={{ color: color ? color.text : "#fff" }}
              >
                Xizmatlar
              </StyledNavLink>
              <StyledNavLink
                href="/services"
                sx={{ color: color ? color.text : "#fff" }}
              >
                Blog
              </StyledNavLink>
              <StyledNavLink
                href="/services"
                sx={{ color: color ? color.text : "#fff" }}
              >
                Portfolio
              </StyledNavLink>
              <StyledNavLink
                href="/services"
                sx={{ color: color ? color.text : "#fff" }}
              >
                Biz haqimizda
              </StyledNavLink>
              <StyledContactButton>Bog&apos;lanish</StyledContactButton>
            </StyledNavWrapper>
            <HiddenButton onClick={toggleDrawer(true)}>
              {!open ? <CloseIcon /> : <MenuIcon />}
            </HiddenButton>
            <NavbarDrawer toggleDrawer={toggleDrawer} state={state} />
          </CustomToolbar>
        </Container>
      </StyledAppBar>
      <StyledHeaderBox>
        <HeaderBody container>
          <Grid
            item={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box component="div" sx={{ textAlign: "center" }}>
              <StyledHeaderText>
                Imkoniyatlaringizni biz bilan kengaytiring
              </StyledHeaderText>
              <StyledHeaderParagraph
                sx={{ width: "80%", marginInline: "auto" }}
              >
                Biznesingizning kelajagini jadallik bilan rivojlanib kelayotgan
                kompaniya bilan birga zabt eting. Bizning xizmatlarimiz orqali
                biznesingizda daromadingiz va mijozlaringiz miqdorini oshiring.
              </StyledHeaderParagraph>
              <StyledContactButton>Biz haqimizda</StyledContactButton>
            </Box>
          </Grid>
        </HeaderBody>
        <Message />
      </StyledHeaderBox>
    </>
  );
};

export default Navbar;
