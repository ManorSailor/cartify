import { ReactElement } from "react";
import { Icon } from "@iconify/react";

function CartHeader({ toggleCart }: Pick<ICart, "toggleCart">): ReactElement {
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-xl">Your Cart</h3>

      <button className="p-2" aria-label="Close Cart" onClick={toggleCart}>
        <Icon icon="ph:x" width={22} aria-hidden />
      </button>
    </div>
  );
}

export default CartHeader;
