import React from 'react';
import s from './IntroBtns.module.css'

const IntroBtns = () => {
    return <div className={s.introBtns}>
        <a href='https://www.novacreativa.it/portfolio-features/'>
            <button className={s.button}>
            features
        </button></a>
        <a href='https://psdrepo.com/free-psd/creativia-one-page-template-freebie/'>
            <button className={s.button}>
            free psd
        </button></a>
    </div>
}

export default IntroBtns;