import React from 'react'
import style from '../styles/servicenext.module.css';
import boximg1 from '../assets/boximg1.webp';
import boximg2 from '../assets/boximg2.webp';
import vrimg from '../assets/vrimg.png';
import polygonal from '../assets/polygonal.png'
const Servicenext = () => {
    return (
        <div>
            <div className={style.maincntr}>
                <div className={style.box1}>
                    <div className={style.imgbox}>
                        <img src={boximg1} className={style.box1img} />
                    </div>

                    <div className={style.contentbox}>
                        <div className={style.imgbox1}>
                            <img src={vrimg} className={style.vrimg} />
                        </div>
                        <div className={style.heading}>Virtual Reality Website </div>
                        <div className={style.content}>Transfigure the overall look of your existing website. Present your infrastructure, space, product, or services in a novel way. Invite the customers to your website and make their jaws drop with the best experience-driven virtual tours of your place. </div>
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
                        <div className={style.heading}>3D Modeling Website </div>
                        <div className={style.content}>Introduce your newly launched product to the audience with its 3D model on your website. Provide better detailing of the product, shape the customer’s decision, and bring more carts to the billing counter.</div>
                        <div className={style.learnmore}>
                            Learn More
                        </div>
                    </div>

                    <div className={style.imgbox}>
                        <img src={boximg2} className={style.box1img} />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Servicenext