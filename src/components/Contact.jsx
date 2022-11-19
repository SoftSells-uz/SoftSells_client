import React from "react";
import { Container, Grid } from "@mui/material";
import {
  StyledH1Contact,
  StyledPhoneContact,
  StyledTitleContact,
  StyledCustomContainer,
} from "../StyledComponents";

const Contact = () => {
  return (
    <StyledCustomContainer>
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <StyledH1Contact>Aloqa</StyledH1Contact>
          <StyledTitleContact>Toshkent, O&apos;zbekiston</StyledTitleContact>
          <StyledPhoneContact>+998(93) 488-03-52</StyledPhoneContact>
        </Grid>
        <Grid item xs={12} sm={12} md={8}></Grid>
      </Grid>
    </StyledCustomContainer>
  );
};

export default Contact;
