import React from 'react'
import cardStyle from './ColorCards.module.css';

function ColorCards({title, colorCode, textColor}) {
  return (
    <div>
        <div className={cardStyle.cardContainer}>
          <div className={cardStyle.content} style={{backgroundColor: `${colorCode}`}}>
            <p style={{color: `${textColor}`}}> {title} </p>
            <br />
            <p style={{color: `${textColor}`}}> {colorCode} </p>
            </div>
        </div>
    </div>
  )
}

export default ColorCards;