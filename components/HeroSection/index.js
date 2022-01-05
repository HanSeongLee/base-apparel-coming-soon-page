import React from 'react';
import styles from './style.module.scss';
import EmailForm from "../EmailForm";

const HeroSection = () => {
    return (
        <div className={styles.heroSection}>
            <picture>
                <source srcSet={'/img/hero-mobile.jpg'}
                        media={'(max-width: 568px)'}/>
                <source srcSet={'/img/hero-desktop.jpg'}
                        media={'(max-width: 992px)'}/>
                <img className={styles.heroImage}
                     src={'/img/hero-desktop.jpg'}
                     alt={''}
                />
            </picture>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    WE'RE <br/>
                    <strong>COMING SOON</strong>
                </h1>
                <p className={styles.description}>
                    Hello fellow shoppers! We're currently building our new fashion store. Add your email below to
                    stay up-to-date with announcements and our launch deals.
                </p>
                <EmailForm/>
            </div>
        </div>
    );
};

export default HeroSection;
