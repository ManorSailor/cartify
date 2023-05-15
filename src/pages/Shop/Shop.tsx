import { ReactElement } from "react";

import ContentWrapper from "@/components/ContentWrapper";
import { ProductCard, ProductList, ProductLink } from "./components";

function Shop(): ReactElement {
  return (
    <ContentWrapper className="flex p-4">
      <section className="products">
        <ProductList>
          <ProductLink route={`product/${1}`}>
            <ProductCard />
          </ProductLink>
        </ProductList>
      </section>
    </ContentWrapper>
  );
}

export default Shop;
