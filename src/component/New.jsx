import React from "react";

const data = [
  {
    img: "1.png",
    text: "Responsive Screen",
    detail: "Adjusts tours for optimal viewing on any device",
  },
  {
    img: "2.png",
    text: "AIVoice Tourguide",
    detail: "BELA: Beacon of Expertise and Learning Assistanc.Our Own Virtual Assistant",
  },
  {
    img: "3.png",
    text: "Virtual Reality",
    detail: "Immerse yourself in cutting-edge virtual reality tours",
  },
  {
    img: "4.png",
    text: "VIdeo Integration",
    detail: "Embedding video content within virtual tours",
  },
  {
    img: "5.png",
    text: "VR Experience",
    detail:
      "Immersive tours in a virtual reality environment",
      
  },
  {
    img: "6.png",
    text: "Custom Skin for UI",
    detail: "Tailored user interface design for brand consistency",
  },

  {
    img: "7.png",
    text: "Motion Hybrid",
    detail: "Tours that react to device movement for navigation",
  },
  {
    img: "8.png",
    text: "VR Experience",
    detail: "Immersive tours in a virtual reality environment",
  
  },

  {
    img: "9.png",
    text: "Interactive Hotspot",
    detail: "Clickable areas for detailed information within tours",
  },
];

const New = () => {
  return (
    <>
      <div className="mx-5 mb-10 h-100 w-70 p-4 flex justify-center items-center">
        <div className="flex flex-wrap gap-[90px] border">
          {data.map((el, id) => (
            <div className="flex" key={id}>
              <div className="-mb-[-10px]">
                <img className="h-20 w-20" src={el.img}></img>
                <p className="font-bold text-[25px]">{el.text}</p>
                <p className="w-[250px] text-[15px]">{el.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default New;
