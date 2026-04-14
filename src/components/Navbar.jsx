import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
      
      {/* LOGO */}
      <img src="/images/logo.png" className="h-12" alt="logo" />

      {/* MENU */}
      <ul className="hidden lg:flex items-center gap-6 font-medium text-gray-800">
        
        {/* HOME */}
        <li className="relative group cursor-pointer">
          <span className="flex items-center gap-1 hover:text-blue-600">
            Home ▼
          </span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-3 w-40 rounded">
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Home 1</li>
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Home 2</li>
          </ul>
        </li>

        {/* ABOUT */}
        <li className="hover:text-blue-600 cursor-pointer">About</li>

        {/* SERVICE */}
        <li className="relative group cursor-pointer">
          <span className="flex items-center gap-1 hover:text-blue-600">
            Service ▼
          </span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-3 w-44 rounded">
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Our Service</li>
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Service Details</li>
          </ul>
        </li>

        {/* PAGES */}
        <li className="relative group cursor-pointer">
          <span className="flex items-center gap-1 hover:text-blue-600">
            Pages ▼
          </span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-3 w-52 rounded">
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">About Us</li>
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Team</li>
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Projects</li>
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Pricing</li>
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Appointment</li>
          </ul>
        </li>

        {/* BLOG */}
        <li className="relative group cursor-pointer">
          <span className="flex items-center gap-1 hover:text-blue-600">
            Blog ▼
          </span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-3 w-44 rounded">
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Blog Grid</li>
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Blog List</li>
            <li className="px-4 py-2 hover:bg-blue-600 hover:text-white">Blog Details</li>
          </ul>
        </li>

        {/* CONTACT */}
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        
        <FaSearch className="cursor-pointer" />

        {/* 🔥 SAME BUTTON EFFECT AS HERO */}
        <button className="relative overflow-hidden bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold group">
          
          <span className="relative z-10 group-hover:text-white transition">
            Get Free Quote
          </span>

          {/* split animation */}
          <span className="absolute top-0 left-0 w-full h-1/2 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;