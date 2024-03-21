import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Portfoliogrid_card from "../component/Portfoliogrid_card";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import card7 from "../assets/card7.png";
import card8 from "../assets/card8.png";
import responsive from "../styles/responsive.module.css"
export default function Portfoliogrid() {
    return (
        <div style={{padding:"20px",margin:"10px"}}>
            <div style={{fontSize:"30px",padding:"23px",fontWeight:"bold",textAlign:"center"}}>Our Projects</div>
            <hr style={{width:"100%",borderColor:"blue",borderWidth:"5px", margin:"0 auto"}}/>
            <MDBRow style={{display:"flex",alignItems:"start",justifyContent:"space-around",marginTop:"30px",margin:"30px"}}>
                <MDBCol md='2' style={{ width: "300px",marginTop:"50px",height:"350px",borderRadius:"20px"}} className={responsive.portfoliocard}>
                    <a href='https://hotel.beakball.com/' target='_blank' className={responsive.card_anchor}>
                    <Portfoliogrid_card 
                    img={card1}
                    title="Hotel "
                    content="Experience the luxury of this place from your screen. Catch everything you will get here before paying. 
                    "/>
                    </a>
                </MDBCol>
                <MDBCol md='2' style={{ width: "300px",marginTop:"50px",height:"350px",borderRadius:"20px"}} className={responsive.portfoliocard}>
                    <a href='https://bvectour.beakball.com/' target='_blank' className={responsive.card_anchor}>
                    <Portfoliogrid_card 
                    img={card2}
                    title="University and College"
                    content="Explore the campus of an University virtually. Find your departments and map of the college.  "/></a>
                </MDBCol>
                <MDBCol md='2' style={{ width: "300px",marginTop:"50px",height:"350px",borderRadius:"20px"}} className={responsive.portfoliocard}>
                    <a href='https://beakverse.beakball.com/' target='_blank' className={responsive.card_anchor}>
                    <Portfoliogrid_card 
                    img={card3}
                    title="Home "
                    content="Experience your modern home where you will find your permanent with virtual reality."/>
                    </a>
                </MDBCol>
                <MDBCol md='2' style={{ width: "300px",marginTop:"50px",height:"350px",borderRadius:"20px"}} className={responsive.portfoliocard}>
                    <a href='https://cinemahall.beakball.com/' target='_blank' className={responsive.card_anchor}>
                    <Portfoliogrid_card 
                    img={card4}
                    title="Cinema Hall"
                    content="Your digital space where you want to promote your services first hand. Create your virtual world with AI."/></a>
                </MDBCol>

                <MDBCol md='2' style={{ width: "300px",marginTop:"50px",height:"350px",borderRadius:"20px"}} className={responsive.portfoliocard}>
                    <a href='https://movieticket.beakball.com/' target='_blank' className={responsive.card_anchor}>
                    <Portfoliogrid_card 
                    img={card5}
                    title="Movie Ticket"
                    content="Grab more attention at your marketing by creating engaging content published in Virtaul world. "/></a>
                </MDBCol>
                <MDBCol md='2' style={{ width: "300px",marginTop:"50px",height:"350px",borderRadius:"20px"}} className={responsive.portfoliocard}>
                    <a href='https://3dproducts.beakball.com/' target='_blank' className={responsive.card_anchor}>
                    <Portfoliogrid_card 
                    img={card6}
                    title="3d Products"
                    content="Before you buy a product, experience the product shape in the virtual world. "/></a>
                </MDBCol>
                <MDBCol md='2' style={{ width: "300px",marginTop:"50px",height:"350px",borderRadius:"20px"}} className={responsive.portfoliocard}>
                    <a href='https://banner.beakball.com/' target='_blank' className={responsive.card_anchor}>
                    <Portfoliogrid_card 
                    img={card7}
                    title="Tourism "
                    content="Experience destinations and places in virtual world. Grab more attention from the tourist beforehand. "/>
                    </a>
                </MDBCol>
                <MDBCol md='2' style={{ width: "300px",marginTop:"50px",height:"350px",borderRadius:"20px"}} className={responsive.portfoliocard}>
                    <a href='https://car.beakball.com/' target='_blank' className={responsive.card_anchor}>
                    <Portfoliogrid_card 
                    img={card8}
                    title="3D models"
                    content="We captured the car from each angle and dimension to draft a full-fledged live replica."/>
                    </a>
                </MDBCol>
            </MDBRow>

        </div>
    );
}