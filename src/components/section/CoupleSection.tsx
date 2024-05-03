"use client";

import React, { useMemo } from "react";

import CoupleImage from "./CoupleImage";
import Spacing from "../Spacing";
import Title from "./Title";
import { getContentHeight } from "@/utils";
import useResize from "@/hooks/useResize";

const CoupleSection = () => {
  const { width } = useResize();

  const height = useMemo(
    () => getContentHeight(width - 24 * 2, { width: 342, height: 180 }),
    [width]
  );

  return (
    <section className="w-full px-24pxr">
      <Title>{`THE\nMARRIAGE\nOF`}</Title>
      <Spacing size={20} />
      <CoupleImage
        height={height}
        url="https://www.brides.com/thmb/KEAhyNEigImztBgGV23DKdDta88=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wedding-planning-ultimate-guide-recirc-Janet-Lin-Photography-f3d7c8f9fe854f69ada0fc53e6d100bd.jpg"
        person={{ name: "구태훈", desc: "환수, 성순의 아들" }}
      />
      <Spacing size={6} />
      <CoupleImage
        height={height}
        url="https://www.brides.com/thmb/KEAhyNEigImztBgGV23DKdDta88=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wedding-planning-ultimate-guide-recirc-Janet-Lin-Photography-f3d7c8f9fe854f69ada0fc53e6d100bd.jpg"
        person={{ name: "김단희", desc: "형국, 희영의 딸" }}
      />
    </section>
  );
};

export default CoupleSection;
