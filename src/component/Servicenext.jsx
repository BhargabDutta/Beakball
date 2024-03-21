import React from 'react'
import style from '../styles/servicenext.module.css';
import boximg1 from '../assets/boximg1.webp';
import boximg2 from '../assets/boximg2.webp';
import vrimg from '../assets/vrimg.png';
import polygonal from '../assets/polygonal.png';
import success2 from '../assets/success2.png';
import servicenext2 from '../assets/servicenext2.png';
import servicenextplay from '../assets/servicenextplay.png';
import responsive from "../styles/responsive.module.css";
const Servicenext = () => {
    return (
        <>
            <div className={responsive.servicenext_desktop}>
                <div className={style.maincntr}>
                    <div className={style.box1}>
                        <div className={style.imgbox}>
                            <img src={success2} className={style.box1img} />
                            <a href='https://hotel.beakball.com/' target='_blank'>
                            <img src={servicenextplay} style={{ width: "100px", height: "auto", position: "absolute", zIndex: "2", left: "400px", marginTop: "150px", cursor: "pointer" }} /></a>
                        </div>

                        <div className={style.contentbox}>
                            <div className={style.imgbox1}>
                                <img src={vrimg} className={style.vrimg} />
                            </div>
                            <div className={style.heading}>Glance into VR </div>
                            <div className={style.content}>From climbing through the hillocks of distant planets to walking through history as it unfolds and roaming around any campus of the world, the world of VR is vast. Bring life to the pictures and let the user breathe in the actual wind.</div>
                            {/* <div className={style.learnmore}>
                                Learn More
                            </div> */}
                        </div>
                    </div>

                    <div className={style.box1}>


                        <div className={style.contentbox}>
                            <div className={style.imgbox1}>
                                <img src={polygonal} className={style.vrimg} />
                            </div>
                            <div className={style.heading}>3D Modeling Preview</div>
                            <div className={style.content}>Millions of pictures merged together to deliver a keen detail of existent. 3D Modeling is the art that thrives on the edge of technology and imagination. Shape the customer decision by fostering every bit of your product on the website.</div>
                            {/* <div className={style.learnmore}>
                                Learn More
                            </div> */}
                        </div>

                        <div className={style.imgbox}>
                            <img src={servicenext2} className={style.box1img} />
                            <a href='https://car.beakball.com/' target='_blank'>
                            <img src={servicenextplay} style={{ width: "100px", height: "auto", position: "absolute", zIndex: "2", right: "350px", marginTop: "250px", cursor: "pointer" }} /></a>
                        </div>
                    </div>
                </div>


            </div>

            <div className={responsive.servicenext_mobile}>
                <div style={{ backgroundColor: "#202020", width: "100%", height: "auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ marginTop: "30px",marginBottom:"30px" }}>
                        <div style={{ fontSize: "20px", color: "white", fontWeight: "bold", paddingBottom: "20px" }}>Glance into VR </div>

                        <div style={{ paddingBottom: "10px",position:"relative" }}>
                            <img src={success2} style={{ width: "380px", height: "auto", borderRadius: "20px" }} />
                            <a href='https://hotel.beakball.com/' target='_blank'>
                            <img src={servicenextplay} style={{ position: "absolute", zIndex: "2", left: "50%", top: "50%", transform: "translate(-50%, -50%)", cursor: "pointer",height:"auto",width:"50px" }} /></a>
                        </div>
                        <div style={{ fontSize: "15px", color: "white", width: "350px", paddingBottom: "20px", padding: "10px" }}>
                            From climbing through the hillocks of distant planets to walking through history as it unfolds and roaming around any campus of the world, the world of VR is vast. Bring life to the pictures and let the user breathe in the actual wind.
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {/* <div style={{ border: "2px solid white", color: "white", paddingLeft: "10px", paddingRight: "10px", width: "fit-content" }}>
                                Learn more
                            </div> */}
                        </div>
                    </div>
                    <hr style={{border:"2px solid white",width:"80%"}}/>
                    <div style={{ marginTop: "30px",marginBottom:"30px" }}>
                        <div style={{ fontSize: "20px", color: "white", fontWeight: "bold", paddingBottom: "20px" }}>3D Modeling Preview</div>

                        <div style={{ paddingBottom: "10px",position:"relative" }}>
                            
                            <img src={servicenext2} style={{ width: "380px", height: "auto", borderRadius: "20px" }} />
                            <a href='https://car.beakball.com/' target='_blank'>
                            <img src={servicenextplay} style={{ position: "absolute", zIndex: "2", left: "50%", top: "50%", transform: "translate(-50%, -50%)", cursor: "pointer",height:"auto",width:"50px" }} /></a>
                        </div>
                        <div style={{ fontSize: "15px", color: "white", width: "350px", paddingBottom: "20px", padding: "10px" }}>
                        Millions of pictures merged together to deliver a keen detail of existent. 3D Modeling is the art that thrives on the edge of technology and imagination. Shape the customer decision by fostering every bit of your product on the website. 

                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {/* <div style={{ border: "2px solid white", color: "white", paddingLeft: "10px", paddingRight: "10px", width: "fit-content" }}>
                                Learn more
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Servicenext