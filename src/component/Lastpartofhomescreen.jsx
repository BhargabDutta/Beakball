import React from 'react'
import styles from '../styles/lastpartofhomescreen.module.css';
import Logo from '../assets/Logo.webp';
const Lastpartofhomescreen = () => {
    return (
        <>
            {/* <div className={styles.bg}>
            </div> */}
            <div className={styles.bg} style={{ width: "100%", overflow: "hidden" }}>
                <div className={styles.box}>
                    <div className={styles.text}>“What you can imagine,<br />
                        We bring it to you”</div>
                    <div className={styles.bottomcntr}>
                        <div className={styles.logo}>
                            <img className={styles.img} src={Logo} />
                            <div className={styles.company}>Beakball</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Lastpartofhomescreen;