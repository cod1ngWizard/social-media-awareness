'use client';

import { useState, useEffect } from 'react';

type Props = {
  words: string[];
};

const TypingAnimation = ({ words }: Props) => {
  const typingAnimationStyles =
    'mt-5 text-7xl font-bold py-1 px-2.5 bg-accent rounded md:text-8xl';

  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];

      if (isTyping) {
        if (charIndex < currentWord.length) {
          setCharIndex(charIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => setIsTyping(true), 1300); // Wait before erasing
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          const nextWordIndex = (wordIndex + 1) % words.length;
          setWordIndex(nextWordIndex);

          if (nextWordIndex === 0) {
            // Reset the animation after completing one full loop
            setIsTyping(true);
          }
        }
      }
    };

    const typingInterval = setInterval(type, 150); // Adjust the typing speed (milliseconds)

    return () => clearInterval(typingInterval); // Cleanup interval on component unmount
  }, [charIndex, wordIndex, isTyping, words]);

  const currentWord = words[wordIndex].substring(0, charIndex);

  return (
    <div>
      <span className={typingAnimationStyles}>{currentWord}</span>
    </div>
  );
};

export default TypingAnimation;
