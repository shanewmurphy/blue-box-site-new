"use client";

import HowItWorks from "../compontents/Collection-how-it-works";
import CollectionTermsConditions from "../compontents/Collection-terms-conditions";
import ContactPageSection from "../compontents/Contact-page-section";
import AllFaqs from "../compontents/AllFAQ";
import CustomersReview from "../compontents/Testimonials";
import Footer from "../compontents/Footer";

export default function CollectionServicePage() {
  return (
    <div>
      <div className="bg-myblue lg:py-36 md:py-14 sm:py-14 antialiased">
        <div className="lg:w-9/12 md:w-10/12 laptop:w-11/12 sm:w-10/12 mx-auto">
          <div className="flex lg:flex-row md:flex-col sm:flex-col gap-6">
            <div className="basis-2/5">
              <h2 className="text-mywhite font-bold mt-[15%] lg:text-6xl laptop:text-4xl md:text-4xl sm:text-2xl lg:text-left md:text-left sm:text-center">
                Let us handle the logistics, saving you time and effort
              </h2>
            </div>
            <div className="basis-3/5">
              <picture>
                <img
                  src="/Collection-imgs/Van_Hero_B-min.png"
                  alt="Bluebox Collection Service"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto lg:py-[15%] md:py-[15%] sm:py-[25%]">
        <div className="flex lg:flex-row laptop:flex-row md:flex-col sm:flex-col gap-8">
          <div className="basis-3/12">
            <div className="flex justify-center items-center lg:w-7/12 md:w-5/12 sm:w-4/12 mx-auto">
              <LogoPage />
            </div>
          </div>
          <div className="basis-9/12">
            <h2 className="font-bold text-myblue text-2xl">
              Too busy to pack and transport your belongings to our facility?
              Our collection service makes storage effortless. Simply box your
              items, and our team will handle the rest.
            </h2>
            <p className="font-semibold text-myblack text-lg mt-3">
              Save time and energy with our professional collection service.
              We&apos;ll pick up your belongings from your location and
              transport them securely to our facility for storage.
            </p>
          </div>
        </div>
      </div>
      <div className="my-[15%]">
        <h4 className="text-2xl text-myblack font-bold lg:w-9/12 md:w-11/12 sm:w-11/12 mx-auto">
          How Our Collection Service Works
        </h4>
        <HowItWorks />
      </div>
      <div>
        <CollectionTermsConditions />
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

function LogoPage() {
  return (
    <svg
      width="157"
      height="153"
      viewBox="0 0 157 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1399_6945)">
        <path
          d="M44.4111 76.5L78.4633 96.8512L112.515 76.5L78.4633 56.1488L44.4111 76.5ZM58.3332 89.7136L40.3336 78.9524L6.24474 99.3036L40.2969 119.655L74.3491 99.3036L58.2964 89.7136H58.3332ZM76.3694 103.037L42.4275 123.315V147.18L76.3694 126.902V103.037ZM38.1664 123.278L4.26111 103.037V126.902L38.2031 147.18V123.315L38.1664 123.278ZM1.17548 97.4002L36.1827 76.5L1.21221 55.5998C0.477539 55.2703 0 54.5383 0 53.6964V24.9266C0 24.0847 0.477539 23.3526 1.17548 23.0232L39.0847 0.402632C39.452 0.146411 39.8561 0 40.3336 0C40.8112 0 41.2153 0.146411 41.5826 0.402632L78.5367 22.4742L115.454 0.402632C115.821 0.146411 116.226 0 116.703 0C117.181 0 117.585 0.146411 117.952 0.402632L155.825 23.0232C156.522 23.3526 157 24.0847 157 24.9266V53.6964C157 54.5383 156.522 55.2703 155.788 55.5998L120.817 76.5L155.788 97.4002C156.486 97.7297 157 98.4617 157 99.3036V128.073C157 128.915 156.522 129.611 155.825 129.977L117.952 152.597C117.585 152.854 117.181 153 116.703 153C116.226 153 115.821 152.854 115.454 152.597L78.5 130.526L41.5459 152.597C41.1785 152.854 40.7744 153 40.2969 153C39.8194 153 39.4153 152.854 39.048 152.597L1.17548 129.977C0.477539 129.647 0 128.915 0 128.073V99.3036C0 98.4617 0.477539 97.7663 1.17548 97.4002ZM80.5938 103.037V126.902L114.536 147.18V123.315L80.5938 103.037ZM116.666 78.9524L82.6142 99.3036L116.666 119.655L150.719 99.3036L116.666 78.9524ZM136.833 112.517L118.797 123.315V147.18L152.739 126.902V103.037L136.87 112.517H136.833ZM98.6668 63.2864L116.666 74.0476L150.719 53.6964L116.666 33.3452L82.6142 53.6964L98.6668 63.2864ZM80.5938 49.9629L114.536 29.6849V5.85646L80.5938 26.1344V49.9995V49.9629ZM118.797 29.7215L152.739 49.9995V26.1344L118.797 5.85646V29.7215ZM76.3694 49.9629V26.0978L42.4275 5.85646V29.7215L76.3694 49.9995V49.9629ZM40.2969 74.0476L74.3491 53.6964L40.2969 33.3452L6.24474 53.6964L40.2969 74.0476ZM20.1301 40.4828L38.1664 29.6849V5.85646L4.26111 26.1344V49.9995L20.1301 40.5194V40.4828Z"
          fill="#3745B6"
        />
      </g>
      <defs>
        <clipPath id="clip0_1399_6945">
          <rect width="157" height="153" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
