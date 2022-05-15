import { WhatsappLogo } from "phosphor-react";
export function Header() {
  return (
    <header className="container m-auto mt-9 invisible md:visible ">
      <div className="flex justify-between">
        <ul className="flex gap-6 text-primary">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Portfólio</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
        </ul>

        <a href="https://api.whatsapp.com/send?phone=555511948701750&text=*Ol%C3%A1*%2C%20Gostaria%20de%20fazer%20um%20Or%C3%A7amento.">
          <button
            type="button"
            className="flex items-center gap-3 bg-primary p-3 rounded-md text-white "
          >
            <WhatsappLogo weight="bold" className="w-3.5 h-3.5" />
            Orçamento
          </button>
        </a>
      </div>
    </header>
  );
}
