const TopBar = () => {
  return (
   <div className="bg-blue-600 text-white px-10 py-4 flex justify-between items-center text-base">
      
      {/* LEFT */}
      <div className="flex items-center gap-6">
        
        {/* Address */}
        <p className="hidden md:flex items-center gap-2 relative pr-6 border-r border-white/40">
          📍 102/B New Market, Sandigo-USA
        </p>

        {/* Email */}
        <a href="/" className="hidden sm:flex items-center gap-2">
          ✉️ example@gmail.com
        </a>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        
        {/* Social Icons */}
        <div className="flex">
          <span className="h-[40px] w-[35px] flex items-center justify-center bg-[#1773ea]">f</span>
          <span className="h-[40px] w-[35px] flex items-center justify-center bg-[#2ca5da]">X</span>
          <span className="h-[40px] w-[35px] flex items-center justify-center bg-[#0073b1]">in</span>
          <span className="h-[40px] w-[35px] flex items-center justify-center bg-[#e11a21]">p</span>
        </div>

        {/* Call */}
        <div className="hidden lg:flex items-center gap-2">
          <span>📞 Call :</span>
          <a href="/" className="font-medium">
            +980 234 4567
          </a>
        </div>
      </div>

    </div>
  );
};

export default TopBar;