const Appointment = () => {
  return (
    <div className="container mx-auto px-6 text-center">
      
      {/* HEADING */}
      <h1 className="text-white text-3xl md:text-4xl font-bold">
        Get A Free Appointment
      </h1>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        
        {/* INPUT 1 */}
        <input
          type="text"
          placeholder="Enter Name*"
          className="h-[60px] px-5 rounded outline-none"
        />

        {/* INPUT 2 */}
        <input
          type="text"
          placeholder="Phone No."
          className="h-[60px] px-5 rounded outline-none"
        />

        {/* SELECT */}
        <select className="h-[60px] px-5 rounded outline-none">
          <option>Select Service</option>
          <option>Cleaning</option>
          <option>Washing</option>
        </select>

        {/* BUTTON (Left → Right Hover) */}
        <button className="relative overflow-hidden bg-yellow-400 text-black h-[60px] rounded font-semibold group">
          
          {/* TEXT */}
          <span className="relative z-10 flex justify-center items-center gap-2 group-hover:text-white transition">
            Book Appointment →
          </span>

          {/* LEFT → RIGHT BLUE */}
          <span className="absolute top-0 left-0 h-full w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>

        </button>

      </div>

    </div>
  );
};

export default Appointment;