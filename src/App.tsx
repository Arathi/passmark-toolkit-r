import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { unsafeWindow } from '$';

import Settings from './components/Settings';
import ProductList from './components/ProductList';
import { productsAtom, showOriginChartAtom } from './stores';
import { parseProducts } from './Parser';

const settingsContainer = document.createElement("div");
settingsContainer.id = "pmtk-settings";

const productsContainer = document.createElement("ul");
productsContainer.id = "pmtk-products";
productsContainer.className = "chartlist";

const chart: HTMLDivElement | null = unsafeWindow.document.querySelector("#mark > div.chart");
const chartBody: HTMLDivElement | null = chart?.querySelector("div.chart_body") ?? null;
const chartList: HTMLUListElement | null = chartBody?.querySelector("ul.chartlist") ?? null;

function App() {
  const [, setProducts] = useAtom(productsAtom);
  const showOriginChart = useAtomValue(showOriginChartAtom);

  useEffect(() => {
    if (chartList != null) {
      const products = parseProducts(chartList);
      setProducts(products);
    }

    if (chart != null) {
      const subheader = chart.querySelector(".chart_subheader");

      const settings = unsafeWindow.document.getElementById("pmtk-settings");
      if (settings == undefined) {
        chart.insertBefore(settingsContainer, subheader);
      }

      const products = unsafeWindow.document.getElementById("pmtk-products");
      if (products == undefined) {
        chartBody?.append(productsContainer);
      }
    }
  }, []);

  useEffect(() => {
    if (chartList != null) {
      chartList.style.display = showOriginChart ? "block" : "none";
    }
  }, [showOriginChart]);

  return (
    <>
      { createPortal(<Settings />, settingsContainer, 'settings') }
      { createPortal(<ProductList />, productsContainer, 'products') }
    </>
  );
}

export default App;
