import { ReactElement } from "react";

function CartDetails(): ReactElement {
  return (
    <div className="shadow rounded-lg bg-gray-100 p-4">
      <p className="flex justify-between items-center text-xl">
        Total Items: <span className="tracking-wide">0</span>
      </p>
      <p className="flex justify-between items-center text-xl">
        Gross Total: <span className="tracking-wide">$0</span>
      </p>
    </div>
  );
}

export default CartDetails;
