import { ReactElement } from "react";
import type { CartDetails as Details } from "@/types/Cart";

type CartDetailsProps = {
  details: Details;
};

function CartDetails({
  details: { items, grossValue },
}: CartDetailsProps): ReactElement {
  return (
    <div className="shadow rounded-lg bg-gray-100 p-4">
      <p className="flex justify-between items-center text-xl">
        Products In Cart: <span className="tracking-wide">{items.length}</span>
      </p>
      <p className="flex justify-between items-center text-xl">
        Gross Total: <span className="tracking-wide">${grossValue}</span>
      </p>
    </div>
  );
}

export default CartDetails;
