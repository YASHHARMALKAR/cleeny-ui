import { FaCheck } from "react-icons/fa";

const services = [
  {
    img: "/images/service-img.png",
    icon: "/images/service-icon.png",
    title: "Office Floor Cleaning",
  },
  {
    img: "/images/service-img2.png",
    icon: "/images/service-icon2.png",
    title: "House Wash & Clean",
  },
  {
    img: "/images/service-img3.png",
    icon: "/images/service-icon3.png",
    title: "House Kitchen Cleaning",
  },
];

const BigServices = () => {
  return (
    <div className="container mx-auto px-6">
      
      {/* HEADING */}
      <div className="text-center mb-14">
        <p className="text-yellow-400 font-semibold mb-2">
          OUR SERVICES
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Professional cleeny Services
        </h2>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {services.map((item, i) => (
          <div key={i} className="group relative">

            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full rounded-lg"
            />

            {/* CARD */}
          <div className="bg-blue-800 rounded-lg px-8 pb-6 pt-16 -mt-16 relative z-10">

              {/* HOVER BG */}
              <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-500 group-hover:w-full"></span>

              {/* ICON */}
              <div className="absolute -top-10 left-8 z-20">
                <div className="w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center 
                transition-all duration-500 
                group-hover:bg-yellow-400 group-hover:rotate-[360deg]">
                  
                  <img src={item.icon} className="w-10" />
                </div>
              </div>

              {/* TITLE */}
              <h5 className="text-white text-xl font-semibold mb-5 relative z-10 group-hover:text-yellow-400 transition">
                {item.title}
              </h5>

              {/* LIST */}
              <ul className="border-b border-gray-500 mb-6 relative z-10 group-hover:border-white transition">
                
                <li className="flex items-center gap-2 text-gray-300 mb-3 group-hover:text-white transition">
                  <FaCheck className="text-yellow-400" />
                  House Floor Cleaning
                </li>

                <li className="flex items-center gap-2 text-gray-300 mb-6 group-hover:text-white transition">
                  <FaCheck className="text-yellow-400" />
                  Roof Clean & Wash
                </li>

              </ul>

              {/* BUTTON */}
              <button className="text-white flex items-center gap-2 relative z-10 group-hover:text-yellow-400 transition">
                View Details →
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default BigServices;