export default function AboutUs() {
  return (
    <section id="About" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Centered content */}
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-blue-500 mb-3">
            About Us
          </h2>

          {/* Underline */}
          <div className="w-36 h-1 bg-blue-500 rounded mb-6"></div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            Our team specializes in delivering tailored real estate solutions
            through a combination of market insights, strategic planning, and
            innovative marketing approaches. We help clients maximize value
            while minimizing risk.
          </p>

          {/* Button */}
          <button className="px-8 py-2 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
