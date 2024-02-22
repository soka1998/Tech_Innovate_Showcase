import React from "react";
import Navbar from "../navbar/page";
import Image from "next/image";

const Team: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <section className="dark:bg-dark mt-9">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="text-2xl mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-3xl text-white mb-2 block font-semibold text-primary">
                  Our Team
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Awesome Team
                </h2>
                <p className="text-white text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="gap-5 -mx-4 flex flex-wrap justify-center">
            <Image src="/dev1.jpg" alt="dev1" width={300} height={300}/> 
            <Image src="/dev2.jpg" alt="dev1" width={300} height={300}/>
            <Image src="/dev3.jpg" alt="dev1" width={300} height={300}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
