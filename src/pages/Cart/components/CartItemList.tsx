import { ReactElement, ReactNode } from "react";

function CartItemList({ children }: { children: ReactNode }): ReactElement {
  return (
    <ul className="[&>li]:mb-2 [&>li:last-child]:mb-0 basis-3/4 overflow-y-auto shadow rounded-lg bg-gray-100 pretty-scrollbar">
      {children}
    </ul>
  );
}

export default CartItemList;
