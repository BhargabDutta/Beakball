const Main = () => {
  return (
    <>
      <div className="object-cover relative z-[50]" style={{border:"2px solid red"}}>
        <img
          className="w-full h-[780px] z-10"
          src="main.png"
          alt="Main Image"
        />
      </div>
      <div className="flex absolute top-[180px] left-0 right-0 justify-center" style={{border:"5px solid red"}}>
        <div className="bg-white leading-10 rounded-tl-xl z-[60] pt-4 px-[60px]  h-[600px] w-[400px] text-black text-[30px]">
          <p className="mt-8">EXPLORE THE WORLD FROM YOUR DIGITAL DEVICE</p>
          <p className="h-1 w-[300px] bg-blue-600"></p>
          <p className="leading-6 text-[18px] mt-10">
            Experience the wonders of the world on your digital devices and
            experience 300 Virtual reality.
          </p>
          <button className="py-2 mt-[70px] px-10 bg-black text-white text-[20px]">
            Let's Connect
          </button>
          <div className="flex items-center mt-20">
            <img className="h-20 w-30" src="virtual.png"></img>
            <p className="text-[18px]">VR Compatibility</p>
          </div>
        </div>
        <div className="h-[500px] w-[500px] bg-white  ">
          <div className="h-[400px] w-[250px]  z-[10] mx-auto mt-12 mb-20 rounded-md  block"></div>
        </div>
        <div className="bg-white pt-10 px-[60px] rounded-tr-xl z-[60]  rounded-br-xr h-[600px] w-[400px]">
          <img src="card3.png" className=" h-36 w-[300px] rounded-[50px]"></img>
          <p className="text-[20px] font-semibold mb-2 mt-1">Breakverse</p>
          <p className="leading-5 mb-5">
            Experience your modern home where you will find your permanent with
            virtual reality.
          </p>
          <img src="pic2.png" className=" h-36 w-[300px] rounded-[50px]"></img>
          <p className="text-[20px] font-semibold mb-2 mt-1">
            University and College
          </p>
          <p className="leading-5">
            We created the virtual reality tour of this collefe while injecting
            each road, department and building of the campus.Roam through the
            walkways and explore the college premises with a VR tour.
          </p>
        </div>
      </div>
      <div className="w-[1300px] z-[60] bg-white h-[60px] rounded-tl-xl rounded-tr-xl absolute top-[150px] absolute left-0 right-0 mx-auto"></div>
      <div className="w-[1300px] z-[60] bg-white h-[60px] rounded-bl-xl rounded-br-xl absolute top-[750px] absolute left-0 right-0 mx-auto"></div>
    </>
  );
};

export default Main;
