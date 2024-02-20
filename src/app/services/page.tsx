// pages/services.tsx

import Head from 'next/head';

const ServicesPage: React.FC = () => {
  return (
    <div className='bg-blue-950 h-screen'>
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
              We specialize in developing custom software solutions tailored to your business needs.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Web Application Development</li>
              <li>Mobile App Development</li>
              <li>Enterprise Software Solutions</li>
            </ul>
          </div>
          {/* Service 2: Digital Transformation */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Digital Transformation</h2>
            <p className="text-gray-600 mb-4">
              We assist businesses in leveraging digital technologies to drive innovation and growth.
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
              Our experts provide strategic consulting to help businesses navigate the complexities of technology.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Technology Strategy Development</li>
              <li>IT Advisory Services</li>
              <li>Digital Marketing Consulting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
