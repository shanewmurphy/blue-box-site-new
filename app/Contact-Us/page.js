"use client";
export default function ContactUsPage() {
  return (
    <div>
      <div className="bg-myblue lg:py-36 md:py-14 sm:py-24 antialiased">
        <div className="lg:w-9/12 md:w-10/12 laptop:w-11/12 sm:w-10/12 mx-auto">
          <div className="lg:w-9/12 mx-auto">
            <picture>
              <img
                src="/Contact-us-imgs/contact-us-hero-img-min.png"
                alt="Contact Bluebox Storage"
              />
            </picture>
          </div>
        </div>
      </div>
      <div>
        <div className="w-10/12 mx-auto lg:my-44 md:my-40 sm:my-24 antialiased">
          <div className="grid lg:grid-cols-2 sm:gap-32">
            <div>
              <h2 className="lg:text-3xl md:text-3xl sm:text-2xl font-bold text-myblue">
                Blue Box Storage
              </h2>
              <p className="font-medium lg:text-lg text-myblack mt-2">
                Units 24-48, Euro Business Park,
              </p>
              <p className="font-medium lg:text-lg text-myblack">
                Little Island, T45 WP96,
              </p>
              <p className="font-medium lg:text-lg text-myblack">
                County Cork,
              </p>
              <p className="font-medium lg:text-lg text-myblack">Ireland.</p>
              <h4 className="mt-8 font-bold text-myblack lg:text-2xl md:text-2xl sm:text-2xl">
                Call: 0214 457 457
              </h4>
              <h4 className="mt-2 font-medium text-myblack lg:text-xl">
                info@blueboxstorage.com
              </h4>
              <h5 className="mt-6 font-semibold lg:text-lg">Business Hours</h5>
              <p className="font-medium lg:text-base">
                Monday - Friday: 9:00am to 17:30pm
              </p>
              <div className="mt-6">
                <ul className="inline-flex align-bottom">
                  <li>
                    <Facebook />
                  </li>
                  <li className="pl-4">
                    <Instagram />
                  </li>
                  <li className="pl-4">
                    <Twitter />
                  </li>
                  <li className="pl-4">
                    <LinkedIn />
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h5 className="text-myblack lg:text-2xl md:text-2xl sm:text-2xl font-semibold mb-6 lg:w-3/4">
                Drop us a message & we&apos;ll & get reply within 24hrs
              </h5>
              <div>
                <label className="block">
                  <span className="text-myblack font-semibold text-base">
                    Full Name*
                  </span>
                  <input
                    className=" mt-1
                                block
                                lg:w-80
                                md:w-56
                                sm:w-11/12
                                h-12
                                font-medium 
                                rounded-md
                                bg-inputgray
                                border-inputgray
                                text:placeholderText
                                focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="John Smith"
                  ></input>
                </label>
              </div>
              <div className="lg:my-6 md:my-6 sm:my-4 antialiased">
                <label className="block">
                  <span className="text-myblack font-semibold text-base">
                    Email*
                  </span>
                  <input
                    type="email"
                    className="mt-1
                                block
                                font-medium
                                lg:w-80
                                md:w-56
                                sm:w-11/12
                                h-12
                                rounded-md
                                bg-inputgray
                                border-inputgray
                                text:placeholderText
                                focus:border-gray-500 focus:bg-white focus:ring-0"
                    placeholder="john@example.com"
                  ></input>
                </label>
              </div>
              <div className="lg:my-6 md:my-6 sm:my-4 antialiased">
                <label>
                  <span className="text-myblack font-semibold text-base">
                    What is you&apos;re enquiry
                  </span>
                  <select className="block w-full mt-1 rounded-md bg-inputgray lg:w-80 md:w-56 sm:w-11/12 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                    <option>Gerneral</option>
                    <option>Storage Rental</option>
                    <option>Accounts</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
              <div className="lg:my-6 md:my-6 sm:my-4 antialiased">
                <span className="text-myblack font-semibold text-base">
                  Additional details*
                </span>
                <textarea
                  className="block lg:w-9/12 md:w-9/12 sm:w-full h-36 mt-1 rounded-md bg-inputgray"
                  rows="6"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Facebook() {
  const handleHover = (e) => {
    e.target.setAttribute("fill", "#3745b6"); // Change the fill color to your desired hover color
  };

  const handleMouseOut = (e) => {
    e.target.setAttribute("fill", "#3a3a3a"); // Reset the fill color on mouse out
  };
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      <path
        d="M20 10.0611C20 4.50451 15.5229 0 10 0C4.47715 0 0 4.50451 0 10.0611C0 15.0828 3.65684 19.2452 8.4375 20V12.9694H5.89844V10.0611H8.4375V7.84452C8.4375 5.32296 9.9305 3.93012 12.2146 3.93012C13.3088 3.93012 14.4531 4.12663 14.4531 4.12663V6.60261H13.1922C11.95 6.60261 11.5625 7.37822 11.5625 8.1739V10.0611H14.3359L13.8926 12.9694H11.5625V20C16.3432 19.2452 20 15.083 20 10.0611Z"
        fill="#3a3a3a"
      />
    </svg>
  );
}
function Instagram() {
  const handleHover = (e) => {
    e.target.setAttribute("fill", "#3745b6"); // Change the fill color to your desired hover color
  };

  const handleMouseOut = (e) => {
    e.target.setAttribute("fill", "#3a3a3a"); // Reset the fill color on mouse out
  };
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7222 0H5.27778C2.36295 0 0 2.36295 0 5.27778V13.7222C0 16.637 2.36295 19 5.27778 19H13.7222C16.637 19 19 16.637 19 13.7222V5.27778C19 2.36295 16.637 0 13.7222 0ZM17.1528 13.7222C17.147 15.6144 15.6144 17.147 13.7222 17.1528H5.27778C3.38554 17.147 1.85302 15.6144 1.84722 13.7222V5.27778C1.85302 3.38554 3.38554 1.85302 5.27778 1.84722H13.7222C15.6144 1.85302 17.147 3.38554 17.1528 5.27778V13.7222ZM14.5139 5.54167C15.0969 5.54167 15.5694 5.06907 15.5694 4.48611C15.5694 3.90315 15.0969 3.43056 14.5139 3.43056C13.9309 3.43056 13.4583 3.90315 13.4583 4.48611C13.4583 5.06907 13.9309 5.54167 14.5139 5.54167ZM9.5 4.75C6.87665 4.75 4.75 6.87665 4.75 9.5C4.75 12.1234 6.87665 14.25 9.5 14.25C12.1234 14.25 14.25 12.1234 14.25 9.5C14.2529 8.23935 13.7533 7.02955 12.8618 6.13814C11.9704 5.24673 10.7607 4.74719 9.5 4.75ZM6.59722 9.5C6.59722 11.1032 7.89682 12.4028 9.5 12.4028C11.1032 12.4028 12.4028 11.1032 12.4028 9.5C12.4028 7.89682 11.1032 6.59722 9.5 6.59722C7.89682 6.59722 6.59722 7.89682 6.59722 9.5Z"
        fill="#3a3a3a"
      />
    </svg>
  );
}
function Twitter() {
  const handleHover = (e) => {
    e.target.setAttribute("fill", "#3745b6"); // Change the fill color to your desired hover color
  };

  const handleMouseOut = (e) => {
    e.target.setAttribute("fill", "#3a3a3a"); // Reset the fill color on mouse out
  };
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
    >
      <path
        d="M15.7512 0H18.818L12.1179 7.62458L20 18H13.8284L8.99456 11.7074L3.46359 18H0.394933L7.5613 9.84465L0 0H6.32828L10.6977 5.7517L15.7512 0ZM14.6748 16.1723H16.3742L5.4049 1.73169H3.58133L14.6748 16.1723Z"
        fill="#3a3a3a"
      />
    </svg>
  );
}
function LinkedIn() {
  const handleHover = (e) => {
    e.target.setAttribute("fill", "#3745b6"); // Change the fill color to your desired hover color
  };

  const handleMouseOut = (e) => {
    e.target.setAttribute("fill", "#3a3a3a"); // Reset the fill color on mouse out
  };
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}
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
