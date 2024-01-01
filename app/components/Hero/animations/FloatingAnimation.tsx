'use client';

import { CSSProperties, useEffect, useState } from 'react';
import floatingStyles from './FloatingAnimation.module.css';

type AnimationElementProps = {
  element: AnimatedImage | string;
};

type Props = {
  elementsToAnimate: AnimationElementProps[];
};

export type AnimatedImage = {
  src: string;
  initialWidth: number;
};

const AnimationElement = ({ element }: AnimationElementProps) => {
  const [shouldDie, setShouldDie] = useState(false);

  useEffect(() => {
    // Remove popup from the DOM after a certain time
    const timeoutId = setTimeout(() => {
      setShouldDie(true);
    }, 7000); // Remove after 7 seconds

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (shouldDie) {
    return null;
  }

  const scalingFactor = Math.random() * 0.8 + 0.3;

  if (typeof element === 'object') {
    const { initialWidth, src } = element;

    const imageStyles: CSSProperties = {
      left: `${Math.random() * 80 + 10}vw`,
      top: `${Math.random() * 80 + 10}vh`,
      width: `${initialWidth * scalingFactor}px`,
      zIndex: '-1',
    };

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt=''
        className={floatingStyles.popupElement}
        style={imageStyles}
      />
    );
  }

  const minScale = 0.5;
  const maxScale = 2;
  const randomScale = Math.random() * (maxScale - minScale) + minScale;

  const wordStyles: CSSProperties = {
    left: `${Math.random() * 80 + 10}vw`,
    top: `${Math.random() * 80 + 10}vh`,
    scale: randomScale,
    zIndex: '-1',
  };

  return (
    <p className={`${floatingStyles.popupElement} text-lg`} style={wordStyles}>
      {element}
    </p>
  );
};

const PopupAnimation = ({ elementsToAnimate }: Props) => {
  const [livingComponents, setLivingComponents] = useState<React.ReactNode[]>(
    []
  );

  const getRandomElement = (elementsToAnimate: Props) => {
    const randomIndex = Math.floor(
      Math.random() * elementsToAnimate.elementsToAnimate.length
    );
    return elementsToAnimate.elementsToAnimate[randomIndex];
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { element } = getRandomElement({ elementsToAnimate });
      setLivingComponents((currentComponents) => [
        ...currentComponents,
        // eslint-disable-next-line react/jsx-key
        <AnimationElement element={element} />,
      ]);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  });

  return <div>{livingComponents}</div>;
};

export default PopupAnimation;
