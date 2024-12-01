import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const CustomerTestimonials = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-left mb-6">Customer Testimonials</h2>

        {/* Testimonial Paragraph */}
        <p className="text-left text-lg mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Testimonials Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className=" p-6 border border-black text-center">
            <div className="mb-4">
              {/* Star Rating */}
              <div className="flex justify-center space-x-1">
                <FaStar />
                <FaStar  />
                <FaStar  />
                <FaStar />
                <FaStar />
              </div>
              {/* Testimonial Text */}
              <p className="mt-4 max-w-lg text-center mx-auto">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan eros nec diam gravida, eu blandit turpis facilisis.&quot;
              </p>
            </div>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <Image
                src="/A.svg" 
                alt="Customer 1"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className='flex flex-col items-center'>
                <h1 className='font-semibold'>James Nduku</h1>
                <p className='font-normal'>Software Developer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-primary p-6 border border-black text-center">
            <div className="mb-4">
              {/* Star Rating */}
              <div className="flex justify-center space-x-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Testimonial Text */}
              <p className="mt-4 max-w-lg mx-auto">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan eros nec diam gravida, eu blandit turpis facilisis.&quot;
              </p>
            </div>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <Image
                src="/Image5.png"
                alt="Customer 2"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className='flex flex-col items-center'>
                <h1 className='font-semibold'>Erick Kipkemboi</h1>
                <p className="font-normal">Scrum Master</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-primary p-6 border border-black text-center">
            <div className="mb-4">
              {/* Star Rating */}
              <div className="flex justify-center space-x-1">
                <FaStar />
                <FaStar  />
                <FaStar  />
                <FaStar  />
                <FaStar />
              </div>
              {/* Testimonial Text */}
              <p className="mt-4">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan eros nec diam gravida, eu blandit turpis facilisis.&quot;
              </p>
            </div>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <Image
                src="/Image2.png"
                alt="Customer 3"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex flex-col items-center">
                <h1 className="font-semibold">Stephen Kerubo</h1>
                <p className="font-normal ">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
