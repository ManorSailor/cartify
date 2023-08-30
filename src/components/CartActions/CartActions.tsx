import { ReactElement } from "react";
import QuantityCounter from "../QuantityCounter";

function CartActions({
  cart: { addItem },
  productID,
}: {
  cart: ICart;
  productID: number;
}): ReactElement {
  return (
    <div className="flex justify-between items-center">
      <QuantityCounter />

      <button
        className="text-white px-2 py-1 bg-violet-400 hover:bg-violet-500 transition-colors rounded-md"
        onClick={() => addItem(productID, 2)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default CartActions;
