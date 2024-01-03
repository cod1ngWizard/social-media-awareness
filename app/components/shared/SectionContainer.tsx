type Props = {
  children: React.ReactNode;
  extraStyles?: string;
  type: 'main' | 'section';
};

export default function SectionContainer({
  type = 'section',
  children,
  extraStyles,
}: Props) {
  const commonStyles = 'w-full px-[35px] md:px-[100px] py-10';

  if (type === 'main') {
    <main className={`${commonStyles} ${extraStyles}`}>{children}</main>;
  }

  return (
    <section className={`${commonStyles} ${extraStyles}`}>{children}</section>
  );
}
