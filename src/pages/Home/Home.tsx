import { ReactElement } from "react";
import { Link } from "react-router-dom";

import ContentWrapper from "@/components/ContentWrapper";

function Home(): ReactElement {
  return (
    <ContentWrapper className="flex justify-evenly items-center flex-wrap max-w-5xl my-0 mx-auto min-h-screen p-4">
      <section className="">
        <h3 className="text-4xl mb-6">Discover, Cart, Done!</h3>
        <Link
          to="/shop"
          className="border px-4 py-2 bg-violet-500 rounded-md text-white hover:bg-transparent hover:border hover:border-violet-500 hover:text-violet-500 transition-colors duration-200"
          role="button"
        >
          Explore Products
        </Link>
      </section>
    </ContentWrapper>
  );
}

export default Home;
