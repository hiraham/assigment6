import React from 'react';

const Achievement = () => {
  return (
    <div className='text justify-center'>
      <h1 className="text flex justify-center text-4xl font-bold">Our Achievements</h1>
      <p className="text flex justify-center p-16 py-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra<br/>ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>

      <div className="bg-white py-24 sm:py-16">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {/* First Achievement */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 ">Courses</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">+200</dd>
            </div>

            {/* Second Achievement */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 ">Mentors</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">50K</dd>
            </div>

            {/* Third Achievement */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 ">Students</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">370k</dd>
            </div>

            {/* Fourth Achievement */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7"> Recognition</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">100+</dd>
            </div>
          </dl>
        </div>
      </div>
      <h1 className="text flex justify-center text-4xl font-bold">Our Achievements</h1>
      <p className="text2 flex justify-center p-16 py-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br/> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>

      <div className="bg-white py-24 sm:py-16">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {/* First Achievement */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 ">Courses</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">+200</dd>
            </div>

            {/* Second Achievement */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7">Mentors</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">50K</dd>
            </div>

            {/* Third Achievement */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7">Students</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">370k</dd>
            </div>

            {/* Fourth Achievement */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 "> Recognition</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">100+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
