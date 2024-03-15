import React from 'react'
import style from '../styles/servicenext.module.css';
import boximg1 from '../assets/boximg1.webp';
import boximg2 from '../assets/boximg2.webp';
import vrimg from '../assets/vrimg.png';
import polygonal from '../assets/polygonal.png';
import success2 from '../assets/success2.png';
import servicenext2 from '../assets/servicenext2.png';
const Servicenext = () => {
    return (
        <div>
            <div className={style.maincntr}>
                <div className={style.box1}>
                    <div className={style.imgbox}>
                        <img src={success2} className={style.box1img} />
                    </div>

                    <div className={style.contentbox}>
                        <div className={style.imgbox1}>
                            <img src={vrimg} className={style.vrimg} />
                        </div>
                        <div className={style.heading}>Glance into VR </div>
                        <div className={style.content}>From climbing through the hillocks of distant planets to walking through history as it unfolds and roaming around any campus of the world, the world of VR is vast. Bring life to the pictures and let the user breathe in the actual wind.</div>
                        <div className={style.learnmore}>
                            Learn More
                        </div>
                    </div>
                </div>

                <div className={style.box1}>


                    <div className={style.contentbox}>
                        <div className={style.imgbox1}>
                            <img src={polygonal} className={style.vrimg} />
                        </div>
                        <div className={style.heading}>3D Modeling Preview</div>
                        <div className={style.content}>Millions of pictures merged together to deliver a keen detail of existent. 3D Modeling is the art that thrives on the edge of technology and imagination. Shape the customer decision by fostering every bit of your product on the website.</div>
                        <div className={style.learnmore}>
                            Learn More
                        </div>
                    </div>

                    <div className={style.imgbox}>
                        <img src={servicenext2} className={style.box1img} />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Servicenext