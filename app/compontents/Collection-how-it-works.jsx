"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function HowItWorks() {
  const data = [
    {
      title: "Select this option in Quote Form",
      details:
        "Once you’ve select our service to collect your belongs for collect enter your address and postal code",
      image: "/Collection-imgs/Form_how-it-works.svg",
    },
    {
      title: "How Price is calculated?",
      details:
        "Once you've selected the pickup option and entered your location details, we'll calculate the price based on the distance from our facility and the size of the storage container you're renting.",
      image: "/Collection-imgs/Van_how-it-works.png",
    },
    {
      title: "Prepare Your Items",
      details:
        "Before our team arrives for pickup, please ensure that all items are boxed and ready for collection. Properly boxing your items helps protect them during transport and ensures a smooth pickup process.",
      image: "/Collection-imgs/Boxes_how-it-works.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % data.length;
      changeIndex(nextIndex);
    }, 6000); // Change every X seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const changeIndex = (index) => {
    gsap.fromTo(
      ".image",
      { scale: 1 },
      {
        scale: 0,
        duration: 0.5,
        onComplete: () => {
          setActiveIndex(index);
          gsap.fromTo(".image", { scale: 0 }, { scale: 1, duration: 0.5 });
        },
      }
    );
  };

  const handleClick = (index) => {
    changeIndex(index);
  };

  return (
    <div>
      <div className="lg:w-9/12 md:w-11/12 sm:w-11/12 mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-16 md:gap-6 sm:gap-4 my-[20%]">
          <div className="lg:w-[90%]">
            {data.map((item, index) => (
              <div
                key={item.title}
                onClick={() => handleClick(index)}
                style={{
                  color: activeIndex === index ? "#3745b6" : "#6E6E6E",
                  cursor: "pointer",
                }}
              >
                <div className="lg:py-4 md:py-4 sm:py-3 cursor-pointer">
                  <h4 className="font-semibold lg:text-xl md:text-xl sm:text-xl cursor-pointer">
                    {item.title}
                  </h4>
                  <p
                    onClick={() => handleClick(index)}
                    className="lg:font-normal md:font-medium sm:font-medium text-sm  cursor-pointer"
                    style={{
                      color: activeIndex === index ? "#3745b6" : "#828282",
                      cursor: "pointer",
                    }}
                  >
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-cardbggray rounded-lg">
            <div className="flex justify-center items-center h-full image lg:p-4 md:p-6 sm:p-12">
              <img
                src={data[activeIndex].image}
                alt={data[activeIndex].title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
