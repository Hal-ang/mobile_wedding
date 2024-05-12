"use client";

import "swiper/css";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import FadeIn from "../FadeIn";
import Image from "next/image";
import ImageDetails from "../ImageDetails";
import ProgressBar from "./ProgressBar";
import SlideUp from "../SlideUp";
import Spacing from "../Spacing";
import Title from "./Title";
import useIsInView from "@/hooks/useIsInView";

const getGalleryImageLoader = (number: number) => {
  return `/gallery/gallery_${number < 10 ? `0${number}` : number}.jpg`;
};
const IMAGES = Array.from({ length: 18 }, (_, i) => ({
  url: getGalleryImageLoader(i + 1)
}));
const GallerySection = ({
  enabledTransition = false
}: {
  enabledTransition?: boolean;
}) => {
  const [selectedImage, setSelectedImage] = useState(
    Math.ceil(IMAGES.length / 2 - 1)
  );

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const target = slider.children[selectedImage] as HTMLElement;
      const targetWidth = target.offsetWidth;
      const targetLeft = target.offsetLeft;
      const targetCenter = targetLeft + targetWidth / 2;
      const sliderWidth = slider.offsetWidth;
      const sliderCenter = sliderWidth / 2;

      slider.scrollTo({
        left: targetCenter - sliderCenter,
        behavior: "smooth"
      });
    }
  }, [selectedImage]);

  const [visibleModal, setVisibleModal] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const [transitionIds, setTransitionIds] = useState<number[]>([]);

  const handleTransition = useCallback(() => {
    setTransitionIds((prev) => prev.concat(prev.length));
  }, []);

  const { isInView } = useIsInView(ref, handleTransition);

  const progressPercent = useMemo(
    () => ((selectedImage + 1) / IMAGES.length) * 100,
    [selectedImage]
  );

  const [swiper, setSwiper] = useState<SwiperClass>();

  return (
    <>
      <section
        ref={ref}
        id="gallery-section"
        className="w-full"
        onClick={(e) => {
          const $address = document.getElementById("address-section");
          if ($address) {
            $address.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <Spacing size={50} />
        <SlideUp
          className="w-full px-24pxr"
          disabled={!enabledTransition}
          show={transitionIds.includes(0)}
        >
          <Title>GALLERY</Title>
        </SlideUp>

        <Spacing size={10} />

        <FadeIn show={isInView}>
          <Swiper
            spaceBetween={24}
            initialSlide={selectedImage}
            slidesPerView={1}
            onSlideChange={(slider) => setSelectedImage(slider.activeIndex)}
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            {IMAGES.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  className={`w-full cursor-pointer px-24pxr`}
                  alt="selected-image"
                  src={image.url}
                  width={764}
                  height={1146}
                  onClick={(e) => {
                    e.stopPropagation();
                    setVisibleModal(true);
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Spacing size={16} />
          <div className="w-full px-24pxr">
            <ProgressBar width={`${progressPercent}%`} />
          </div>

          <Spacing size={16} />
          <div
            ref={sliderRef}
            className="flex flex-row flex-nowrap gap-4pxr overflow-y-scroll px-24pxr"
          >
            {IMAGES.map((image, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  swiper?.slideTo(index);
                  setSelectedImage(index);
                }}
                className={`relative cursor-pointer w-60pxr h-90pxr flex-none`}
              >
                <Image
                  quality={100}
                  loading="lazy"
                  key={index}
                  alt="preview"
                  src={image.url}
                  width={120}
                  height={180}
                />
                <div
                  className="w-full h-full absolute left-0 top-0"
                  style={
                    index === selectedImage
                      ? { boxShadow: `0 0 0 2px #000 inset` }
                      : undefined
                  }
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
      <ImageDetails
        isOpen={visibleModal}
        onClose={() => {
          // router.back();
          setVisibleModal(false);
        }}
        images={IMAGES}
        selectedIndex={selectedImage}
      />
    </>
  );
};

export default GallerySection;
