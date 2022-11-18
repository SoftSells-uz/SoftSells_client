import React from "react";
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
  StyledNavWrapper
} from "src/StyledComponents";
import {Grid} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useRouter} from "next/router";

const Navbar = () => {
  const [color, setColor] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const location = useRouter();

  const toggleSideBar = () => setOpen(!open);

  console.log(location)

  const listenScrollEvent = () => {
    if (window.scrollY > 80) {
      setColor('#fff')
    } else {
      setColor('')
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  }, [])
  return (
    <StyledHeaderBox>
      <StyledNavbar sx={{backgroundColor: color}}>
        <StyledLogoWrapper sx={{flex: 1}}>
          <StyledLogo component='img' src='assets/softsells.jpg' />
        </StyledLogoWrapper>
        <StyledNavWrapper sx={{flex: 1}}>
          <StyledNavLink href='/services'>
            Xizmatlar
          </StyledNavLink>
          <StyledNavLink href='/services'>
            Blog
          </StyledNavLink>
          <StyledNavLink href='/services'>
            Portfolio
          </StyledNavLink>
          <StyledNavLink href='/services'>
            Biz haqimizda
          </StyledNavLink>
          <StyledContactButton>
            Bog'lanish
          </StyledContactButton>
        </StyledNavWrapper>
        <HiddenButton onClick={toggleSideBar}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </HiddenButton>
      </StyledNavbar>
      <HeaderBody container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <StyledHeaderText>
            Imkoniyatlaringizni biz bilan kengaytiring
          </StyledHeaderText>
          <StyledHeaderParagraph>
            O'z biznesingizning keyingi bosqichlarini jadallik bilan rivojlanib kelayotgan
            kompaniya bilan birga zabt eting. Bizning xizmatlarimiz orqali biznesingizda
            darmoadingiz va mijozlaringiz miqdorini oshiring.
          </StyledHeaderParagraph>
          <StyledContactButton>
            Biz haqimizda
          </StyledContactButton>
        </Grid>
      </HeaderBody>
    </StyledHeaderBox>
  );
};

export default Navbar;
