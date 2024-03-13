import React from 'react'
import styles from '../styles/contactus.module.css';
const Contactus = () => {
    return (
        <div className={styles.bg}>
        <div className={styles.maincntr}>
            <div className={styles.flexcntr}>
                <div className={styles.content}>
                    <div className={styles.heading}>CONTACT US</div>
                    <div className={styles.contentpart}>
                        <div className={styles.contentpart1}>
                            Let’s do something amazing together.<br />
                            Reach out now!<br />
                            We would love to hear from you.
                        </div>
                        <div className={styles.contentpart2}>
                            Please fill the form or send us an email at

                        </div>
                        <div className={styles.contentpart3}>

                            sales@beakball.com
                        </div>
                    </div>
                </div>

                <div className={styles.form}>
                    <div className={styles.name}>
                        <form>
                            <div className={styles.formgroup}>
                                
                                <input type="text" id="first_name" name="first_name" placeholder="First Name" required />
                                <input type="text" id="last_name" name="last_name" placeholder="Last Name" required />
                            </div>
                            <div className={styles.formgroup}>
                                
                                <input type="email" id="email" name="email" placeholder="Company Email" required />
                                <input type="tel" id="contact_number" name="contact_number" placeholder="Contact Number" required />
                            </div>
                            <div className={styles.formgroup}>
                                
                                <input type="text" id="company" name="company" placeholder="Company" required />
                            </div>
                            <div className={styles.formgroup}>
                                
                                <textarea id="message" name="message" placeholder="Please send a message to get the conversation started" rows="1" required></textarea>
                            </div>
                            <div className={styles.formgroup}>
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
</div>
        </div>
    )
}

export default Contactus