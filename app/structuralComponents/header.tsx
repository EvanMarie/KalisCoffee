import Icon from "~/stylisticComponents/icon";
import HorizontalStack from "./horizontalStack";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

interface HeaderProps {
  titleImage?: string;
  titleText?: string;
  subtitle?: string;
}

export default function Header({
  titleImage,
  titleText,
  subtitle,
}: HeaderProps) {
  return (
    <div className="heading-container" id="heading-container">
      <div className="social-media">
        <HorizontalStack justify="space-between">
          <Icon icon={() => <BsFacebook />} />
          <Icon icon={() => <BsTwitter />} />
          <Icon icon={() => <BsInstagram />} />
          <Icon icon={() => <BsYoutube />} />
        </HorizontalStack>
      </div>
      <div className="address">
        <p style={{ margin: 0 }}>123 Divine Brew Boulevard</p>
        <p style={{ margin: 0 }}>Santa Monica, CA 90291</p>
        <p style={{ margin: 0 }}>(123) 456-7890</p>
      </div>

      {/* <div className="header-logo"> */}
      <div className="headers">
        {titleImage && (
          <img
            src={titleImage}
            alt="Kali's Coffee Logo"
            className="title-image"
          />
        )}
        {titleText && (
          <h1
            className="title"
            style={{
              margin: 0,
            }}
          >
            {titleText}
          </h1>
        )}

        <h2
          className="subtitle"
          style={{
            fontWeight: 500,
            margin: 0,
          }}
        >
          {subtitle}
        </h2>
      </div>

      <div className="logo">
        <img
          src="/images/kaliLogoGradient.png"
          alt="Kali's Coffee Logo"
          className="logo-image"
        />
      </div>
      <div className="dropdown">DROPDOWN</div>
    </div>
  );
}
