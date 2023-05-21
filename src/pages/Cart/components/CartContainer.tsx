import { ReactElement, ReactNode } from "react";

function CartContainer({ children }: { children: ReactNode }): ReactElement {
  return (
    <section className="flex flex-col gap-4 basis-3/4 max-h-[75%]">
      {children}
    </section>
  );
}

export default CartContainer;
