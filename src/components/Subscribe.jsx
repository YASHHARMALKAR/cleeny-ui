const Subscribe = () => {
  return (
    <section className=" bg-[#0c1e6b]  ">

      <div className="container mx-auto px-6">

        {/* MAIN BOX */}
        <div
         className="relative rounded-b-[20px] overflow-hidden flex flex-col lg:flex-row items-center justify-between"         
          style={{
            backgroundImage: "url('/images/subscribe-bg.png')",
            backgroundSize: "cover", 
            backgroundPosition: "center",
          }}
        >

          {/* LEFT SIDE */}
          <div className="flex items-center gap-5 px-10 py-8 w-full lg:w-1/2">

            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-blue-600 text-2xl shadow">
              📞
            </div>

            <div>
              <p className="text-sm text-black">Call Us Now</p>
              <h3 className="text-xl font-bold text-blue-900">
                +980 765 (546) 900
              </h3>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 px-10 py-8 w-full lg:w-1/2">

            <h3 className="text-white text-xl font-semibold whitespace-nowrap">
              Subscribe Now
            </h3>

            <div className="flex bg-white rounded-md overflow-hidden shadow">

              <input
                type="email"
                placeholder="Enter E-Mail*"
                className="px-5 py-3 w-[220px] outline-none text-gray-700"
              />

              <button className="bg-[#0c1e6b] text-white px-6 font-semibold hover:bg-black transition">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
export default Subscribe; 