// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import haywex from "@/public/clients/lg-haywex.webp";
import hc from "@/public/clients/lg-hc.webp";
import he from "@/public/clients/lg-he.webp";
import hw from "@/public/clients/lg-hw.webp";
import hwa from "@/public/clients/lg-hwa.webp";
import hwgem from "@/public/clients/lg-hwgem.webp";
import lf from "@/public/clients/lg-lf.webp";
import nytc from "@/public/clients/lg-nytc.webp";
import yv from "@/public/clients/lg-yv.webp";

// Import Swiper styles
import "swiper/css";

const swiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      breakpoints={{
        640: {
          slidesPerView: 1,
          //   spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          //   spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          //   spaceBetween: 50,
        },
      }}
      slidesPerView={2}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <Image
          src={haywex}
          alt="Haywex"
          quality="100"
          className="h-full w-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={hc} alt="hc" quality="100" className="h-full w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={he} alt="he" quality="100" className="h-full w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={hw} alt="hw" quality="100" className="h-full w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={hwa} alt="hwa" quality="100" className="h-full w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={hwgem}
          alt="hwgem"
          quality="100"
          className="h-full w-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={lf} alt="lf" quality="100" className="h-full w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={nytc} alt="nytc" quality="100" className="h-full w-auto" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={yv} alt="yv" quality="100" className="h-full w-auto" />
      </SwiperSlide>
    </Swiper>
  );
};
export default swiper;
