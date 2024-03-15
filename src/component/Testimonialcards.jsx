import React from 'react'
import styles from '../styles/testimonialcards.module.css';

const Testimonialcards = (props) => {
  return (
    <div className={styles.card}>
        <div className={styles.content}>
        {props.message}
        </div>

        <div className={styles.bottombox}>
            <img className={styles.img} src={props.testi_img}/>
            <div className={styles.description}>
                <div className={styles.name}>
                    {props.name}
                </div>
                <div className={styles.designation}>
                {props.designation}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonialcards