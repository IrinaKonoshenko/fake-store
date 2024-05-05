import { Link } from "react-router-dom";
import { Menu } from "../menu/menu";

export function Header() {
  return (
    <div className="mx-auto flex w-[1300px] max-w-full flex-shrink-0 gap-[250px] pt-5">
      <Link to="/" className="h-10 w-10 overflow-hidden">
        <img src="https://fakestoreapi.com/icons/logo.png" />
      </Link>
      <Menu />
    </div>
  );
}
