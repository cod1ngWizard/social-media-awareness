type Props = {
  text: string;
  allignment: 'center' | 'right' | 'left';
  extraStyles?: string;
};

export default function SectionDescription({
  text,
  allignment = 'left',
  extraStyles,
}: Props) {
  return <p className={`text-xl text-${allignment} leading-8 ${extraStyles}`}>{text}</p>;
}
