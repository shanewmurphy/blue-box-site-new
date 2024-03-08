import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/solid";
const StorageFaqs = [
  {
    ID: "01",
    Question: "What sizes of storage containers do you offer?",
    Answer:
      "We offer a variety of storage container sizes to accommodate your needs. Our options include 10ft, 20ft, and 40ft containers. Whether you require a compact storage solution or a larger space to accommodate your belongings, we have the right size for you.",
  },
  {
    ID: "02",
    Question:
      "How do I determine the right container size for my storage needs?",
    Answer:
      "Determining the right container size is based on the volume of items you need to store. Our team can guide you through this process, considering your belongings and their size. Feel free to contact us for personalized assistance.",
  },
  {
    ID: "03",
    Question: "Are there any additional fees or charges to consider?",
    Answer:
      "Our pricing is transparent, with no hidden fees. Your quoted price covers the rental, but additional services (such as pick-up) might have associated charges. We ensure you're aware of all costs upfront.",
  },
  {
    ID: "04",
    Question: "How long can I rent a storage container for?",
    Answer:
      "We offer flexible rental periods to suit your needs. Rentals can range from weeks to months, depending on your requirements.",
  },
  {
    ID: "05",
    Question: "Can I change my rental duration after I've made a reservation?",
    Answer:
      "Yes, we understand plans change. Contact us as soon as possible to discuss adjusting your rental duration.",
  },
  {
    ID: "06",
    Question: "Is there a minimum or maximum rental period?",
    Answer:
      "Our rental periods are designed to be flexible. There's no strict minimum, and you can rent for as long as you need within our availability.",
  },
  {
    ID: "07",
    Question: "How do I reserve a storage container?",
    Answer:
      "Reserving is easy! You can either call our team at 0214 450 450 or use our online reservation form to specify your requirements.",
  },
  {
    ID: "08",
    Question: "How do I access my storage container?",
    Answer:
      "During our business hours (Monday-Friday, 9am-6pm), you can access your container at our facility. We'll provide you with access details upon rental.",
  },
  {
    ID: "09",
    Question: "What security measures are in place to protect my belongings?",
    Answer:
      "Our facilities are equipped with 24/7 surveillance, access controls, and trained personnel to ensure the safety of your belongings. We prioritise the security of your items.",
  },
];
export default function FAQStorage() {
  return (
    <div className="lg:w-10/12 laptop:w-11/12 md:w-11/12 sm:w-11/12 mx-auto lg:my-[25%] laptop:my-[25%] md:my-[30%] sm:my-[60%] antialiased">
      <div className="lg:w-8/12 mx-auto">
        {StorageFaqs.map((faq) => (
          <Disclosure key={faq.ID}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center w-full py-4 px-6 mb-5 bg-FAQBkgColor lg:rounded-3xl md:rounded-md sm:rounded-lg text-mywhite focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
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
                    <p className="text-sm font-medium mb-6">{faq.Answer}</p>
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
