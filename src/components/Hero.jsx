/* eslint-disable tailwindcss/no-custom-classname */
const Hero = () => {
  return (
    <div
      className="
            mx-auto
            my-10
            
            w-full
            text-center
           
            sm:w-3/4
            "
    >
      <h1 className="mb-4 text-4xl font-bold ">
        Shop the Latest Electronics, Jewelry, and Clothing Trends.
      </h1>
      <p
        className="mb-10 text-lg
                "
      >
        From the latest smartphones and home electronics to stylish men&apos;s
        and women&apos;s clothing, and stunning jewelry pieces, we&apos;ve got
        everything you need to stay on-trend and make a statement, all in one
        convenient online destination.
      </p>
    
      <button className="group relative inline-block text-lg">
        <span className="relative z-10 block overflow-hidden rounded-md border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white">
          <span className="absolute inset-0 h-full w-full rounded-md bg-gray-50 px-5 py-3"></span>
          <span className="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"></span>
          <span className="relative">Shop Now</span>
        </span>
        <span
          className="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></span>
      </button>
    </div>
  );
};

export default Hero;
