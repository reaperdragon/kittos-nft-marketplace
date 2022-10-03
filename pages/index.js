import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kittos </title>
        <link rel="shortcut icon" href="logo.png" />
      </Head>
      
    </div>
  );
}
