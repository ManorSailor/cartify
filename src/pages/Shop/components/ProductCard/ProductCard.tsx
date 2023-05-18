import { ReactElement } from "react";
import { Link } from "react-router-dom";

import CartActions from "@/components/CartActions";

function ProductCard({
  id,
  title,
  thumbnail,
  price,
  rating,
}: Product): ReactElement {
  return (
    <article className="max-w-[320px] shadow-md rounded-lg p-4">
      <Link to={`product/${id}`}>
        <section className="">
          <img
            src={thumbnail}
            alt={title}
            className="rounded-lg object-cover max-w-[260px]"
          />
          <p className="text-xl mt-2">{title}</p>
        </section>

        <section className="flex justify-between items-center mb-2">
          <span className="text-lg tracking-wide font-semibold">${price}</span>
          <span className="text-sm text-slate-400 italic">{rating}</span>
        </section>
      </Link>

      <CartActions />
    </article>
  );
}

export default ProductCard;
