export default function QuoteForm() {
  return (
    <div>
      <div className="lg:w-10/12 md:w-8/12 sm:w-11/12 mx-auto lg:py-[15%] md:py-[10%] sm:py-[15%]">
        <div>
          <h2 className="text-center font-bold text-myblue xl:text-6xl lg:text-4xl md:text-5xl sm:text-2xl">
            Get a Quote within 24 Hours
          </h2>
          <p className="text-center font-semibold text-myblack xl:text-xl lg:text-xl md:text-xl sm:text-sm mt-1">
            To provide you with accurate pricing please complete form
          </p>
        </div>
        <div className="lg:w-8/12 md:w-11/12 mx-auto lg:mt-8">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-32">
            <div>
              <div className="lg:mt-0 md:mt-0 sm:mt-8">
                <label className="block">
                  <span className="text-myblack font-medium lg:text-lg md:text-lg sm:text-base">
                    Full Name
                  </span>
                  <input
                    type="text"
                    className="
                                mt-1
                                block
                                lg:w-80
                                md:w-56
                                sm:w-11/12
                                h-12
                                rounded-md
                                bg-inputgray
                                border-inputgray
                                text:placeholderText
                                focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                    placeholder="John Smith"
                  ></input>
                </label>
              </div>
              <div></div>
            </div>
            <div>BBBB</div>
          </div>
        </div>
      </div>
    </div>
  );
}
