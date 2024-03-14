export default function TenFootContainerPage() {
  return (
    <div>
      <div className="w-full bg-myblue lg:h-[80vh] md:h-[100vh] sm:h-svh lg:py-14 lg:px-14 antialiased">
        <div className="xl:w-10/12 lg:w-11/12 md:w-11/12  sm:w-11/12 mx-auto lg:py-[6%] md:py-[15%] sm:py-[25%]">
          <div className="lg:flex lg:flex-row xl:gap-32 lg:gap-10 md:gap-0 sm:gap-0 md:items-center">
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
            <div className="xl:basis-2/3 lg:basis-2/3 md:basis-11/12 sm:basis-11/12 md:mx-auto">
              <div>
                <div className="lg:hidden md:block sm:block">
                  <h2 className="font-bold text-mywhite md:text-5xl sm:text-5xl text-center">
                    10ft Container
                  </h2>
                  <h3 className="font-semibold text-mywhite md:text-2xl sm:text-xl text-center md:mb-6 sm:mb-6">
                    Compact and Convenient
                  </h3>
                </div>
                <picture>
                  <img
                    className="object-cover lg:float-right lg:h-[auto] md:h-[320px] md:mx-auto"
                    src="/10-ft-imgs/10ft-min.png"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="lg:hidden md:block md:w-10/12 sm:w-11/12 mx-auto">
            <h6 className="text-center font-semibold text-mywhite md:text-2xl sm:text-xl md:mt-6 sm:mt-4">
              Dimensions
            </h6>
            <p className="text-center font-medium md:text-xl sm:text-lg text-mywhite">
              10ft long, 7ft wide, and 7ft tall
            </p>
            <div className="text-center md:mt-8 sm:mt-12">
              <button className="bg-mywhite font-semibold md:px-16 md:py-3 sm:px-16 sm:py-3 md:rounded-2xl sm:rounded-2xl">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
