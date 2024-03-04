"use client";
import { useEffect } from "react";

import Image from "next/image";
import HeroHomepage from "./compontents/Hero-hmepage";
import CompanyProfile from "./compontents/Company-profile";
import DesktopStorageContainers from "./compontents/Storage-containers";
import StorageOptionsSwiper from "./compontents/Storage-options-swiper";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div>
      <div>
        <HeroHomepage />
      </div>
      <div>
        <CompanyProfile />
      </div>
      <div>
        <DesktopStorageContainers />
      </div>
      <div>
        <StorageOptionsSwiper />
      </div>
    </div>
  );
}
