// pages/services.tsx

import Head from "next/head";
import Link from "next/link";

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-blue-950 h-screen">
      <Head>
        <title>Services - Tech Innovate</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Software Development */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Software Development</h2>
            <p className="text-gray-600 mb-4">
              We specialize in developing custom software solutions tailored to
              your business needs.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Web Application Development</li>
              <li>Mobile App Development</li>
              <li>Enterprise Software Solutions</li>
            </ul>
          </div>
          {/* Service 2: Digital Transformation */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              Digital Transformation
            </h2>
            <p className="text-gray-600 mb-4">
              We assist businesses in leveraging digital technologies to drive
              innovation and growth.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Business Process Automation</li>
              <li>Cloud Migration Services</li>
              <li>IoT Solutions</li>
            </ul>
          </div>
          {/* Service 3: Consulting Services */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Consulting Services</h2>
            <p className="text-gray-600 mb-4">
              Our experts provide strategic consulting to help businesses
              navigate the complexities of technology.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Technology Strategy Development</li>
              <li>IT Advisory Services</li>
              <li>Digital Marketing Consulting</li>
            </ul>
          </div>
          <div className="mt-4">
            {/* Add Link component to navigate to the home page */}
            <Link href="/">
              <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
               Go To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
