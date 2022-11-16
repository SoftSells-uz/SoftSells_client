import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import { StyledBox, StyledNavLink } from "src/StyledComponents";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <Container>
      <Grid container sx={{ p: 2, bgcolor: "#000" }}>
        <Grid item md={5} justifyContent="flex-start">
          <StyledBox>
            <h2>SS</h2>
            <h2>SoftSells</h2>
          </StyledBox>
        </Grid>
        <Grid item xs={0} md={7} display="flex" justifyContent="space-between">
          <StyledNavLink href="/services">Xizmatlar</StyledNavLink>
          <StyledNavLink href="/services">Tarmoqlar</StyledNavLink>
          <StyledNavLink href="/services">Ish o'rinlari</StyledNavLink>
          <StyledNavLink href="/services">Biz haqimizda</StyledNavLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Navbar;
