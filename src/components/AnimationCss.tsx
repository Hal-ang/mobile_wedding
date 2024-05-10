"use client";

import React, { ReactNode, useEffect } from "react";

const AnimationCss = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />;

    const $link = document.getElementById("animate-css") as HTMLLinkElement;

    if ($link) return;

    const link = document.createElement("link");
    link.id = "animate-css";
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
  }, []);
  return <>{children}</>;
};

export default AnimationCss;
