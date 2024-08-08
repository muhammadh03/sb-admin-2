import React from 'react';
import Styles from './DashHeadText.module.css';



const DashHeadText = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.dashHeaderContent}>
                <h1 style={{margin: 0}}>Dashboard</h1>
                <button className={Styles.dashBtn}><i class="fa-solid fa-download"></i> Generate Report</button>
            </div>
        </div>
    )
};

export default DashHeadText;