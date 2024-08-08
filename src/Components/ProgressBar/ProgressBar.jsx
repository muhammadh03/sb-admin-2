import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ title, percentage, color }) => {
    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressTitle}>
                <span>{title}</span>
                <span>{percentage}</span>
            </div>
            <div className={styles.progress}>
                <div
                    className={styles.progressFill}
                    style={{ width: percentage, backgroundColor: color }}
                ></div>
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    title: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default ProgressBar;
