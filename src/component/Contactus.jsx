// import React from 'react'
// import styles from '../styles/contactus.module.css';
// import responsive from '../styles/responsive.module.css';
// const Contactus = () => {

//     return (
//         <>
//             <div className={responsive.contactus_desktop}>
//                 <div className={styles.bg}>
//                     <div className={styles.maincntr}>
//                         <div className={styles.flexcntr}>
//                             <div className={styles.content}>
//                                 <div className={styles.heading}>CONTACT US</div>
//                                 <div className={styles.contentpart}>
//                                     <div className={styles.contentpart1}>
//                                         Let’s do something amazing together.<br />
//                                         Reach out now!<br />
//                                         We would love to hear from you.
//                                     </div>
//                                     <div className={styles.contentpart2}>
//                                         Please fill the form or send us an email at

//                                     </div>
//                                     <div className={styles.contentpart3}>

//                                         sales@beakball.com
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className={styles.form}>
//                                 <div className={styles.name}>
//                                     <form method='post' action='https://script.google.com/macros/s/AKfycbztT51PuK2hI47ftUS1X4bwkWQLrWG8Tup297QZqYhOAI_IqrQyna3u3oO2AvNcz2cjvg/exec' name='contact-form'>
//                                         <div className={styles.formgroup}>

//                                             <input type="text" id="first_name" name="first_name" placeholder="First Name" required />
//                                             <input type="text" id="last_name" name="last_name" placeholder="Last Name" required />
//                                         </div>
//                                         <div className={styles.formgroup}>

//                                             <input type="email" id="email" name="email" placeholder="Company Email" required />
//                                             <input type="tel" id="contact_number" name="contact_number" placeholder="Contact Number" required />
//                                         </div>
//                                         <div className={styles.formgroup}>

//                                             <input type="text" id="company" name="company" placeholder="Company" required />
//                                         </div>
//                                         <div className={styles.formgroup}>

//                                             <textarea id="message" name="message" placeholder="Please send a message to get the conversation started" rows="1" required></textarea>
//                                         </div>
//                                         <div className={styles.formgroup}>
//                                             <input type="submit" value="Submit" />
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className={responsive.contactus_mobile}>
//                 <div className={styles.bg}>
//                     <div>
//                         <div style={{margin:"15px"}}>
//                             <div style={{marginTop:"60px",fontSize:"25px",color:"black",fontWeight:"bold"}}>
//                                 CONTACT US
//                             </div>
//                             <div style={{fontSize:"15px",color:"black",paddingBottom:"20px",padding:"20px"}}>

//                                 Let’s do something amazing together. Reach out now! We would love to hear from you.

//                             </div>
//                             <div style={{fontSize:"15px",color:"black",paddingBottom:"20px",padding:"20px"}}>

//                                 Please fill the form or send us an email at
//                                 sales@beakball.com

//                             </div>


//                             <div>
//                             <div style={{padding:"10px",backgroundColor:"white",borderRadius:"30px"}}>
//                                 <div className={styles.name}>
//                                     <form>
//                                         <div className={styles.formgroup}>

//                                             <input type="text" id="first_name" name="first_name" placeholder="First Name" required />
//                                             <input type="text" id="last_name" name="last_name" placeholder="Last Name" required />
//                                         </div>
//                                         <div className={styles.formgroup}>

//                                             <input type="email" id="email" name="email" placeholder="Company Email" required />
//                                             <input type="tel" id="contact_number" name="contact_number" placeholder="Contact Number" required />
//                                         </div>
//                                         <div className={styles.formgroup}>

//                                             <input type="text" id="company" name="company" placeholder="Company" required />
//                                         </div>
//                                         <div className={styles.formgroup}>

//                                             <textarea id="message" name="message" placeholder="Please send a message to get the conversation started" rows="4" required></textarea>
//                                         </div>
//                                         <div className={styles.formgroup}>
//                                             <input type="submit" value="Submit" />
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Contactus;


import React, { useEffect } from 'react';
import styles from '../styles/contactus.module.css';
import responsive from '../styles/responsive.module.css';

const Contactus = () => {
    useEffect(() => {
        const scriptURL = "https://script.google.com/macros/s/AKfycbztT51PuK2hI47ftUS1X4bwkWQLrWG8Tup297QZqYhOAI_IqrQyna3u3oO2AvNcz2cjvg/exec";
        const formDesktop = document.forms["contact-form-desktop"];
        const formMobile = document.forms["contact-form-mobile"];

        const handleSubmit = (e, form) => {
            e.preventDefault();
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
                .then(response => alert("Thank you! Your response has been submitted successfully"))
                .then(() => { window.location.reload(); })
                .catch(error => console.error("Error!", error.message));
        };

        if (formDesktop) {
            formDesktop.addEventListener("submit", (e) => handleSubmit(e, formDesktop));
        }

        if (formMobile) {
            formMobile.addEventListener("submit", (e) => handleSubmit(e, formMobile));
        }

        return () => {
            if (formDesktop) {
                formDesktop.removeEventListener("submit", handleSubmit);
            }
            if (formMobile) {
                formMobile.removeEventListener("submit", handleSubmit);
            }
        };
    }, []);

    return (
    
            <>
            <div className={responsive.contactus_desktop}>
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
                                    <form method='post' action='https://script.google.com/macros/s/AKfycbztT51PuK2hI47ftUS1X4bwkWQLrWG8Tup297QZqYhOAI_IqrQyna3u3oO2AvNcz2cjvg/exec' name='contact-form-desktop'>
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
            </div>

            <div className={responsive.contactus_mobile}>
                <div className={styles.bg}>
                    <div>
                        <div style={{margin:"15px"}}>
                            <div style={{marginTop:"60px",fontSize:"25px",color:"black",fontWeight:"bold"}}>
                                CONTACT US
                            </div>
                            <div style={{fontSize:"15px",color:"black",paddingBottom:"20px",padding:"20px"}}>

                                Let’s do something amazing together. Reach out now! We would love to hear from you.

                            </div>
                            <div style={{fontSize:"15px",color:"black",paddingBottom:"20px",padding:"20px"}}>

                                Please fill the form or send us an email at
                                sales@beakball.com

                            </div>


                            <div>
                            <div style={{padding:"10px",backgroundColor:"white",borderRadius:"30px"}}>
                                <div className={styles.name}>
                                    <form method='post' action='https://script.google.com/macros/s/AKfycbztT51PuK2hI47ftUS1X4bwkWQLrWG8Tup297QZqYhOAI_IqrQyna3u3oO2AvNcz2cjvg/exec' name='contact-form-mobile'>
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

                                            <textarea id="message" name="message" placeholder="Please send a message to get the conversation started" rows="4" required></textarea>
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
                </div>
            </div>

        </>
        
    );
}

export default Contactus;
