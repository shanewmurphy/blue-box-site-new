"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <button
          className="font-bold text-lg text-myblack flex items-center"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute right-0 top-0 flex pr-16 pt-8 sm:pr-6">
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="absolute -inset-3.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-10 w-10" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-mywhite shadow-xl">
                      <div className="">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900"></Dialog.Title>
                      </div>
                      <div className="relative overflow-hidden mt-28 pl-8 flex-1">
                        <div>
                          <h4 className="text-myblack text-xl font-semibold">
                            Container Sizes
                          </h4>
                        </div>
                        <div>
                          <a href="/Ten-foot-container">
                            <h5 className="text-myblack indent-4 font-medium text-lg mt-4">
                              10Ft Container
                            </h5>
                          </a>
                        </div>
                        <div>
                          <a href="/">
                            <h5 className="text-myblack indent-4 font-medium text-lg mt-4">
                              20Ft Container
                            </h5>
                          </a>
                        </div>
                        <div>
                          <a href="/Ten-foot-container">
                            <h5 className="text-myblack indent-4 font-medium text-lg mt-4">
                              40Ft Container
                            </h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
