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
  getTotalItems: () => number;
  getDetails: (products: Product[]) => CartDetails;
  addItem: (productID: string, quantity?: number) => void;
  removeItem: (productID: string) => void;
  increaseQty: (productID: string, quantity: number) => void;
  decreaseQty: (productID: string, quantity: number) => void;
  getProductQty: (productID: string) => number | undefined;
};

export type { ICart, CartDetails, CartItem };
