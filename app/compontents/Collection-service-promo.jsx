export default function CollectionServicePromo() {
  return (
    <div className="lg:w-10/12 laptop:w-11/12 md:w-11/12 sm:w-11/12 mx-auto lg:px-16 lg:py-16 laptop:px-3 laptop:py-2 md:px-12 md:py-12 sm:px-8 sm:py-8 lg:my-[25%] laptop:my-[25%] md:my-[30%] sm:my-[60%] antialiased bg-myblue lg:rounded-3xl md:rounded-xl sm:rounded-xl">
      <div className="grid lg:grid-cols-2 lg:gap-24 laptop:gap-12 md:gap-8 sm:gap-4">
        <div>
          <div className="antialiased">
            <h3 className="xl:text-5xl lg:text-3xl md:text-6xl sm:text-3xl text-mywhite font-bold">
              Trust Our Collection Service
            </h3>
            <h4 className="font-semibold text-mywhite lg:text-xl md:text-xl sm:text-lg mt-2">
              Don&apos;t have time to drop off your belongings? No problem!
            </h4>
            <p className="text-base font-medium text-mywhite mt-3">
              With Blue Box Storage&apos;s pickup service, we&apos;ll collect
              your items right from your doorstep, saving you time and effort.
            </p>
            <div className="mt-6">
              <button className="font-semibold rounded-xl inline-flex items-center text-mywhite lg:text-base md:text-base sm:text-base cursor-pointer">
                Learn More
                <span className="pl-2 text-mywhite">
                  <ArrowRight />
                </span>
              </button>
            </div>
            <div className="lg:mt-0 md:mt-0 sm:mt-24 lg:hidden md:hidden sm:block">
              <img
                src="/Collection-imgs/BlueBox_Van-min.png"
                alt="Bluxbox Collection Service"
              />
            </div>
          </div>
        </div>
        <div className="lg:block md:block sm:hidden object-center">
          <img
            src="/Collection-imgs/BlueBox_Van-min.png"
            alt="Bluxbox Collection Service"
            className="object-center"
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
    >
      <path
        d="M23.6646 7.42019L17.0437 0.385389C16.5951 -0.0177694 15.7348 -0.184197 15.2333 0.28194C14.7394 0.741043 14.7541 1.63146 15.2461 2.09238L19.9015 7.03226H1.24142C0.555848 7.03226 0 7.58805 0 8.27366C0 8.95927 0.555848 9.51509 1.24142 9.51509H19.9015L15.2461 14.455C14.8225 14.8793 14.7442 15.801 15.2333 16.2654C15.7223 16.7297 16.6135 16.5814 17.0437 16.1619L23.6646 9.12716C24.1339 8.54669 24.089 7.99346 23.6646 7.42019Z"
        fill="white"
      />
    </svg>
  );
}
