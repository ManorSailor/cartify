import { ReactElement } from "react";
import {
  CartBody,
  CartHeader,
  CartContainer,
  CartItemList,
  CartItem,
  CartDetails,
  CartCheckoutBtn,
} from "./components";

type CartProps = {
  cart: ICart;
  products: Product[];
};

function Cart({
  cart: { isOpen, getDetails, toggleCart },
  products,
}: CartProps): ReactElement | null {
  const { items, grossValue } = getDetails(products);

  return isOpen ? (
    <CartBody>
      <CartHeader toggleCart={toggleCart} />

      <CartContainer>
        <CartItemList>
          {items.map((item) => (
            <CartItem item={item} />
          ))}
        </CartItemList>

        <CartDetails details={{ items, grossValue }} />
      </CartContainer>

      <CartCheckoutBtn />
    </CartBody>
  ) : null;
}

export default Cart;
