import { Box, Button, styled } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Carouseltem from "./items/Carouseltem";

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
  width: "100%",
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "740px",
  transition: ".5s ease-in-out",
}));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ right: "10px", zIndex: 1000, fontSize: "30px", display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: "10px", zIndex: 1000, display: "none" }}
      onClick={onClick}
    />
  );
}

let settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
      },
    },
  ],
};

const Industry = () => {
  const [currentImg, setCurrentImg] = React.useState(
    "assets/online_market.png"
  );

  const changeBg = (img) => {
    setCurrentImg(img);
  };

  return (
    <MainWrapperWithBg bgImage={currentImg}>
      <Slider {...settings}>
        {rowData?.map((data) => {
          return <Carouseltem bgChanger={changeBg} key={data.link} {...data} />;
        })}
      </Slider>
    </MainWrapperWithBg>
  );
};

export default Industry;
