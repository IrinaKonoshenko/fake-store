import { NavLink } from "react-router-dom";

export function Menu() {
  return (
    <div className="flex grow items-center justify-between gap-10">
      <nav className="flex items-center justify-around gap-10">
        <NavLink to="/" className="p-3 text-2xl text-[#802c6e]">
          Home
        </NavLink>
        <NavLink to="/product-list" className="p-3 text-2xl text-[#802c6e]">
          Product List
        </NavLink>
        <NavLink to="/product" className="p-3 text-2xl text-[#802c6e]">
          Product
        </NavLink>
        <NavLink to="/cart" className="p-3 text-2xl text-[#802c6e]">
          Cart
        </NavLink>
      </nav>
      <nav className="flex items-center justify-around gap-6">
        <NavLink to="/sign-in" className="p-3 text-2xl text-[#802c6e]">
          Sign-In
        </NavLink>
        <NavLink to="/sign-up" className="p-3 text-2xl text-[#802c6e]">
          Sign-Up
        </NavLink>
      </nav>
    </div>
  );
}
