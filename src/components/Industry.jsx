import { Box, styled } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const rowData = [
  {
    img: "assets/online_market.png",
    title: "Online bozor",
    description:
      "Raqobatbardosh bo'lgan online do'konlarni tashkil qilish. Mavjudlarini takomillashtirish.",
    link: "/industry/shops",
  },
  {
    img: "assets/business.jpg",
    title: "Biznes loyihalar",
    description:
      "Biznesdagi raqamli mahsulotlar sifatini oshirish. Muammolarga sodda yechimlar topish.",
    link: "/industry/business",
  },
  {
    img: "assets/economy.jpeg",
    title: "Iqtisodiyot",
    description:
      "Iqtisodiy sohadagi raqamli muammolarga raqamli yechimlar orqali xizmat ko'rsatish.",
    link: "/industry/economy",
  },
  {
    img: "assets/production.jpg",
    title: "Ishlab chiqarish",
    description:
      "Istalgan turdagi ishlab chiqarish sohasi uchun kerakli bo'lgan raqamli texnologiyalar orqali xizmat.",
    link: "/industry/production",
  },
  {
    img: "assets/healthcare.jpeg",
    title: "Sog'liqni saqlash",
    description:
      "Sog'liqni saqlash sohasi uchun eng zamonaviy texnologiyalar yordamida eng zamonaviy raqamli mahsulotlar.",
    link: "/industry/healthcare",
  },
];

const MainWrapperWithBg = styled(Box)(({ bgImage }) => ({
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "740px",
}));

const Industry = () => {
  const [currentImg, setCurrentImg] = React.useState(
    "assets/online_market.png"
  );

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <MainWrapperWithBg bgImage={currentImg}>
      <Slider {...settings}></Slider>
    </MainWrapperWithBg>
  );
};

export default Industry;
