import { Instagram, LinkedIn, Telegram } from "@mui/icons-material";
import { Box, Container, IconButton } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p>© SoftSells 2022</p>
      <Box component="div">
        <IconButton sx={{ color: "red" }}>
          <Instagram sx={{ width: "25px", height: "25px" }} />
        </IconButton>
        <IconButton sx={{ color: "blue" }}>
          <Telegram sx={{ width: "25px", height: "25px" }} />
        </IconButton>
        <IconButton sx={{ color: "blue" }}>
          <LinkedIn sx={{ width: "25px", height: "25px" }} />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Footer;
