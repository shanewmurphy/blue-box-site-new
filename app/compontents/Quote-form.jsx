"use client";
import { useState } from "react";

export default function QuoteForm() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button === selectedButton ? null : button);
  };
  const [showDiv, setShowDiv] = useState(false);
  return (
    <div>
      <div className="lg:w-8/12 md:w-11/12 sm:w-11/12 mx-auto lg:py-[15%] md:py-[10%] sm:py-[15%]">
        <div className="">
          <div>
            <h2 className="text-center font-bold text-myblue xl:text-6xl lg:text-4xl md:text-5xl sm:text-2xl">
              Get a Quote within 24 Hours
            </h2>
            <p className="text-center font-semibold text-myblack xl:text-xl lg:text-xl md:text-xl sm:text-base mt-1">
              To provide you with accurate pricing please complete form
            </p>
          </div>
          <div className="lg:mt-8 md:mt-6 sm:mt-2">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-16 md:gap-3 sm:gap-2">
              <div>
                <div className="lg:mt-0 md:mt-0 sm:mt-8 antialiased">
                  <label className="block">
                    <span className="text-myblack font-semibold text-base">
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
                <div className="lg:my-6 md:my-6 sm:my-4 antialiased">
                  <label className="block">
                    <span className="text-myblack font-semibold text-base">
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
                <div className="lg:my-6 md:my-6 sm:my-4 antialiased">
                  <label className="block">
                    <span className="text-myblack font-semibold text-base">
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
                <div className="antialiased">
                  <label className="block">
                    <span className="text-myblack font-semibold text-base">
                      Contact Number*
                    </span>
                    <input
                      type="number"
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
                      placeholder=""
                    ></input>
                  </label>
                </div>
                <div className="lg:mt-12 md:mt-8 sm:mt-6 antialiased"></div>
              </div>
              <div className="lg:mt-0 md:mt-0 sm:mt-8 antialiased">
                <div className="lg:w-10/12">
                  <span className="text-myblack font-semibold text-base">
                    Please Select Container Size*
                  </span>
                  <div className="mt-2 mb-6">
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
                  <span className="text-myblack font-semibold text-base lg:hidden md:hidden sm:block mb-2">
                    Please Select Container Size*
                  </span>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2  sm:grid-rows-1 lg:gap-4 md:gap-2 sm:gap-6">
                    <div>
                      <span className="text-myblack font-semibold text-base">
                        Start Date*
                      </span>
                      <div>
                        <input
                          type="date"
                          className="block lg:w-[160px] md:w-[155px] sm:w-[190px] border border-myblack font-medium text-myblack rounded-md"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <span className="text-myblack font-semibold text-base">
                        End Date*
                      </span>
                      <div>
                        <input
                          type="date"
                          className="block lg:w-[160px] md:w-[155px] sm:w-[190px] border border-myblack font-medium text-myblack rounded-md"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <span className="text-myblack font-semibold text-base">
                    Do you require our Pick-Up Services?
                  </span>
                  <div className="mt-2">
                    <div>
                      <div>
                        <button
                          className={`px-8 py-2 mr-3  ${
                            !showDiv
                              ? "bg-myblue text-mywhite border border-myblue font-bold rounded-md"
                              : "bg-mywhite border border-myblack font-bold text-myblack rounded-md"
                          }`}
                          onClick={() => setShowDiv(false)}
                        >
                          No
                        </button>
                        <button
                          className={`px-8 py-2 ${
                            showDiv
                              ? "bg-myblue text-mywhite border border-myblue font-bold rounded-md"
                              : "bg-mywhite border border-myblack font-bold text-myblack rounded-md"
                          }`}
                          onClick={() => setShowDiv(true)}
                        >
                          Yes
                        </button>
                      </div>

                      {showDiv && (
                        <div className="mt-6">
                          <div>
                            <label>
                              <span className="text-myblack font-semibold text-base">
                                Address*
                              </span>
                              <input
                                type="text"
                                className="
                                mt-1
                                block
                                lg:w-96
                                md:w-80
                                sm:w-11/12
                                h-12
                                rounded-md
                                bg-inputgray
                                border-inputgray
                                text:placeholderText
                                focus:border-gray-500 focus:bg-white focus:ring-0"
                                placeholder="Apt 3, Street Name, Town"
                                required
                              ></input>
                            </label>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="mt-4">
                              <label>
                                <span className="text-myblack font-semibold text-base">
                                  City*
                                </span>
                                <input
                                  type="text"
                                  className="mt-1
                                block
                                lg:w-36
                                md:w-36
                                sm:w-11/12
                                h-12
                                rounded-md
                                bg-inputgray
                                border-inputgray
                                text:placeholderText
                                focus:border-gray-500 focus:bg-white focus:ring-0"
                                  placeholder="City"
                                ></input>
                              </label>
                            </div>
                            <div className="mt-4">
                              <label>
                                <span className="text-myblack font-semibold text-base">
                                  Postal Code*
                                </span>
                                <input
                                  type="number"
                                  className="mt-1
                                block
                                lg:w-40
                                md:w-36
                                sm:w-11/12
                                h-12
                                rounded-md
                                bg-inputgray
                                border-inputgray
                                text:placeholderText
                                focus:border-gray-500 focus:bg-white focus:ring-0"
                                  placeholder="Postal Code"
                                ></input>
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] md:w-[40%] sm:w-[60%] mx-auto lg:mt-8 md:mt-6 sm:mt-16">
          <div>
            <button className="text-center font-medium bg-myblue rounded-2xl text-mywhite lg:text-xl lg:py-3 lg:px-14 md:py-3 md:px-8 sm:py-3 sm:px-9">
              Submit Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
