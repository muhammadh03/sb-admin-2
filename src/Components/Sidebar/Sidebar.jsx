/* eslint-disable no-lone-blocks */
import React from "react";
import Styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.sidebar}>
                <div className={Styles.sidebarHeader}>
                    <i
                        class="fas fa-laugh-wink"
                        style={{ transform: "rotate(-15deg)", fontSize: "2rem" }}
                    ></i>
                    <h3>
                        SB ADMIN <sup>2</sup>
                    </h3>
                </div>
                <hr />
                <div className={Styles.dashTextDiv}>
                    <i class="fas fa-tachometer-alt"></i>
                    <h4 style={{ fontWeight: 'bold' }}>Dashboard</h4>
                </div>
                <hr />
                <h6>INTERFACE</h6>
                <div className={Styles.componentDiv}>
                    <i class="fa-solid fa-gear"></i>
                    <h4>Components</h4>
                    <i class="fa-solid fa-chevron-right" style={{marginLeft: '60px', fontSize: '12px'}}></i>
                </div>
                <div className={Styles.utilitiesDiv}>
                    <i class="fa-solid fa-wrench"></i>
                    <h4>Utilities</h4>
                    <i class="fa-solid fa-chevron-right" style={{marginLeft: '95px', fontSize: '12px'}}></i>
                </div>
                <hr />
                <h6>ADDONS</h6>
                <div className={Styles.pagesDiv}>
                    <i class="fa-solid fa-folder"></i>
                    <h4>Pages</h4>
                    <i class="fa-solid fa-chevron-right" style={{marginLeft: '105px', fontSize: '12px'}}></i>
                </div>
                <div className={Styles.chartsDiv}>
                    <i class="fas fa-fw fa-chart-area"></i>
                    <h4>Charts</h4>
                </div>
                <div className={Styles.tablesDiv}>
                    <i class="fas fa-fw fa-table"></i>
                    <h4>Tables</h4>
                </div>
                <hr />
                <button className={Styles.sidebarBtn}><i class="fa-solid fa-angle-left"></i></button>
            </div>
        </div>
    );
};

export default Sidebar;





{/* <ul>
    <li>CUSTOM COMPONENTS</li>
    <li>Buttons</li>
    <li>Cards</li>
</ul> */}


{/* <ul>
    <li>CUSTOM UTILITIES</li>
    <li>Colors</li>
    <li>Borders</li>
    <li>Animations</li>
    <li>Others</li>
</ul> */}


{/* <ul>
    <li>LOGIN SCREEN</li>
    <li>Login</li>
    <li>Register</li>
    <li>Forgot Password</li>
    <li>OTHER PAGES</li>
    <li>404 Page</li>
    <li>Blank Page</li>
</ul> */}