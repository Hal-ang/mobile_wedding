import React, { ReactNode, useEffect } from "react";

const BlockScroll = ({
  enabled,
  children
}: {
  enabled: boolean;
  children: ReactNode;
}) => {
  useEffect(() => {
    const $scrollContainer = document.getElementById("scroll-container");

    if (!$scrollContainer) return;

    if (enabled) {
      $scrollContainer.style.overflow = "hidden";
    } else {
      $scrollContainer.style.overflow = "auto";
    }
  }, [enabled]);

  // useEffect(() => {
  //   const handler = (e: unknown) => {
  //     console.log("check");
  //     // @ts-ignore
  //     e.preventDefault();
  //     // console.log(e.preventDefault())
  //     // if (e.scale !== 1) {
  //     //   // @ts-ignore
  //     //   e.preventDefault();
  //     // }
  //   };
  //   if (enabled) {
  //     document.addEventListener("scroll", handler, { passive: false });
  //   } else {
  //     document.removeEventListener("scroll", handler);
  //   }

  //   return () => {
  //     removeEventListener("scroll", handler);
  //   };
  // }, [enabled]);

  return <>{children}</>;
};

export default BlockScroll;
