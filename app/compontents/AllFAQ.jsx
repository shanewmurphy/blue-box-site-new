import { useState } from "react";
import { Tab } from "@headlessui/react";
import FAQStorage from "./FAQ-storage";

export default function AllFaqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div>
      <div>
        <div className="mb-40">
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
              <Tab.Panel>BBB</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
}
