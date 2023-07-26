import HorizontalStack from "./horizontalStack";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  titleSize?: string;
  subtitleSize?: string;
  titleColor?: string;
  subtitleColor?: string;
}

export default function Header({
  title,
  subtitle,
  titleSize = "2.5rem",
  subtitleSize = "1.75rem",
  titleColor,
  subtitleColor,
}: HeaderProps) {
  return (
    <div className="heading-container" id="heading-container">
      <div className="social-media">
        <HorizontalStack justify="space-between">
          <BsFacebook /> <BsTwitter /> <BsInstagram /> <BsYoutube />{" "}
        </HorizontalStack>
      </div>
      <div className="address">
        <p style={{ margin: 0 }}>Address Line One</p>
        <p style={{ margin: 0 }}>Address Line Two</p>
      </div>

      {/* <div className="header-logo"> */}
      <div className="headers">
        <h1
          style={{
            fontSize: titleSize,
            color: titleColor,
            margin: 0,
          }}
        >
          {title}
        </h1>

        <h2
          style={{
            fontSize: subtitleSize,
            color: subtitleColor,
            fontWeight: 500,
            margin: 0,
          }}
        >
          {subtitle}
        </h2>
      </div>

      <div className="logo">
        <img
          src="/images/kaliLogo.png"
          alt="Kali's Coffee Logo"
          className="logo-image"
        />
      </div>
    </div>
  );
}
