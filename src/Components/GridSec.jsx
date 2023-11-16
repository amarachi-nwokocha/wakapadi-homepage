import grid1 from "../assets/grid1.jpg";
import grid2 from "../assets/grid2.jpg";
import grid3 from "../assets/grid3.jpg";
import grid6 from "../assets/grid6.jpg";
import grid5 from "../assets/grid5.jpg";
const GridSec = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto px-4 w-full py-16 ">
      <h2 className="text-center text-gray-700 text-3xl p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4   ">
        <div className="sm:col-span-3 col-span-2 row-span-2 classname='w-full h-full object-cover '">
          <img className='w-full h-full object-cover ' src={grid6} alt="/" />
        </div>
        <div>
          <img  className='w-full h-full object-cover 'src={grid2} alt="/" />
        </div>
        <div>
          <img className='w-full h-full object-cover ' src={grid3} alt="/" />
        </div>
        <div>
          <img className='w-full h-full object-cover ' src={grid1} alt="/" />
        </div>
        <div>
          <img className='w-full h-full object-cover ' src={grid5} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default GridSec;
