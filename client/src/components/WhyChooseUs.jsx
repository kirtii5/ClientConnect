export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-blue-500">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Card */}
          {[
            {
              title: "Potential ROI",
              text: "Maximize your return with data-backed real estate strategies.",
              img: "data:image/png;base64,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",
            },
            {
              title: "Design",
              text: "Thoughtfully designed solutions that attract buyers.",
              img: "https://thumbs.dreamstime.com/b/stylized-blue-paint-brush-icon-vector-illustration-creative-design-projects-stylized-blue-paint-brush-icon-vector-illustration-400042679.jpg",
            },
            {
              title: "Marketing",
              text: "Powerful marketing strategies to drive engagement.",
              img: "https://www.shutterstock.com/image-vector/money-icon-blue-dollar-cash-600nw-1037586496.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-6 rounded-xl hover:shadow-md transition">
              <div className="w-14 h-14-full flex items-center justify-center mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h4 className="font-semibold mb-2 text-blue-500">{item.title}</h4>
              <p className="text-sm text-gray-600 text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
