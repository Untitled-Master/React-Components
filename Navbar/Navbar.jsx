import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="bg-[#09090B] shadow-lg py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <a href="#" className="text-[#FAFAFA] text-2xl font-bold">MyLogo</a>
                <ul className="flex space-x-8">
                    <li>
                        <a href="#" className="flex items-center text-[#FAFAFA] text-lg font-medium hover:text-gray-400 transition duration-300">
                            <FaHome className="mr-2" /> Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center text-[#FAFAFA] text-lg font-medium hover:text-gray-400 transition duration-300">
                            <FaInfoCircle className="mr-2" /> About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center text-[#FAFAFA] text-lg font-medium hover:text-gray-400 transition duration-300">
                            <FaEnvelope className="mr-2" /> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
