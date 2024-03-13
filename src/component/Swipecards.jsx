import React from 'react'
import styles from '../styles/swipecards.module.css';
// import thumbnail from '../assets/thumbnail-1.jpg';
const Swipecards = (props) => {

    const { backgroundColor} = props;

    const style = {
        backgroundColor: backgroundColor
    };

    return (
        <div>
            <div className={styles.card} style={style}>
                <div className={styles.contentpart}>
                    <div className={styles.heading}>{props.heading}</div>
                    <div className={styles.content}>{props.content}</div>
                </div>
                <div className={styles.imgpart}>
                    <img className={styles.img} src={props.imgsrc} />
                </div>

            </div>
        </div>
    )
}

export default Swipecards