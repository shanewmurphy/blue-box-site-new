export default function Footer() {
  return (
    <div className="w-full bg-myblue lg:py-16 lg:px-16 md:py-10 md:px-10 sm:py-16 sm:px-8 antialiased">
      <div className="flex lg:flex-row md:flex-col sm:flex-col gap-12">
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
          <div className="flex gap-4 mt-4 lg:hidden md:hidden sm:flex">
            <div>
              <Facebook />
            </div>
            <div>
              <Instagram />
            </div>
            <div>
              <Twitter />
            </div>
            <div>
              <LinkedIn />
            </div>
          </div>
        </div>
        <div className="basis-3/5 inline-flex gap-4">
          <div className="basis-2/4">
            <div className="text-mywhite text-sm lg:mt-0 md:mt-0 sm:mt-6">
              <h6 className="font-semibold lg:text-lg md:text-lg sm:text-sm">
                Helpful Links
              </h6>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">
                <a href="/Ten-foot-conatiner" className="hover:underline">
                  10ft Container
                </a>
              </p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">
                <a href="/Twenty-foot-container" className="hover:underline">
                  20ft Container
                </a>
              </p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">
                <a href="/Forty-foot-container" className="hover:underline">
                  40ft Container
                </a>
              </p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">
                <a href="/Collection-service" className="hover:underline">
                  Collection Service
                </a>
              </p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">
                <a href="/Contact-Us" className="hover:underline">
                  Contact Us
                </a>
              </p>
            </div>
          </div>
          <div className="basis-2/4">
            <div className="text-mywhite text-sm lg:mt-0 md:mt-0 sm:mt-6">
              <h6 className="font-semibold lg:text-lg md:text-lg sm:text-sm">
                Terms & Conditions
              </h6>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">
                <a href="/Privacy-Policy" className="hover:underline">
                  Privay Policy
                </a>
              </p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">Cookie Policy</p>
              <p className="lg:mt-1 md:mt-1 sm:mt-2">Rental Terms</p>
            </div>
          </div>
          <div className="basis-2/4 lg:block md:block sm:hidden">
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
              <p className="lg:mt-3 md:mt-2 sm:mt-2">
                <span className="inline-block align-middle pr-2">
                  <Instagram />
                </span>
                Instagram
              </p>
              <p className="lg:mt-3 md:mt-2 sm:mt-2">
                <span className="inline-block align-middle pr-2">
                  <Twitter />
                </span>
                Twitter/X
              </p>
              <p className="lg:mt-3 md:mt-2 sm:mt-2">
                <span className="inline-block align-middle pr-2">
                  <LinkedIn />
                </span>
                LinkedIn
              </p>
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7222 0H5.27778C2.36295 0 0 2.36295 0 5.27778V13.7222C0 16.637 2.36295 19 5.27778 19H13.7222C16.637 19 19 16.637 19 13.7222V5.27778C19 2.36295 16.637 0 13.7222 0ZM17.1528 13.7222C17.147 15.6144 15.6144 17.147 13.7222 17.1528H5.27778C3.38554 17.147 1.85302 15.6144 1.84722 13.7222V5.27778C1.85302 3.38554 3.38554 1.85302 5.27778 1.84722H13.7222C15.6144 1.85302 17.147 3.38554 17.1528 5.27778V13.7222ZM14.5139 5.54167C15.0969 5.54167 15.5694 5.06907 15.5694 4.48611C15.5694 3.90315 15.0969 3.43056 14.5139 3.43056C13.9309 3.43056 13.4583 3.90315 13.4583 4.48611C13.4583 5.06907 13.9309 5.54167 14.5139 5.54167ZM9.5 4.75C6.87665 4.75 4.75 6.87665 4.75 9.5C4.75 12.1234 6.87665 14.25 9.5 14.25C12.1234 14.25 14.25 12.1234 14.25 9.5C14.2529 8.23935 13.7533 7.02955 12.8618 6.13814C11.9704 5.24673 10.7607 4.74719 9.5 4.75ZM6.59722 9.5C6.59722 11.1032 7.89682 12.4028 9.5 12.4028C11.1032 12.4028 12.4028 11.1032 12.4028 9.5C12.4028 7.89682 11.1032 6.59722 9.5 6.59722C7.89682 6.59722 6.59722 7.89682 6.59722 9.5Z"
        fill="white"
      />
    </svg>
  );
}

function Twitter() {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7512 0H18.818L12.1179 7.62458L20 18H13.8284L8.99456 11.7074L3.46359 18H0.394933L7.5613 9.84465L0 0H6.32828L10.6977 5.7517L15.7512 0ZM14.6748 16.1723H16.3742L5.4049 1.73169H3.58133L14.6748 16.1723Z"
        fill="white"
      />
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.58333 0C0.708879 0 0 0.708879 0 1.58333V17.4167C0 18.2911 0.708879 19 1.58333 19H17.4167C18.2911 19 19 18.2911 19 17.4167V1.58333C19 0.708879 18.2911 0 17.4167 0H1.58333ZM5.82747 4.22509C5.83341 5.23447 5.07787 5.85642 4.1813 5.85197C3.33668 5.84751 2.60044 5.17509 2.60489 4.22658C2.60934 3.33447 3.31442 2.61751 4.23029 2.6383C5.1595 2.65908 5.83341 3.34041 5.82747 4.22509ZM9.79524 7.13741H7.13525H7.13376V16.1728H9.94513V15.962C9.94513 15.561 9.94481 15.1599 9.94449 14.7587C9.94365 13.6885 9.9427 12.6173 9.94819 11.5475C9.94967 11.2877 9.96149 11.0176 10.0283 10.7696C10.2791 9.84337 11.1119 9.24519 12.0411 9.39223C12.6379 9.48564 13.0326 9.83155 13.1989 10.3942C13.3014 10.7459 13.3474 11.1244 13.3518 11.4911C13.3639 12.5969 13.3622 13.7027 13.3605 14.8086C13.3599 15.1989 13.3592 15.5895 13.3592 15.9798V16.1713H16.1796V15.9546C16.1796 15.4775 16.1793 15.0005 16.179 14.5235C16.1785 13.3312 16.1779 12.139 16.181 10.9463C16.1825 10.4075 16.1247 9.8761 15.9925 9.35507C15.7951 8.58019 15.3869 7.93894 14.7234 7.47587C14.2529 7.14631 13.7363 6.93405 13.1589 6.9103C13.0931 6.90757 13.0268 6.90399 12.9602 6.90039C12.665 6.88443 12.3649 6.86822 12.0826 6.92514C11.2751 7.08694 10.5657 7.45655 10.0298 8.10814C9.96751 8.18288 9.9066 8.25877 9.81572 8.37203L9.79524 8.39768V7.13741ZM2.83062 16.1758H5.62867V7.14329H2.83062V16.1758Z"
        fill="white"
      />
    </svg>
  );
}
