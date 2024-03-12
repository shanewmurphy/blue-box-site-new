"use client";
import { useEffect } from "react";

import Image from "next/image";
import HeroHomepage from "./compontents/Hero-hmepage";
import CompanyProfile from "./compontents/Company-profile";
import DesktopStorageContainers from "./compontents/Storage-containers";
import StorageOptionsSwiper from "./compontents/Storage-options-swiper";
import Security from "./compontents/Security";
import CollectionService from "./compontents/Collection-service";
import CollectionServicePromo from "./compontents/Collection-service-promo";
import Boxes from "./compontents/Boxes";
import AllFaqs from "./compontents/AllFAQ";
import Testimonials from "./compontents/Testimonials";
import Footer from "./compontents/Footer";

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
      <div>
        <Security />
      </div>
      <div>
        <CollectionService />
      </div>
      <div>
        <CollectionServicePromo />
      </div>
      <div>
        <Boxes />
      </div>
      <div>
        <AllFaqs />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
