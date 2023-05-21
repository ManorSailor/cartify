import { useState } from "react";

function useCart() {
  const [cart, setCart] = useState<Map<string | number, number>>(
    () => new Map()
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  const updateItem = (productID: string | number, quantity: number) =>
    setCart((oldCart) => new Map([...oldCart, [productID, quantity]]));

  const removeItem = (
    productID: string | number,
    quantity: number,
    options?: { delete?: boolean }
  ) => {
    if (options?.delete || quantity < 1) {
      const newCart = new Map([...cart]);
      newCart.delete(productID);
      setCart(newCart);
    } else {
      updateItem(productID, quantity);
    }
  };

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
    removeItem,
    toggleCart,
    addItem: updateItem,
  };
}

export default useCart;
