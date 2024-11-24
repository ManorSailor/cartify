import { useState } from "react";
import type { ICart, CartDetails, CartItem } from "@/types/Cart";

type ProductID = string;
type ProductQty = number;

function useCart(): ICart {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<Map<ProductID, ProductQty>>(() => new Map());

  const toggleCart = () => setIsOpen(!isOpen);

  const addItem = (productID: string, quantity = 1) =>
    setCart((oldCart) => new Map([...oldCart, [productID, quantity]]));

  const removeItem = (productID: string) => {
    if (cart.has(productID)) {
      const newCart = new Map([...cart]);
      newCart.delete(productID);
      setCart(newCart);
    }
  };

  const increaseQty = (productID: string, newQty: number) => {
    const oldQty = cart.get(productID);

    if (oldQty) {
      const newCart = new Map([...cart]);
      newCart.set(productID, oldQty + newQty);
      setCart(newCart);
    }
  };

  const decreaseQty = (productID: string, newQty: number) => {
    const oldQty = cart.get(productID) ?? 0;

    if (newQty >= oldQty) {
      removeItem(productID);
    } else {
      const newCart = new Map([...cart]);
      newCart.set(productID, Math.abs(oldQty - newQty));
      setCart(newCart);
    }
  };

  const getProductQty = (productID: string) => cart.get(productID);

  const getDetails = (products: Product[]): CartDetails => {
    let grossValue = 0;
    const items = products.reduce((items: CartItem[], product) => {
      const quantity = cart.get(product.id);
      if (quantity) {
        grossValue += product.price * quantity;
        items.push({ product, quantity });
      }
      return items;
    }, []);

    return { items, grossValue };
  };

  return {
    isOpen,
    getDetails,
    addItem,
    removeItem,
    toggleCart,
    increaseQty,
    decreaseQty,
    getProductQty,
  };
}

export default useCart;
