"use client";

import React, {
  startTransition,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

import ProgressBar from "./ProgressBar";
import Spacing from "../Spacing";
import Title from "./Title";
import { getContentHeight } from "@/utils";
import useResize from "@/hooks/useResize";

const IMAGES = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18Pk04HDr6LCFm6-uuSPOzL4sIo5WmUjwvahHRglxRw&s"
  }
];
const GallerySection = () => {
  const { width } = useResize();
  const [selectedImage, setSelectedImage] = useState(
    Math.ceil(IMAGES.length / 2 - 1)
  );

  const viewerSize = useMemo(
    () => ({
      width: width - 24 * 2,
      height: getContentHeight(width - 24 * 2, { width: 342, height: 513 })
    }),
    [width]
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

  return (
    <section className="w-full ">
      <div className="w-full px-24pxr">
        <Title>GALLERY</Title>
        <Spacing size={10} />

        <div
          className="w-full bg-gray-300"
          style={{ height: viewerSize.height }}
        ></div>
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
            key={index}
            onClick={(e) => {
              setSelectedImage(index);
            }}
          >
            <div
              className="w-60pxr h-90pxr bg-gray-100"
              style={
                index === selectedImage
                  ? { boxShadow: `0 0 0 2px #000 inset` }
                  : undefined
              }
            >
              {index}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
