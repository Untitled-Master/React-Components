function Navbar() {
    return (
      <nav className="bg-[#09090B] text-[#FAFAFA] py-4">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-semibold">
            <a href="#" className="hover:text-gray-400">Ahmed's Site</a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#services" className="hover:text-gray-400">Services</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  
