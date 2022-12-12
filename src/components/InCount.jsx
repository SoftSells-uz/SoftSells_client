import { Box, Container, Grid, styled } from "@mui/material";
import React from "react";
import useWindowSize from "hooks/useWindowSize";
import Counter from "./Counter";

const StyledHeaderCounters = styled("h2")({
  color: "#e0e0e0",
  fontWeight: 900,
  verticalAlign: "center",
  "@media (max-width: 576px)": {
    fontSize: "46px",
    lineHeight: "40px",
    marginBottom: "20px",
  },
  "@media (min-width: 768px)": {
    fontSize: "56px",
    lineHeight: "50px",
  },
  "@media (min-width: 992px)": {
    fontSize: "72px",
    lineHeight: "66px",
  },
});

const data = [
  {
    number: "2022",
    txt: "asos solindi",
    id: 1,
  },
  {
    number: "10",
    txt: "mutaxassis",
    id: 2,
  },
  {
    number: "6",
    txt: "muvaffaqiyatli loyihalar",
    id: 3,
  },
  {
    number: "3",
    txt: "doimiy mijozlar",
    id: 4,
  },
  {
    number: "5",
    txt: "xizmat turlari",
    id: 5,
  },
  {
    number: "0",
    txt: "lorem ipsum",
    id: 6,
  },
];

const InCount = () => {
  const [isLarge, setIsLarge] = React.useState(false);
  const widthWindow = useWindowSize();

  const getWindowWidth = () => {
    if (widthWindow > 768) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  };

  React.useEffect(() => {
    getWindowWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widthWindow]);
  return (
    <Box>
      <Container sx={{ my: 4 }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <StyledHeaderCounters>
              SoftSells {isLarge ? <br /> : ""} raqamlarda
            </StyledHeaderCounters>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container spacing={3}>
              {data.map((item) => (
                <Grid key={item.id} item xs={6} sm={4} md={4}>
                  <Counter {...item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InCount;
