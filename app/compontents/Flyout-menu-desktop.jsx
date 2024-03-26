"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";

import {
  ChevronDownIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "10FT Container",
    description: "Compact and Convenient",
    href: "/Ten-foot-container",
    icon: ChartPieIcon,
  },
  {
    name: "20FT Container",
    description: "Spacious and Versatile",
    href: "/Twenty-foot-container",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "40FT Container",
    description: "Generous and Capacious",
    href: "#",
    icon: FingerPrintIcon,
  },
];

export default function FlyoutMenuDesktop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Popover ref={menuRef} className="relative">
      <Popover.Button
        onClick={toggleMenu}
        className="inline-flex items-center gap-x-1 font-semibold text-base hover:text-myblue leading-6 ring-0 active:ring-0 focus:outline-none antialiased"
      >
        <span>Container Sizes</span>
        <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
      </Popover.Button>

      <Transition
        show={isMenuOpen}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-[320px] max-w-max -translate-x-1/2 px-4 antialiased">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-xl leading-6 shadow-lg bg-mywhite">
            <div className="p-3">
              {solutions.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex gap-x-4 rounded-lg p-4"
                >
                  <div>
                    <a
                      href={item.href}
                      className="font-bold text-xl hover:text-myblue text-myblack"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="text-graytext text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
