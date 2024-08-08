import React from 'react';
import Style from './Footer.module.css';

function Footer() {
  return (
    <div className={Style.container}>
        <div className={Style.content}>
            <p>Copyright © Your Website 2021</p>
        </div>
    </div>
  )
}

export default Footer;