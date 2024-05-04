import React, { Fragment } from "react";

import Glare from "../../public/glare/glare_white.svg";
import Text from "./Text";

const BANNERS = Array.from({ length: 2 }).map(
  () => "2024년 6월 8일 토요일 오후 4시"
);
const RollingBanner = () => {
  return (
    <div className="wrapper overflow-hidden">
      <div className="slide-container text-white bg-black py-10pxr text-14pxr leading-25pxr">
        <ul className="slide-wrapper">
          <div className="slide-original">
            {BANNERS.map((banner) => (
              <Fragment key={banner}>
                <Glare className="flex-none inline" />
                <Text>{banner}</Text>
              </Fragment>
            ))}
          </div>
          <div className="slide-clone">
            {BANNERS.map((banner) => (
              <Fragment key={banner}>
                <Glare className="flex-none inline" />
                <Text>{banner}</Text>
              </Fragment>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default RollingBanner;
