const Booking = () => {
  return (
    <div id="deals" className="max-w-[1140px] p-4 m-auto w-full md:mt-[90px]">
      <form className="lg:flex lg:justify-between w-full item-center">
        <div className="flex flex-col my-2 py-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2 ">
            <option value="">Asia</option>
            <option value="">Caribbeans</option>
            <option value="">Middle East</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row w-full ">
            <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2 ">
                <label htmlFor="">Check in</label>
                <input className="border rounded-md p-2 "  type="date" />
            </div>
            <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2 ">
                <label htmlFor="">Check out</label>
                <input className="border rounded-md p-2 " type="date" />
            </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full ">
            <label htmlFor="">Search</label>
            <button className="w-full ">Rates & Availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
