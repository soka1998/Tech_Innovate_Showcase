import React from "react";
import Navbar from "../navbar/page";

interface TeamCardProps {
  imageSrc: string;
  name: string;
  profession: string;
}

const Team: React.FC = () => {
  return (
    <div>
    <Navbar/>
   
    <section className=" dark:bg-dark mt-9 ">
       
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="text-2xl mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="text-3xl text-white mb-2 block  font-semibold text-primary ">
                Our Team
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-white text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Coriss Ambady"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
          />
          <TeamCard
            name="Coriss Ambady"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
          />
          <TeamCard
            name="Coriss Ambady"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
          />
          <TeamCard
            name="Coriss Ambady"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
          />
        </div>
      </div>
      
      
    </section>
    </div>
    
  );
};

const TeamCard: React.FC<TeamCardProps> = ({ imageSrc, name, profession }) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/4">
      <div className="mx-auto mb-10 w-full max-w-[370px]">
        <div className="relative overflow-hidden rounded-lg">
          <img src={imageSrc} alt="" className="w-full" />
          <div className="absolute bottom-5 left-0 w-full text-center">
            <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
              <h3 className="text-base font-semibold text-dark dark:text-white">
                {name}
              </h3>
              <p className="text-xs text-body-color dark:text-dark-6">
                {profession}
              </p>
              <div>
                <span className="absolute bottom-0 left-0">
                  <svg
                    width={61}
                    height={30}
                    viewBox="0 0 61 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx={16}
                      cy={45}
                      r={45}
                      fill="#13C296"
                      fillOpacity="0.11"
                    />
                  </svg>
                </span>
                <span className="absolute right-0 top-0">
                  <svg
                    width={20}
                    height={25}
                    viewBox="0 0 20 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="0.706257"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 0.706257 24.3533)"
                      fill="#3056D3"
                    />
                    {/* Rest of the SVG */}
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
