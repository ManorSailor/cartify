import { ReactElement, ReactNode } from "react";

function ProductList({ children }: { children: ReactNode }): ReactElement {
  return (
    <ul className="grid place-items-center gap-6 grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))]">
      {children}
    </ul>
  );
}

export default ProductList;
