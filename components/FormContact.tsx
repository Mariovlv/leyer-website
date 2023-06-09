import Header from "@/components/Header";

const FormContact = () => {
  return (
    <div id="contact">
      <h2 className="sm:text-4xl text-3xl text-black font-bold font-epilogue pb-4 text-center pt-10">
        Contacto
      </h2>
      <form
        method="POST"
        action="https://submit-form.com/50YABc3a"
        className="font-inter"
      >
        <div className="flex items-center justify-center flex-col mt-10">
          <div className="m-2 p-2 w-full max-w-lg">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              name="Nombre"
              type="text"
              placeholder="Escribe tu nombre"
            ></input>
          </div>
          <div className="m-2 p-2 w-full max-w-lg">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              name="Celular"
              type="text"
              placeholder="Celular"
            ></input>
          </div>
          <div className="m-2 p-2 w-full max-w-lg">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              name="Correo"
              type="email"
              placeholder="Correo electrónico*"
            ></input>
          </div>

          <div className="m-2 p-2 w-full max-w-lg">
            <textarea
              className="shadow appearance-none border rounded w-full h-20 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              name="Mensaje"
              placeholder="¿Cómo podemos ayudarte?"
            ></textarea>
          </div>

          <div className="m-2 p-3">
            <button
              className="bg-red-500 text-white rounded-md p-2 text-md font-epilogue"
              type="submit"
            >
              Enviar mensaje
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
