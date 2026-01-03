import { useEffect } from "react";

export default function useModel({
  setModalOpen,
  setModalCardIndex,
  modalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalCardIndex: React.Dispatch<React.SetStateAction<number | null>>;
  modalOpen: boolean;
}) {
  const openModal = (cardIndex: number) => {
    setModalCardIndex(cardIndex);
    setModalOpen(true);
    document.body.style.overflow = "hidden";

    const header =
      document.querySelector("header") ||
      document.querySelector('[class*="fixed"]');
    if (header) {
      header.style.display = "none";
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalCardIndex(null);
    document.body.style.overflow = "";

    const header =
      document.querySelector("header") ||
      document.querySelector('[class*="fixed"]');
    if (header) {
      header.style.display = "";
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [modalOpen]);
  return { openModal, closeModal };
}
