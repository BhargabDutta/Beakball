import React from 'react'
import about1 from "../assets/about1.jpeg";
import about2 from "../assets/about2.mp4";
import about3 from "../assets/about3.jpeg";
import about4 from "../assets/about4.jpeg";
import ramanand from "../assets/ramanand.png";
import bhargab from "../assets/bhargab.png";
import styles from "../styles/about.module.css";
const About = () => {
    return (
        <>
            <div className={styles.full}>
                <div className={styles.about_hero}>
                    <img src={about1} alt="" className={styles.abouthero_img} />

                    <div className={styles.abouthero_content}>
                        <div className={styles.about_head}>About Us</div>
                        <div className={styles.about_welcome}>WELCOME TO BEAKBALL</div>
                        <div className={styles.paragraph}>Experience on a transcendent voyage with Beakball, where reality seamlessly intertwines with the extraordinary. Beakball isn't just a brand; it's an odyssey into the boundless realms of 3D Virtual Reality.
                            At Beakball, we are more than a company; we are architects of digital innovation, creators of immersive experiences, and pioneers of the virtual reality (VR) landscape. Our journey is marked by a relentless pursuit of pushing boundaries and redefining the way individuals and businesses interact with the digital world.
                        </div>
                    </div>
                </div>
            </div>
            {/* ............................ */}
            <div className={styles.full}>
                <div className={styles.mission}>
                    <div className={styles.about_head}>
                        OUR MISSION
                    </div>
                    <div className={styles.about_welcome}>
                        Innovation Beyond Boundaries
                    </div>
                    <div className={styles.paragraph}>
                        Our mission is to transcend the ordinary, introducing transformative technologies that open new dimensions of possibility. Through the lens of virtual reality, we aim to reshape the way people engage, learn, and experience the digital realm.

                    </div>
                </div>
            </div>
            {/* .............................. */}

            <div className={styles.setapart}>
                <div className={styles.setapart_content}>
                    <div>
                        <div className={styles.setapart_head}>
                            What Sets Us Apart?
                        </div>
                        <div className={styles.paragraph_setapart}>
                            <ul>
                                <li>
                                    Visionary Leadership: Led by a team of visionaries, including BELA (Beacon of Expertise Learning and Assistant), Beakball combines passion with expertise, steering the course of digital evolution.
                                </li>
                                <li>
                                    Cutting-Edge Technology: We stand at the forefront of technology, leveraging the latest advancements in virtual reality to create unparalleled experiences.
                                </li>
                                <li>
                                    Client-Centric Approach: Your vision is our priority. Beakball is committed to understanding your unique needs and delivering tailor-made solutions that exceed expectations.
                                </li>
                                <li>
                                    Innovative Learning with BELA: Our revolutionary learning assistant, BELA, adds a unique dimension to your experience.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.videocntr}>
                <video src={about2} className={styles.video_about} autoPlay loop></video>
                </div>
            </div>
            {/* ............................... */}
            <div className={styles.our}>
                <img src={about3} alt="" className={styles.ourimg} />
                <div>
                    <div className={styles.about_head}>
                        Our Journey
                    </div>
                    <div className={styles.about_welcome}>
                        From Ideation to Innovation
                    </div>
                    <div className={styles.paragraph_our}>
                        Beakball's journey is a testament to resilience, adaptability, and the unwavering belief in the power of innovation. Starting as innovative product Development Company, an e-commerce platform, we have evolved into a tech company, specializing in VR tours and 3D web development.
                    </div>
                </div>
            </div>

            <div className={styles.our}>
                <img src={about4} alt="" className={styles.ourimg} />
                <div>
                    <div className={styles.about_head}>
                        Our Vision
                    </div>
                    <div className={styles.about_welcome}>
                        Shaping the Digital Future
                    </div>
                    <div className={styles.paragraph_our}>

                        Our vision extends beyond the present, reaching into a future where digital experiences are limitless. Beakball aspires to be a catalyst for change, pushing the boundaries of what's possible in the digital landscape.
                    </div>
                </div>
            </div>


            <div className={styles.contributors}>
                <div className={styles.profiles}>
                    <img src={ramanand} alt="" className={styles.contri_img} />
                    <div className={styles.name_contri}>
                        Ramanand Soibam: Founder and CEO,
                    </div>
                    <div className={styles.name_contri}>
                        Mechanical Engineer
                    </div>
                    <div className={styles.paragraph_contri}>

                        Engineering Visionary: The driving force behind Beakball, is a seasoned Mechanical Engineer with a relentless passion for innovation. His leadership propels our journey into uncharted territories of virtual reality.
                    </div>
                </div>

                <div className={styles.profiles}>
                    <img src={bhargab} alt="" className={styles.contri_img} />
                    <div className={styles.name_contri}>
                    Bharghab Dutta: Co-founder and CTO,
                    </div>
                    <div className={styles.name_contri}>
                    Computer Science Engineer
                    </div>
                    <div className={styles.paragraph_contri}>

                        
 Digital Maestro: Our Technical Associate with a background in Computer Science and Engineering, brings technical brilliance to the forefront. His expertise ensures the seamless integration of cutting-edge technology into our solutions.
                    </div>
                </div>
            </div>
        </>
    )
}

export default About