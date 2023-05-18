import { ReactElement } from "react";
import QuantityCounter from "../QuantityCounter";

function CartActions(): ReactElement {
  return (
    <div className="flex justify-between items-center">
      <QuantityCounter />

      <button className="text-white px-2 py-1 bg-violet-400 hover:bg-violet-500 transition-colors rounded-md">
        Add to Cart
      </button>
    </div>
  );
}

export default CartActions;
