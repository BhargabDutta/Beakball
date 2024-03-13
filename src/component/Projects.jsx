const data = [
  {
    id: 1,
    img: "card1.png",
    text: "Hotel",
    main: "Experience the luxury of this place from your screen. Catch everything you will get here before paying.",
  },
  {
    id: 2,
    img: "card2.png",
    text: "Univertsity and College",
    main: "Explore the campus of an University virtually. Find your departments and map of the college",
  },
  {
    id: 3,
    img: "card3.png",
    text: "Home",
    main: "Experience your modern home where you will find your permanent with virtual reality.",
  },
  {
    id: 4,
    img: "card4.png",
    text: "Cinema Hall",
    main: "Your digital space where you want to promote your services first hand. Create your virtual world with AI",
  },
  {
    id: 5,
    img: "card5.png",
    text: "Movie Ticket",
    main: "Grab more attention at yur marketing by creating engaging content published in Virtual world",
  },
  {
    id: 6,
    img: "card6.png",
    text: "3d Products",
    main: "Before you buy a product, experience the product shape in the virtual world.",
  },
  {
    id: 7,
    img: "card7.png",
    text: "Tourism",
    main: "Experience destinations and places in virtual world. Grab more attention from the tourist beforehand.",
  },
  {
    id: 8,
    img: "card8.png",
    text: "3D models",
    main: "We captured the car from each angle and dimension to draft a full fledged live replica.",
  },
];

const Projects = () => {
  return (
    <>
      <div className="mt-20 mx-[150px]  mb-[10px] font-bold text-[60px]">
        Our Projects
      </div>
      <div className="h-1 w-[85%] mx-[150px] mb-[20px] bg-blue-900"></div>
      <div className="w-[95%] justify-center mx-auto flex flex-wrap gap-10 ">
        {data.map((el, id) => (
          <>
            <div className="w-[350px]">
              <div className="" key={id}>
                <div>
                  <img src={el.img} className="w-[800px] h-[200px]"></img>
                </div>
                <p className="font-bold mb-2 text-[25px]">{el.text}</p>
                <p>{el.main}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Projects;
