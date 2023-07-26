import { VerticalStack } from "./verticalStack";
// import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import FlexContainer from "./flexContainer";

interface CardCarouselProps {
  children?: React.ReactNode;
  direction?: "row" | "column";
  spacing?: string;
}

export default function CardCarousel({
  children,
  direction = "row",
  spacing = "20px",
}: CardCarouselProps) {
  return (
    <div className="carousel-outer">
      <VerticalStack spacing="0px">
        {/* <FlexContainer direction="row" width="98%" justify="space-between">
          <BsArrowLeft
            size={30}
            color="var(--lightBlue"
            style={{ marginLeft: "10px" }}
          />
          <BsArrowRight
            size={30}
            color="var(--lightBlue"
            style={{ marginRight: "10px" }}
          />
        </FlexContainer> */}
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{
              display: "flex",
              flexDirection: direction,
              gap: spacing,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {children}
          </div>
        </div>
      </VerticalStack>
    </div>
  );
}

interface MenuCardProps {
  itemName: string;
  itemDescription: string;
  itemImage: string;
}

export function MenuCard({
  itemDescription,
  itemName,
  itemImage,
}: MenuCardProps) {
  return (
    <div className="card">
      <VerticalStack spacing="10px">
        <h3>{itemName}</h3>
        <img src={itemImage} alt={itemName} />
        <div className="card-description">
          <p>{itemDescription}</p>
        </div>
      </VerticalStack>
    </div>
  );
}
