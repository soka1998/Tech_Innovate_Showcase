"use client"
import Head from 'next/head';
import ContactForm from '../_components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Contact Us - Your Company Name</title>
        <meta name="description" content="Contact us for inquiries, feedback, or support." />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
