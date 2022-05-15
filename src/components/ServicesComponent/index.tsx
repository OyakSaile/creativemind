import { ArrowBendDownRight, GooglePhotosLogo } from "phosphor-react";

interface ICardProps {
  id: number;
  cardIcon: any;
  cardTitle: string;
  cardExplain: string;
}

export function ServicesComponent() {
  const cards = [
    {
      id: 1,
      cardIcon: "GooglePhotosLogo",
      cardTitle: "Lorem Ipsum",
      cardExplain:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      cardIcon: "",
      cardTitle: "Lorem Ipsum",
      cardExplain:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      cardIcon: "",
      cardTitle: "Lorem Ipsum",
      cardExplain:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <section className="container mx-auto flex items-center gap-8 h-72    ">
      <div className="">
        <span className="bg-primary p-2 text-white rounded-md text-sm ">
          Nossos Serviços
        </span>
        <h2 className="text-2xl leading-10 mt-3 text-primary">
          What is Lorem Ipsum?
        </h2>
        <p className="text-grey w-3/4 my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <ArrowBendDownRight className="text-primary w-12 h-12" />
      </div>

      <>
        {cards.map(({ cardExplain, cardTitle, id }: ICardProps) => (
          <div className="rounded-md hover:bg-primary hover:text-white transition-colors border border-primary text-primary cursor-pointer  p-4 " key={id}>
            <span className="bg-white flex justify-center items-center w-12 h-12 rounded-full">
              <GooglePhotosLogo className="text-primary w-7 h-7" />
            </span>
            <h2 className="text-2xl leading-10 mt-3 font-bold ">{cardTitle}</h2>
            <p className=" w-2/4">{cardExplain}</p>
          </div>
        ))}
      </>
    </section>
  );
}
