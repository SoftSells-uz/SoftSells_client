import React from "react";
import { Container, Grid, styled, TextField } from "@mui/material";
import CustomTextField from "./CustomTextField";
import {
  StyledH1Contact,
  StyledPhoneContact,
  StyledTitleContact,
  StyledCustomContainer,
  StyledContactButton,
} from "../StyledComponents";

const StyledInfoText = styled("p")({
  color: "#6e6d71",
  fontSize: "16px",
  fontWeight: 300,
  lineHeight: 1.6,
  whiteSpace: "pre-wrap",
});

const Contact = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={5}>
          <StyledH1Contact>Aloqa</StyledH1Contact>
          <StyledTitleContact>Toshkent, O&apos;zbekiston</StyledTitleContact>
          <StyledPhoneContact>+998(97) 429-20-02</StyledPhoneContact>
          <StyledPhoneContact>+998(93) 247-70-77</StyledPhoneContact>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <TextField fullWidth label="To'liq ism" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField fullWidth label="E-mail" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField fullWidth label="Telefon raqam" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField fullWidth label="Kompaniya nomi" />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                fullWidth
                label="Kompaniya nomi"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <StyledInfoText>
                Yuqoridagi ma&apos;lumotlarni tasdiqlashdan oldin bizning
                qoidalar bilan tanishib chiqqaningizga ishonch hosil
                qilishingizni iltimos qilamiz.
              </StyledInfoText>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              sx={{ mb: 2 }}
              justifyContent="flex-end"
            >
              <StyledContactButton sx={{ borderRadius: "4px" }}>
                Yuborish
              </StyledContactButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
