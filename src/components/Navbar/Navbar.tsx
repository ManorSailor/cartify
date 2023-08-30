import { ReactElement } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./navbar.css";

function Navbar({ toggleCart }: Pick<ICart, "toggleCart">): ReactElement {
  return (
    <nav className="flex justify-between items-center px-5 py-3 shadow-md min-h-[80px] sticky top-0 w-full">
      <Link to="/home">
        <h3 className="text-2xl tracking-wide">Cartify</h3>
      </Link>

      <ul className="flex items-center gap-4">
        <li className="text-lg text-slate-400 hover:text-slate-500 transition-colors duration-300">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="text-lg text-slate-400 hover:text-slate-500 transition-colors duration-300">
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li className="before:content-[''] before:absolute before:text-lg before:rounded-full before:top-[50%] before:pointer-events-none relative">
          <button
            className="p-2 border text-slate-400 hover:text-slate-500 border-slate-400 hover:border-slate-500 rounded-full transition-colors duration-300"
            aria-label="View Cart"
            onClick={toggleCart}
          >
            <Icon icon="ph:shopping-cart-simple" width={20} aria-hidden />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
