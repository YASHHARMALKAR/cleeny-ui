import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    img: "/images/testi-thumb-2.png",
    name: "Jhon D. Alexon",
    role: "Web Developer",
  },
  {
    img: "/images/testi-thumb.png",
    name: "Anjelina Watson",
    role: "UI/UX Designer",
  },
];

const Testimonials = () => {
  return (
<section className="relative py-24 bg-blue-900 overflow-hidden">

  <img
    src="/images/testimonial-bg-four.png"
    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay pointer-events-none"
    alt=""
  />

  <div className="relative z-10 container mx-auto px-6">

        {/* HEADING */}
        <div className="text-center">
          <p className="text-yellow-400 font-semibold">
            TESTIMONIALS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Our Customer’s Feedback
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

          {testimonials.map((item, i) => (
            <div
              key={i}
              className="relative bg-blue-900 rounded-xl px-8 pt-12 pb-10 overflow-hidden group"
            >

              {/* HOVER EFFECT BG */}
              <span className="absolute top-0 left-1/2 w-0 h-full bg-blue-600 -z-10 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>

              {/* TOP */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">

                {/* IMAGE */}
                <img
                  src={item.img}
                  alt=""
                  className="w-16 h-16 rounded-full border-4 border-white"
                />

                <div>

                  {/* STARS */}
                  <div className="flex gap-1 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} />
                    ))}
                  </div>

                  {/* NAME */}
                  <h5 className="text-white text-lg font-semibold">
                    {item.name}
                  </h5>

                  {/* ROLE */}
                  <p className="text-gray-400 text-sm group-hover:text-white transition">
                    {item.role}
                  </p>

                </div>
              </div>

              {/* TITLE */}
              <h6 className="text-yellow-400 mt-6 mb-3 font-semibold">
                Service Quality
              </h6>

              {/* TEXT */}
              <p className="text-white text-sm leading-relaxed">
                “Competently cultivate worldwide e-tailers through to
                principles professionally engineer high-payoff deliverables
                without excet Rapidiously network effective”
              </p>

              {/* QUOTE ICON */}
              <img
                src="/images/testi-icon.png"
                className="absolute top-10 right-8 w-10 opacity-80"
              />

            </div>
          ))}

        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-10">
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
          <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
        </div>

      </div>

    </section>
  );
};

export default Testimonials;