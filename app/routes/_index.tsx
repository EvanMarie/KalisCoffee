import type { V2_MetaFunction } from "@remix-run/node";
import CardCarousel, { MenuCard } from "~/structuralComponents/cardCarousel";
import Header from "~/structuralComponents/header";
// import Card from "~/structuralComponents/card";

import { VerticalStack } from "~/structuralComponents/verticalStack";
import { MenuItem, MenuItems } from "./menuItems";

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
      <div className="text-section">
        <VerticalStack spacing="5px">
          <h1>Welcome to Kali's</h1>
          <p>
            Immerse yourself in the energy and mystique of Kali's Coffee. Like
            the formidable goddess, Kali, our cafe is a haven for the bold,
            creative, and adventurous and a celebration of the vibrant community
            that brings our coffeehouse to life. Here, each cup of coffee holds
            a transformative experience, and every visit is a new revelation.
          </p>
        </VerticalStack>
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
            and a new memory to savor.
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

        {/* <CardCarousel>
          {cards.map((card) => (
            <CardCarouselItem key={card}>{card}</CardCarouselItem>
          ))}
        </CardCarousel> */}
      </VerticalStack>
    </VerticalStack>
  );
}
