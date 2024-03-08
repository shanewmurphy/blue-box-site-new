export default function CollectionService() {
  return (
    <div className="lg:w-10/12 laptop:w-11/12 md:w-11/12 sm:w-11/12 mx-auto lg:my-[25%] laptop:my-[25%] md:my-[30%] sm:my-[60%] antialiased">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="lg:w-[90%] laptop:w-[95%] md:w-[100%] sm:w-[100%]">
          <h3 className="lg:text-4xl md:text-5xl sm:text-3xl text-myblue font-bold">
            Convenient Pick-Up Service Let Us Come to You!
          </h3>
          <p className="lg:text-base font-medium text-myblack mt-2">
            Don&apos;t have time to drop off your belongings? No problem! With
            Blue Box Storage&apos;s pickup service, we&apos;ll collect your
            items right from your doorstep, saving you time and effort.
          </p>
          <div className="bg-myblue rounded-xl p-8 lg:mt-0 md:mt-0 sm:mt-4 lg:hidden md:hidden sm:block">
            <img
              src="/Collection-imgs/BlueBox_Van-min.png"
              alt="Bluxbox Collection Service"
            />
          </div>
          <h6 className="lg:text-xl md:text-xl sm:text-lg text-myblack font-bold lg:mt-6 md:mt-6 sm:mt-4">
            Simply Select this Option in Quotation Form
          </h6>
          <p className="text-myblack font-medium lg:text-sm">
            Prices are based on distance from our facility & size of storage
            container being rented.
          </p>
          <div className="mt-6">
            <button className="py-3 px-9 font-semibold rounded-xl bg-myblue text-mywhite lg:text-base md:text-base sm:text-base cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        <div className="bg-myblue h-[100%] rounded-xl p-8 lg:block md:block sm:hidden">
          <img
            src="/Collection-imgs/BlueBox_Van-min.png"
            alt="Bluxbox Collection Service"
          />
        </div>
      </div>
    </div>
  );
}
