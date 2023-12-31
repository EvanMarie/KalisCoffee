import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { DiCode } from "react-icons/di";

interface ModalFunctionProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function ModalFunction({ isOpen, onClose, children }: ModalFunctionProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          // ^^ had scale: 0.4 and removed
          transition={{
            duration: 0.8,
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
                position: "absolute",
                top: "5px",
                right: "5px",
                cursor: "pointer",
              }}
              onClick={onClose}
              color="var(--darkGray)"
              size={25}
            />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        style={{
          fontSize: "1.4rem",
          padding: "0rem 0.7rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <DiCode style={{ verticalAlign: "middle" }} size={26} />
        <p
          style={{
            display: "inline-block",
            marginBottom: "0",
            verticalAlign: "middle",
            lineHeight: "1",
          }}
        >
          Code
        </p>
      </button>
      <ModalFunction isOpen={isModalOpen} onClose={handleCloseModal}>
        {children}
      </ModalFunction>
    </div>
  );
}
