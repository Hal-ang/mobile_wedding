import React, { ReactNode } from "react";

import Text from "../Text";

const Address = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <>
      <Text
        display="block"
        as="h4"
        className="whitespace-pre-line font-bold text-16pxr leading-25pxr"
      >
        {title}
      </Text>
      <Text
        display="block"
        className="whitepace-pre-line text-14pxr leading-24pxr"
      >
        {desc}
      </Text>
    </>
  );
};

export default Address;
