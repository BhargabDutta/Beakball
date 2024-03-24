import React from 'react'
import styles from '../styles/profile.module.css';
// import profile from '../assets/profilepic.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
import ramanand from "../assets/ramanand.png";
import responsive from "../styles/responsive.module.css";
const Profile = () => {
    return (
        <>
            <div style={{ width: "500px", padding: "10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <div style={{ width: "fit-content"}}>
                    <div className={styles.imagecntr}>
                        <img className={styles.img} src={ramanand} />
                    </div>
                    <div className={styles.contentbox}>
                        <div className={styles.pt}>Any Question?</div>
                        <div className={styles.pt}>We are happy to answer you</div>
                    </div>
                </div>
                <div className={responsive.contact}>
                <div className={styles.contactinfo}>
                        <div className={styles.heading_contactinfo}>Contact Information</div>

                        <div className={styles.infobox}>

                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <img src={phone} alt="" className={styles.contactinfo_img1} />
                                <div style={{ paddingLeft: "15px" }}>
                                    <div style={{ fontSize: "20px", fontWeight: "600" }}>Phone</div>
                                    <div style={{ fontSize: "15px", fontWeight: "500" }}>+917002252195</div>
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <img src={mail} alt="" className={styles.contactinfo_img1} />
                                <div style={{ paddingLeft: "15px" }}>
                                    <div style={{ fontSize: "20px", fontWeight: "600" }}>Mail</div>
                                    <div style={{ fontSize: "15px", fontWeight: "500" }}>Ramamandsoibam@beakball.com</div>
                                </div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <img src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="" className={styles.contactinfo_img1} />
                                <div style={{ paddingLeft: "15px" }}>
                                    <div style={{ fontSize: "20px", fontWeight: "600" }}>Connect me</div>
                                    <div style={{ fontSize: "15px", fontWeight: "500" }}>Ramamandsoibam@LinkedIn.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                <hr className={styles.horizontal_line} />
                <div className={styles.iconbox_flex}>
                    <a href='https://in.linkedin.com/company/beakball?trk=public_profile_topcard-current-company' target='_blank'>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin" className={styles.logoicons} /></a>

                    <a href='https://www.youtube.com/@BeakballFable' target='_blank'>
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/globe--v1.png" alt="globe--v1" className={styles.logoicons} /></a>

                    <a href='https://www.instagram.com/beakball_fable?igsh=MTNzNnpqcDdwM3E1ZA==' target='_blank'>
                    <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/60/instagram-circle.png" alt="instagram-circle" className={styles.logoicons} /></a>
                </div>
                </div>
            </div>



        </>
    )
}

export default Profile