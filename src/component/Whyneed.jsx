import React, { useState } from 'react';
import image0 from '../assets/image0.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import "../styles/whyneed.css";
const Whyneed = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{height:"100vh",width:"100%",padding:"20px"}} className='desktop_only'>

      <div style={{fontSize:"30px",fontWeight:"bold", padding:"30px"}}>Why we need Virtual Reality?</div>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div style={{ width: "50%" }}>
          <div style={{ display: "flex", flexDirection: "row", width: "50vw", padding: "20px", gap: "20px" }}>
            <div
              style={{
                fontWeight: "bold",
                padding: "20px",
                width: "50%",
                textAlign: "center",
                borderRadius: "30px",
                backgroundColor: activeIndex === 0 ? "yellow" : "lightgrey",
                cursor: "pointer",
                transition: "background-color 0.3s",
                boxShadow: "none",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
              }}
              className='togglebuttons'
              onClick={() => handleToggle(0)}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = "0px 0px 10px 1px rgba(0,0,0,0.5)"}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = "none"}
            >
              <img src={image0} alt="" style={{width:"50px",height:"auto"}}/>
              Bespoke Branding
            </div>
            <div
              style={{
                fontWeight: "bold",
                padding: "20px",
                width: "50%",
                textAlign: "center",
                borderRadius: "30px",
                backgroundColor: activeIndex === 1 ? "yellow" : "lightgrey",
                cursor: "pointer",
                transition: "background-color 0.3s",
                boxShadow: "none",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
              }}
              className='togglebuttons'
              onClick={() => handleToggle(1)}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = "0px 0px 10px 1px rgba(0,0,0,0.5)"}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = "none"}
            >
              <img src={image1} alt="" style={{width:"50px",height:"auto"}}/>
              Dynamic floor layout Viewer
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row", width: "50vw", padding: "20px", gap: "20px" }}>
            <div
              style={{
                fontWeight: "bold",
                padding: "20px",
                width: "50%",
                textAlign: "center",
                borderRadius: "30px",
                backgroundColor: activeIndex === 2 ? "yellow" : "lightgrey",
                cursor: "pointer",
                transition: "background-color 0.3s",
                boxShadow: "none",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
              }}
              className='togglebuttons'
              onClick={() => handleToggle(2)}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = "0px 0px 10px 1px rgba(0,0,0,0.5)"}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = "none"}
            >
              <img src={image2} alt="" style={{width:"50px",height:"auto"}}/>
              Interactive Marketing

              Hotspots
            </div>
            <div
              style={{
                fontWeight: "bold",
                padding: "20px",
                width: "50%",
                textAlign: "center",
                borderRadius: "30px",
                backgroundColor: activeIndex === 3 ? "yellow" : "lightgrey",
                cursor: "pointer",
                transition: "background-color 0.3s",
                boxShadow: "none",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
              }}
              className='togglebuttons'
              onClick={() => handleToggle(3)}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = "0px 0px 10px 1px rgba(0,0,0,0.5)"}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = "none"}
            >
              <img src={image3} alt="" style={{width:"50px",height:"auto"}}/>
              Continuous Scene Flow
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row", width: "50vw", padding: "20px", gap: "20px", alignItems: "center", justifyContent: "center" }}>
            <div
              style={{
                fontWeight: "bold",
                padding: "20px",
                width: "50%",
                textAlign: "center",
                borderRadius: "30px",
                backgroundColor: activeIndex === 4 ? "yellow" : "lightgrey",
                cursor: "pointer",
                transition: "background-color 0.3s",
                boxShadow: "none",
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center"
              }}
              className='togglebuttons'
              onClick={() => handleToggle(4)}
              onMouseOver={(e) => e.currentTarget.style.boxShadow = "0px 0px 10px 1px rgba(0,0,0,0.5)"}
              onMouseOut={(e) => e.currentTarget.style.boxShadow = "none"}
            >
              <img src={image4} alt="" style={{width:"50px",height:"auto"}}/>
              Simplified Navigation Options
            </div>
          </div>
        </div>
        <div style={{ width: "50%"}}>
          <div className='visibilitycards' style={{ display: activeIndex === 0 ? "block" : "none", padding: "40px" }}>
            <div style={{ fontSize: "30px", fontWeight: "bold" }}>Bespoke Branding</div>
            <div style={{ fontSize: "20px", paddingTop: "30px" }}>Make your brand stand out of the crowd with your very own customized branding. From logos, fonts, and colors to everything, we design the virtual tour just according to your personalized preferences. Portray each aspect of your business with an innovative approach.</div>
          </div>
          <div className='visibilitycards' style={{ display: activeIndex === 1 ? "block" : "none", padding: "40px" }}>
            <div style={{ fontSize: "30px", fontWeight: "bold" }}>Dynamic Floor Layout
              Viewer</div>
            <div style={{ fontSize: "20px", paddingTop: "30px" }}>Experience your space like never before with our dynamic floor layout viewer, tailor-made for businesses aiming to showcase their premises in the most interactive and immersive way possible. Our cutting-edge technology allows you to create virtual tours that provide a realistic sense of place and space.</div>
          </div>
          <div className='visibilitycards' style={{ display: activeIndex === 2 ? "block" : "none", padding: "40px" }}>
            <div style={{ fontSize: "30px", fontWeight: "bold" }}>Interactive Marketing

              Hotspots</div>
            <div style={{ fontSize: "20px", paddingTop: "30px" }}>Integrate your marketing hotspots like downloadable brochures, videos, image galleries, and much more in your virtual tour. Bestow the information about your business on a central, shareable, and interactive platform. </div>
          </div>
          <div className='visibilitycards' style={{ display: activeIndex === 3 ? "block" : "none", padding: "40px" }}>
            <div style={{ fontSize: "30px", fontWeight: "bold" }}>Continuous Scene Flow</div>
            <div style={{ fontSize: "20px", paddingTop: "30px" }}>Our state-of-the-art virtual tour allows you to unveil the different spaces and rooms of your premises with the Continuous Scene Flow feature. Just a few clicks and the user can move from room to room in a seamless manner. </div>
          </div>
          <div className='visibilitycards' style={{ display: activeIndex === 4 ? "block" : "none", padding: "40px" }}>
            <div style={{ fontSize: "30px", fontWeight: "bold" }}>Simplified Navigation

              Options</div>
            <div style={{ fontSize: "20px", paddingTop: "30px" }}>Just to not confuse the visitors, our virtual tours are equipped with seamless navigation options. In our tours, the user has the exact information about what they are heading to before clicking on any of the elements</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyneed;






