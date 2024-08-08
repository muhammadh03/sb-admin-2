/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styles from './DashFirstContent.module.css';


const EarnRevenueCard = ({title, column, chart, children}) => {
    return (
        <div className={column}>
            <div className={styles.container}>
                <div className={styles.contentHead}>
                    <div className={styles.content}>
                        <p> {title} </p>
                        <a href="anchor" style={{color: 'rgb(191 188 188)'}}><i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" style={{cursor: 'pointer'}}></i></a>
                    </div>
                </div>
                <div className={styles.contentBody}>
                    { chart }
                    {/* {children} */}
                </div>
            </div>
        </div>
    )
}

export default EarnRevenueCard;