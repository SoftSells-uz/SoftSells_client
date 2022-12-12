import { Box, Grid, styled } from "@mui/material";
import React from "react";
import CardWithImg from "../common/cardImg";
import CardWithoutImg from "../common/card";
import useWindowSize from "hooks/useWindowSize";
import { StyledDescriptionService } from "../common/StyledCommon";

const data = {
  title: "Social Media Marketing",
  description:
    "SMM(Social Media Marketing) - ijtimoiy tarmoqlarda marketing - bu mahsulotlar, tovarlar va xizmatlarni ijtimoiy tarmoqlarda tanitish, uni yurgizish. Ijtimoiy tarmoqlarda marketing - juda effektiv qurol bo'lib, uning yordamida, ijtimoiy tarmoqlardan, bloglardan, kundaliklardan va forumlardan saytga foydalanuvchilarni jalb etish mumkin.",
  cases: [
    {
      title: "Asosiy omil",
      description:
        "Bugungi kunda ijtimoiy tarmoqlarda o'z sahifangiz bolishi omma orasida brend tanilishi uchun asosiy omillardan biri!",
      link: "/web/ecommerse",
    },
    {
      title: "Brendni tanitish",
      description:
        "Faol auditoriyaga ega ijtimoiy tarmoqlardan doimiy mijozlar oqimini olib kelish va ularni mavjud brend bilan tanishtirish!.",
      link: "/web/business",
    },
    {
      title: "Savdodagi barqarorlik",
      img: "assets/smm.png",
      description:
        "O'z brendini mediada doimiy faol holda ushlab tura oladigan kompaniyalar doimiy daromadga ega bo'lishadi. Mijozlar sonining ortishi kompaniya daromadi va kelajagiga katta ta'sir o'tkazadi.",
      link: "/web/blog",
    },
    {
      title: "Mijozlarning sodiqligi",
      description:
        "Ijtimoiy tarmoqlarda kompaniyangiz haqida barcha malumotlar yoritilishi qulay aloqa, xizmatlaringiz natijalari, sifatli kontent orqali mijozlar sodiqligi.",
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
