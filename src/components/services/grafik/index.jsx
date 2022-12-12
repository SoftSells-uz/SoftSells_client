import { Box, Grid, styled } from "@mui/material";
import React from "react";
import CardWithImg from "../common/cardImg";
import CardWithoutImg from "../common/card";
import useWindowSize from "hooks/useWindowSize";
import { StyledDescriptionService } from "../common/StyledCommon";

const data = {
  title: "Grafik dizayn",
  description:
    "Grafik dizayn - bu professionallar xabarlarni yetkazish uchun vizual kontent yaratadigan hunarmandchilik.",
  cases: [
    {
      title: "Mijoz bilan aloqa",
      description:
        "Mijoz bilan ortiqcha ovoragarchiliklarsiz tushunarli va sodda aloqalar uchun Grafik Dizayn ayni muddao. Barcha kerakli detallardan ustalik bilan foydalanish orqali mijozga sodda holda tushintirish imkoniyati.",
      link: "/graphic/connection",
    },
    {
      title: "Vizual aloqa",
      description:
        "Vizual qabul qilingan ma'lumot ko'proq esda qoladi. Shu bilan bir o'rinda ham rasmli ham matnli ma'lumotni bittada yetkazish va mijozning ishonchini qozonish imkoniyatini o'z brendingizda sinab ko'ring. .",
      link: "/graphic/business",
    },
    {
      title: "Zamonaviy san'at",
      img: "assets/grafik_dizayn.jpg",
      description:
        "Grafik dizayn aloqa dizayni sifatida ham tanilgan va Grafik dizaynerlar asosan vizual kommunikatorlardir. Ular vizual kontseptsiyalarni, odatda, grafik dizayn dasturlari orqali hayotga olib keladi va matn, grafik va tasvirlar orqali iste'molchilarni xabardor qiladi yoki jalb qiladi.",
      link: "/graphic/blog",
    },
    {
      title: "Reallikdan real chizmalarga",
      description:
        "Kompaniya brendini ommaga e'lon qilish va ranglari uyg'unligidan mohirona foydalanish orqali real biznesni raqamli rasmlarga almashtirishdan tortib kichik detallarigacha e'tibor.",
      link: "/web/portfolio",
    },
    {
      title: "Detallargacha e'tibor",
      description:
        "Har bir buyurtmaning vizual jozibali va yaxshi tuzilgan dizaynlarni yaratish uchun chiziqlar, rang, shakl, bo'shliq, tekstura, tipografiya, masshtab, ustunlik va urg'u va uyg'unliklarigacha e'tibor qaraitladi.",
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
