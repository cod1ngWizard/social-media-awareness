//import Link from 'next/link';
import Hero from './components/Hero/Hero';
import Elements from './components/Elements/Elements';

export default function Home() {
  return (
    <>
      <Hero />
      <Elements />
      {/* <Link href='elements/scrolling'>go there</Link> */}
    </>
  );
}
