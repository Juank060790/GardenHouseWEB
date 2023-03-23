import React from "react";
import Modal from "react-modal";
import "./VideoCard.css";

const VideoModal = ({
  modalIsOpen,
  setModalIsOpen,
  youtubeLink,
  setHideCards,
}) => {
  const handleCloseModal = () => {
    setModalIsOpen(false);
    setHideCards(true);
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
    >
      <iframe
        className="modal-content"
        width="100%"
        height="100%"
        src={youtubeLink}
        title="Garden house "
        allow="accelerometer; autoplay; encrypted-media; gyroscope; "
      ></iframe>
    </Modal>
  );
};

export default VideoModal;
