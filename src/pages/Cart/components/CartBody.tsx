import { ReactElement, ReactNode } from "react";

function CartBody({ children }: { children: ReactNode }): ReactElement {
  return (
    <aside className="fixed right-0 top-0 w-full md:max-w-[450px] h-full shadow-md z-10 p-4 bg-white flex flex-col justify-between">
      {children}
    </aside>
  );
}

export default CartBody;
