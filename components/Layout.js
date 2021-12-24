
import styles from '../styles/Home.module.css'
import Header from './Header';
import { Nav } from './Nav';
import Image from "next/image";
function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
