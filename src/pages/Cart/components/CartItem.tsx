import { ReactElement } from "react";
import { Link } from "react-router-dom";
import QuantityCounter from "@/components/QuantityCounter";

type CartItemProps = {
  item: CartItem;
};

function CartItem({
  item: { product, quantity },
}: CartItemProps): ReactElement {
  return (
    <li className="hover:bg-gray-200 transition-colors duration-200 rounded-lg p-4">
      <Link to={`shop/product/${product.id}`}>
        <section className="flex gap-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-lg object-cover w-[120px] aspect-video"
          />
          <section className="flex-grow">
            <p className="text-lg">{product.title}</p>

            <div className="flex justify-between items-center">
              <span className="tracking-wide font-semibold italic">
                ${product.price}
              </span>
              <span className="text-sm tracking-wide text-slate-400 italic">
                ${product.price * quantity}
              </span>
            </div>
          </section>
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
