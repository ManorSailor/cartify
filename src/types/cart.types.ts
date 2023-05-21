type CartDetails = {
  items: CartItem[];
  grossValue: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

type ICart = {
  isOpen: boolean;
  toggleCart: () => void;
  getDetails: (products: Product[]) => CartDetails;
  addItem: (productID: string | number, quantity: number) => void;
  removeItem: (
    productID: string | number,
    quantity: number,
    options?: { delete?: boolean }
  ) => void;
}
