import { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";

type LinkProps = {
  route: string;
  children: ReactNode;
};

function ProductLink({ route, children }: LinkProps): ReactElement {
  return (
    <li className="">
      <Link to={route}>{children}</Link>
    </li>
  );
}

export default ProductLink;
