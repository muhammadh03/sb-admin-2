/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './DashThirdContent.module.css';

function DashThirdContent({column, title, image, paragraphOne, paragraphTwo, aTag}) {
  return (
    <div className={column}>
            <div className={styles.container}>
                <div className={styles.contentHead}>
                    <div className={styles.content}>
                        <p> {title} </p>
                        {/* <a href="anchor" style={{color: 'rgb(191 188 188)'}}><i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" style={{cursor: 'pointer'}}></i></a> */}
                    </div>
                </div>
                <div className={styles.contentBody}>
                    <div className={styles.imgDiv}>
                        {image}
                    </div>
                    <div className={styles.paraDiv}>
                        <p className={styles.paraOne}>
                        {paragraphOne}
                        </p>
                        <br />
                        <br />
                        <p className={styles.paraTwo}>
                            {paragraphTwo}
                        </p>
                    </div>
                    <a href=""> {aTag} </a>
                </div>
            </div>
        </div>
  )
}

export default DashThirdContent;