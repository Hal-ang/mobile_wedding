"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Close from "../../public/close.svg";
import Flex from "./Flex";
import Image from "next/image";
import Portal from "./Portal";
import Spacing from "./Spacing";
import Text from "./Text";

const ImageDetails = ({
  images,
  selectedIndex,
  onClose,
  isOpen
}: {
  isOpen: boolean;
  images: { url: string }[];
  selectedIndex: number;
  onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className="fixed h-screen w-full top-0 left-0 "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
      ></div>
      <div className="fixed top-0 left-0 w-full h-screen z-20">
        <Flex
          className=" w-full py-4pxr px-10pxr"
          direction="row"
          justify="space-between"
          align="center"
        >
          <div className="flex-[1_1_0%]"></div>
          <div className="flex-[1_1_0%] text-white font-bold text-15pxr leading-25pxr">
            <Text className="">
              {currentIndex < 10 ? `0${currentIndex}` : currentIndex}
            </Text>
            <Text style={{ color: "rgba(255, 255, 255, 0.3)" }}>
              {" "}
              / {images.length}
            </Text>
          </div>

          <Close className="cursor-pointer flex-none" onClick={onClose} />
        </Flex>
        <Spacing size={9} />
        <Swiper
          spaceBetween={60}
          initialSlide={selectedIndex}
          slidesPerView={1}
          onSlideChange={(slider) => setCurrentIndex(slider.activeIndex)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((image) => (
            <SwiperSlide key={image.url} className="w-full h-full bg-gray-100">
              <Image alt="image" src={image.url} width={764} height={1146} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Portal>
  );
};

export default ImageDetails;
