import QuantityCounter from "../QuantityCounter";

import type { ICart } from "@/types/Cart";

function CardActions({
  cart: { addItem, getProductQty, increaseQty, decreaseQty },
  productID,
}: {
  cart: ICart;
  productID: string;
}) {
  const currentQty = getProductQty(productID);
  const onIncreaseQty = () => increaseQty(productID, 1);
  const onDecreaseQty = () => decreaseQty(productID, 1);

  return (
    <div className="flex justify-between items-center">
      {currentQty ? (
        <QuantityCounter
          quantity={currentQty}
          onIncrease={onIncreaseQty}
          onDecrease={onDecreaseQty}
        />
      ) : (
        <button
          className="text-white px-2 py-1 bg-violet-400 hover:bg-violet-500 transition-colors rounded-md flex-grow"
          onClick={() => addItem(productID)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default CardActions;
