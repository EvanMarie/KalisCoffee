import Icon from "~/stylisticComponents/icon";
import HorizontalStack from "./horizontalStack";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content" id="footer-content">
        <div className="footer-images-container">
          <img
            src="/images/name03.png"
            alt="Kali's Coffee"
            className="footer-name-logo"
          />
          <img
            src="/images/kaliLogoGradient.png"
            alt="Kali's Coffee"
            className="footer-logo"
          />
        </div>

        <div className="footer-address">
          <p style={{ margin: 0 }}>123 Divine Brew Boulevard</p>
          <p style={{ margin: 0 }}>Santa Monica, CA 90291</p>
          <p style={{ margin: 0 }}>(123) 456-7890</p>
        </div>
        <div className="social-media">
          <HorizontalStack justify="space-between">
            <Icon icon={() => <BsFacebook />} />
            <Icon icon={() => <BsTwitter />} />
            <Icon icon={() => <BsInstagram />} />
            <Icon icon={() => <BsYoutube />} />
          </HorizontalStack>
        </div>
      </div>
    </div>
  );
}
