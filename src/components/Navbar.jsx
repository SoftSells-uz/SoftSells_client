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
import { Box, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import Message from "./Message";

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
    // window.addEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <StyledHeaderBox>
      <StyledNavbar>
        <StyledLogoWrapper sx={{ flex: 1 }}>
          <StyledLogo component="img" src="assets/softsells.jpg" />
        </StyledLogoWrapper>
        <StyledNavWrapper sx={{ flex: 1 }}>
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
      </StyledNavbar>
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
            <StyledHeaderParagraph sx={{ width: "80%", marginInline: "auto" }}>
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
  );
};

export default Navbar;
