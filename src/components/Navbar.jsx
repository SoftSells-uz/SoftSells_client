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
import { AppBar, Box, Grid, styled, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import Message from "./Message";

const StyledAppBar = styled(AppBar)(({ props }) => ({
  boxShadow: "none",
  paddingInline: "10%",
  backgroundColor: props ? props.bg : "transparent",
  display: "flex",
  justifyContent: "center",
  height: "80px",
  "@media (max-width: 576px)": {
    paddingInline: "5%",
  },
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

  const toggleSideBar = () => setOpen(!open);

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
      <StyledHeaderBox>
        <StyledAppBar position="sticky" props={color}>
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
            <HiddenButton onClick={toggleSideBar}>
              {open ? <CloseIcon /> : <MenuIcon />}
            </HiddenButton>
          </CustomToolbar>
        </StyledAppBar>
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
                O&apos;z biznesingizning keyingi bosqichlarini jadallik bilan
                rivojlanib kelayotgan kompaniya bilan birga zabt eting. Bizning
                xizmatlarimiz orqali biznesingizda darmoadingiz va mijozlaringiz
                miqdorini oshiring.
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
