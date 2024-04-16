import Link from "next/link";

import FlyoutMenuDesktop from "./Flyout-menu-desktop";
export default function DesktopNav() {
  return (
    <div className="absolute w-10/12 mx-auto h-14 bg-mywhite left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2 mt-6 rounded-3xl flex items-center xl:visible lg:visible md:visible sm:invisible">
      <div className="flex w-[95%] mx-auto items-center justify-between">
        <div className="">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div>
          <div className="inline-flex text-myblack font-semibold text-base my-16 gap-10 antialiased">
            <div>
              <FlyoutMenuDesktop />
            </div>
            <div>
              <a href="/Collection-service">
                <h4 className="font-semibold text-base text-myblack hover:text-myblue">
                  Collection Service
                </h4>
              </a>
            </div>
            <div>
              <a href="/Contact-Us">
                <h4 className="font-semibold text-base text-myblack hover:text-myblue">
                  Contact Us
                </h4>
              </a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 43 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1375_6957)">
        <path
          d="M12.09 20.9L21.36 26.46L30.63 20.9L21.36 15.34L12.09 20.9ZM15.88 24.51L10.98 21.57L1.7 27.13L10.97 32.69L20.24 27.13L15.87 24.51H15.88ZM20.79 28.15L11.55 33.69V40.21L20.79 34.67V28.15ZM10.39 33.68L1.16 28.15V34.67L10.4 40.21V33.69L10.39 33.68ZM0.32 26.61L9.85 20.9L0.33 15.19C0.13 15.1 0 14.9 0 14.67V6.81C0 6.58 0.13 6.38 0.32 6.29L10.64 0.11C10.74 0.04 10.85 0 10.98 0C11.11 0 11.22 0.04 11.32 0.11L21.38 6.14L31.43 0.11C31.53 0.04 31.64 0 31.77 0C31.9 0 32.01 0.04 32.11 0.11L42.42 6.29C42.61 6.38 42.74 6.58 42.74 6.81V14.67C42.74 14.9 42.61 15.1 42.41 15.19L32.89 20.9L42.41 26.61C42.6 26.7 42.74 26.9 42.74 27.13V34.99C42.74 35.22 42.61 35.41 42.42 35.51L32.11 41.69C32.01 41.76 31.9 41.8 31.77 41.8C31.64 41.8 31.53 41.76 31.43 41.69L21.37 35.66L11.31 41.69C11.21 41.76 11.1 41.8 10.97 41.8C10.84 41.8 10.73 41.76 10.63 41.69L0.32 35.51C0.13 35.42 0 35.22 0 34.99V27.13C0 26.9 0.13 26.71 0.32 26.61ZM21.94 28.15V34.67L31.18 40.21V33.69L21.94 28.15ZM31.76 21.57L22.49 27.13L31.76 32.69L41.03 27.13L31.76 21.57ZM37.25 30.74L32.34 33.69V40.21L41.58 34.67V28.15L37.26 30.74H37.25ZM26.86 17.29L31.76 20.23L41.03 14.67L31.76 9.11L22.49 14.67L26.86 17.29ZM21.94 13.65L31.18 8.11V1.6L21.94 7.14V13.66V13.65ZM32.34 8.12L41.58 13.66V7.14L32.34 1.6V8.12ZM20.79 13.65V7.13L11.55 1.6V8.12L20.79 13.66V13.65ZM10.97 20.23L20.24 14.67L10.97 9.11L1.7 14.67L10.97 20.23ZM5.48 11.06L10.39 8.11V1.6L1.16 7.14V13.66L5.48 11.07V11.06Z"
          fill="#3745b6"
        />
      </g>
      <defs>
        <clipPath id="clip0_1375_6957">
          <rect width="42.74" height="41.8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
