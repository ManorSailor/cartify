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

function Cart(): ReactElement {
  return (
    <CartBody>
      <CartHeader />

      <CartContainer>
        <CartItemList>
          <CartItem />
        </CartItemList>

        <CartDetails />
      </CartContainer>

      <CartCheckoutBtn />
    </CartBody>
  );
}

export default Cart;
