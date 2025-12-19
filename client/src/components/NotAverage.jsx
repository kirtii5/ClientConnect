export default function NotAverage() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
            Not Your Average Realtor
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto lg:mx-0">
            We combine strategic thinking, creative execution, and data-driven
            insights to deliver exceptional real estate solutions that truly
            stand out.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center lg:justify-end">
          {/* BIG CENTER IMAGE */}
          <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg z-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1Imcz-gi8cyJUMYUhMFtxDN80NzeSfUdHg&s"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* TOP RIGHT */}
          <div className="hidden sm:block absolute -top-10 right-0 w-36 h-36 rounded-full overflow-hidden shadow">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJu11qVL9BvpbC0DQfQKA0H4mE4hcLJiT-aA&s"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* BOTTOM LEFT */}
          <div className="hidden sm:block absolute bottom-0 -left-10 w-32 h-32 rounded-full overflow-hidden shadow">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0MSLog4233qWpgUmPwNNewh_uHVzDIml1og&s"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
