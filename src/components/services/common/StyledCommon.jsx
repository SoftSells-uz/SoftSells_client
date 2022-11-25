import { styled } from "@mui/material";

export const StyledDescriptionService = styled("p")({
  color: "#323232",
  fontSize: "16px",
  fontWeight: 300,
  lineHeight: 1.6,
  maxWidth: "800px",
  whiteSpace: "pre-wrap",

  "@media (max-width: 995px)": {
    marginBottom: "20px",
  },
  "@media (min-width: 995px)": {
    margin: "20px 0",
  },
});
