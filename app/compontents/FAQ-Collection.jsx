import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/solid";
const CollectionFaqs = [
  {
    ID: "01",
    Question: "How does the collection service work?",
    Answer:
      "Our collection service allows you to have your belongings picked up directly from your location and transported to our secure storage facility. Simply select the collection option when requesting a quote, and our team will coordinate a convenient pickup time with you.",
  },
  {
    ID: "02",
    Question: "Is there an additional fee for the collection service?",
    Answer:
      "Yes, there is an additional fee for the collection service, which is based on factors such as the distance from our facility and the size of the storage container being rented. This fee will be calculated and included in your quote",
  },
  {
    ID: "03",
    Question: "What areas do you offer collection service to?",
    Answer:
      "We offer our collection service to areas within a certain radius of our storage facility in Cork. Please contact us to inquire about specific locations and availability.",
  },
  {
    ID: "04",
    Question: "Do I need to box my items before collection?",
    Answer:
      "Yes, customers are required to box their items before our team arrives for collection. Properly boxing your items helps protect them during transport and ensures a smooth pickup process.",
  },
  {
    ID: "05",
    Question: "Can I schedule a specific pickup time?",
    Answer:
      " Yes, we strive to accommodate your schedule as much as possible. When booking our collection service, you can specify your preferred pickup date and time, and we'll do our best to arrange accordingly.",
  },
  {
    ID: "06",
    Question: "What if I need to change or cancel my collection appointment?",
    Answer:
      "If you need to change or cancel your collection appointment, please contact us as soon as possible. We understand that plans can change, and we'll work with you to reschedule or adjust your appointment accordingly.",
  },
  {
    ID: "07",
    Question: "How do I reserve a storage container?",
    Answer:
      "Reserving is easy! You can either call our team at 0214 450 450 or use our online reservation form to specify your requirements.",
  },
  {
    ID: "08",
    Question: "Will I receive confirmation once my items have been collected?",
    Answer:
      "Yes, once your items have been collected and safely transported to our facility, we'll send you a confirmation email or notification to let you know that your belongings are in storage.",
  },
  {
    ID: "09",
    Question: "Can I track the status of my collection?",
    Answer:
      "While we don't offer real-time tracking for collection appointments, our team will keep you informed throughout the process and provide updates as needed.",
  },
];
export default function FAQCollection() {
  return (
    <div className="lg:w-11/12 laptop:w-11/12 md:w-11/12 sm:w-11/12 mx-auto mt-10 antialiased">
      <div className="lg:w-8/12 mx-auto">
        {CollectionFaqs.map((faq) => (
          <Disclosure key={faq.ID}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center w-full lg:py-4 lg:px-6 md:py-4 md:px-6 sm:py-5 sm:px-6 mb-5 bg-FAQBkgColor lg:rounded-3xl md:rounded-xl sm:rounded-xl text-mywhite focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <h4 className="lg:w-9/10 md:w-9/10 sm:w-10/12 lg:text-base md:text-base sm:text-xs font-semibold text-left text-myblue">
                    {faq.Question}
                  </h4>
                  <div>
                    <PlusIcon
                      className={`${
                        open ? "rotate-45 transform" : ""
                      } lg:h-8 lg:w-8 sm:w-6 sm:h-6 text-myblue`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="lg:w-11/12 md:w-10/12 sm:w-11/12 mx-auto">
                    <p className="text-sm font-medium mb-6 text-graytext">
                      {faq.Answer}
                    </p>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
