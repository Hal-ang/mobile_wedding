"use client";

import "swiper/css";

import React, {
  startTransition,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

import Image from "next/image";
import ImageDetails from "../ImageDetails";
import ProgressBar from "./ProgressBar";
import Spacing from "../Spacing";
import Title from "./Title";
import { getContentHeight } from "@/utils";
import useResize from "@/hooks/useResize";
import { useRouter } from "next/navigation";

const getGalleryImageLoader = (number: number) => {
  return `/gallery/gallery_${number < 10 ? `0${number}` : number}.jpg`;
};
const IMAGES = Array.from({ length: 18 }, (_, i) => ({
  url: getGalleryImageLoader(i + 1)
}));
const GallerySection = () => {
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

  const [progressPercent, setProgressPercent] = useState(0);

  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <section className="w-full ">
      <div className="w-full px-24pxr">
        <Title>GALLERY</Title>
        <Spacing size={10} />

        <Image
          className="w-full"
          alt="selected-image"
          loading="eager"
          src={IMAGES[selectedImage].url}
          width={764}
          height={1146}
          onClick={() => {
            setVisibleModal(true);
          }}
        />
        <Spacing size={16} />
        <ProgressBar width={`${progressPercent}%`} />
      </div>
      <Spacing size={16} />
      <div
        ref={sliderRef}
        onScroll={(e) => {
          e.stopPropagation();

          const target = e.currentTarget;

          const scrolledWidth = target.scrollLeft + target.offsetWidth;

          startTransition(() => {
            setProgressPercent((scrolledWidth / target.scrollWidth) * 100);
          });
        }}
        onDrag={(e) => {
          e.stopPropagation();

          const target = e.currentTarget;

          const scrolledWidth = target.scrollLeft + target.offsetWidth;

          startTransition(() => {
            setProgressPercent((scrolledWidth / target.scrollWidth) * 100);
          });
        }}
        className="flex flex-row flex-nowrap gap-4pxr overflow-y-scroll px-24pxr"
      >
        {IMAGES.map((image, index) => (
          <div
            onClick={(e) => {
              setSelectedImage(index);
            }}
            className={`relative cursor-pointer w-60pxr h-90pxr flex-none`}
          >
            <Image
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
      {visibleModal && (
        <ImageDetails
          onClose={() => {
            // router.back();
            setVisibleModal(false);
          }}
          images={IMAGES}
          selectedIndex={selectedImage}
        />
      )}
    </section>
  );
};

export default GallerySection;
