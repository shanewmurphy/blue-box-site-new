export default function CollectionTermsConditions() {
  return (
    <div>
      <div className="lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto lg:py-[15%] md:py-[10%] sm:py-[15%] antialiased">
        <div className="flex lg:flex-row md:flex-col sm:flex-col gap-8">
          <div className="basis-1/5 bg-myblue rounded-lg">
            <div className="flex items-center font-bold lg:text-left text-mywhite lg:h-[60vh] lg:text-3xl md:text-5xl sm:text-xl p-8">
              Collection <br />
              Terms & Conditions
            </div>
          </div>
          <div className="basis-4/5 antialiased">
            <div className="grid lg:grid-cols-2 lg:gap-16 md:gap-6 sm:gap-4">
              <div>
                <div className="text-sm space-y-2">
                  <h5 className="font-bold text-myblack text-lg mt-1">
                    Items for Pick-up
                  </h5>
                  <p className="font-medium text-graytext">
                    Items must be packed in boxes or suitable containers.
                  </p>
                  <p className="font-medium text-graytext">
                    Please ensure that your belongings are securely packed and
                    ready for transport.
                  </p>
                </div>
                <div className="text-sm space-y-2">
                  <h5 className="font-bold text-myblack text-lg mt-6">
                    Prohibited Items
                  </h5>
                  <p className="font-medium text-graytext">
                    Renter agrees not to store any illegal substances, hazardous
                    materials, flammable items, perishable goods, live animals,
                    valuables & irreplaceable items, illegal substances,
                    firearms and ammunition Items or any other items deemed
                    inappropriate or prohibited by law.
                  </p>
                </div>
                <div className="text-sm space-y-2 mt-6">
                  <h5 className="font-bold text-myblack text-lg mt-1">
                    Size and Weight Restrictions
                  </h5>
                  <p className="font-medium text-graytext">
                    Each item or box should be manageable by our team during the
                    pick-up process.
                  </p>
                  <p className="font-medium text-graytext">
                    Weight restrictions may apply for safety reasons. Please
                    consult with our team for specific guidelines.
                  </p>
                </div>
              </div>
              <div>
                <div className="text-sm space-y-2">
                  <h5 className="font-bold text-myblack text-lg mt-1">
                    Packing Requirements
                  </h5>
                  <p className="font-medium text-graytext">
                    All items should be properly packed and sealed to prevent
                    damage during transport.
                  </p>
                  <p className="font-medium text-graytext">
                    Fragile or delicate items should be adequately protected
                    with appropriate padding or wrapping.
                  </p>
                </div>
                <div className="text-sm space-y-2">
                  <h5 className="font-bold text-myblack text-lg mt-6">
                    Preparing for Pick-up
                  </h5>
                  <p className="font-medium text-graytext">
                    Prior to the scheduled pick-up, have your items organised
                    and ready for collection.
                  </p>
                  <p className="font-medium text-graytext">
                    Our team will load the items into the van, so please ensure
                    they are easily accessible.
                  </p>
                </div>
                <div className="text-sm space-y-2">
                  <h5 className="font-bold text-myblack text-lg mt-6">
                    Accessibility
                  </h5>
                  <p className="font-medium text-graytext">
                    Ensure that the pick-up location is easily accessible for
                    our team and the van.
                  </p>
                  <p className="font-medium text-graytext">
                    Clear pathways and entrances to facilitate smooth loading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
