import { ReactElement } from "react";

function CartCheckoutBtn(): ReactElement {
  return (
    <button className="px-4 py-2 self-stretch bg-violet-400 text-white rounded-md hover:bg-violet-500 transition-colors duration-200">
      Checkout
    </button>
  );
}

export default CartCheckoutBtn;
