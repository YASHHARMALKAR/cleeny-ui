import { FaCheck } from "react-icons/fa";

const plans = [
  {
    price: 39,
    title: "Starter Plans",
    active: false,
  },
  {
    price: 59,
    title: "Standard Plans",
    active: false,
  },
  {
    price: 89,
    title: "Premium Plans",
    active: false, 
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">

        {/* HEADING */}
        <div className="text-center">
          <p className="text-blue-500 font-semibold">PRICING PLAN</p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3">
            Affordable Pricing Plan
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`group relative rounded-xl overflow-hidden transition-all duration-500
              ${plan.active ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-blue-600 hover:text-white"}`}
            >

              {/* BACKGROUND ANIMATION */}
             <img
  src="/images/pricing-shape.png"
  className="absolute inset-0 m-auto w-[60%]
  opacity-0 scale-75
  transition-all duration-500
  group-hover:opacity-20 group-hover:scale-125
  animate-zoomCrazy pointer-events-none z-0"
  alt=""
/>

              {/* PRICE BOX */}
              <div className="flex justify-center -mt-10 relative z-10">
                <div
                  className={`w-[110px] h-[110px] flex flex-col items-center justify-center rounded-b-xl rounded-e-xl font-bold transition-all duration-500
                  ${plan.active ? "bg-blue-400 text-black" : "bg-blue-500 text-white group-hover:bg-yellow-400 group-hover:text-black"}`}
                >
                  <span className="text-lg">$</span>
                  <span className="text-3xl">{plan.price}</span>
                  <span className="text-sm">Monthly</span>
                </div>
              </div>

              {/* TITLE */}
              <div className="mt-6 px-6">
                <h3
                  className={`inline-block px-6 py-2 rounded-r-full font-semibold text-lg transition
                  ${plan.active ? "bg-white text-blue-900" : "bg-white text-blue-900"}`}
                >
                  {plan.title}
                </h3>
              </div>

              {/* FEATURES */}
              <ul className="px-6 mt-8 space-y-4">
                {[
                  "15% OFF All Service",
                  "Floor Wash & cleeny",
                  "Maintaince Equipment",
                  "Schedule Working",
                  "24/7 Supports",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-3 transition
                    ${plan.active ? "text-white" : "text-gray-700 group-hover:text-white"}`}
                  >
                    <FaCheck className="text-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* BUTTON (🔥 HERO STYLE) */}
              <div className="px-6 pb-10 mt-10">
                <button className="relative overflow-hidden bg-blue-600 text-black w-full py-3 rounded-full font-semibold group">

                  {/* TEXT */}
                  <span className="relative z-10 group-hover:text-white transition flex justify-center items-center gap-2">
                    Choose Plan →
                  </span>

                  {/* SPLIT BLUE EFFECT */}
                  <span className="absolute top-0 left-0 w-full h-1/2 bg-yellow-400 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  <span className="absolute bottom-0 left-0 w-full h-1/2 bg-yellow-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>

                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;