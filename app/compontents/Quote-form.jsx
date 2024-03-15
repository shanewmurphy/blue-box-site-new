"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button === selectedButton ? null : button);
  };
  return (
    <div>
      <div className="lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto lg:py-[15%] md:py-[10%] sm:py-[15%]">
        <div>
          <h2 className="text-center font-bold text-myblue xl:text-6xl lg:text-4xl md:text-5xl sm:text-2xl">
            Get a Quote within 24 Hours
          </h2>
          <p className="text-center font-semibold text-myblack xl:text-xl lg:text-xl md:text-xl sm:text-base mt-1">
            To provide you with accurate pricing please complete form
          </p>
        </div>
        <div className="lg:w-8/12 md:w-11/12 sm:w-11/12 mx-auto lg:mt-8 md:mt-6 sm:mt-2">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-32 md:gap-6 sm:gap-6">
            <div>
              <div className="lg:mt-0 md:mt-0 sm:mt-8 antialiased">
                <label className="block">
                  <span className="text-myblack font-medium lg:text-lg md:text-base sm:text-base">
                    Full Name*
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
              <div className="lg:mt-12 md:mt-8 sm:mt-6 antialiased">
                <label className="block">
                  <span className="text-myblack font-medium lg:text-lg md:text-base sm:text-base">
                    Email*
                  </span>
                  <input
                    type="email"
                    className="mt-1
                                block
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
              <div className="lg:mt-12 md:mt-8 sm:mt-6 antialiased">
                <label className="block">
                  <span className="text-myblack font-medium lg:text-lg md:text-base sm:text-base">
                    Comfirm Email*
                  </span>
                  <input
                    type="email"
                    className="mt-1
                                block
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
              <div className="lg:mt-12 md:mt-8 sm:mt-6 antialiased">
                <span className="text-myblack font-medium lg:text-lg md:text-base sm:text-base">
                  Please Select Container Size*
                </span>
                <div className="mt-2">
                  <div className="space-x-3">
                    <button
                      className={`px-6 py-2 ${
                        selectedButton === 1
                          ? "bg-myblue text-mywhite border border-myblue rounded-md font-semibold"
                          : "bg-mywhite border border-myblack rounded-md font-semibold"
                      }`}
                      onClick={() => handleButtonClick(1)}
                    >
                      10FT
                    </button>
                    <button
                      className={`px-6 py-2 ${
                        selectedButton === 2
                          ? "bg-myblue text-mywhite border border-myblue rounded-md font-semibold"
                          : "bg-mywhite border border-myblack rounded-md font-semibold"
                      }`}
                      onClick={() => handleButtonClick(2)}
                    >
                      20FT
                    </button>
                    <button
                      className={`px-6 py-2 ${
                        selectedButton === 3
                          ? "bg-myblue text-mywhite border border-myblue rounded-md font-semibold"
                          : "bg-mywhite border border-myblack rounded-md font-semibold"
                      }`}
                      onClick={() => handleButtonClick(3)}
                    >
                      40FT
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:mt-0 md:mt-0 sm:mt-8 antialiased">
              <span className="text-myblack font-medium lg:text-lg md:text-base sm:text-base">
                Select Dates for period of Storage*
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
