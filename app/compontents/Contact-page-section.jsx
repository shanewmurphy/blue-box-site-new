export default function ContactPageSection() {
  return (
    <div>
      <div className="lg:w-10/12 md:w-11/12 sm:w-11/12 mx-auto lg:my-[20%] md:my-[20%] sm:my-[30%] antialiased">
        <div className="flex lg:flex-row md:flex-col sm:flex-col lg:gap-6 md:gap-3 sm:gap-3">
          <div className="basis-3/5 bg-myblue lg:py-12 lg:px-12 md:py-12 md:px-12 sm:py-8 sm:px-8 rounded-xl">
            <h5 className="text-mywhite font-bold lg:text-2xl laptop:text-2xl md:text-2xl sm:text-2xl">
              Have a question about our collection service or storage
              containers?
            </h5>
            <p className="text-mywhite font-medium text-lg mt-4">
              Our dedicated team is just a phone call away
            </p>
            <h4 className="text-mywhite font-bold lg:text-4xl md:text-3xl sm:text-2xl mt-6">
              0214 457 457
            </h4>
            <h6 className="text-mywhite font-semibold lg:text-xl md:text-xl sm:text-lg mt-8">
              Business Hours
            </h6>
            <p className="text-mywhite font-medium text-sm">
              Monday - Friday: 9:00am to 5:30pm
            </p>
          </div>
          <div className="basis-2/5 h-full">
            <picture>
              <img
                className="rounded-xl"
                src="/Contact-imgs/Customer-agent.jpg"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
