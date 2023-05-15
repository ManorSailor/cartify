import { ReactElement } from "react";

function ProductCard(): ReactElement {
  return (
    <article className="product-card">
      <img src="" alt="" className="product-card__thumbnail" />
      <p className="product-card__title">SomeProduct</p>
      <p className="product-card__price">$100</p>
    </article>
  );
}

export default ProductCard;
