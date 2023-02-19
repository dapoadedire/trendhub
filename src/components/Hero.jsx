const Hero = () => {
  return (
    <div
      className="
            mx-auto
            my-20
            w-full
            text-center
            sm:w-3/4
            "
    >
      <h1
        className="mb-4 text-4xl font-bold "
      >
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
      <a
        href="/"
        className="
        rounded-md
        bg-green-700 py-3 px-5 text-lg font-bold text-white
                hover:bg-green-900
                "
      >
        Shop Now!
      </a>
    
    </div>
  );
};

export default Hero;
