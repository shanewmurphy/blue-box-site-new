export default function TermsAndConditions() {
  return (
    <div>
      <div className="w-10/12 mx-auto lg:py-[15%] md:py-[10%] sm:py-[15%] antialiased">
        <div className="flex lg:flex-row md:flex-col sm:flex-col gap-8">
          <div className="basis-1/5 bg-myblue rounded-lg">
            <div className="flex items-center font-bold lg:text-left text-mywhite lg:h-[60vh] lg:text-3xl md:text-5xl sm:text-xl p-8">
              Terms & Conditions
            </div>
          </div>
          <div className="basis-4/5 antialiased">
            <div className="grid lg:grid-cols-2 lg:gap-16 md:gap-6 sm:gap-4">
              <div>
                <div className="text-sm space-y-2">
                  <h5 className="font-bold text-myblack text-lg mt-1">
                    Rental Period
                  </h5>
                  <p className="font-medium text-graytext">
                    The rental period commences on the agreed-upon start date
                    and terminates on the specified end date as outlined in the
                    rental agreement.
                  </p>
                  <p className="font-medium text-graytext">
                    Rental extensions may be available upon request and subject
                    to availability.
                  </p>
                </div>
                <div className="text-sm space-y-2 mt-6">
                  <h5 className="font-bold text-myblack text-lg mt-1">
                    Access and Use
                  </h5>
                  <p className="font-medium text-graytext">
                    Renter is granted exclusive access to the rented storage
                    container for the duration of the rental period.
                  </p>
                  <p className="font-medium text-graytext">
                    The container is to be used solely for storage purposes and
                    may not be sublet or shared without prior written consent
                    from the Company.
                  </p>
                </div>
                <div className="text-sm space-y-2 mt-6">
                  <h5 className="font-bold text-myblack text-lg mt-1">
                    Liability
                  </h5>
                  <p className="font-medium text-graytext">
                    The Company shall not be held liable for any loss, damage,
                    or theft of Renter&apos;s stored belongings.
                  </p>
                  <p className="font-medium text-graytext">
                    Renter is encouraged to secure appropriate insurance
                    coverage for their stored items.
                  </p>
                </div>
              </div>
              <div>
                <div className="text-sm space-y-2">
                  <h5 className="font-bold text-myblack text-lg mt-1">
                    Payment Terms
                  </h5>
                  <p className="font-medium text-graytext">
                    Renter agrees to pay the rental fee as specified in the
                    rental agreement.
                  </p>
                  <p className="font-medium text-graytext">
                    Late payments may incur additional fees or penalties as
                    outlined in the rental agreement.
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
                <div className="text-sm space-y-2">
                  <h5 className="font-bold text-myblack text-lg mt-6">
                    Termination
                  </h5>
                  <p className="font-medium text-graytext">
                    Either party may terminate the contract by providing written
                    notice within the specified notice period as outlined in the
                    agreement.
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
