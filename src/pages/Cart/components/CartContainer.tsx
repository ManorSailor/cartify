import { ReactElement, ReactNode } from "react";

function CartContainer({ children }: { children: ReactNode }): ReactElement {
  return (
    <section className="flex flex-col gap-4 flex-grow justify-evenly  ">
      {children}
    </section>
  );
}

export default CartContainer;
