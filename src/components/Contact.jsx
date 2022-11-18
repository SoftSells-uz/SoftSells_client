import React from "react";
import {Container, Grid} from "@mui/material";
import {StyledH1Contact, StyledPhoneContact, StyledTitleContact} from "../StyledComponents";

const Contact = () => {

  return(
    <Container>
        <Grid container>
            <Grid item xs={12} sm={12} md={4}>
                <StyledH1Contact>Aloqa</StyledH1Contact>
                <StyledTitleContact>Toshkent, O'zbekiston</StyledTitleContact>
                <StyledPhoneContact>+998(93) 488-03-52</StyledPhoneContact>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>

            </Grid>
        </Grid>
    </Container>
  )
}

export default Contact;