import React from 'react';
import Styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.navbar}>
                <div className={Styles.navbarInput}>
                    <input type="text" name='search' placeholder='Search for...' />
                    <button type='submit' className={Styles.navbarBtn}><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <i class="fas fa-bell fa-fw" style={{marginLeft: '30%'}}></i>
                <i class="fas fa-envelope fa-fw" ></i>
                <div className={Styles.verticalLine}></div>
                <div className={Styles.profile}>
                    <p style={{margin: 0}}>Douglas McGee</p>
                    <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;



// style={{marginLeft: '32%'}}
// style={{marginLeft: '35px'}}


// <div className={Styles.content}>
//                 <span className={Styles.verticalLine}></span>
//             </div>