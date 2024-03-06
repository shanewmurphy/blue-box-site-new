export default function Security() {
  return (
    <div className="lg:w-10/12 laptop:w-11/12 md:w-11/12 sm:w-11/12 mx-auto lg:my-[30%] laptop:my-[30%] md:my-[30%] sm:my-[60%]">
      <div>
        <h4 className="lg:text-6xl laptop:text-6xl md:text-5xl sm:text-3xl text-myblue text-center font-bold mb-4">
          Protecting Your Belongings
        </h4>
      </div>
      <div className="bg-cardSecuritybkg lg:h-[500px] md:h-[550px] sm:h-[380px] lg:bg-[url('/Security-imgs/Fencing-lg.png')] md:bg-[url('/Security-imgs/Fencing-tablet.png')] sm:bg-[url('/Security-imgs/Fencing-tablet.png')] bg-no-repeat bg-right-bottom lg:bg-cover md:bg-contain sm:bg-contain rounded-xl mt-6">
        <div className="lg:p-16 md:p-8 sm:p-6">
          <h5 className="lg:text-2xl md:text-xl sm:text-xl font-semibold text-myblue mb-1">
            Fencing and Perimeter Security
          </h5>
          <p className="lg:text-sm md:text-sm sm:text-xs text-myblack font-medium lg:w-[50%] md:w-[70%]">
            Our facility is enclosed with perimeter with barbed wire fencing to
            enhance security, ensuring that your items are protected.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-6 mt-6">
        <div className="bg-cardSecuritybkg lg:h-[300px] md:h-[300px] sm:h-[190px] rounded-xl lg:bg-[url('/Security-imgs/CCTV.png')] md:bg-[url('/Security-imgs/CCTV-tablet.png')] sm:bg-[url('/Security-imgs/CCTV-mobile.png')]  bg-no-repeat bg-right-bottom">
          <div className="grid content-end lg:h-72 md:h-64 sm:h-44 lg:p-8 md:p-8 sm:p-4">
            <div>
              <h5 className="lg:text-2xl md:text-xl sm:text-xl font-semibold text-myblue mb-1">
                Surveillance Systems
              </h5>
              <p className="lg:text-sm md:text-sm sm:text-xs text-myblack font-normal lg:w-[70%] md:w-[70%] sm:w-[70%]">
                With our top-notch security measures, you can trust that your
                belongings are safe with us.
              </p>
            </div>
          </div>
        </div>
        <div>BBB</div>
      </div>
    </div>
  );
}
