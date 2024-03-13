import React from 'react'
import styles from '../styles/profile.module.css';
import profile from '../assets/profilepic.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
const Profile = () => {
    return (
        <>
            <div style={{ width: "500px", padding: "20px" }}>
                <div style={{ width: "fit-content", padding: "40px" }}>
                    <div className={styles.imagecntr}>
                        <img className={styles.img} src={profile} />
                    </div>
                    <div className={styles.contentbox}>
                        <div className={styles.pt}>Any Question?</div>
                        <div className={styles.pt}>We are happy to answer you</div>
                    </div>
                    <div className={styles.contactinfo}>
                        <div className={styles.heading_contactinfo}>Contact Information</div>

                        <div className={styles.infobox}>
                            <img className={styles.contactinfo_img1} src={phone} />
                            <img className={styles.contactinfo_img2} src={mail} />
                            <img className={styles.contactinfo_img3} src={linkedin} />
                        </div>
                    </div>
                </div>
                <hr className={styles.horizontal_line} />
                <div className={styles.iconbox_flex}>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin" className={styles.logoicons}/>

                    <img width="50" height="50" src="https://img.icons8.com/ios/50/globe--v1.png" alt="globe--v1" className={styles.logoicons}/>
                

                <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/60/instagram-circle.png" alt="instagram-circle" className={styles.logoicons}/>
                </div>
            </div>



        </>
    )
}

export default Profile