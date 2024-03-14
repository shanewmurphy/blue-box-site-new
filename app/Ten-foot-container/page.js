export default function TenFootContainerPage() {
  return (
    <div>
      <div className="w-full bg-myblue lg:h-[80vh] md:h-[85vh] sm:h-svh lg:py-14 lg:px-14 antialiased">
        <div className="xl:w-10/12 lg:w-11/12 md: laptop:w-11/12 sm:w-11/12 mx-auto lg:py-[6%] md:py-[15%] sm:py-[25%]">
          <div className="flex flex-row xl:gap-32 lg:gap-10">
            <div className="lg:basis-1/3">
              <div className="bg-mywhite xl:w-[300px] lg:w-[280px] py-7 px-7 lg:mt-5 rounded-xl xl:block lg:block md:hidden sm:hidden xs:hidden">
                <div>
                  <h3 className="lg:text-2xl text-myblue font-bold">
                    10FT Container
                  </h3>
                  <h6 className="lg:text-sm text-myblack font-medium">
                    Compact and Convenient
                  </h6>
                </div>
                <div className="lg:mt-4">
                  <h4 className="lg:text-base text-myblue font-semibold">
                    Dimensions
                  </h4>
                  <p className="lg:text-sm text-myblack font-medium">
                    10ft long, 7ft wide, and 7ft tall
                  </p>
                </div>
                <div className="lg:mt-4">
                  <h4 className="lg:text-base text-myblue font-semibold">
                    Storage Capacity
                  </h4>
                  <p className="lg:text-xs text-myblack font-medium">
                    Capacity of approximately hold the contents of a studio
                    apartment or a small office space.
                  </p>
                </div>
                <div className="mt-6 mb-3">
                  <button className="bg-myblue text-mywhite font-semibold text-lg rounded-2xl py-2 px-10">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
            <div className="xl:basis-2/3 lg:basis-2/3 md:w-11/12 sm:w-11/12 flex items-center">
              <div>
                <div className="lg:hidden md:block sm:block">
                  <h2 className="font-bold text-mywhite md:text-6xl sm:text-5xl text-center">
                    10ft Container
                  </h2>
                  <h3 className="font-semibold text-mywhite md:text-2xl sm:text-lg text-center md:mb-6 sm:mb-6">
                    Compact and Convenient
                  </h3>
                </div>
                <picture>
                  <img
                    className="object-cover lg:float-right md:p-8"
                    src="/10-ft-imgs/10ft-min.png"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="lg:hidden md:block md:w-10/12 sm:w-11/12 mx-auto bg-mywhite md:py-6 md:px-2 sm:py-4 sm:px-2 sm:mt-4 rounded-3xl">
            <div className="grid md:grid-cols-2 md:divide-x md:divide-y-0 sm:divide-y sm:px-5 md:gap-8 sm:gap-2">
              <div>
                <h6 className="text-lg font-semibold text-myblue">
                  Storage Capacity
                </h6>
                <p className="text-myblack font-medium text-xs">
                  Hold the contents of a studio apartment or a small office
                  space
                </p>
              </div>
              <div>
                <h6 className="text-lg md:pl-6 sm:mt-1 font-semibold text-myblue">
                  Dimensions
                </h6>
                <p className="text-myblack md:pl-6 font-medium text-xs">
                  10ft long, 7ft wide, and 7ft tall
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
