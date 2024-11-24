import { ReactElement } from "react";

import ContentWrapper from "@/components/ContentWrapper";
import { ProductCard, ProductList } from "./components";

import type { ICart } from "@/types/Cart";

type ShopProps = {
  products: Product[];
  cart: ICart;
};

function Shop({ products, cart }: ShopProps): ReactElement {
  return (
    <ContentWrapper className="flex p-4">
      <section className="grow">
        <ProductList>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} cart={cart} />
            </li>
          ))}
        </ProductList>
      </section>
    </ContentWrapper>
  );
}

export default Shop;
