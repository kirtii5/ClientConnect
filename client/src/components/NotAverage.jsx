export default function NotAverage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
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

        {/* RIGHT IMAGE CLUSTER */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[320px]">
            {/* CENTER IMAGE */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1Imcz-gi8cyJUMYUhMFtxDN80NzeSfUdHg&s"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>

            {/* TOP RIGHT */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full overflow-hidden shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJu11qVL9BvpbC0DQfQKA0H4mE4hcLJiT-aA&s"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            {/* BOTTOM LEFT */}
            <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full overflow-hidden shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0MSLog4233qWpgUmPwNNewh_uHVzDIml1og&s"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
