import { ReactElement } from "react";
import { Link } from "react-router-dom";
import QuantityCounter from "@/components/QuantityCounter";

function CartItem(): ReactElement {
  return (
    <li className="hover:bg-gray-200 transition-colors duration-200 rounded-lg p-4">
      <Link to={`shop/product/${1}`}>
        <section className="">
          <img
            src=""
            alt=""
            className="rounded-lg object-cover max-w-[260px]"
          />
          <span className="text-lg">Some Product</span>
        </section>

        <section className="flex justify-between items-center">
          <span className="tracking-wide font-semibold italic">$100</span>
          <span className="text-sm tracking-wide text-slate-400 italic">
            $400
          </span>
        </section>
      </Link>

      <div className="flex justify-between items-center mt-4">
        <QuantityCounter />

        <button className="text-white px-2 py-1 bg-violet-400 hover:bg-violet-500 transition-colors rounded-md">
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
