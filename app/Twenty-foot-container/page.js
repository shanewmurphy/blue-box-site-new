"use client";
import { Link } from "react-scroll";
import ColllectionServicePage from "../compontents/Collection-service-page";
import QuoteForm from "../compontents/Quote-form";
import TermsAndConditions from "../compontents/Terms-conditions";
import ContactPageSection from "../compontents/Contact-page-section";
import AllFaqs from "../compontents/AllFAQ";
import CustomersReview from "../compontents/Testimonials";
import Footer from "../compontents/Footer";

export default function TenFootContainerPage() {
  return (
    <div>
      <div className="w-full bg-myblue lg:py-14 lg:px-14 antialiased">
        <div className="xl:w-10/12 lg:w-11/12 md:w-11/12 sm:w-11/12 mx-auto lg:py-[6%] md:py-[15%] sm:py-[25%]">
          <div className="lg:flex lg:flex-row xl:gap-16 lg:gap-8 md:gap-0 sm:gap-0 md:items-center">
            <div className="lg:basis-1/3">
              <div className="bg-mywhite xl:w-[300px] lg:w-[280px] py-7 px-7 lg:mt-5 rounded-xl xl:block lg:block md:hidden sm:hidden xs:hidden">
                <div>
                  <h3 className="lg:text-2xl text-myblue font-bold">
                    20FT Container
                  </h3>
                  <h6 className="lg:text-sm text-myblack font-medium">
                    Spacious and Versatile
                  </h6>
                </div>
                <div className="lg:mt-4">
                  <h4 className="lg:text-base text-myblue font-semibold">
                    Dimensions
                  </h4>
                  <p className="lg:text-sm text-myblack font-medium">
                    20ft long, 7ft wide, and 7ft tall
                  </p>
                </div>
                <div className="lg:mt-4">
                  <h4 className="lg:text-base text-myblue font-semibold">
                    Storage Capacity
                  </h4>
                  <p className="lg:text-xs text-myblack font-medium">
                    It can hold the contents of a one-to-two-bedroom apartment
                    or around 10 standard pallets.
                  </p>
                </div>
                <div className="mt-6 mb-3">
                  <Link
                    to="Quote-anchor-section"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    <button className="bg-myblue text-mywhite font-semibold text-lg rounded-2xl py-3 px-8">
                      Get Quote
                      <span className="inline-flex align-middle pl-2">
                        <Downarrowwhite />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="xl:basis-2/3 lg:basis-2/3 md:basis-11/12 sm:basis-11/12 md:mx-auto">
              <div>
                <div className="lg:hidden md:block sm:block">
                  <h2 className="font-bold text-mywhite md:text-5xl sm:text-5xl text-center">
                    20ft Container
                  </h2>
                  <h3 className="font-semibold text-mywhite md:text-2xl sm:text-xl text-center md:mb-6 sm:mb-6">
                    Spacious and Versatile
                  </h3>
                </div>
                <picture>
                  <img
                    className="object-cover lg:float-right lg:h-[auto] md:h-[320px] md:mx-auto"
                    src="/20ft-imgs/20ft-img.png"
                    alt="20ft container"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="lg:hidden md:block md:w-10/12 sm:w-11/12 mx-auto">
            <h6 className="text-center font-semibold text-mywhite md:text-2xl sm:text-xl md:mt-6 sm:mt-4">
              Dimensions
            </h6>
            <p className="text-center font-medium md:text-xl sm:text-lg text-mywhite">
              20ft long, 7ft wide, and 7ft tall
            </p>
            <div className="text-center md:mt-8 sm:mt-12">
              <button className="bg-mywhite font-semibold text-lg md:px-16 text-myblack md:py-3 sm:px-12 sm:py-4 md:rounded-2xl sm:rounded-2xl">
                Get Quote
                <span className="inline-flex align-middle pl-2">
                  <Downarrowblack />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ColllectionServicePage />
      </div>
      <div id="Quote-anchor-section">
        <QuoteForm />
      </div>
      <div>
        <TermsAndConditions />
      </div>
      <div>
        <ContactPageSection />
      </div>
      <div>
        <AllFaqs />
      </div>
      <div>
        <CustomersReview />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

function Downarrowwhite() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2997 12.3332L12.1664 15.4999V6.19987C12.1664 5.8332 11.8664 5.5332 11.4997 5.5332C11.1331 5.5332 10.8331 5.8332 10.8331 6.19987V15.4999L7.69974 12.3665C7.43307 12.0999 7.03307 12.0999 6.76641 12.3665C6.49974 12.6332 6.49974 13.0332 6.76641 13.2999L11.0664 17.5999C11.1997 17.7332 11.3664 17.7999 11.5331 17.7999C11.6997 17.7999 11.8664 17.7332 11.9997 17.5999L16.2997 13.2999C16.5664 13.0332 16.5664 12.6332 16.2997 12.3665C16.0331 12.0999 15.5664 12.0665 15.2997 12.3332Z"
        fill="white"
      />
      <path
        d="M11.5 0C5.16667 0 0 5.16667 0 11.5C0 17.8333 5.16667 23 11.5 23C17.8333 23 23 17.8333 23 11.5C23 5.16667 17.8333 0 11.5 0ZM11.5 21.6667C5.9 21.6667 1.33333 17.1 1.33333 11.5C1.33333 5.9 5.9 1.33333 11.5 1.33333C17.1 1.33333 21.6667 5.9 21.6667 11.5C21.6667 17.1 17.1 21.6667 11.5 21.6667Z"
        fill="white"
      />
    </svg>
  );
}
function Downarrowblack() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2997 12.3332L12.1664 15.4999V6.19987C12.1664 5.8332 11.8664 5.5332 11.4997 5.5332C11.1331 5.5332 10.8331 5.8332 10.8331 6.19987V15.4999L7.69974 12.3665C7.43307 12.0999 7.03307 12.0999 6.76641 12.3665C6.49974 12.6332 6.49974 13.0332 6.76641 13.2999L11.0664 17.5999C11.1997 17.7332 11.3664 17.7999 11.5331 17.7999C11.6997 17.7999 11.8664 17.7332 11.9997 17.5999L16.2997 13.2999C16.5664 13.0332 16.5664 12.6332 16.2997 12.3665C16.0331 12.0999 15.5664 12.0665 15.2997 12.3332Z"
        fill="#3F3F3F"
      />
      <path
        d="M11.5 0C5.16667 0 0 5.16667 0 11.5C0 17.8333 5.16667 23 11.5 23C17.8333 23 23 17.8333 23 11.5C23 5.16667 17.8333 0 11.5 0ZM11.5 21.6667C5.9 21.6667 1.33333 17.1 1.33333 11.5C1.33333 5.9 5.9 1.33333 11.5 1.33333C17.1 1.33333 21.6667 5.9 21.6667 11.5C21.6667 17.1 17.1 21.6667 11.5 21.6667Z"
        fill="#3F3F3F"
      />
    </svg>
  );
}
