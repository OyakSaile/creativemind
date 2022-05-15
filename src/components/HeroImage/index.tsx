import Image from "next/image";
export function HeroImage() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center md:flex-row">
        <div>
          <h1 className="text-6xl text-grey">
            Olá, bem vindo a <br/>
            <span className="text-primary 	leading-10	font-bold">
              Creative Mind <br />
              Design
            </span>
          </h1>
          <p className="my-6 text-grey text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
            inventore porro consectetur necessitatibus odio aperiam reiciendis
            praesentium ducimus rem adipisci? Molestiae assumenda incidunt
            sapiente qui deleniti amet ducimus, nisi exercitationem!
          </p>

          <button className="btn bg-primary p-4 text-white rounded-xl hover:bg-secondary transition-colors">
            Entrar em contato
          </button>
        </div>

        <div className=" w-full relative flex justify-center ">
          <Image
            src="/logo.png"
            width={500}
            height={500}
            quality="100"
            alt="Creative Mind Design - Logo"
          />
        </div>
      </div>
    </section>
  );
}
