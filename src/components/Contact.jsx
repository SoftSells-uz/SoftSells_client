import React from "react";
import { Box, Container, Grid, styled, TextField } from "@mui/material";
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

const MapCard = styled(Box)({
  width: "100%",
  height: "100%",
  "@media (max-width: 900px)": {
    height: "350px",
  },
});

const Contact = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={5}>
          <MapCard>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2997.6489226984477!2d69.24827311542289!3d41.294744679272775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzQxLjEiTiA2OcKwMTUnMDEuNyJF!5e0!3m2!1sru!2s!4v1668955998496!5m2!1sru!2s"
              style={{ width: "100%", height: "100%", border: 0 }}
              allowfullscreen=""
              title="address"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapCard>
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
