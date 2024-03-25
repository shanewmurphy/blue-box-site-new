"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function FlyoutMenuMobile() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <button
          className="font-bold text-lg text-graytext flex items-center ring-0 active:ring-0 focus:outline-none"
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
            <div className="fixed inset-0 bg-mywhite bg-opacity-0 transition-opacity" />
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
                      <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-mywhite py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900"></Dialog.Title>
                      </div>
                      <div className="relative mt-16 flex-1 px-4 sm:px-6">
                        <h3 className="font-bold text-xl text-graytext">
                          Container Sizes
                        </h3>
                        <div>
                          <a href="/Ten-foot-container">
                            <h4 className="indent-4 font-medium text-graytext text-lg mt-3">
                              10FT Container
                              <span className="block text-sm font-normal text-graytext">
                                Compact and Convenient
                              </span>
                            </h4>
                          </a>
                        </div>
                        <div>
                          <a href="/Ten-foot-container">
                            <h4 className="indent-4 font-medium text-graytext text-lg mt-3">
                              20FT Container
                              <span className="block text-sm font-normal text-graytext">
                                Compact and Convenient
                              </span>
                            </h4>
                          </a>
                        </div>
                        <div>
                          <a href="/Ten-foot-container">
                            <h4 className="indent-4 font-medium text-graytext text-lg mt-3">
                              40FT Container
                              <span className="block text-sm font-normal text-graytext">
                                Compact and Convenient
                              </span>
                            </h4>
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
