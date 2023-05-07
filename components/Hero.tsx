import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 grid-cols-1 items-center sm:p-[10%] lg:p-[5%] py-[20%] px-[10%]">
      <div>
        <h1 className="font-epilogue md:text-5xl text-3xl font-bold my-4">
          Nuestra misión es mejorar la{" "}
          <span className="text-red-500">calidad</span> de vida de personas
          ciegas y débiles visuales.
        </h1>
        <h1 className="font-noto md:text-lg text-base text-gray-900">
          Somos una institución sin fines de lucro que ofrece una amplia
          variedad de servicios a bebés, jóvenes y adultos. ¡Únete a nuestra
          comunidad y descubre cómo podemos ayudarte!"
        </h1>
        <button className="bg-red-600 p-3 text-white rounded-xl font-noto text-sm my-5">
          Cómo llegar
        </button>
        <button className="border border-black bg-white text-black p-3 text-sm rounded-xl font-noto my-5 mx-5">
          Pedir cotización
        </button>
        <div className="bg-red-600 h-1 w-full" />
      </div>
      <div className="flex justify-center items-center">
        <Image src="/hero.png" alt="My Image" width={500} height={500} />
      </div>
      <div id="testimonials"></div>
    </div>
  );
}
