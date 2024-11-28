import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing arrow icons from react-icons
import styles from "../styles/NavigationArrows.module.css"; // Import the styles specific to this component

export default function NavigationArrows({
  nextMessage,
  prevMessage,
  index,
  totalMessages,
}) {
  return (
    <div className={styles.arrowContainer}>
      <button
        className={`${styles.arrowButton} ${
          index === 0 ? styles.disabled : ""
        }`}
        onClick={prevMessage}
        disabled={index === 0} // Disable button when at the first message
      >
        <FaArrowLeft size={30} />
      </button>
      <span className={styles.arrowText}>{"Navigation"}</span>
      <button
        className={`${styles.arrowButton} ${
          index === totalMessages - 1 ? styles.disabled : ""
        }`}
        onClick={nextMessage}
        disabled={index === totalMessages - 1} // Disable button when at the last message
      >
        <FaArrowRight size={30} />
      </button>
    </div>
  );
}
