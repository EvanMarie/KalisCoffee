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
        <VerticalStack spacing="5px">
          <h1>Welcome to Kali's</h1>
          <p>
            We are a sanctuary for coffee connoisseurs, food enthusiasts, and
            lovers of culture. Named after the goddess of power and change,
            Kali, our café is not just a place to grab a quick coffee; it's a
            place where authenticity meets creativity, and tradition blends with
            innovation. It's where the magic of brewing meets the art of
            cooking, and the joy of eating meets the thrill of conversation.
            From our farm-to-cup sourced beans, to our artfully crafted menu,
            and vibrant community events, every detail at Kali's Coffee is
            designed to delight your senses, feed your curiosity, and fuel your
            day. So, come on in and let us serve you an experience that's as
            invigorating as a divine brew and as comforting as a home-cooked
            meal. Welcome to Kali's Coffee - where every sip and bite is a
            celebration of life!
          </p>
        </VerticalStack>
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
        <VerticalStack spacing="15px">
          <h1>Spilling the beans</h1>
          <p>
            Our beans are sourced from the world's premier plantations. Each cup
            served is a testament to our love for coffee, our commitment to
            quality, and our passion for creating an enchanting experience for
            you.
          </p>

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
        </VerticalStack>
      </div>{" "}
      <div className="text-section-stackable">
        <VerticalStack spacing="15px">
          <h1>Our Menu</h1>
          <p>
            From the robust to the subtle, our menu is a kaleidoscope of
            flavors, each designed to stir your senses and captivate your
            palate. Our signature drinks are as adventurous and unexpected as
            Kali herself.
          </p>
          <p>
            Our menu is an ever-evolving symphony of tastes and aromas, designed
            to satisfy the diverse preferences of our esteemed patrons. Whether
            you're in the mood for a potent cold brew to cut through a warm day,
            a delicate herbal tea to soothe your senses, or a decadent hot
            chocolate to sweeten your evening, we've got you covered. Paired
            with our assortment of pastries, gourmet sandwiches, and seasonal
            specials, your culinary journey at Kali's Coffee will be anything
            but ordinary. Each visit promises a new flavor, a new experience,
            and a new memory to savor. Scroll through some of our favorites
            below!
          </p>
        </VerticalStack>
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
          <VerticalStack spacing="15px">
            <h1>Events</h1>
            <p>
              At Kali's Coffee, we believe that coffee houses are the epicenters
              of creativity and community, which is why we host an array of
              events that offer more than just divine brews. From inspiring
              poetry nights to engaging book clubs, to vibrant live music, we
              aim to create a dynamic and enriching space for our patrons.
            </p>

            <p>
              Our events are more than just an opportunity to engage with
              literature, music, and art – they are a celebration of the vibrant
              community that we've brewed over the years. The essence of Kali's
              Coffee is not just about the coffee we serve, but also the
              connections we foster. Find out more about our events below!
            </p>
          </VerticalStack>
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
    </VerticalStack>
  );
}
