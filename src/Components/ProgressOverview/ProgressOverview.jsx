import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import styles from './ProgressOverview.module.css';

const progressData = [
    {
        title: 'Server Migration',
        percentage: '20%',
        color: '#e74a3b'
    },
    {
        title: 'Sales Tracking',
        percentage: '40%',
        color: '#f6c23e'
    },
    {
        title: 'Customer Database',
        percentage: '60%',
        color: '#4e73df'
    },
    {
        title: 'Payout Details',
        percentage: '80%',
        color: '#36b9cc'
    },
    {
        title: 'Account Setup',
        percentage: 'Complete!',
        color: '#1cc88a'
    }
];

const ProgressOverview = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h6 className={styles.cardTitle}>Projects</h6>
                </div>
                <div className={styles.cardBody}>
                    {progressData.map((item, index) => (
                        <ProgressBar
                            key={index}
                            title={item.title}
                            percentage={item.percentage}
                            color={item.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgressOverview;
