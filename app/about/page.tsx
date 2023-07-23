import { Metadata } from 'next';
import styles from './styles.module.css';

export const metadata: Metadata = {
  title: 'My About Page',
};

export default function About() {
  return (
    <main className={styles.main}>
      <h1>About</h1>
    </main>
  );
}
