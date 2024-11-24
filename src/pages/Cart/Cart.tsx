import {
  CartBody,
  CartHeader,
  CartContainer,
  CartItemList,
  CartItem,
  CartDetails,
  CartCheckoutBtn,
} from "./components";

import type { ICart } from "@/types/Cart";
import type { Product } from "@/types/globals";

type CartProps = {
  cart: ICart;
  products: Product[];
};

function Cart({ cart, products }: CartProps) {
  const { items, grossValue } = cart.getDetails(products);

  return cart.isOpen ? (
    <CartBody>
      <CartHeader toggleCart={cart.toggleCart} />

      <CartContainer>
        <CartItemList>
          {items.map((item) => (
            <CartItem item={item} cart={cart} key={item.product.id} />
          ))}
        </CartItemList>

        <CartDetails details={{ items, grossValue }} />
      </CartContainer>

      <CartCheckoutBtn />
    </CartBody>
  ) : null;
}

export default Cart;
