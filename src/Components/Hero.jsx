import HeroImg from "../assets/HeroImg.jpg";
const Hero = () => {
  return (
    <div className="w-full h-[90vh] ">
      <img src={HeroImg} alt="" className="w-full h-full object-cover " />
      <div className="max-w-[1140px] m-auto ">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4 ">
          <h1 className="font-bold text-4xl">Find your special trip</h1>
          <h2 className="text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore id
            sit nulla est temporibus. Unde sint accusantium repudiandae.
            Aliquid, iure? Dicta pariatur repellat ratione? Voluptate similique
            nulla reiciendis dolorum expedita.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
