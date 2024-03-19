import React, { useState } from 'react'
import styles from '../styles/Homescreen.module.css';
import style from '../styles/service.module.css';
import vrimg from '../assets/vrimg.png';
import polygonal from '../assets/polygonal.png';
import responsive from '../styles/responsive.module.css';
const Services = () => {
    const [showSection1, setShowSection1] = useState(true);
    const [showSection2, setShowSection2] = useState(false);

    const toggleSection1 = () => {
        setShowSection1(true);
        setShowSection2(false); // Ensure only one section is shown
    };

    const toggleSection2 = () => {
        setShowSection1(false); // Ensure only one section is shown
        setShowSection2(true);
    };

    // ..................................
    const [activeSection, setActiveSection] = useState('one');

    const toggleSection = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <div className={responsive.hero_service_desktop}>
                <div style={{ height: "fit-content", marginTop: "100px" }}>
                    <div className={style.maincntr}>
                        <div className={style.mainhead}>Our Services</div>
                        <div className={style.submainhead}>Online presence is the base of business and we inject creativity added with innovation to this base. </div>

                        <div className={style.switch}>
                            <div className={style.switchbtn1} onClick={toggleSection1} style={{ backgroundColor: showSection1 ? 'grey' : 'white', color: showSection1 ? 'white' : 'black' }}>VIRTUAL REALITY WEBSITE</div>
                            <div className={style.switchbtn2} onClick={toggleSection2} style={{ backgroundColor: showSection2 ? 'grey' : 'white', color: showSection2 ? 'white' : 'black' }}>3D MODELLING WEBSITE</div>
                        </div>
                        {showSection1 && (
                            <div className={style.conatiner1}>
                                <div className={styles.flexbox}>
                                    <div className={style.leftcntr}>
                                        <img className={style.vrimg} src={vrimg} />
                                        <div className={style.heading}>Virtual Reality </div>
                                        <div className={style.content}>Transfigure the overall look of your existing website. Present your infrastructure, space, product, or services in a novel way. Invite the customers to your website and make their jaws drop with the best experience-driven virtual tours of your place.</div>
                                        <div className={style.learnmore}>
                                            Lets Work Together
                                        </div>

                                    </div>
                                    <div className={style.rightcntr}>
                                        <div className={style.heading}>AI Generative HDRI Mapping- </div>
                                        <div className={style.content}>Leverage the power of Artificial Intelligence to impart a virtual tour on your website. Bring astonishing landscapes and components to your page and boost the overall visitor experience. </div>
                                        {/* <div className={style.learnmore}>
                                            Learn More
                                        </div> */}

                                        <div className={style.heading1}>Live/On-Site HDRI Mapping- </div>
                                        <div className={style.content}>Capture your place and craft a High Dynamic Range Image. Bring a more realistic feel of your place on the website to bring more customers into the fence. </div>
                                        {/* <div className={style.learnmore}>
                                            Learn More
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        )}

                        {showSection2 && (
                            <div className={style.conatiner1}>
                                <div className={styles.flexbox}>
                                    <div className={style.leftcntr}>
                                        <img className={style.vrimg} src={polygonal} />
                                        <div className={style.heading}>3D Modelling </div>
                                        <div className={style.content}>Introduce your newly launched product to the audience with its 3D model on your website. Provide better detailing of the product, shape the customer’s decision, and bring more carts to the billing counter.</div>
                                        <div className={style.learnmore}>
                                            Lets Work Together
                                        </div>

                                    </div>
                                    <div className={style.rightcntr}>
                                        <div className={style.heading}>Polygonal Modeling-</div>
                                        <div className={style.content}> Upload each thread of your product via polygonal modeling. Bring the product into customers’ palms and encourage them to buy. </div>
                                        {/* <div className={style.learnmore}>
                                            Learn More
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <div className={responsive.hero_service_mobile} style={{ padding: "27px" }}>
                <div style={{ width: "100%", height: "auto" }}>
                    <div style={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>
                        Our Services
                    </div>
                    <div style={{ color: "black", fontSize: "15px" }}>
                        Online presence is the base of business and we inject creativity added with innovation to this base.
                    </div>
                </div>

                <div style={{ display: "flex", fontSize: "15px", alignItems: "center", justifyContent: "center", backgroundColor:"grey",borderRadius:"10px",width:"100%",height:"auto",marginTop:"20px",marginBottom:"10px"}}>
                    <div style={{ borderRadius:"10px",padding: "3px",fontSize:"16px" ,cursor: "pointer", backgroundColor: activeSection === 'one' ? 'black' : 'grey',color:"white",width:"100%",paddingLeft:"10px"}} onClick={() => toggleSection('one')}>
                        Virtual Reality Website
                    </div>
                    <div style={{ borderRadius:"10px",padding: "5px",fontSize:"15px" ,cursor: "pointer", backgroundColor: activeSection === 'two' ? 'black' : 'grey',color:"white",width:"100%" }} onClick={() => toggleSection('two')}>
                        3D Modeling Website
                    </div>
                </div>
                {activeSection === 'one' &&(
                <div className='one'>
                    <div>
                        <div style={{ color: "black", fontWeight: "bold", fontSize: "25px" }}>
                            Virtual Reality
                        </div>
                        <div style={{ color: "black", fontSize: "15px" }}>
                            Transfigure the overall look of your existing website. Present your infrastructure, space, product, or services in a novel way. Invite the customers to your website and make their jaws drop with the best experience-driven virtual tours of your place.
                        </div>
                        <div style={{ border: "2px solid orange", width: "fit-content", color: "orange", fontSize: "16px", padding: "5px", marginTop: "10px" }}>
                            Lets Work Together
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "700px", height: "auto", paddingTop: "15px" }}>
                            <div style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                                AI Generated 3D World
                            </div>
                            <div style={{ color: "black", fontSize: "12px" }}>
                                Leverage the power of Artificial Intelligence to impart a virtual tour on your website. Bring astonishing landscapes and components to your page and boost the overall visitor experience.
                            </div>
                        </div>
                        <div style={{ paddingTop: "15px", marginLeft: "20px" }}>
                            <div style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                                Onsite 360 Virtual Reality Tour
                            </div>
                            <div style={{ color: "black", fontSize: "12px" }}>
                                Capture your place and craft a High Dynamic Range Image. Bring a more realistic feel of your place on the website to bring more customers into the fence.
                            </div>
                        </div>
                    </div>
                </div>
                )}

                {activeSection === 'two' && (
                <div className='two'>
                    <div>
                        <div style={{ color: "black", fontWeight: "bold", fontSize: "25px" }}>
                        3D Modelling 
                        </div>
                        <div style={{ color: "black", fontSize: "15px" }}>
                        Introduce your newly launched product to the audience with its 3D model on your website. Provide better detailing of the product, shape the customer’s decision, and bring more carts to the billing counter. 
                        </div>
                        <div style={{ border: "2px solid orange", width: "fit-content", color: "orange", fontSize: "16px", padding: "5px", marginTop: "10px" }}>
                            Lets Work Together
                        </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "700px", height: "auto", paddingTop: "15px" }}>
                            <div style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                            Polygonal Modeling
                            </div>
                            <div style={{ color: "black", fontSize: "12px" }}>
                            Upload each thread of your product via polygonal modeling. Bring the product into customers’ palms and encourage them to buy. 
                            </div>
                        </div>
                        {/* <div style={{ paddingTop: "15px", marginLeft: "20px" }}>
                            <div style={{ color: "black", fontSize: "16px", fontWeight: "bold" }}>
                                Onsite 360 Virtual Reality Tour
                            </div>
                            <div style={{ color: "black", fontSize: "12px" }}>
                                Capture your place and craft a High Dynamic Range Image. Bring a more realistic feel of your place on the website to bring more customers into the fence.
                            </div>
                        </div> */}
                    </div>
                </div>
                )}
            </div>
        </>
    )
}

export default Services;