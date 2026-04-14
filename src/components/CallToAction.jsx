const CallToAction = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      
      <div className="container mx-auto">
        
        <div
          className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-8 
          bg-[url('/images/address-bg.png')] bg-cover bg-center 
          rounded-lg px-6 md:px-16 py-14"
        >

          {/* 🔥 PERSON IMAGE FIXED */}
          <img
            src="/images/address-thumb.png"
            alt=""
            className="
              absolute 
              left-1/2 
              -translate-x-1/2 
              -top-16           /* 👈 push outside */
              h-[130%]         /* 👈 bigger */
              object-contain 
              hidden lg:block
              z-0
            "
          />

          {/* TEXT */}
          <div className="relative z-10">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Please Call Us to Take the <br />
              Extraordinary Service!
            </h2>
          </div>

          {/* BUTTON */}
          <div className="relative z-10 flex lg:justify-end">
            
         <button className="relative overflow-hidden bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold group flex items-center gap-2">
  
  {/* TEXT */}
  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition">
    📞 Call : 123 (4567) 890
  </span>

  {/* 🔥 TOP HALF (right → left) */}
  <span className="absolute top-0 left-0 w-full h-1/2 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>

  {/* 🔥 BOTTOM HALF (left → right) */}
  <span className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>

</button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default CallToAction;