import { Box, Grid, styled } from "@mui/material";
import React from "react";
import CardWithImg from "../common/cardImg";
import CardWithoutImg from "../common/card";
import useWindowSize from "hooks/useWindowSize";
import { StyledDescriptionService } from "../common/StyledCommon";

const data = {
  title: "Mobil dasturlash",
  description:
    "Mijozlaringiz va hamkorlaringiz bilan aloqalarni mobil ilovalar yordamida yanada takomillashtirish imkoniyatini qo'ldan boy bermang! Endilikda sizning xizmatlaringizdan istalgan mijoz qo'l telefoni orqali foydalana oladi. Buyurtmalar yana ham soddalashadi va kompaniyangiz uchun passiv daromad manbasi yaratiladi.",
  cases: [
    {
      title: "Mobil do'konlar",
      description:
        "Agarda sizda do'konlar bo'lsa va siz uni yanada takomillashtirishni istasangiz, demak sizga aynan mobil ilova kerak bo'ladi.",
      link: "/mobile/ecommerse",
    },
    {
      title: "Messenjer dasturlar",
      description:
        "Telegram va whatsapp kabi dastur sizda ham bo'lishini istaysizmi? Unda o'zingiz uchun shunday messenjer dasturlarga buyurtma bering!",
      link: "/web/business",
    },
    {
      title: "IOS hamda Android uchun",
      img: "assets/ios_andro.jpg",
      description:
        "Mijozlar talabidan kelib chiqib biz sizga IOS hamda Android tizimida ishlovchi biznes, blog kabi dasturlarni yasab beramiz!",
      link: "/web/blog",
    },
    {
      title: "Siz istagan mobil ilovalar",
      description:
        "O'ylab qo'ygan biznes rejangizni mobil olamga ko'chirmoqchimisiz? Unda biz bilan birga o'z ilovangizni noldan boshlab quring.",
      link: "/web/portfolio",
    },
    {
      title: "Siz istagan tur",
      description:
        "O'zingizda saytingiz uchun ajoyib g'oyalar bormi? Unda bu g'oyalarni biz bilan real hayotga ko'chiring. Biz bilan o'z shaxsiy web saytingizga ega bo'ling!",
      link: "/web/other",
    },
  ],
};

const Index = () => {
  const [isLarge, setIsLarge] = React.useState(0);
  const width = useWindowSize();
  function getWindow() {
    if (width < 992) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  }

  React.useEffect(() => {
    getWindow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);
  return (
    <Box component="div">
      {!isLarge ? <h1>{data.title}</h1> : undefined}
      <StyledDescriptionService>{data.description}</StyledDescriptionService>
      <Grid container spacing={2}>
        {data.cases.map((item) => {
          if (item.img) {
            return (
              <Grid item xs={12} key={item.link} sm={12} md={12} lg={12}>
                <CardWithImg {...item} />
              </Grid>
            );
          } else {
            undefined;
          }
          return (
            <Grid key={item.link} item xs={12} sm={6} md={6} lg={6}>
              <CardWithoutImg {...item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Index;
