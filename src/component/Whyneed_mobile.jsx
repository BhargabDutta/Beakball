import React, { useState } from 'react';
import "../styles/whyneed.css";
import image0 from '../assets/image0.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
const Whyneed = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index);
  };
  const buttonImages = [image0, image1, image2, image3, image4];

  const visibilityCardContent = [
    {
      heading: "Bespoke Branding",
      content: "Make your brand stand out of the crowd with your very own customized branding. From logos, fonts, and colors to everything, we design the virtual tour just according to your personalized preferences. Portray each aspect of your business with an innovative approach. "
    },
    {
      heading: "Dynamic Floor Layout Viewer",
      content: "Experience your space like never before with our dynamic floor layout viewer, tailor-made for businesses aiming to showcase their premises in the most interactive and immersive way possible. Our cutting-edge technology allows you to create virtual tours that provide a realistic sense of place and space."
    },
    {
      heading: "Interactive Marketing Hotspots",
      content: "Integrate your marketing hotspots like downloadable brochures, videos, image galleries, and much more in your virtual tour. Bestow the information about your business on a central, shareable, and interactive platform. "
    },
    {
      heading: "Continuous Scene Flow",
      content: "Our state-of-the-art virtual tour allows you to unveil the different spaces and rooms of your premises with the Continuous Scene Flow feature. Just a few clicks and the user can move from room to room in a seamless manner. "
    },
    {
      heading: "Simplified Navigation Options",
      content: "Just to not confuse the visitors, our virtual tours are equipped with seamless navigation options. In our tours, the user has the exact information about what they are heading to before clicking on any of the elements. "
    }
  ];


  return (
    <div style={{ padding: "20px", display: "none" }} className="mobile-only">
      <div style={{fontSize:"25px",fontWeight:"bold", padding:"5px"}}>Why we need Virtual Reality?</div>
      <div style={{ display: "flex", flexDirection: "row",marginTop:"30px" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "15%", marginRight: "10px", height: "350px", }}>
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              style={{
                fontWeight: "bold",
                padding: "10px",
                textAlign: "center",
                borderRadius: "30px",
                backgroundColor: activeIndex === index ? "yellow" : "lightgrey",
                marginBottom: "15px",
                cursor: "pointer",
                boxShadow: "none",
                transition: "background-color 0.3s",
                fontSize: "20px",
                width: "50px",
                height: "50px",
              }}
              className='togglebuttons'
              onClick={() => handleToggle(index)}
            >
              <img src={buttonImages[index]} alt={`Image ${index}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1, marginLeft: "10px" }}>
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className='visibilitycards'
              style={{
                display: activeIndex === index ? "block" : "none",
                margin: "5px",
                // padding: "10px",
                // border: "2px solid blue",
                borderRadius: "10px",
                flexGrow: 1,
                width: "100%",
                marginLeft: "0px"
              }}
            >
              <div style={{ fontSize: "18px", color: "black", fontWeight: "bold",paddingTop:"50px" }}>{visibilityCardContent[index].heading}</div>
              <div style={{ fontSize: "13px", color: "black", paddingTop: "20px" }}>{visibilityCardContent[index].content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whyneed;
