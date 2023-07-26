import React from "react";

interface IconProps {
  icon: () => JSX.Element;
  size?: number;
  color?: string;
  link?: string;
  hoverColor?: string;
  hoverSize?: number;
}

export default function Icon({
  icon: IconComponent,
  size,
  color,
  link,
  hoverColor,
  hoverSize = 1.1,
}: IconProps) {
  const IconWrapper = link ? "a" : "div";

  return (
    <IconWrapper
      className="icon"
      href={link}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: color,
        transition: "all 0.3s ease-in-out",
        fontSize: `${size}px`, // Set the font-size to control the icon size
      }}
    >
      <IconComponent />
    </IconWrapper>
  );
}
