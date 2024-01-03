import Link from 'next/link';
import Image from 'next/image';
import SocialElements from '@/app/assets/SocialElements/SocialElements';
import SectionTitle from '../shared/SectionTitle';
import SectionDescription from '../shared/SectionDescription';
import SectionContainer from '../shared/SectionContainer';

function Elements() {
  const elementsStyles =
    'flex flex-col h-screen py-10 md:flex-row absolute elements-section-container before:hidden before:md:block';

  return (
    <SectionContainer type={'main'} extraStyles={elementsStyles}>
      <div className='flex flex-col items-start justify-center gap-10 flex-1'>
        <SectionTitle
          mainText={'What keeps you'}
          highlighted='hooked.'
          allignment='left'
        />
        <SectionDescription
          text={`The constant scrolling, comparing, and seeking validation can leave us
          feeling drained, anxious, and disconnected from reality. It's time to
          go beyond the likes and delve into the dark side of these digital
          realms, where addiction and the erosion of privacy lurk.`}
          allignment={'left'}
        />
        {/*   <nav className='flex gap-3.5 flex-wrap max-w-[500px]'>
          <Link
            href={'/'}
            className='flex gap-2 p-1 px-2 text-sm rounded-xl font-semibold elements-link'
          >
            <Image
              src='/images/scrolling-icon.png'
              alt={''}
              width={22}
              height={22}
            />
            <p>Scrolling</p>
          </Link>
          <Link
            href={'/'}
            className='flex gap-2 p-1 px-2 text-sm rounded-xl font-semibold elements-link'
          >
            <Image
              src='/images/scrolling-icon.png'
              alt={''}
              width={22}
              height={22}
            />
            <p>Scrolling</p>
          </Link>
          <Link
            href={'/'}
            className='flex gap-2 p-1 px-2 text-sm rounded-xl font-semibold elements-link'
          >
            <Image
              src='/images/scrolling-icon.png'
              alt={''}
              width={22}
              height={22}
            />
            <p>Scrolling</p>
          </Link>
          <Link
            href={'/'}
            className='flex gap-2 p-1 px-2 text-sm rounded-xl font-semibold elements-link'
          >
            <Image
              src='/images/scrolling-icon.png'
              alt={''}
              width={22}
              height={22}
            />
            <p>Scrolling</p>
          </Link>
          <Link
            href={'/'}
            className='flex gap-2 p-1 px-2 text-sm rounded-xl font-semibold elements-link'
          >
            <Image
              src='/images/scrolling-icon.png'
              alt={''}
              width={22}
              height={22}
            />
            <p>Scrolling</p>
          </Link>
        </nav> */}
      </div>
      <div className='flex flex-1 justify-center items-center sm:*:scale-[0.85]'>
        <SocialElements />
      </div>
    </SectionContainer>
  );
}

export default Elements;
