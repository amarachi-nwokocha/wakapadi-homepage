import resort from "../assets/resort.jpg";
import diving from "../assets/diving.jpg"
import cruise from "../assets/cruise.jpg"

const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]" >
       <div  className="relative p-4 " >
          <h3 className="absolute z-10 top-[50%] left-[50%] text-white text-2xl font-bold translate-x-[-50%] translate-y-[-50%]w-full h-full object-cover ">Resorts</h3>
          <img src={resort} alt="" className="w-[700px] h-full object-cover relative border-4 boder-white  shadow-lg" />
        </div>
        <div className="relative p-4 ">
          <h3 className="absolute z-10 top-[50%] left-[50%] text-white text-2xl font-bold translate-x-[-50%] translate-y-[-50%]w-full h-full object-cover ">Cruise</h3>
          <img src={cruise} alt="" className="w-[700px] h-full object-cover relative border-4 boder-white  shadow-lg" />
        </div>
        <div className="relative p-4 ">
          <h3 className="absolute z-10 top-[50%] left-[50%] text-white text-2xl font-bold translate-x-[-50%] translate-y-[-50%]w-full h-full object-cover ">Activities</h3>
          <img src={diving} alt="" className="w-[700px] h-full object-cover relative border-4 boder-white  shadow-lg" />
        </div>
    </div>
  );
};

export default Activities;
