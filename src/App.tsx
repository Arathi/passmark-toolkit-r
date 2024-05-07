import { createPortal } from 'react-dom';
import Settings from './components/Settings';
import ProductList from './components/ProductList';
import { unsafeWindow } from '$';
import { ReactNode, useEffect, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { productsAtom, showOriginChartAtom } from './stores';
import Product, { Company } from './domains/Product';

const settingsContainer = document.createElement("div");
const productsContainer = document.createElement("ul");
productsContainer.className = "chartlist";

const chart: HTMLDivElement | null = unsafeWindow.document.querySelector("#mark > div.chart");
const chartList: HTMLUListElement | null = chart?.querySelector(".chart_body > ul.chartlist") ?? null;

function parseProducts(ul: HTMLUListElement): Product[] {
  const products: Product[] = [];
  const lis: NodeListOf<HTMLLIElement> = ul.querySelectorAll("li");
  lis.forEach(li => {
    const product = parseProduct(li);
    if (product != null) {
      products.push(product);
    }
  });
  return products;
}

function parseProduct(li: HTMLLIElement): Product | null {
  const id = parseInt(li.id.substring(2));

  const a: HTMLAnchorElement | null = li.querySelector("a");
  if (a == null) return null;
  const url = a.href;

  const prdname: HTMLSpanElement | null = a.querySelector("span.prdname");
  if (prdname == null) return null;
  const name = prdname.innerText;

  const countSpan: HTMLSpanElement | null = a.querySelector("span.count");
  if (countSpan == null) return null;
  const mark = parseInt(countSpan.innerText.replaceAll(",", ""));

  const priceSpan: HTMLSpanElement | null = a.querySelector("span.price-neww");
  if (priceSpan == null) return null;
  const price = priceSpan.innerText;

  let company: Company | undefined = undefined;
  if (name.indexOf("Intel") >= 0) {
    company = "intel";
  }

  if (
    name.indexOf("AMD") >= 0 || 
    name.indexOf("Radeon") >= 0 || 
    name.indexOf("Ryzen") >= 0 || 
    name.indexOf("FirePro") >= 0
  ) {
    company = "amd";
  }

  if (
    name.indexOf("GeForce") >= 0 || 
    name.indexOf("RTX") >= 0 || 
    name.indexOf("NVIDIA") >= 0 || 
    name.indexOf("TITAN") >= 0 || 
    name.indexOf("Quadro") >= 0 || 
    name.indexOf("Tesla") >= 0 || 
    name.indexOf("GRID") >= 0
  ) {
    company = "nvidia";
  }

  return {
    id,
    name,
    url,
    mark,
    price,
    company,
  };
}

function App() {
  const [injected, setInjected] = useState(false);

  const [products, setProducts] = useAtom(productsAtom);
  const showOriginChart = useAtomValue(showOriginChartAtom);

  useEffect(() => {
    if (injected) {
      console.info("容器已注入，不要重复注入");
      return;
    }

    if (chart != null) {
      const subheader = chart.querySelector(".chart_subheader");
      chart.insertBefore(settingsContainer, subheader);
      chart.append(productsContainer);
    }

    if (chartList != null) {
      const products = parseProducts(chartList);
      setProducts(products);
    }

    setInjected(true);
  }, []);

  useEffect(() => {
    console.info("切换图表");
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
