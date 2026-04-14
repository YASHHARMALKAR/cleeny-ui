import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const portfolio = [
  {
    img: "/images/portfolio-img.png",
    title: "House Floor Cleaning",
  },
  {
    img: "/images/portfolio-img2.png",
    title: "House Floor Cleaning",
  },
  {
    img: "/images/portfolio-img3.png",
    title: "House Floor Cleaning",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-[url('/images/portfolio-bg.png')] bg-cover bg-center py-28">
      
      <div className="container mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div>
            <p className="text-blue-600 font-medium">
              CLEENY PORTFOLIO
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3">
              Latest cleeny Portfolio <br />
              from Work Galary
            </h2>
          </div>

          {/* BUTTON */}
          <button className="relative overflow-hidden bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold group">
            
            <span className="relative z-10 group-hover:text-white transition">
              View All Work →
            </span>

            <span className="absolute left-0 top-0 h-full w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
          </button>

        </div>

        {/* SLIDER */}
        <div className="mt-16">
          
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {portfolio.map((item, i) => (
              <SwiperSlide key={i}>
                
                <div className="relative group overflow-hidden rounded-lg">
                  
                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt=""
                    className="w-full"
                  />

                  {/* TAG */}
                  <span className="absolute top-5 left-5 bg-yellow-400 px-4 py-1 rounded-full text-sm font-medium opacity-0 -translate-x-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                    Cleaning
                  </span>

                  {/* BOTTOM CARD */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-[90%] bg-blue-600 text-white px-6 py-6 rounded-lg bottom-[-100%] transition-all duration-500 group-hover:bottom-5 flex justify-between items-center">
                    
                    <div>
                      <p className="text-sm opacity-80">
                        📍 Sandigo, USA
                      </p>
                      <h5 className="font-semibold text-lg mt-2">
                        {item.title}
                      </h5>
                    </div>

                    <button className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center rotate-[-45deg]">
                      →
                    </button>

                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default Portfolio;   