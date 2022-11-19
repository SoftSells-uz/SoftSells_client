import { Box, TextField } from "@mui/material";

const spacePropList = [
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "paddingX",
  "paddingY",
];

const CustomTextField = ({ label, InputProps, ...props }) => {
  const boxProps = {};
  const textFieldProps = {};

  for (const key in props) {
    if (spacePropList.includes(key)) {
      boxProps[key] = props[key];
    } else textFieldProps[key] = props[key];
  }

  return (
    <Box {...boxProps}>
      <TextField
        InputProps={{
          ...InputProps,
          style: { ...InputProps?.style, height: 44 },
        }}
        {...textFieldProps}
      />
    </Box>
  );
};

export default CustomTextField;
