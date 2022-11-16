import Link from "next/link";

const { styled, Box } = require("@mui/material");

export const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "10px",
});

export const StyledNavLink = styled(Link)({
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "24px",
  color: "#fff",
  textDecoration: "none",
  "&:hover": {
    color: "#000",
  },
});
