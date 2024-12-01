import React from 'react';
import Image from 'next/image';


const Teams = () => {
  return (
    <div className=" bg-[#F7F7F7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Heading and Description */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Team Members */}
        <ul
          role="list"
          className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3"
        >
          {/* First Team Member */}
          <li>
            <div className="flex flex-col items-center gap-y-4">
              <Image
                src="/Image5.png" // Ensure the correct path to the image
                alt="John Leboo"
                width={80}
                height={80}
              />
              <div>
                <h3 className="text-base font-semibold tracking-tight">
                James Nduku
                </h3>
                <p className="text-sm font-semibold">
                Marketing Coordinator
                </p>
               
              </div>
              <div className="flex items-center space-x-4 py-2 ">
              <Image
                src="/Social Icons.png" // Ensure the correct path to the image
                alt="John Leboo"
                width={80}
                height={80}
              />
          
        </div>
            </div>
          </li>
       

          {/* Second Team Member */}
          <li>
            <div className="flex flex-col items-center gap-y-4">
              <Image
                src="/Image4.png"
                alt="Jane Doe"
                width={80}
                height={80}
            
              />
              <div>
                <h3 className="text-base font-semibold tracking-tight ">
                Joseph Munyambu
                </h3>
                <p className="text-sm font-semibold">
                Nursing Assistant
                </p>
              </div>
              <div className="flex items-center space-x-4 py-2 ">
              <Image
                src="/Social Icons.png" // Ensure the correct path to the image
                alt="John Leboo"
                width={80}
                height={80}
              />
        </div>
            </div>
          </li>
             {/* Third Team Member */}
             <li>
            <div className="flex flex-col items-center gap-y-4">
              <Image
                src="/A.svg"
                alt="Jane Doe"
                width={80}
                height={80}
              
              />
              <div>
                <h3 className="text-base font-semibold tracking-tight ">
                Joseph Ngumbau
                </h3>
                <p className="text-sm font-semibold">
                Medical Assistant
                </p>
              </div>
              <div className="flex items-center space-x-4 py-2 ">
              <Image
                src="/Social Icons.png" // Ensure the correct path to the image
                alt="John Leboo"
                width={80}
                height={80}
              />
        </div>
            </div>
          </li>
        
         
             {/* Fourth Team Member */}
             <li>
            <div className="flex flex-col items-center gap-y-4">
              <Image
                src="/Image6.png"
                alt="Jane Doe"
                width={80}
                height={80}
            
              />
              <div>
                <h3 className="text-base font-semibold tracking-tight">
                Erick Kipkemboi
                </h3>
                <p className="text-sm font-semibold">
                Web Designer
                </p>
              </div>
            </div>
          </li>
          {/* Fifth Team Member */}
          <li>
            <div className="flex flex-col items-center gap-y-4">
              <Image
                src="/Image3.png"
                alt="Jane Doe"
                width={80}
                height={80}
                
              />
              <div>
                <h3 className="text-base font-semibold tracking-tight">
                Stephen Kerubo
                </h3>
                <p className="text-sm font-semibold ">
                President of Sales
                </p>
              </div>
            </div>
          </li>
          {/* Sixth Team Member */}
          <li>
            <div className="flex flex-col items-center gap-y-4">
              <Image
                src="/Image2.png"
                alt="Jane Doe"
                width={80}
                height={80}
                
              />
              <div>
                <h3 className="text-base font-semibold tracking-tight ">
                John Leboo
                </h3>
                <p className="text-sm font-semibold">
                Dog Trainer
                </p>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Teams;
