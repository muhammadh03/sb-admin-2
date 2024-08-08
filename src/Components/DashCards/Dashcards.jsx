import React from 'react';
import Styles from './DashCards.module.css';



const DashCards = ({title, icon, progress, value, color}) => {
    return (
        <div className={Styles.container} style={{borderLeft: `4px solid ${color}`}}>
            <div className={Styles.dashCards}>
                <div className={Styles.textContent}>
                    <p style={{fontSize: '10px', fontWeight: '600', color: `${color}`}}> {title} </p>
                    {icon}
                    {progress}
                    <br />
                    <p style={{fontSize: '21px', fontWeight: '600', opacity: '0.7'}}> {value} </p>
                    
                </div>
                {/* <div className={Styles.contentIcon}>
                    <i class="fa-solid fa-calendar" ></i>
                </div> */}
            </div>
        </div>
    )
};

export default DashCards;