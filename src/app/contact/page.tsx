"use client"
import Head from 'next/head';
import ContactForm from '../_components/ContactForm';
import Link from 'next/link';
import Navbar from '../navbar/page';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Head>
        <title>Contact Us - Your Company Name</title>
        <meta name="description" content="Contact us for inquiries, feedback, or support." />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-white text-3xl font-semibold mb-4">Contact Us</h1>
        <ContactForm />
      </div>
      <Link href="/" className='flex justify-center items-center'>
              <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 ">
               Go To Home
              </button>
            </Link>
    </div>
  );
};

export default ContactPage;
