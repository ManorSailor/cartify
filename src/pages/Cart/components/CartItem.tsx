import { Link } from "react-router-dom";
import QuantityCounter from "@/components/QuantityCounter";

import type { ICart, CartItem as Item } from "@/types/Cart";

type CartItemProps = {
  item: Item;
  cart: ICart;
};

function CartItem({
  item: { product, quantity },
  cart: { increaseQty, decreaseQty, removeItem },
}: CartItemProps) {
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
        <QuantityCounter
          quantity={quantity}
          onIncrease={() => increaseQty(product.id, 1)}
          onDecrease={() => decreaseQty(product.id, 1)}
        />

        <button
          className="text-white px-2 py-1 bg-violet-400 hover:bg-violet-500 transition-colors rounded-md flex-grow"
          onClick={() => removeItem(product.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
