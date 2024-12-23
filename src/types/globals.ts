type DummyJSONResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type { Product, DummyJSONResponse };
