import ShortText from "~/stylisticComponents/shortText";
import { VerticalStack } from "./verticalStack";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

interface ModalFunctionProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventDescription: string[];
  eventImage: string;
  eventTime: string | undefined;
}

function EventModalFunction({
  isOpen,
  onClose,
  eventTitle,
  eventDescription,
  eventImage,
  eventTime,
}: ModalFunctionProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.005,
            type: "spring",
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(3px)",
            zIndex: 9998,
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            style={{
              position: "relative",
              padding: "20px 5px 5px 5px",
              borderRadius: "5px",
              backgroundColor: "var(--lightGray)",
              maxHeight: "90vh",
              overflow: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaWindowClose
              style={{
                color: "var(--darkBrown)",
                position: "absolute",
                top: "35px",
                right: "25px",
                cursor: "pointer",
              }}
              onClick={onClose}
              size={25}
            />
            <div className="event-modal-container">
              <VerticalStack spacing="10px">
                <div className="event-modal-title">
                  <h2>{eventTitle}</h2>
                </div>
                <img
                  src={eventImage}
                  alt={eventTitle}
                  className="event-image"
                />
                <div className="event-time">
                  <p>{eventTime}</p>
                </div>
                <div className="event-modal-description">
                  {eventDescription.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </VerticalStack>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface EventModalProps {
  eventTitle: string;
  eventDescription: string[];
  eventImage: string;
  eventTime?: string;
}

export default function EventModal({
  eventTitle,
  eventDescription,
  eventImage,
  eventTime,
}: EventModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className="event-card"
        onClick={handleOpenModal}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {" "}
        <VerticalStack spacing="10px">
          <h2>{eventTitle}</h2>
          <img src={eventImage} alt={eventTitle} className="event-image" />
          <div className="event-card-description">
            <ShortText>{eventDescription}</ShortText>
            <p
              style={{
                fontSize: "var(--smallText)",
                fontWeight: "var(--semiBold)",
                color: "var(--orange)",
              }}
            >
              (find out more)
            </p>
          </div>
        </VerticalStack>
      </div>

      <EventModalFunction
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        eventTitle={eventTitle}
        eventTime={eventTime}
        eventDescription={eventDescription}
        eventImage={eventImage}
      ></EventModalFunction>
    </div>
  );
}
