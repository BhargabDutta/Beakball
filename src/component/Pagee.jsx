// import Header from "./Header";

const Pagee = () => {
  return (
    <>
      <div>
        <div className="flex">
          <div className="w-[50%] h-[800px] flex flex-col  justify-start border-[1px] py-20">
            <img
              className="h-96 w-30 justify-center mx-auto mb-10 "
              src="camera.png"
            ></img>
            <p className="font-bold text-[30px] mb-4 w-[500px] mx-auto ">
              Onsite 300 Virtual Reality Tour
            </p>
            <p className="text-gray-600  mx-auto text-[20px] leading-7 w-[500px]">
              Capture yout place and craft High Dynamic Range image.Bring a more
              realistic fest of yout place on the webssite to bring more
              customers into the fence
            </p>
            <div className="w-[500px] mx-auto mt-6">
              <button className="bg-blue-600  text-white px-4 py-2 w-36 h-10">
                lets connect
              </button>
            </div>
          </div>
          <div className="w-[50%] h-[800px] bg-[#023047]">
            <img className="mx-auto w-[700px] mt-10" src="car.png"></img>
            <p className="text-white text-[30px] w-[500px] mb-4 mx-auto">
              AI Generated 3D World
            </p>
            <p className="text-white text-[20px] w-[500px] mx-auto">
              Leverage the power of Artificial intelligence to impart a virtual
              tour on your website.Bring astonishing landscape and components to
              your page and boost the overall visitor experience.
            </p>
            <div className="w-[500px] mx-auto mt-6">
              <button className="bg-blue-600  text-white px-4 py-2 w-36 h-10">
                lets connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagee;
