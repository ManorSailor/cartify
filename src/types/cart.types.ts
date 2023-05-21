type CartDetails = {
  items: CartItem[];
  grossValue: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};
