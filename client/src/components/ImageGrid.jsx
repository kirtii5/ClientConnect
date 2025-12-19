export default function ImageGrid() {
  return (
    <section id="Image" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT IMAGE */}
          <div className="h-64 lg:h-full overflow-hidden rounded">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* CENTER IMAGE */}
          <div className="h-64 lg:h-full overflow-hidden rounded">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* RIGHT STACK */}
          <div className="flex flex-col gap-8">
            <div className="h-40 overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>

            <div className="h-40 overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
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
