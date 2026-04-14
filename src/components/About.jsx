import { FaPlay, FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT IMAGE */}
          <div className="relative">
            
            {/* Main Image */}
            <img
              src="/images/about-thumb.png"
              alt="about"
              className="rounded-lg"
            />

            {/* Play Button */}
            <div className="absolute top-20 right-10">
              <button className="h-[90px] w-[90px] rounded-full bg-blue-600 border-4 border-white text-white flex justify-center items-center relative z-10">
                
                <FaPlay size={28} />

                {/* Ping Effect */}
                <span className="absolute w-full h-full bg-blue-600 opacity-50 rounded-full animate-ping"></span>
              </button>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            
            {/* Heading */}
            <h5 className="text-blue-600 font-medium mb-2">
              ABOUT US
            </h5>

            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Making Your House Clean For Looks As a New
            </h1>

            <p className="text-gray-600 mb-6">
              Competently repurpose go forward benefits without goal-oriented ROI 
              conveniently target e-business opportunities whereas parallel task 
              multimedia based web services
            </p>

            {/* FEATURES + BOX */}
            <div className="flex flex-col md:flex-row gap-10 justify-between">
              
              {/* LEFT LIST */}
              <div>
                <ul className="space-y-4">
                  
                  <li className="flex items-center gap-2 text-gray-800">
                    <FaCheckCircle className="text-blue-600" />
                    Cleeny Your Home or Office
                  </li>

                  <li className="flex items-center gap-2 text-gray-800">
                    <FaCheckCircle className="text-blue-600" />
                    24/7 Emergency Quality Services
                  </li>

                  <li className="flex items-center gap-2 text-gray-800">
                    <FaCheckCircle className="text-blue-600" />
                    Online Booking System available
                  </li>

                </ul>

                {/* 🔥 HERO STYLE BUTTON */}
                <button className="mt-8 relative overflow-hidden bg-blue-600 text-white px-6 py-3 rounded-full font-semibold group">
                  
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition">
                    More About Us →
                  </span>

                  {/* TOP HALF */}
                  <span className="absolute top-0 left-0 w-full h-1/2 bg-yellow-400 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>

                  {/* BOTTOM HALF */}
                  <span className="absolute bottom-0 left-0 w-full h-1/2 bg-yellow-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>

                </button>
              </div>

              {/* RIGHT BOX */}
              <div className="bg-yellow-400 rounded-lg w-[180px] h-[180px] flex flex-col items-center justify-center text-center">
                
                <img
                  src="/images/counter-icon.png"
                  alt="icon"
                  className="w-10 mb-2"
                />

                <span className="text-3xl font-bold text-blue-900">
                  12+
                </span>

                <p className="text-gray-700 text-sm">
                  Years Experience
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default About;