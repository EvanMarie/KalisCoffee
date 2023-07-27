import type { V2_MetaFunction } from "@remix-run/node";
import CardCarousel, { MenuCard } from "~/structuralComponents/cardCarousel";
import Header from "~/structuralComponents/header";
// import Card from "~/structuralComponents/card";

import { VerticalStack } from "~/structuralComponents/verticalStack";
import type { MenuItem } from "./menuItems";
import { MenuItems } from "./menuItems";
import type { EventItem } from "./eventItems";
import { EventItems } from "./eventItems";
import EventModal from "~/structuralComponents/eventCard";
import Footer from "~/structuralComponents/footer";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <VerticalStack spacing="20px">
      <Header
        titleImage="/images/name03.png"
        subtitle="Brewing up urban divinity."
      />
      <div className="text-section-stackable">
        <div className="stackable-description">
          <h1>Welcome to Kali's</h1>
          <p>
            Welcome to Kali's Coffee - where each sip and bite is a tribute to
            life! We celebrate not just coffee and cuisine, but also culture and
            connection. Inspired by Kali, the goddess of transformation and
            power, we blend authenticity with innovation, pairing the magic of
            brewing and culinary arts with engaging conversation.
          </p>
        </div>
        <img
          className="stackable-image-right"
          src="/images/kalis-dining.png"
          alt="Kali's Coffee"
        />
      </div>
      <div className="text-section-stackable">
        <img
          className="stackable-image-left"
          src="/images/bean-bag.png"
          alt="Kali's Coffee"
        />
        <div className="stackable-description">
          <h1>Spilling the beans</h1>

          <p>
            We believe that each coffee bean carries a piece of its origin - a
            tale of the earth it was grown in, the sun it basked under, and the
            hands that nurtured it. It is this diversity of origins that brings
            a rich tapestry of flavors to your cup.
          </p>

          <p>
            We source our beans from the best coffee plantations around the
            world, selecting each lot for its unique character, quality, and
            sustainability practices.
          </p>
        </div>
      </div>{" "}
      <div className="text-section-stackable">
        <div className="stackable-description">
          <h1>Our Menu</h1>
          <p>
            From the robust to the subtle, our menu is a kaleidoscope of
            flavors, each item crafted to stir your senses and captivate your
            palate. An ever-evolving symphony of tastes and aromas, we design
            our menu to satisfy the diverse preferences of our esteemed patrons.
          </p>

          <p>
            Paired with our assortment of pastries, gourmet sandwiches, and
            seasonal specials, your culinary journey at Kali's Coffee will be
            anything but ordinary. Scroll through some of our favorites below!
          </p>
        </div>
        <img
          className="stackable-image-right"
          src="/images/aerial-cup.png"
          alt="Kali's Coffee"
        />
      </div>
      <VerticalStack spacing="40px">
        <CardCarousel>
          {MenuItems.map((item: MenuItem, index) => (
            <MenuCard
              key={index}
              itemName={item.itemName}
              itemDescription={item.itemDescription}
              itemImage={item.itemImage}
            />
          ))}
        </CardCarousel>
        <div className="text-section-stackable">
          <img
            className="stackable-image-left"
            src="/images/events.png"
            alt="Kali's Coffee"
          />
          <div className="stackable-description">
            <h1>Events</h1>
            <p>
              At Kali's Coffee, we believe that coffee houses are the epicenters
              of creativity and community, which is why we host an array of
              events that offer more than just divine brews. From inspiring
              poetry nights to engaging book clubs, to vibrant live music, we
              aim to create a dynamic and enriching space for our patrons.
            </p>
          </div>
        </div>
        <div className="event-cards-container">
          {EventItems.map((item: EventItem, index) => (
            <EventModal
              key={index}
              eventTitle={item.eventTitle}
              eventDescription={item.eventDescription}
              eventImage={item.eventImage}
              eventTime={item.eventTime}
            />
          ))}
        </div>
      </VerticalStack>
      <Footer />
    </VerticalStack>
  );
}
