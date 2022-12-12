import { Button, styled, Box, TextField } from "@mui/material";
import React from "react";
import MessageIcon from "@mui/icons-material/Message";
import { CancelOutlined } from "@mui/icons-material";
import Image from "next/image";

const ButtonCustom = styled(Button)(({ customSize }) => ({
  minWidth: customSize,
  minHeight: customSize,
  maxHeight: customSize,
  maxWidth: customSize,
  padding: 0,
}));

const StyledBox = styled(Box)({
  position: "fixed",
  width: "50px",
  height: "50px",
  bottom: "30px",
  right: "30px",
  zIndex: "9999 !important",
});

const StyledMessageBox = styled(Box)({
  width: "300px",
  background: "#fff",
  position: "absolute",
  right: "55px",
  bottom: "0",
  transition: "1.5s ease-in",
  zIndex: "99999 !important",
  boxShadow: "0px 0px 14px 2px rgba(34, 60, 80, 0.2)",
  "@media (max-width: 576px)": {
    width: "100vw",
    position: "fixed",
    left: 0,
    bottom: 0,
    boxShadow: "none",
  },
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  borderTop: "8px solid #000",
  padding: "10px",
});

const StyledTopBarMessage = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

const StyledFlexColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
});

const StyledOperatorName = styled("p")(({ fontWeight }) => ({
  fontSize: "16px",
  fontWeight,
}));

const StyledFlexBetween = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const CustomParagraph = styled("p")({
  marginTop: "10px",
  fontSize: "14px",
  backgroundColor: "#fff",
  borderRadius: "0 5px 5px 5px",
  padding: "4px",
});

const StyledImage = styled(Box)({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  objectFit: "cover",
});

const Message = () => {
  const [isClicked, setIsCLicked] = React.useState(false);

  const toggleMessage = () => setIsCLicked(!isClicked);

  return (
    <StyledBox component="div">
      <ButtonCustom
        customSize="50px"
        variant="contained"
        onClick={toggleMessage}
        sx={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: "9999 !important",
        }}
      >
        {isClicked ? (
          <CancelOutlined sx={{ width: "30px", height: "30px" }} />
        ) : (
          <MessageIcon sx={{ width: "30px", height: "30px" }} />
        )}
      </ButtonCustom>
      <StyledMessageBox sx={{ display: `${isClicked ? "block" : "none"}` }}>
        <StyledTopBarMessage>
          <StyledImage
            component="img"
            src="https://cdn.vectorstock.com/i/1000x1000/03/74/operator-icon-vector-6200374.webp"
            alt="operator_png"
          />
          <StyledFlexBetween>
            <StyledFlexColumn>
              <StyledOperatorName fontWeight="600">Operator</StyledOperatorName>
              <StyledOperatorName fontWeight="500"></StyledOperatorName>
            </StyledFlexColumn>

            <ButtonCustom
              sx={{ position: "absolute", right: "10px" }}
              customSize="30px"
              color="error"
              onClick={toggleMessage}
            >
              <CancelOutlined sx={{ width: "25px", height: "25px" }} />
            </ButtonCustom>
          </StyledFlexBetween>
        </StyledTopBarMessage>
        <CustomParagraph>
          Assalomu alaykum hurmatli mijoz! Savollaringizni shu yerda qoldiring.
        </CustomParagraph>
        <TextField
          label="Savollaringizni qoldiring"
          size="small"
          fullWidth
          sx={{ my: 2, backgroundColor: "#fff", borderRadius: "4px" }}
        />
        <Button variant="contained" color="success" sx={{ color: "#fff" }}>
          Yuborish
        </Button>
      </StyledMessageBox>
    </StyledBox>
  );
};

export default Message;
