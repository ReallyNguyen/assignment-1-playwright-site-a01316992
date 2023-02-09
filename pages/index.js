import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import "@/styles/About.module.css";
import Background from "@/public/background-images/backgroundMountain.jpg";
import Menu from "@/components/Menu/index.js";
import Grad from "@/components/Grad/index.js";
import Arrow from "@/public/icons/down.png";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="MDIA 2109" />
        <meta property='og:title' content="Assignment #1 - Home Page" />
        <meta property='og:description' content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Image
        src={Background}
        fill
        style={{
          zIndex: -10,
        }}
      />

      <main className={styles.main}>

        <div className={styles.header}>
          <Menu></Menu>
          <Grad></Grad>
        </div>

        <div className={styles.content}>
          <div className={styles.title}>
            <h1>
              An investment in <br /> knowledge pays the best <br /> interest.
            </h1>
          </div>

          <div className={styles.text}>
            <p>
              Different than a college or university, the British Columbia <br /> Institute of Technology offers practical, flexible, applied
              <br /> education with instructors who have direct, hands-on <br /> experience in their field.
            </p>
          </div>

          <div className={styles.buttons}>
            <a>
              <button className={styles.button} onClick={() => router.push('http://localhost:3000/about')}>
                More About Us
              </button>
              <button className={styles.button} onClick={() => router.push('http://localhost:3000/contact')}>
                Contact Us
              </button>
            </a>
          </div>
        </div>

        <a className={styles.arrow} href="/about">
          <span>
            <Image src={Arrow} />
          </span>
        </a>
      </main>
    </>
  )
}