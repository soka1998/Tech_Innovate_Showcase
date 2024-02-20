// pages/portfolio.tsx

import Head from 'next/head';
import Link from 'next/link';

const PortfolioPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Portfolio - Tech Innovate</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Our Portfolio</h1>
        {/* Add your portfolio content here, such as image gallery or slider */}
      </div>
      <Link href="/" className='flex justify-center items-center'>
              <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 ">
               Go To Home
              </button>
            </Link>
     
    </div>
  );
};

export default PortfolioPage;
