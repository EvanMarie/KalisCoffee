import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/global.css";
import shortTextStyles from "./styles/shortText.css";
import cardStyles from "./styles/card.css";
import carouselStyles from "./styles/carousel.css";
import headerStyles from "./styles/header.css";
import eventStyles from "./styles/eventCardModalStyles.css";
import footerStyles from "./styles/footer.css";

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=REM:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },
  {
    rel: "stylesheet",
    href: styles,
  },
  {
    rel: "stylesheet",
    href: cardStyles,
  },
  {
    rel: "stylesheet",
    href: shortTextStyles,
  },
  {
    rel: "stylesheet",
    href: carouselStyles,
  },
  {
    rel: "stylesheet",
    href: headerStyles,
  },
  {
    rel: "stylesheet",
    href: eventStyles,
  },
  {
    rel: "stylesheet",
    href: footerStyles,
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div
          className="entire-background"
          style={{
            backgroundImage: "url(/images/coffeeBeans01.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
