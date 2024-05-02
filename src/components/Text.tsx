import React, { ElementType, HTMLAttributes, ReactNode } from "react";

interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
}
const Text = ({ children, as: As = "p", ...rest }: TextProps) => {
  return <As {...rest}>{children}</As>;
};

export default Text;
