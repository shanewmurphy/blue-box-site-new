export default function Footer() {
  return (
    <div className="w-full bg-myblue lg:py-16 lg:px-16 md:py-10 md:px-10 sm:py-8 sm:px-8 antialiased">
      <div className="flex lg:flex-row md:flex-row sm:flex-col gap-12">
        <div className="basis-2/5">
          <div>
            <Logo />
          </div>
          <h4 className="font-bold text-mywhite lg:text-2xl md:text-2xl sm:text-xl mt-2">
            Your Belongs, Our Priority
          </h4>
          <h5 className="font-semibold text-mywhite lg:text-xl md:text-xl sm:text-lg lg:w-[80%]">
            Secure, Convenient, and Affordable Storage Solutions
          </h5>
        </div>
        <div className="basis-3/5 inline-flex gap-4">
          <div className="basis-2/4">
            <div className="text-mywhite text-sm lg:mt-0 md:mt-0 sm:mt-6">
              <h6 className="font-semibold lg:text-lg md:text-lg sm:text-sm">
                Helpful Links
              </h6>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">10ft Container</p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">20ft Container</p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">40ft Container</p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">Collection Service</p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">Customer Service</p>
            </div>
          </div>
          <div className="basis-2/4">
            <div className="text-mywhite text-sm lg:mt-0 md:mt-0 sm:mt-6">
              <h6 className="font-semibold lg:text-lg md:text-lg sm:text-sm">
                Terms & Conditions
              </h6>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">Privay Policy</p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">Terms of Service</p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">Rental Terms</p>
            </div>
          </div>
          <div className="basis-2/4 lg:block md:hidden sm:hidden">
            <div className="text-mywhite text-sm lg:mt-0 md:mt-0 sm:mt-6">
              <h6 className="font-semibold lg:text-lg md:text-lg sm:text-sm">
                Follow Us
              </h6>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">
                <span className="inline-block align-middle pr-2">
                  <Facebook />
                </span>
                Facebook
              </p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">Terms of Service</p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">Rental Terms</p>
            </div>
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

function Facebook() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 10.0611C20 4.50451 15.5229 0 10 0C4.47715 0 0 4.50451 0 10.0611C0 15.0828 3.65684 19.2452 8.4375 20V12.9694H5.89844V10.0611H8.4375V7.84452C8.4375 5.32296 9.9305 3.93012 12.2146 3.93012C13.3088 3.93012 14.4531 4.12663 14.4531 4.12663V6.60261H13.1922C11.95 6.60261 11.5625 7.37822 11.5625 8.1739V10.0611H14.3359L13.8926 12.9694H11.5625V20C16.3432 19.2452 20 15.083 20 10.0611Z"
        fill="white"
      />
    </svg>
  );
}
function Instagram() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7222 0H5.27778C2.36295 0 0 2.36295 0 5.27778V13.7222C0 16.637 2.36295 19 5.27778 19H13.7222C16.637 19 19 16.637 19 13.7222V5.27778C19 2.36295 16.637 0 13.7222 0ZM17.1528 13.7222C17.147 15.6144 15.6144 17.147 13.7222 17.1528H5.27778C3.38554 17.147 1.85302 15.6144 1.84722 13.7222V5.27778C1.85302 3.38554 3.38554 1.85302 5.27778 1.84722H13.7222C15.6144 1.85302 17.147 3.38554 17.1528 5.27778V13.7222ZM14.5139 5.54167C15.0969 5.54167 15.5694 5.06907 15.5694 4.48611C15.5694 3.90315 15.0969 3.43056 14.5139 3.43056C13.9309 3.43056 13.4583 3.90315 13.4583 4.48611C13.4583 5.06907 13.9309 5.54167 14.5139 5.54167ZM9.5 4.75C6.87665 4.75 4.75 6.87665 4.75 9.5C4.75 12.1234 6.87665 14.25 9.5 14.25C12.1234 14.25 14.25 12.1234 14.25 9.5C14.2529 8.23935 13.7533 7.02955 12.8618 6.13814C11.9704 5.24673 10.7607 4.74719 9.5 4.75ZM6.59722 9.5C6.59722 11.1032 7.89682 12.4028 9.5 12.4028C11.1032 12.4028 12.4028 11.1032 12.4028 9.5C12.4028 7.89682 11.1032 6.59722 9.5 6.59722C7.89682 6.59722 6.59722 7.89682 6.59722 9.5Z"
        fill="white"
      />
    </svg>
  );
}
