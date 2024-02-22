// pages/portfolio.tsx

import Head from "next/head";
import Link from "next/link";
import Navbar from "../navbar/page";

const PortfolioPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Portfolio - Tech Innovate</title>
      </Head>
     
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-white text-3xl font-semibold mb-6">
          Our Portfolio
        </h1>
        
        <div className="container my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="">
          <Link href="https://onilab.com/blog/ecommerce-website-redesign">
          <div className=" w-full h-full bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              E-commerce Website Redesign:
            </h2>
            <div className="flex justify-center">
              <img
                src="/ecommerce.jpg"
               
                className="w-40 h-40 object-cover mr-2 rounded-lg"
              />
             
            </div>
            <p className="text-gray-600 mt-4">
              Revamped an existing e-commerce website by implementing a modern
              design, improving user experience, and optimizing performance to
              increase conversion rates and enhance customer satisfaction
            </p>
          </div>
          </Link>
          </div>

          {/* Project 2 */}
          <div>
          <Link href="https://mashable.com/article/build-mobile-apps#:~:text=10%20excellent%20platforms%20for%20building%20mobile%20apps%201,GameSalad%20...%208%208.%20BiznessApps%20...%20%C3%89l%C3%A9ments%20suppl%C3%A9mentaires">
          <div className=" w-full h-full bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              Mobile Application Development
            </h2>
            <div className="flex justify-center">
              <img
                src="/mobileapp.png"
                
                className="w-40 h-40 object-cover mr-2 rounded-lg"
              />
             
            </div>
            <p className="text-gray-600 mt-4">
              Developed a cross-platform mobile application from scratch,
              leveraging the latest technologies to provide seamless user
              interaction, enhanced security features, and real-time data
              synchronization, resulting in a user-friendly and scalable product
            </p>
          </div>
          </Link>
          </div>

          {/* Project 3 */}
          <div>
          <Link href="/project3">
          <div className="h-full w-full bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              Data Analytics Dashboard
            </h2>
            <div className="flex justify-center">
              <img
                src="/analytic.png"
              
                className="w-40 h-40 object-cover mr-2 rounded-lg"
              />
              
            </div>
            <p className="text-gray-600 mt-4">
              "Designed and developed a custom data analytics dashboard for
              tracking key performance indicators, visualizing complex data
              sets, and generating actionable insights, empowering stakeholders
              to make informed business decisions and drive strategic growth
              initiatives.
            </p>
           
          </div>
          </Link>
          </div>
        </div>
       
      </div>
      <Link href="/" className="flex justify-center">
              <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
                Go To Home
              </button>
            </Link>
    </div>
  );
};

export default PortfolioPage;
