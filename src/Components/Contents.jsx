/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React from 'react';
import Styles from './Contents.module.css';
import dashStyles from './DashCards/DashCards.module.css';
import Navbar from './Navbar/Navbar.jsx';
import DashHeadText from './DashboardHeading/DashHeadText.jsx';
import DashCards from './DashCards/DashCards.jsx';
import DashFirstContent from './DashFirstContent/DashFirstContent.jsx';
import LineChart from './LineChart/LineChart.jsx';
import DoughnutChart from './DoughnutChart/DoughnutChart.jsx';
import DashSecondContent from './DashSecondContent/DashSecondContent.jsx';
import DashThirdContent from './DashThirdContent/DashThirdContent.jsx';
import Footer from './Footer/Footer.jsx';
// import ProgressOverview from './DashSecondContent/ProgressOverview.jsx';
// import { ProgressBarData as progress } from './ProgressBarData.js';


const CardsDetails = [
    {
        title: 'EARNINGS (MONTHLY)',
        icon: <i class="fas fa-calendar fa-2x text-gray-300"></i>,
        value: '$40,000',
        color: '#4e73df'
    },
    {
        title: 'EARNINGS (ANNUAL)',
        icon: <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>,
        value: '$215,000',
        color: '#1cc88a'
    },
    {
        title: 'TASKS',
        icon: <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>,
        progress:   <div className={dashStyles.progressBarDiv}>
                        <div className={dashStyles.progressBar}></div>
                    </div>,
        value: '50%',
        color: '#36b9cc'
    },
    {
        title: 'PENDING REQUESTS',
        icon: <i class="fas fa-comments fa-2x text-gray-300"></i>,
        value: '18',
        color: '#f6c23e'
    }
];

const DashThirdDetails = [
    {
        title: 'Illustrations',
        image: <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="illustration" />,
        paragraphOne: `Add some quality, svg illustrations to your project courtesy of ${<a href="">unDraw</a>}, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!`,
        aTag: 'Browse Illustrations on unDraw →'
    },
    {
        title: 'Development Approach',
        paragraphOne: 'SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.',
        paragraphTwo: 'Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.'
    }
]


const Contents = () => {
    return (
        <div className={Styles.content}>
            {/* Add your content here */}
            <Navbar />
            <DashHeadText />
            <div className={Styles.dash}>
                {CardsDetails.map(({title, icon, progress, value, color}) => (
                    <DashCards 
                    title={title} 
                    icon={icon}
                    progress={progress}
                    value={value} 
                    color={color} 
                    key={title} 
                    />
                ))}
            </div>
            <div className={Styles.container}>
            <DashFirstContent
                title = {'Earnings Overview'}
                column = {'col-sm-8'}
                chart={ <LineChart /> }
                />
                <DashFirstContent
                title = {'Revenue Sources'}
                column = {'col-sm-4'}
                chart={ <DoughnutChart /> }
                />
            </div>
            <div className={Styles.containerSecond}>
                <DashSecondContent column = {'col-md-6'} />
                <div className={Styles.contentDiv}>
                    {DashThirdDetails.map(({title, image, paragraphOne, paragraphTwo, aTag}) => (
                        <DashThirdContent 
                        title={title}
                        image={image}
                        paragraphOne={paragraphOne}
                        paragraphTwo={paragraphTwo}
                        aTag={aTag}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Contents;



{/* <div className="contentDivOne">
                    <DashSecondContent column = {'col-md-6'} />
                </div>
                <div className="contentDivTwo">
                    <DashThirdContent column = {'col-md-6'} />
                </div> */}