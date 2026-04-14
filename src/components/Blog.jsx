import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    img: "/images/blog-thumb.png",
    date: "02",
    title: "Newest Cleaning Tools for House 2024",
  },
  {
    img: "/images/blog-thumb2.png",
    date: "12",
    title: "10 Most Popular Cleaning Tips for House",
  },
  {
    img: "/images/blog-thumb3.png",
    date: "25",
    title: "Floor Cleaning Use New Equipment",
  },
];

const Blog = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-14">
          
          <div>
            <p className="text-blue-500 font-semibold">LATEST BLOG</p>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2">
              Learn about our Latest <br /> News from Blog
            </h2>
          </div>

          {/* BUTTON */}
          <button className="relative overflow-hidden bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold group flex items-center gap-2">
  
  {/* TEXT */}
    <span className="relative z-10 group-hover:text-white transition">
    View All Blog →
        </span>

  {/* TOP HALF */}
         <span className="absolute top-0 left-0 w-full h-1/2 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>

  {/* BOTTOM HALF */}
    <span className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
    </button>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {blogs.map((item, i) => (
            <div
              key={i}
              className="bg-[#f3f4f8] rounded-md overflow-hidden group transition-all duration-500 hover:bg-white hover:shadow-xl"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  className="w-full transition-all duration-500 group-hover:scale-110"
                  alt=""
                />

                {/* DATE */}
                <div className="absolute left-5 bottom-4">
  <div className="relative bg-yellow-400 px-4 py-2 rounded text-center font-semibold text-blue-900 overflow-hidden group">

    {/* BLUE HOVER BG */}
    <span className="absolute inset-0 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-500"></span>

    {/* TEXT */}
    <div className="relative z-10 group-hover:text-white transition">
      {item.date}
      <div className="text-sm font-normal">MAY</div>
    </div>

  </div>
</div>

              </div>

              {/* CONTENT */}
              <div className="px-6 pb-7">

                {/* TITLE */}
                <h5 className="text-xl font-semibold text-blue-900 mt-7 mb-3 transition group-hover:text-blue-500">
  {item.title}
</h5>
                {/* DESC */}
                <p className="text-gray-600">
                  Competently repurpose forward benefits conveniently target e-business
                </p>

                {/* READ MORE */}
                <button className="mt-5 flex items-center gap-2 border-b border-transparent transition group-hover:text-blue-400 group-hover:border-blue-400">
                  Read More <FaArrowRight />
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Blog;