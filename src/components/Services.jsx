const services = [
  {
    img: "/images/feature-icon.png",
    title: "House cleeny",
  },
  {
    img: "/images/feature-icon2.png",
    title: "Windwo cleeny",
  },
  {
    img: "/images/feature-icon3.png",
    title: "instrument",
  },
];

const Services = () => {
  return (
    <section className="relative z-10 -mt-[42px]">
      
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          
          {services.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row lg:flex-col xl:flex-row 
              items-center gap-7 bg-gray-100 px-9 py-8 rounded-lg 
              relative overflow-hidden group transition-all duration-300"
            >

              {/* ICON BOX (IMPORTANT) */}
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* TEXT */}
              <div className="flex-1 text-center sm:text-left lg:text-center xl:text-left">
                <h5 className="text-[22px] font-semibold text-blue-900 group-hover:text-blue-700 transition">
                  {item.title}
                </h5>
                <p className="text-gray-600 text-[15px]">
                  Competently repurpose clean conveniently target
                </p>
              </div>

              {/* 🔥 HOVER LINE */}
              <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-blue-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"></span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;    