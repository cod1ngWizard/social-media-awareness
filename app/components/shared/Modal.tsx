'use client';
import Link from 'next/link';
import styles from './Modal.module.css'; // Import your modal styles here
import { usePathname } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const pathname = usePathname();

  if (pathname === '/') {
    return <div className={`${styles.modal}`}></div>;
  }

  return (
    <div className={`${styles.modal} ${styles.open}`}>
      {children} <Link href='/'>Go back</Link>
    </div>
  );
};

export default Modal;
