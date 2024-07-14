import React from 'react';
import Styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.navbar}>
                <input type="text" name='search' placeholder='Search for...' />
                <button type='submit' className={Styles.navbarBtn}><i class="fa-solid fa-magnifying-glass"></i></button>
                <i class="fas fa-bell fa-fw" style={{marginLeft: '35%'}}></i>
                <i class="fas fa-envelope fa-fw" style={{marginLeft: '35px'}}></i>
            </div>
        </div>
    )
}

export default Navbar;







// <div className={Styles.content}>
//                 <span className={Styles.verticalLine}></span>
//             </div>