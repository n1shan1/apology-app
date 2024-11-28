import Image from "next/image";
import styles from "../styles/MessageCard.module.css";

const MessageCard = ({ message, imageSrc }) => {
  return (
    <div className={styles.card}>
      <p>{message}</p>
      {imageSrc && (
        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt="Image below message"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      )}
    </div>
  );
};

export default MessageCard;
