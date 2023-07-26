import { VerticalStack } from "./verticalStack";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import FlexContainer from "./flexContainer";

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
        <FlexContainer direction="row" justify="space-between">
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
        </FlexContainer>
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

export function CardCarouselItem({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}
