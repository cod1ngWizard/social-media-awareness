import { heroAnimationElements } from '@/app/constants/heroAnimation';
import styles from './Hero.module.css';
import PopupAnimation from './animations/FloatingAnimation';
import TypingAnimation from './animations/TypingAnimation';

function Hero() {
  return (
    <main className={`${styles.hero} custom-container`}>
      <h1 className='hero-title'>
        SOCIAL <br />
        <TypingAnimation
          words={['PROBLEM', 'ANOTHER', 'DAAMN', 'COOL', 'COOLER', 'YIKES']}
        />
      </h1>
      <p className='text-center'>
        The addictive nature of these platforms siphons away valuable <br />
        time, diverting attention from meaningful. <br />
        The addictive nature
      </p>
      <PopupAnimation elementsToAnimate={heroAnimationElements} />
    </main>
  );
}

export default Hero;
