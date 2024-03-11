export default function HeroHomepage() {
  return (
    <div>
      <div className="bg-myblue w-full lg:h-[80vh] md:h-[75vh] sm:h-svh antialiased">
        <div className="lg:w-5/6 laptop:w-5/6 sm:w-11/12 mx-auto lg:py-[12%] md:py-[15%] sm:py-[32%]">
          <div className="flex lg:flex-row md:flex-col sm:flex-col gap-6">
            <div className="basis-2/5">
              <h1 className="text-mywhite font-bold xl:text-6xl lg:text-4xl laptop:text-6xl md:text-4xl sm:text-2xl lg:text-left laptop:text-left md:text-center sm:text-center">
                Secure, Convenient, <br /> and Affordable Storage Solutions 
              </h1>
              <div className="flex lg:justify-start laptop:justify-start  md:justify-center sm:justify-center lg:mt-8 md:mt-8 sm:mt-7">
                <button className="lg:w-60 md:w-60 sm:w-60 py-4 bg-btnbgcolour text-btntextblack font-semibold rounded-2xl lg:text-lg md:text-lg sm:text-lg flex items-center justify-center">
                  Select Container
                  <span className="inline-flex items-center justify-center ml-2">
                    <IconArrowDown />
                  </span>
                </button>
              </div>
            </div>
            <div className="basis-3/5 xl:order-last lg:order-last md:order-first sm:order-first">
              <h2 className="lg:hidden md:block sm:block text-center font-bold text-mywhite text-6xl mb-6">
                Storage Rental
              </h2>
              <picture>
                <img
                  src="/Hero-imgs/Hero-img-hmepge-min.png"
                  alt="Blue Box Storage"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconArrowDown() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="15" cy="15" r="14.25" stroke="#3A3A3A" strokeWidth="1.5" />
      <path
        d="M15.0039 6.65918C15.3303 6.65918 15.5992 6.89674 15.636 7.2028L15.6403 7.27456V20.557L20.9176 15.4548C21.147 15.233 21.5079 15.2159 21.7576 15.4036L21.8175 15.4548C22.0469 15.6766 22.0646 16.0257 21.8705 16.2671L21.8175 16.3251L15.4539 22.4789C15.4314 22.5007 15.4076 22.5205 15.3827 22.5384L15.3119 22.5825L15.2402 22.6153L15.1732 22.6371L15.0787 22.655L15.0039 22.6592L14.956 22.6575L14.8762 22.6467L14.8053 22.6286L14.7346 22.6015L14.6725 22.5693L14.6139 22.5301L14.5539 22.4789L8.19029 16.3251C7.94178 16.0848 7.94178 15.6951 8.19029 15.4548C8.41969 15.233 8.78066 15.2159 9.0303 15.4036L9.09025 15.4548L14.3675 20.557V7.27456C14.3675 6.9347 14.6525 6.65918 15.0039 6.65918Z"
        fill="#3A3A3A"
      />
    </svg>
  );
}
