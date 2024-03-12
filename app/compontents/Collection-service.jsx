export default function CollectionService() {
  return (
    <div className="lg:w-10/12 laptop:w-11/12 md:w-11/12 sm:w-11/12 mx-auto lg:my-[25%] laptop:my-[25%] md:my-[30%] sm:my-[60%] antialiased">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="lg:w-[90%] laptop:w-[95%] md:w-[100%] sm:w-[100%]">
          <h3 className="xl:text-4xl lg:text-3xl laptop:text-3xl md:text-5xl sm:text-2xl text-myblue font-bold">
            Trust Our Collection Service To Do the Heavy Lifting
          </h3>
          <h4 className="font-bold text-myblack lg:text-xl md:text-xl sm:text-lg mt-2">
            Don&apos;t have time to drop off your belongings? No problem!{" "}
          </h4>
          <p className="text-base font-medium text-myblack mt-3">
            With Blue Box Storage&apos;s pickup service, we&apos;ll collect your
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
            <button className="font-semibold rounded-xl inline-flex items-center text-myblue border border-myblue hover:bg-myblue hover:text-mywhite px-8 py-3 lg:text-base md:text-base sm:text-base cursor-pointer">
              Learn More
              <span className="pl-1">
                <ArrowRight />
              </span>
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

function ArrowRight() {
  return (
    <svg
      width="24"
      height="17"
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow"
    >
      <path
        d="M23.6646 7.42019L17.0437 0.385389C16.5951 -0.0177694 15.7348 -0.184197 15.2333 0.28194C14.7394 0.741043 14.7541 1.63146 15.2461 2.09238L19.9015 7.03226H1.24142C0.555848 7.03226 0 7.58805 0 8.27366C0 8.95927 0.555848 9.51509 1.24142 9.51509H19.9015L15.2461 14.455C14.8225 14.8793 14.7442 15.801 15.2333 16.2654C15.7223 16.7297 16.6135 16.5814 17.0437 16.1619L23.6646 9.12716C24.1339 8.54669 24.089 7.99346 23.6646 7.42019Z"
        fill="#3745B6"
      />
    </svg>
  );
}
