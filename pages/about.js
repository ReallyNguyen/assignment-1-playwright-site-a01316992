import styles from "@/styles/About.module.css";
import "@/styles/About.module.css";
import Menu from "@/components/Menu/index.js";
import Grad from "@/components/Grad/index.js";
import Head from "next/head";
import Image from "next/Image";
import jsonData from "@/data/data.json";
import { useState, useEffect } from "react";
import leftarrow from "@/public/icons/leftArrow.png";
import rightarrow from "@/public/icons/rightArrow.png";
import uparrow from "@/public/icons/upwardArrow.png";
import downarrow from "@/public/icons/down.png";
import { useRouter } from 'next/router'

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [info, updateInfo] = useState([]);
    const carousel = require(`@/public/carousel-images/${currentSlide}.jpg`);

    useEffect(() => {
        updateInfo(jsonData);
    }, []);

    const clickArrow = (direction) => {
        if (direction === "left") {
            if (currentSlide === 0) {
                setCurrentSlide(info.length - 1);
            } else {
                setCurrentSlide(currentSlide - 1);
            }
        } else {
            if (currentSlide === info.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }
    };

    const router = useRouter()

    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="author" content="MDIA 2109" />
                <meta property="og:title" content="Assignment #1 - About Us Page" />
                <meta
                    property="og:description"
                    content="BCIT Digital Design and Development Diploma"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className={styles.main}>
                <header className={styles.header}>
                    <Menu></Menu>
                    <Grad></Grad>
                </header>
                <div className={styles.about}>
                    <div className={styles.about_content}>
                        <div></div>
                        <h1>About Us</h1>
                        <div></div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.about_intro}>
                            <p> We are proud to deliver an education that goes beyond textbooks and classrooms. </p>
                            <p> Our students gain the technical skills, real-world experience, and problem-solving ability <br />
                                needed to embrace complexity and lead innovation in a rapidly changing workforce.
                            </p>
                            <p> Through close collabortion with industry, our network of alumni and partners continue to <br /> achieve global success.</p>
                        </div>
                        <div className={styles.info_sessions}>
                            <h2>Information Sessions</h2>
                            <p> Information sessions are a simple way to figure out the next step along your career path.
                                <br />Learn more about the programs that intrest you. </p>
                        </div>
                        <div className={styles.big_info}>
                            <h3>Big info</h3>
                            <p> Big info is the largest program expo and information session at BCIT. It's your change to find
                                <br /> out about all our programs - from business, computing, and health to engineering, trades, <br /> and applied sciences. </p>
                            <p> If you missed our fall event the next Big Info is scheduled to return on Febuary 15, 2023. </p>
                        </div>
                        <div className={styles.campus_tours}>
                            <h2>Campus Tours</h2>
                            <p> Tours run weekdays September to May, on our Burnaby campus, See BCIT in person and get a <br /> taste of camus life.</p>
                        </div>
                    </div>
                    <div className={styles.carousel}>
                        <Image className={styles.carousel_image} src={carousel} />
                        <div id="carouselImage">
                            <div className={styles.carousel_contents}>
                                <Image
                                    src={leftarrow} className={styles.left_arrow}
                                    onClick={() => clickArrow("left")}
                                />
                                {info.map((caption, index) => {
                                    if (index === currentSlide) {
                                        return (
                                            <>
                                                <Image />
                                                <div key={index} id="testOnImageHere">
                                                    <div>
                                                        {index === currentSlide && caption.value}
                                                    </div>

                                                </div>
                                            </>
                                        );
                                    }
                                })}
                                <Image
                                    src={rightarrow} className={styles.right_arrow}
                                    onClick={() => clickArrow("right")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.departments}>
                        <div></div>
                        <h1>Departments</h1>
                        <div></div>
                    </div>
                    <div className={styles.departments_list}>
                        <ul>
                            <li>Applied & Natural Sciences</li>
                            <li>Business & Media</li>
                            <li>Computing & IT</li>
                            <li>Engineering</li>
                            <li>Health Sciences</li>
                            <li>Trades & Apprenticeships</li>
                        </ul>
                    </div>
                </div>
                <a>
                    <span className={styles.arrow_vertical}>
                        <Image src={uparrow} className={styles.arrow_up} onClick={() => router.push('http://localhost:3000/')} />
                        <Image src={downarrow} className={styles.arrow_down} onClick={() => router.push('http://localhost:3000/contact')} />
                    </span>
                </a>
            </main>
        </>
    );
}
