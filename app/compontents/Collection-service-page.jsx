export default function ColllectionServicePage() {
  return (
    <div className="xl:my-[20%] lg:my-[25%] md:my-[20%] sm:my-[30%]">
      <div className="lg:w-10/12 laptop:w-11/12 md:w-11/12 sm:w-11/12 mx-auto ">
        <div className="grid lg:grid-cols-2 sm:gap-8">
          <div className="w-[85%]">
            <h2 className="font-bold text-myblue xl:text-4xl lg:text-3xl md:text-6xl sm:text-2xl">
              Convenient Pickup Service Let Us Come to You!
            </h2>
            <p className="text-medium text-myblack lg:text-base md:text-lg sm:text-sm mt-3">
              Don&apos;t have time to drop off your belongings? No problem! With
              Blue Box Storage&apos;s pickup service, we&apos;ll collect your
              items right from your doorstep, saving you time and effort
            </p>
            <h4 className="font-bold text-mblack xl:text-xl lg:text-lg md:text-xl sm:text-lg mt-6">
              Select this Option in Quotation Form
            </h4>
            <p className="text-medium text-myblack lg:text-base md:text-lg sm:text-sm mt-1">
              Prices are based on distance from our facility & size of storage
              container being rented.
            </p>
          </div>
          <div>
            <div className="bg-lightgray lg:p-12 md:p-16 sm:p-6 rounded-xl">
              <picture>
                <img
                  src="/Collection-imgs/Form.png"
                  alt="bluebox collection service"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
