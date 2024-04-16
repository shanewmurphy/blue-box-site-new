"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function DesktopStorageContainers() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let card = document.querySelectorAll(".card-animation");

    gsap.fromTo(
      card,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        // delay: 0.1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: card[0],
          scrub: true,
          start: "top 120%",
          end: "bottom 120%",
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div id="Desktop-scroll-to">
      <div className="lg:w-10/12 laptop:w-11/12 mb-32 xl:block lg:block laptop:hidden md:hidden sm:hidden mx-auto">
        <div className="mb-6">
          <h3 className="lg:text-6xl md:text-5xl sm:text-4xl text-myblue text-center font-bold mb-1">
            Storage Containers
          </h3>
          <div className="lg:w-7/12 laptop:w-9/12 mx-auto">
            <p className="text-center font-medium text-base text-myblack">
              We offer a wide range of container types, sizes. Whether you
              require short-term or long-term storage, we have the flexibility
              to accommodate your requirements
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 xl:gap-8 lg:gap-4 laptop:gap-4 antialiased">
          <div className="bg-cardbggray card-animation rounded-xl py-12 px-7">
            <div>
              <h4 className="text-center font-extrabold text-myblue lg:text-7xl laptop:text-6xl mb-4">
                10FT
              </h4>
            </div>
            <div className="w-10/12 mx-auto">
              <picture>
                <img
                  src="/Storage-imgs/10ft-container.png"
                  alt="10ft Storage Container size"
                />
              </picture>
            </div>
            <div>
              <p className="text-center text-myblack text-sm font-medium mx-auto">
                Typically holds the contents of a studio apartment or a small
                office.
              </p>
            </div>
            <div className="mt-4">
              <div className="flex justify-evenly">
                <div>
                  <a href="/Ten-foot-container">
                    <button className="bg-myblue border border-myblue hover:bg-hoverbtnblue px-5 py-2 rounded-xl text-mywhite text-sm font-semibold">
                      Get Quote
                    </button>
                  </a>
                </div>
                <div>
                  <a href="/Ten-foot-container">
                    <button className="border border-myblue hover:hover:bg-myblue px-5 py-2 rounded-xl text-myblue hover:text-mywhite text-sm font-semibold">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cardbggray card-animation rounded-xl py-12 px-7">
            <div>
              <h4 className="text-center font-extrabold text-myblue lg:text-7xl laptop:text-6xl mb-4">
                20FT
              </h4>
            </div>
            <div className="w-10/12 mx-auto">
              <picture>
                <img
                  src="/Storage-imgs/20ft-container.png"
                  alt="20ft storage container"
                />
              </picture>
            </div>
            <div>
              <p className="text-center text-myblack text-sm font-medium mx-auto">
                Typically holds contents of one-to-two-bedroom apartment.
              </p>
            </div>
            <div className="mt-4">
              <div className="flex justify-evenly">
                <div>
                  <a href="/Twenty-foot-container">
                    <button className="bg-myblue border border-myblue hover:bg-hoverbtnblue px-5 py-2 rounded-xl text-mywhite text-sm font-semibold">
                      Get Quote
                    </button>
                  </a>
                </div>
                <div>
                  <a href="/Twenty-foot-container">
                    <button className="border border-myblue hover:hover:bg-myblue px-5 py-2 rounded-xl text-myblue hover:text-mywhite text-sm font-semibold">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-cardbggray card-animation rounded-xl py-12 px-7">
            <div>
              <h4 className="text-center font-extrabold text-myblue lg:text-7xl laptop:text-6xl mb-4">
                40FT
              </h4>
            </div>
            <div className="w-10/12 mx-auto">
              <picture>
                <img
                  src="/Storage-imgs/40ft-container.png"
                  alt="40ft storage container"
                />
              </picture>
            </div>
            <div>
              <p className="text-center text-myblack text-sm font-medium mx-auto">
                Typically holds contents of three-to-four-bedroom house.
              </p>
            </div>
            <div className="mt-4">
              <div className="flex justify-evenly">
                <div>
                  <button className="bg-myblue border border-myblue hover:bg-hoverbtnblue px-5 py-2 rounded-xl text-mywhite text-sm font-semibold">
                    Get Quote
                  </button>
                </div>
                <div>
                  <button className="border border-myblue hover:hover:bg-myblue px-5 py-2 rounded-xl text-myblue hover:text-mywhite text-sm font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
