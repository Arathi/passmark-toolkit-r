import { useAtomValue } from "jotai";
import { ReactNode } from "react";
import { filterResultAtom, showOriginChartAtom } from "@/stores";
import Product from "./Item";

import "./index.scss";

const ProductList = () => {
  const showOriginChart = useAtomValue(showOriginChartAtom);
  const { products, markMax } = useAtomValue(filterResultAtom);
  const items: ReactNode[] = [];

  if (!showOriginChart) {
    products.forEach((p, index) => {
      items.push(
        <Product 
          key={p.id}
          product={p}
          index={index}
          markMax={markMax}
        />
      );
    });
  }

  return (
    <>
      { items }
    </>
  )
};

export default ProductList;
