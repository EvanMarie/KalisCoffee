import type { V2_MetaFunction } from "@remix-run/node";
import CardCarousel, {
  CardCarouselItem,
} from "~/structuralComponents/cardCarousel";
import Header from "~/structuralComponents/header";
// import Card from "~/structuralComponents/card";

import { VerticalStack } from "~/structuralComponents/verticalStack";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const cards = [
    "Card One",
    "Card Two",
    "Card Three",
    "Card Four",
    "Card Five",
    "Card Six",
    "Card Seven",
    "Card Eight",
    "Card Nine",
    "Card Ten",
    "Card Eleven",
    "Card Twelve",
    "Card Thirteen",
  ];
  return (
    <VerticalStack spacing="0px">
      <Header title="Kali's Coffee" subtitle="Brewing up urban divinity." />
      <div>
        Immerse yourself in the energy and mystique of Kali's Coffee. Like the
        formidable goddess, Kali, our cafe is a haven for the bold, creative,
        and adventurous. Here, each cup of coffee holds a transformative
        experience, and every visit is a new revelation.
      </div>
      <VerticalStack spacing="40px">
        <CardCarousel>
          {cards.map((card) => (
            <CardCarouselItem key={card}>{card}</CardCarouselItem>
          ))}
        </CardCarousel>

        <CardCarousel>
          {cards.map((card) => (
            <CardCarouselItem key={card}>{card}</CardCarouselItem>
          ))}
        </CardCarousel>
      </VerticalStack>
    </VerticalStack>
  );
}
