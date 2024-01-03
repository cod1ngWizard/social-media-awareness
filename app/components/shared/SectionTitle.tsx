type Props = {
  mainText: string;
  highlighted?: string;
  allignment: 'center' | 'right' | 'left';
  extraStyles?: string;
};

export default function SectionTitle({
  mainText,
  highlighted,
  allignment,
  extraStyles,
}: Props) {
  return (
    <h1
      className={`text-7xl text-left leading-[4rem] md:text-6xl md:leading-[5rem] md:text-${allignment} ${extraStyles}`}
    >
      {mainText}{' '}
      {highlighted && (
        <>
          <br />{' '}
          <span className='block font-bold text-8xl relative title-highlighted'>
            {highlighted}
          </span>{' '}
        </>
      )}
    </h1>
  );
}
