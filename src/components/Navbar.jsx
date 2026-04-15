import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* LOGO */}
      <a href="#home">
        <img src="/images/logo.png" className="h-12" alt="logo" />
      </a>

      {/* MENU */}
      <ul className="hidden lg:flex items-center gap-6 font-medium text-gray-800">
        
        {/* HOME */}
        <li className="relative group cursor-pointer">
          <a href="#home" className="hover:text-blue-600">
            Home ▼
          </a>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-3 w-40 rounded">
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Home 1</li>
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Home 2</li>
          </ul>
        </li>

        {/* ABOUT */}
        <li>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
        </li>

        {/* SERVICE */}
        <li className="relative group cursor-pointer">
          <a href="#services" className="hover:text-blue-600">
            Service ▼
          </a>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-3 w-44 rounded">
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Our Service</li>
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Service Details</li>
          </ul>
        </li>

        {/* PAGES */}
        <li className="relative group cursor-pointer">
          <span className="hover:text-blue-600">Pages ▼</span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-3 w-52 rounded">
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">
              <a href="#about">About Us</a>
            </li>
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Team</li>
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Projects</li>
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </li>

        {/* BLOG */}
        <li>
          <a href="#blog" className="hover:text-blue-600">
            Blog
          </a>
        </li>

        {/* CONTACT */}
        <li>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        
        <FaSearch className="cursor-pointer" />

        <button className="relative overflow-hidden bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold group">
          <span className="relative z-10 group-hover:text-white transition">
            Get Free Quote
          </span>

          <span className="absolute top-0 left-0 w-full h-1/2 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;