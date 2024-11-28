"use client";

import { useState } from "react";
import Image from "next/image";
import MessageCard from "../components/MessageCard";
import NavigationArrows from "../components/NavigationArrows";
import styles from "../styles/Global.module.css";
import Head from "next/head";

// Messages to be displayed
const messages = [
  "I hope you're doing good my precious love 🥺❤️, I have something to say...",
  "I know that my actions have hurt you, I know that I've hurt you a lot because of my childish behavior that day due to my anger, and I'm regretting all of my actions...",
  "I know how it made you feel, and made you believe that I'm a really bad person, It's alright for you to be mad at me, but, I want you to know that, whatever I'm, I'll love you and respect you...",
  "I've realized my mistakes and I can assure that from now on, it's only love and I'll convey everything with only love",
  "I want to give you the world, my love, my respect, my time, my care, my affection, my reassurance, my support, my everything, I want too see you achieve everything you dream of...",
  "and I'm sorry for making you feel that I don't support your dreams,I always did, I do, and I will, I'll support you till my last breathe",
  "so please give me a chance, a chance to make you feel that I'm worth your love and time❤️",
  "i want to love you, i want to see you, get lost into your eyes, smell you, cook with you, eat with you, hug you, kiss you, grow with you, and util the end, just you and me... ",
  "I love you mere Sweta, mere Bubu, and I promise to respect you, take care of you keeping you as my priority always💖💓💝",
  "and I'm sorry again, my love for all the problem that I've caused, thank you so much for believing in me and most importantly, loving me <3",
  "AND HERE IS A PHOTO CAROUSEL OF US, HAVE A LOOK :D -> ",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "HOPE YOU LIKED IT BUBU❤️💝😘, from your pyara sa bubu, Nishant :D",
];

// Images corresponding to each message
const images = [
  "/puppy-eye-car-1.jpeg",
  "/sad-car-1.jpeg",
  "/sad-car-2.jpeg",
  "/sad-car-8.jpeg",
  "/love-1.jpeg",
  "/sad-car-4.jpeg",
  "/sad-car-5.jpeg",
  "/love-and-support.jpeg",
  "/i-love-you-1.jpeg",
  "/sad-car-7.jpeg",
  "/us-car.jpeg",
  "/images/img1.jpeg",
  "/images/img2.jpeg",
  "/images/img3.jpeg",
  "/images/img4.jpeg",
  "/images/img6.jpeg",
  "/images/img7.JPG",
  "/images/img8.jpeg",
  "/images/img9.JPG",
  "/images/img10.JPG",
  "/images/img11.JPG",
  "/images/img12.JPG",
  "/cute-car-1.jpeg",
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  // Function to go to the next message
  const nextMessage = () => {
    if (index < messages.length - 1) setIndex(index + 1);
  };

  // Function to go to the previous message
  const prevMessage = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <>
      <Head>
        <title>Apology App</title>
        <meta
          name="description"
          content="A heartfelt apology to make things right. 💖"
        />
        <meta
          name="keywords"
          content="apology, love, apology app, sorry, heart, relationship"
        />
        <meta property="og:title" content="I'm Sorry Babe - Apology App" />
        <meta
          property="og:description"
          content="An apology app to mend things and express my heartfelt sorry."
        />
      </Head>
      <div className={styles.container}>
        {index < messages.length ? (
          <MessageCard
            message={messages[index]}
            imageSrc={images[index]} // Pass image corresponding to the message
          />
        ) : (
          <div className={styles.collageCard}>
            <p className={styles.finalMessage}>You’re my everything. 💕</p>
            <div className={styles.imageContainer}>
              {" "}
              {/* Centering container */}
              <Image
                src="/images/collage.jpg"
                alt="Collage of us"
                width={400}
                height={400}
                className={styles.collageImage} // This class is for styling image
              />
            </div>
          </div>
        )}
        <NavigationArrows
          nextMessage={nextMessage}
          prevMessage={prevMessage}
          index={index}
          totalMessages={messages.length}
        />
      </div>
    </>
  );
}
