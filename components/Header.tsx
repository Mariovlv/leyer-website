import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex flex-row justify-between items-center py-5 sm:px-12 px-4 shadow-md bg-white">
      <h1 className="text-3xl font-bold text-gray-900 cursor-pointer font-epilogue">
        Instituto Leyers
      </h1>
      <ul className="sm:flex hidden flex-row font-noto justify-center">
        <li>
          <h1 className="px-4 cursor-pointer text-gray-700 hover:text-gray-900">
            Quiénes somos
          </h1>
        </li>
        <li>
          <a
            href="#testimonials"
            className="px-4 cursor-pointer text-gray-700 hover:text-gray-900"
          >
            Testimonios
          </a>
        </li>
        <li>
          <a
            href="#map"
            className="px-4 cursor-pointer text-gray-700 hover:text-gray-900"
          >
            Visítanos
          </a>
        </li>
      </ul>
      <a
        href="#contact"
        className="bg-red-500 p-2 text-white rounded-lg font-epilogue text-md sm:flex hidden"
      >
        Enviar mensaje
      </a>
      <div className="sm:hidden flex">
        <i
          className={`fa-solid ${
            menuOpen ? "fa-xmark" : "fa-bars"
          } sm:hidden flex text-2xl cursor-pointer`}
          onClick={toggleMenu}
        ></i>
      </div>
      {menuOpen && (
        <div className="fixed top-0 left-0 h-screen w-3/5 bg-white shadow-md p-5">
          <ul className="flex flex-col justify-center font-epilogue text-2xl py-[20%]">
            <li className="my-2">
              <h1 className="text-black cursor-pointer font-bold hover:text-red-600">
                Quiénes somos
              </h1>
            </li>
            <li className="my-2">
              <h1 className="text-black cursor-pointer font-bold hover:text-red-600">
                Testimonios
              </h1>
            </li>
            <li className="my-2">
              <h1 className="text-black cursor-pointer font-bold hover:text-red-600">
                Visítanos
              </h1>
            </li>
            <li className="my-2">
              <button className="bg-black p-3 text-white rounded-lg font-noto font-bold text-sm sm:flex hidden">
                Enviar mensaje
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
