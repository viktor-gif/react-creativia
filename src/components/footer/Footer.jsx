import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return <footer className={s.footer}>
        Creativia<span className={s.designer}>Design by Amr Srour</span>
    </footer>
}

export default Footer;