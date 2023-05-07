export default function FooterSection() {
  return (
    <footer className="bg-red-600 text-white py-10">
      <div className="px-[10%] py-[2%] flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-noto pt-10">
          <div className="col-span-1">
            <h2 className="text-xl font-epilogue mb-4">Contacto</h2>
            <p className="mb-8 text-lg font-bold">222 274 2075</p>

            <a
              href="https://www.facebook.com/institutoleyers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
              <i className="fa-brands fa-facebook text-xl ml-2"></i>
            </a>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl font-epilogue mb-4">Dirección</h2>
            <p className="mb-4">
              Calle 15 Oriente #1025, Col. Motolinia, CP 72538, Heróica Puebla
              de Zaragoza, Puebla México.
            </p>

            <a
              href="https://goo.gl/maps/abcdefg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
              <i className="fa-solid fa-location-arrow text-xl ml-2"></i>
            </a>
          </div>
          <div className="col-span-1">
            <h2 className="text-xl font-epilogue mb-4">Horario de apertura</h2>
            <table>
              <tbody>Lunes a Viernes de 10:00 AM a 02:00 PM.</tbody>
            </table>
          </div>
        </div>
      </div>
    </footer>
  );
}
