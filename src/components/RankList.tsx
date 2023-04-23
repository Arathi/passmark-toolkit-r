import React, { useEffect } from 'react';
import RankListItem from "./RankListItem";
import { IProduct, Product, useProductStore } from "../stores/ProductStore";

export default function RankList({
  colors = [
    "pink",
    "yellow",
    "green",
    "light-purple",
    "red",
    "turquoise",
    "orange",
    "brown",
    "purple",
    "blue",
  ],
  data = [] as IProduct[],
  nameMode = "origin",
}) {
  const store = useProductStore();

  useEffect(() => {
    console.info("正在初始化RankList");
    store.init(data);
  }, []);

  const results = store.filtered();
  const maxMark = results.length > 0 ? results[0].mark : 0;

  let items = results.map((product, index) => {
    let markPercentage = ((product.mark * 86) / maxMark).toFixed(2);
    let productNameClasses = ["prdname"];
    if (product.camp != undefined) {
      productNameClasses.push(`camp_${product.camp}`);
    }

    let markBarClasses = ["index"];
    if (colors.length > 0) {
      const colorIndex = index % colors.length;
      let color = colors[colorIndex];
      markBarClasses.push(color);
    }

    let productName = product.name;
    if (nameMode == "shortName") {
      productName = product.shortName;
    }
    else if (nameMode == "chinese") {
      productName = product.chineseName;
    }

    return (
      <RankListItem
        key={`rk${product.id}`}
        product={product}
        productNameClasses={productNameClasses}
        productName={productName}
        markBarClasses={markBarClasses}
        markPercentage={markPercentage}
      />
    );
  });

  return (
    <div className="chart_body">
      <ul className="chartlist">{items}</ul>
    </div>
  );
}
