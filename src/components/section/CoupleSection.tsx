import CoupleImage from "./CoupleImage";
import React from "react";
import Spacing from "../Spacing";
import Title from "./Title";

const CoupleSection = () => {
  return (
    <section className="w-full px-24pxr">
      <Title>{`THE\nMARRIAGE\nOF`}</Title>
      <Spacing size={20} />
      <CoupleImage
        url="/profile/profile_taehoon.jpg"
        person={{ name: "구태훈", desc: "환수, 성순의 아들" }}
      />
      <Spacing size={6} />
      <CoupleImage
        url="/profile/profile_danhee.jpg"
        person={{ name: "김단희", desc: "형국, 희영의 딸" }}
      />
    </section>
  );
};

export default CoupleSection;
