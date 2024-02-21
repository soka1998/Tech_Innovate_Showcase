import Head from "next/head";
import Navbar from "./navbar/page";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <Head>
        <title>
        
        </title>
        <meta name="description" content="Tech Innovate - Your Innovation Partner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center p-24" >
        <div className="flex flex-col items-center bg-opacity-50 bg-gray-900 p-8 rounded-md text-white ">
          <h1 className="text-4xl font-bold mb-4">Welcome to Tech Innovate</h1>
          <p className="text-lg mb-8 font-semibold italic text-gray-300">
            Your Trusted Innovation Partner
          </p>
          <p className="text-lg">
            We specialize in cutting-edge technology solutions, digital transformation, and innovation consulting.
            At Tech Innovate, we are dedicated to providing cutting-edge technology solutions to drive innovation and digital transformation for businesses of all sizes. With our team of experts, we offer comprehensive consulting services to help our clients thrive in today's rapidly evolving digital landscape.

          </p>
        </div>
      </main>

    </div>
  );
}
