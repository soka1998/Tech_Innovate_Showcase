// components/Navbar.tsx

import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
            <Image src="/logo2.png" width={100} height={102} alt="Tech Innovate Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="bg-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">Home</Link>
                <Link href="/services" className=" bg-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">Services</Link>
                <Link href="/portfolio" className="bg-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">Portfolio</Link>
                <Link href="/team" className="bg-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">Team</Link>
                <Link href="/contact" className=" bg-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  