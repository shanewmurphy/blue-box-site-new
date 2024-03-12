import { useState } from "react";
import { Tab } from "@headlessui/react";
import FAQStorage from "./FAQ-storage";
import FAQCollection from "./FAQ-Collection";
export default function AllFaqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div>
      <div>
        <div className="lg:my-[25%] laptop:my-[25%] md:my-[30%] sm:my-[60%] antialiased">
          <div className="lg:w-6/12 md:w-6/12 sm:w-10/12 mx-auto">
            <h3 className="text-center font-bold text-myblue lg:text-4xl md:text-3xl sm:text-2xl mb-4">
              Common Questions & Answers
            </h3>
          </div>
          <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <div className="lg:w-[400px] md:w-[410px] sm:w-[340px] mx-auto bg-[#f4f4f6] px-4 py-3 rounded-xl">
              <Tab.List>
                <div className="flex justify-between">
                  <Tab
                    className={({ selected }) =>
                      selected
                        ? "text-mywhite shadow-md font-medium text-sm lg:py-3 lg:px-9 md:py-3 md:px-9 sm:py-2 bg-myblue sm:px-6 rounded-lg focus:outline-none cursor-pointer"
                        : "text-myblue font-medium text-sm lg:py-2 lg:px-9 md:py-2 md:px-9 sm:py-2 sm:px-6 bg-[#ffffff] hover:bg-[#ebecf8] rounded-lg border border-myblue cursor-pointer"
                    }
                  >
                    Storage Units
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      selected
                        ? "text-mywhite shadow-md font-medium text-sm lg:py-3 lg:px-9 md:py-3 md:px-9 sm:py-2 bg-myblue sm:px-6 rounded-lg focus:outline-none cursor-pointer"
                        : "text-myblue font-medium text-sm lg:py-2 lg:px-9 md:py-2 md:px-9 sm:py-2 sm:px-6 bg-[#ffffff] hover:bg-[#ebecf8] rounded-lg border border-myblue cursor-pointer"
                    }
                  >
                    Pick-Up Service
                  </Tab>
                </div>
              </Tab.List>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <div>
                  <FAQStorage />
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <FAQCollection />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          <div className="text-center">
            <h5 className="lg:text-2xl md:text-2xl sm:text-xl text-myblue font-semibold mt-8">
              Still have a question?
            </h5>
            <p className="lg:text-lg md:text-base sm:text-sm font-medium text-myblack mt-1">
              Contact us for further assistance.
            </p>
            <p className="text-xl font-bold text-myblack mt-1">0214 457 457</p>
          </div>
        </div>
      </div>
    </div>
  );
}
