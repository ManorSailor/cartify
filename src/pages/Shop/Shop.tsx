import { ReactElement, useEffect, useState } from "react";

import ContentWrapper from "@/components/ContentWrapper";
import { ProductCard, ProductList } from "./components";

function Shop(): ReactElement {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=3")
      .then((res) => res.json())
      .then(({ products }: DummyJSONResponse) => setProducts(products))
      .catch((err: Error) => err);
  }, []);

  return (
    <ContentWrapper className="flex p-4">
      <section className="grow">
        <ProductList>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard {...product} />
            </li>
          ))}
        </ProductList>
      </section>
    </ContentWrapper>
  );
}

export default Shop;
