const steps = [
  {
    icon: "/images/work-icon.png",
    title: "Find Us Online",
    number: "1",
  },
  {
    icon: "/images/work-icon2.png",
    title: "Choose Services",
    number: "2",
  },
  {
    icon: "/images/work-icon3.png",
    title: "Book Appointment",
    number: "3",
  },
];

const WorkingProcess = () => {
  return (
    <section className="pt-28 pb-20 relative bg-gray-50 overflow-hidden">
      
      {/* LEFT IMAGE */}
      <img
        src="/images/work-shape3.png"
        className="absolute left-0 top-1/2 -translate-y-1/2 hidden 2xl:block animate-pulse"
        alt=""
      />

      {/* RIGHT IMAGE */}
      <img
        src="/images/work-shape4.png"
        className="absolute right-10 top-1/3 hidden 2xl:block animate-bounce"
        alt=""
      />

      <div className="container mx-auto px-6">
        
        {/* HEADING */}
        <div className="text-center">
          <p className="text-blue-600 font-medium">
            WORKING PROCESS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3 mb-4">
            Easy Steps to Works
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Competently repurpose go forward benefits without goal-oriented ROI
            conveniently target e-business opportunities whereas
          </p>
        </div>

        {/* STEPS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {steps.map((item, i) => (
            <div key={i} className="text-center group relative">

              {/* ICON BOX */}
              <div className="relative w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-lg mx-auto">
                
                {/* HOVER BG */}
                <span className="absolute inset-0 bg-blue-600 scale-0 rounded-2xl transition-all duration-500 group-hover:scale-100"></span>

                {/* ICON */}
                <img
                  src={item.icon}
                  alt=""
                  className="w-10 relative z-10 transition group-hover:invert group-hover:brightness-0"
                />

                {/* NUMBER */}
                <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 bg-yellow-400 text-black text-sm w-7 h-7 flex items-center justify-center rounded-full font-semibold z-10">
                  {item.number}
                </span>
              </div>

              {/* TITLE */}
              <h4 className="mt-8 text-xl font-semibold text-blue-900 relative inline-block pb-2 group">
                {item.title}

                {/* UNDERLINE HOVER */}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-6 h-[2px] bg-blue-600 transition-all duration-500 group-hover:w-full group-hover:left-0 group-hover:translate-x-0"></span>
              </h4>

              {/* TEXT */}
              <p className="text-gray-600 mt-4">
                Repurpose go forward benefits more conveniently e-business
              </p>

              {/* CONNECTOR LINE */}
              {i !== steps.length - 1 && (
                <img
                  src="/images/work-shape.png"
                  className="hidden lg:block absolute top-8 right-[-150px]"
                  alt=""
                />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;