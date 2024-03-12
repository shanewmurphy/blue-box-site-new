export default function Footer() {
  return (
    <div className="w-full bg-myblue lg:py-16 lg:px-16 md:py-10 md:px-10 sm:py-8 sm:px-8">
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 lg:justify-items-center gap-4">
          <div>
            <div>
              <Logo />
            </div>
            <h4 className="font-bold text-mywhite lg:text-2xl md:text-2xl sm:text-xl mt-2">
              Your Belongs, Our Priority
            </h4>
            <h5 className="font-medium text-mywhite lg:text-xl md:text-xl sm:text-lg">
              Secure, Convenient, and Affordable Storage Solutions
            </h5>
          </div>
          <div className="text-mywhite text-sm lg:mt-0 md:mt-0 sm:mt-6">
            <h6 className="font-semibold lg:text-lg md:text-lg sm:text-base">
              Helpful Links
            </h6>
            <p className="lg:mt-1 md:mt-1 sm:mt-2">10ft Container</p>
            <p className="lg:mt-1 md:mt-1 sm:mt-2">20ft Container</p>
            <p className="lg:mt-1 md:mt-1 sm:mt-2">40ft Container</p>
            <p className="lg:mt-1 md:mt-1 sm:mt-2">Collection Service</p>
            <p className="lg:mt-1 md:mt-1 sm:mt-2">Customer Service</p>
          </div>
          <div className="text-mywhite text-sm lg:mt-0 md:mt-0 sm:mt-6">
            <h6 className="font-semibold lg:text-lg md:text-lg sm:text-base">
              Terms & Conditions
            </h6>
            <p className="lg:mt-1 md:mt-1 sm:mt-2">Privay Policy</p>
            <p className="lg:mt-1 md:mt-1 sm:mt-2">Terms of Service</p>
            <p className="lg:mt-1 md:mt-1 sm:mt-2">Rental Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="74"
      height="72"
      viewBox="0 0 74 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1552_6946)">
        <path
          d="M20.9326 36L36.9827 45.577L53.0328 36L36.9827 26.423L20.9326 36ZM27.4946 42.2182L19.0108 37.1541L2.94338 46.7311L18.9934 56.3081L35.0435 46.7311L27.4773 42.2182H27.4946ZM35.9958 48.488L19.9977 58.0306V69.2612L35.9958 59.7187V48.488ZM17.9892 58.0134L2.00842 48.488V59.7187L18.0065 69.2612V58.0306L17.9892 58.0134ZM0.554048 45.8354L17.0543 36L0.571362 26.1646C0.225082 26.0096 0 25.6651 0 25.2689V11.7301C0 11.334 0.225082 10.9895 0.554048 10.8344L18.4221 0.189474C18.5952 0.0688995 18.7857 0 19.0108 0C19.2358 0 19.4263 0.0688995 19.5994 0.189474L37.0173 10.5761L54.4179 0.189474C54.591 0.0688995 54.7815 0 55.0065 0C55.2316 0 55.4221 0.0688995 55.5952 0.189474L73.4459 10.8344C73.7749 10.9895 74 11.334 74 11.7301V25.2689C74 25.6651 73.7749 26.0096 73.4286 26.1646L56.9457 36L73.4286 45.8354C73.7576 45.9904 74 46.3349 74 46.7311V60.2699C74 60.666 73.7749 60.9933 73.4459 61.1655L55.5952 71.8105C55.4221 71.9311 55.2316 72 55.0065 72C54.7815 72 54.591 71.9311 54.4179 71.8105L37 61.4239L19.5821 71.8105C19.409 71.9311 19.2185 72 18.9934 72C18.7684 72 18.5779 71.9311 18.4048 71.8105L0.554048 61.1655C0.225082 61.0105 0 60.666 0 60.2699V46.7311C0 46.3349 0.225082 46.0077 0.554048 45.8354ZM37.9869 48.488V59.7187L53.985 69.2612V58.0306L37.9869 48.488ZM54.9892 37.1541L38.9392 46.7311L54.9892 56.3081L71.0393 46.7311L54.9892 37.1541ZM64.4946 52.9493L55.9934 58.0306V69.2612L71.9916 59.7187V48.488L64.5119 52.9493H64.4946ZM46.5054 29.7818L54.9892 34.8459L71.0393 25.2689L54.9892 15.6919L38.9392 25.2689L46.5054 29.7818ZM37.9869 23.512L53.985 13.9694V2.75598L37.9869 12.2986V23.5292V23.512ZM55.9934 13.9866L71.9916 23.5292V12.2986L55.9934 2.75598V13.9866ZM35.9958 23.512V12.2813L19.9977 2.75598V13.9866L35.9958 23.5292V23.512ZM18.9934 34.8459L35.0435 25.2689L18.9934 15.6919L2.94338 25.2689L18.9934 34.8459ZM9.48807 19.0507L17.9892 13.9694V2.75598L2.00842 12.2986V23.5292L9.48807 19.0679V19.0507Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1552_6946">
          <rect width="74" height="72" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
