import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c1e6b] text-white relative overflow-hidden">

      {/* 🔵 BACKGROUND BUBBLES */}
   <div
className="absolute inset-0 z-0 pointer-events-none opacity-70 animate-floatBg"
  style={{
    backgroundImage: "url('/images/footer-shape.png')",
    backgroundRepeat: "no-repeat",
backgroundPosition: "center top 40px",
    backgroundSize: "contain",
  }}
/>

      <div className="relative  container mx-auto px-6 pt-20">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

          {/* 🔹 LOGO + ABOUT */}
          <div>
            <img src="/images/footer-logo.png" alt="" />

            <p className="mt-6 mb-8 text-gray-300">
              Competently repurpose forward conveniently target e-business multipurpose clean
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-[#334899] flex items-center justify-center cursor-pointer
                  hover:bg-yellow-400 hover:text-black transition"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* 🔹 COMPANY */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Company</h4>

            <ul className="space-y-3">
              {["Home", "About Us", "Our Services", "Meet Our Team", "Latest Blog"].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 cursor-pointer transition"
                >
                  ➤ {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 LATEST BLOG */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Latest Blog</h4>

            <div className="space-y-6">

              <div className="flex gap-4">
                <img src="/images/footer-thumb.png" className="w-16 rounded" />

                <div>
                  <p className="text-white hover:text-yellow-400 cursor-pointer transition">
                    10 Most Popular Clean Tips for Housey
                  </p>
                  <span className="text-gray-400 text-sm">Nov 16, 2024</span>
                </div>
              </div>

              <div className="flex gap-4">
                <img src="/images/footer-thumb2.png" className="w-16 rounded" />

                <div>
                  <p className="text-white hover:text-yellow-400 cursor-pointer transition">
                    Floor cleeny and Washing New...
                  </p>
                  <span className="text-gray-400 text-sm">Nov 16, 2024</span>
                </div>
              </div>

            </div>
          </div>

          {/* 🔹 CONTACT */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>

            <div className="space-y-5 text-gray-300">

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#183088] flex items-center justify-center">
                  📍
                </div>
                <p>102/B Philosophy Market Road California, USA</p>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#183088] flex items-center justify-center">
                  📞
                </div>
                <p>+880 123 (4567) 890</p>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#183088] flex items-center justify-center">
                  ✉️
                </div>
                <p>example@yahoo.com</p>
              </div>

            </div>
          </div>

        </div>

        {/* 🔻 BOTTOM */}
        <div className="border-t border-[#334899] mt-16 py-6 text-center text-gray-300">
          © Copyrights 2024 Cleeny All rights reserved by{" "}
          <span className="text-yellow-400">Dream IT</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;