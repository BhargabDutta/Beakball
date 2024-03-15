import React from 'react'
import "../styles/successpt3.css";
import success1 from "../assets/success1.png";
import success2 from "../assets/success2.png";
import success3 from "../assets/success3.png";
const Successpt3 = () => {
  return (
    <div>
        <section>
    <div className="container" style={{overflow:"hidden"}}>
        <div className="carousel">
            <input type="radio" name="slides" checked="checked" id="slide-1"/>
            <input type="radio" name="slides" id="slide-2"/>
            <input type="radio" name="slides" id="slide-3"/>
            {/* <input type="radio" name="slides" id="slide-4"/>
            <input type="radio" name="slides" id="slide-5"/>
            <input type="radio" name="slides" id="slide-6"/> */}
            <ul className="carousel__slides">
                <li className="carousel__slide">
                    <figure>
                        <div>
                            <img src={success1} alt="" style={{width:"800px",height:"auto"}}/>
                        </div>
                        <figcaption style={{fontWeight:"bold"}}>
                        BARAK VALLEY ENGINEERING COLLEGE
                            <span className="credit">Campus Tour with Voice Assistance guide</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                        <img src={success2} alt="" style={{width:"800px",height:"auto"}}/>
                        </div>
                        <figcaption style={{fontWeight:"bold"}}>
                        Hotel Building Sample
                            <span className="credit">Hotel services and facilities</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                        <img src={success3} alt="" style={{width:"800px",height:"auto"}}/>
                        </div>
                        <figcaption style={{fontWeight:"bold"}}>
                        Virtual Theatre for Movie Premier
                            <span className="credit">Virtual Movie trailers and ticketing system</span>
                        </figcaption>
                    </figure>
                </li>
                {/* <li className="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1045/800/450" alt=""/>
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span className="credit">Photo: Aleksandra Boguslawska</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1049/800/450" alt=""/>
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span className="credit">Photo: Rosan Harmens</span>
                        </figcaption>
                    </figure>
                </li>
                <li className="carousel__slide">
                    <figure>
                        <div>
                            <img src="https://picsum.photos/id/1052/800/450" alt=""/>
                        </div>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <span className="credit">Photo: Annie Spratt</span>
                        </figcaption>
                    </figure>
                </li> */}
            </ul>
            <ul className="carousel__thumbnails">
                <li>
                    <label for="slide-1"><img src={success1} alt="" style={{width:"152px",height:"auto"}}/></label>
                </li>
                <li>
                    <label for="slide-2"><img src={success2} alt="" style={{width:"152px",height:"auto"}}/></label>
                </li>
                <li>
                    <label for="slide-3"><img src={success3} alt="" style={{width:"152px",height:"auto"}}/></label>
                </li>
                {/* <li>
                    <label for="slide-4"><img src="https://picsum.photos/id/1045/150/150" alt=""/></label>
                </li>
                <li>
                    <label for="slide-5"><img src="https://picsum.photos/id/1049/150/150" alt=""/></label>
                </li>
                <li>
                    <label for="slide-6"><img src="https://picsum.photos/id/1052/150/150" alt=""/></label>
                </li> */}
            </ul>
        </div>
    </div>
</section>
    </div>
  )
}

export default Successpt3