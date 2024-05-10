import React, { ReactNode, useEffect, useState } from "react";

const SlideUp = ({
  children,
  show = false,
  className = ""
}: {
  show?: boolean;
  children: ReactNode;
  className?: string;
}) => {
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (show) {
      setInitialized(true);
    }
  }, [show]);

  return (
    <div className={`will-change-transform slideup-container ${className}`}>
      <div
        className={`${!initialized ? "invisible" : ""} ${show ? "active" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default SlideUp;
