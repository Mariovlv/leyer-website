function Testimonials() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-12 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="sm:text-4xl text-3xl text-black font-bold font-epilogue pb-4">
            Testimonios
          </h2>
        </div>
        <div className="mt-10 font-noto">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="md:border-r-2 md:pr-6">
              <blockquote className="mt-4 md:mt-0">
                <div className="text-xl font-medium text-red-600">
                  "Siempre es bueno tener tienda para todas las personas, un
                  buen aporte aquí en puebla."
                </div>
                <div className="mt-4">
                  <p className="text-base font-semibold text-gray-900">
                    Chivis c
                  </p>
                </div>
              </blockquote>
            </div>
            <div className="mt-10 md:mt-0">
              <blockquote className="mt-4 md:mt-0">
                <div className="text-xl font-medium text-red-600">
                  "Atención profesional y amable sin fines de lucro. Aprendi
                  como funciona el ábaco y la tabla matemática."
                </div>
                <div className="mt-4">
                  <p className="text-base font-semibold text-gray-900">Mat S</p>
                </div>
              </blockquote>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-6 mt-10">
            <div className="md:border-r-2 md:pr-6">
              <blockquote className="mt-4 md:mt-0">
                <div className="text-xl font-medium text-red-600">
                  "Excelente atención y cuentan con tienda de material para
                  ciegos"
                </div>
                <div className="mt-4">
                  <p className="text-base font-semibold text-gray-900">
                    Julio G
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div id="map"></div>
    </div>
  );
}

export default Testimonials;
