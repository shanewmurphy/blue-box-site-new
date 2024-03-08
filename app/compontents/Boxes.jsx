export default function Boxes() {
  return (
    <div>
      <div className="flex justify-center items-center lg:w-10/12 laptop:w-11/12 md:w-11/12 sm:w-11/12 mx-auto antialiased">
        <div className="w-full lg:h-[70vh] md:h-[40vh] sm:h-[360px] lg:bg-[url('/Boxes-imgs/Boxes-lg-min.jpg')] md:bg-[url('/Boxes-imgs/Boxes-lg-min.jpg')] sm:bg-[url('/Boxes-imgs/Boxes-sm.jpg')] bg-no-repeat lg:bg-cover md:bg-contain sm:bg-cover flex justify-center items-center">
          <h5 className="lg:text-8xl md:text-6xl sm:text-3xl w-[80%] text-mywhite font-bold text-center">
            Perfect Boxes For Your Packing Needs
          </h5>
        </div>
      </div>
      <div className="lg:w-6/12 laptop:w-11/12 md:w-9/12 sm:w-11/12 mb-[30%] mx-auto lg:mt-8 md:mt-2 sm:mt-3">
        <p className="lg:text-center md:text-center sm:text-left font-medium text-myblack lg:text-xl md:text-lg sm:text-base">
          Our boxes are available in three different sizes to accommodate all
          your packing needs. Our boxes are designed to provide maximum
          protection for your belongings.
        </p>
        <p className="lg:text-center md:text-center sm:text-left text-myblue font-semibold lg:text-xl md:text-xl sm:text-base mt-4">
          Boxes only available for purchase at facility only
        </p>
      </div>
    </div>
  );
}
