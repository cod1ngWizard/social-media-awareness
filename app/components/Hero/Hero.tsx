import { heroAnimationElements } from '@/app/constants/heroAnimation';
import PopupAnimation from '../../animations/FloatingAnimation';
import TypingAnimation from '../../animations/TypingAnimation';
import SectionDescription from '../shared/SectionDescription';
import SectionContainer from '../shared/SectionContainer';

function Hero() {
  const heroStyles =
    'flex flex-col items-center justify-center h-screen w-full text-center';

  const heroTitleStyles =
    'text-center text-7xl font-bold mb-10 leading-[7rem] md:text-6xl md:leading-[7rem]';

  return (
    <SectionContainer type={'main'} extraStyles={heroStyles}>
      <h1 className={heroTitleStyles}>
        SOCIAL <br />
        <TypingAnimation
          words={['PROBLEM', 'ANOTHER', 'DAAMN', 'COOL', 'COOLER', 'YIKES']}
        />
      </h1>
      <SectionDescription
        text={`The addictive nature of these platforms siphons away valuable
        time, diverting attention from meaningful.
        The addictive nature`}
        extraStyles='max-w-[500px]'
        allignment={'center'}
      />
      <PopupAnimation elementsToAnimate={heroAnimationElements} />
    </SectionContainer>
  );
}

export default Hero;
