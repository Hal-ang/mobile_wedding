import React, {
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode
} from "react";

interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: ElementType;
  display?: CSSProperties["display"];
}
const Text = ({
  display = "inline",
  children,
  as: As = "p",
  ...rest
}: TextProps) => {
  return (
    <As {...rest} style={{ display }}>
      {children}
    </As>
  );
};

export default Text;
