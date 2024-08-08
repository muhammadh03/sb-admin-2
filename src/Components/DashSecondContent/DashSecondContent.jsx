import React from 'react'
import PropTypes from 'prop-types';
import styles from './DashSecondContent.module.css';
import ProgressOverview from '../ProgressOverview/ProgressOverview.jsx';
import ColorCards from '../ColorCards/ColorCards.jsx';


const ColorCardsDetailsOne = [
    {
        title: 'Primary',
        colorCode: '#4e73df',
    },
    {
        title: 'Info',
        colorCode: '#36b9cc'
    },
    {
        title: 'Danger',
        colorCode: '#e74a3b'
    },
    {
        title: 'Light',
        colorCode: '#f8f9fc',
        textColor: '#5a5c69'
    },
];

const ColorCardsDetailsTwo = [
     {
        title: 'Success',
        colorCode: '#1cc88a'
    },
    {
        title: 'Warning',
        colorCode: '#f6c23e'
    },
    {
        title: 'Secondary',
        colorCode: '#858796'
    },
    {
        title: 'Dark',
        colorCode: '#5a5c69'
    }
];

function DashSecondContent({column}) {
  return (
    <div className={column}>
        <div className={styles.container}>
            <ProgressOverview />
            <div className={styles.colorCardContainer}>
                <div className={styles.contentOne}>
                {ColorCardsDetailsOne.map(({title, colorCode, textColor}) => (
                    <ColorCards
                        title={title}
                        colorCode={colorCode}
                        textColor={textColor}
                        key={title}
                    />
                ))}
                </div>
                <div className={styles.contentTwo}>
                {ColorCardsDetailsTwo.map(({title, colorCode}) => (
                    <ColorCards
                        title={title}
                        colorCode={colorCode}
                        key={title}
                    />
                ))}
                </div>
            </div>
        </div>
        {/* <div className={styles.container}>
            <div className={styles.contentHead}>
                <div className={styles.content}>
                    <p>Projects</p>
                </div>
            </div>
            <div className={styles.contentBody}>
                <p> {title} </p>
                <div class="progress">
                    {children}
                </div>
            </div>
        </div> */}
    </div>
  )
};

DashSecondContent.propTypes = {
    column: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node
};

export default DashSecondContent;



// <div className="progress-bar" role="progressbar" style={{width: '15%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
// <div className="progress-bar bg-success" role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>