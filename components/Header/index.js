import React from "react";
import styles from './style.module.scss';
import Link from 'next/link';
import Logo from '/public/logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href={'/'}>
                <a className={styles.link}
                   aria-label={'base apparel'}
                >
                    <Logo className={styles.logo}/>
                </a>
            </Link>
        </header>
    );
};

export default Header;
