export default function CollectionServicePromo() {
  return (
    <div className="lg:w-10/12 laptop:w-11/12 md:w-11/12 sm:w-11/12 mx-auto lg:px-16 lg:py-16 laptop:px-3 laptop:py-2 md:px-12 md:py-12 sm:px-6 sm:py-8 lg:my-[25%] laptop:my-[25%] md:my-[30%] sm:my-[60%] antialiased bg-myblue rounded-3xl">
      <div className="grid lg:grid-cols-2 lg:gap-24 laptop:gap-12 md:gap-8 sm:gap-4">
        <div>
          <div className="antialiased">
            <h3 className="xl:text-3xl lg:text-2xl laptop:text-lg md:text-5xl sm:text-2xl text-mywhite font-bold">
              Trust Our Collection Service To Do the Heavy Lifting
            </h3>
            <h4 className="font-bold text-mywhite lg:text-xl md:text-xl sm:text-lg mt-2">
              Don&apos;t have time to drop off your belongings? No problem!
            </h4>
            <p className="text-base font-medium text-mywhite mt-3">
              With Blue Box Storage&apos;s pickup service, we&apos;ll collect
              your items right from your doorstep, saving you time and effort.
            </p>
            <div className="lg:mt-0 md:mt-0 sm:mt-4 lg:hidden md:hidden sm:block">
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
