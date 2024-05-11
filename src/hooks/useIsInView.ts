import React, { RefObject, useEffect, useState } from "react";

const useIsInView = (target: RefObject<HTMLElement>, callback?: () => void) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!target.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            callback?.();
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.7 }
    );

    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, [callback]);

  return { isInView };
};

export default useIsInView;
