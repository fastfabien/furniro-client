import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RoomCard } from "../Card";
import { products } from "../../data";

export const RoomSlide = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={24}
      slidesPerView={2.3}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {products.map((product, index) => (
        <SwiperSlide key={product.id}>
          {({ isActive }) => (
            <RoomCard
              id={product.id}
              img={product.src}
              name={product.name}
              description={product.short_description}
              href={product.href}
              isactive={isActive}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
