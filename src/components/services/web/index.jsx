import { Box, Grid, styled } from "@mui/material";
import React from "react";
import CardWithImg from "../common/cardImg";
import CardWithoutImg from "../common/card";
import useWindowSize from "src/hooks/useWindowSize";

const data = {
  title: "Web dasturlash",
  description:
    "Mijozlaringiz va hamkorlaringiz bilan online aloqalarni web ilovalar yordamida yanada takomillashtirish imkoniyatini qo'ldan boy bermang! Biz sizga bir nechta turdagi web xizmatlarimizni taklif qilamiz. Bizdan quyidagi turdagi web ilovalarni buyurtma qilishingiz mumkin.",
  cases: [
    {
      title: "Ecommerse saytlar",
      description:
        "Ecommerse - sotuv saytlari hisoblanadi. Siz bu turdagi saytlarda onlayn tarzda savdo ishlaringizni olib borishingiz mumkin bo'ladi. Sizda do'kon yokida supermarket bormi va siz mijozlaringiz sonini yanada oshirmoqchimisiz? Unda bizga murojaat qiling!",
      link: "/web/ecommerse",
    },
    {
      title: "Biznes saytlar",
      description:
        "Sizda insonlar uchun manfaatli bo'lgan biznesingiz bor va siz uni nazorat qilishda qiynalyapsizmi? Unda siz ayni manzildasiz. Biznesingizni raqamlashtirish orqali uni web dastur shaklida sizga yaratib beramiz.",
      link: "/web/business",
    },
    {
      title: "Blog saytlar",
      img: "assets/blog_site.jpg",
      description:
        "Shaxsiy hayotingizdagi boshqalar uchun manfaat keltiradigan voqealarni yanada yorqinroq tarzda yoritib bormoqchimisiz? Unda biz sizga Blog turidagi saytlarni tavsiya qilamiz.",
      link: "/web/blog",
    },
    {
      title: "Portfolio saytlar",
      description:
        "Siz san'atning biror sohasida iqtidorlimisiz? Qilgan ishlaringizdan namunalarni o'zingiz uchun tayyorlangan web saytda saqlashni istaysizmi? Unda to'g'ri manzildasiz.",
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

const StyledDescriptionService = styled("p")({
  color: "#323232",
  fontSize: "16px",
  fontWeight: 300,
  lineHeight: 1.6,
  maxWidth: "800px",
  whiteSpace: "pre-wrap",
  marginBottom: "10px",
});

const Index = (prop) => {
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
            <Grid key={item.link} item xs={12} sm={12} md={6} lg={6}>
              <CardWithoutImg {...item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Index;
