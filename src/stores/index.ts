import { atom } from "jotai";
import Product from "@/domains/Product";

const productsAtom = atom<Product[]>([]);

const filterResultAtom = atom(get => {
  const allProducts = get(productsAtom);
  const regex = get(regexAtom);
  const filtered = allProducts.filter(p => {
    if (regex != null) {
      const matcher = regex.exec(p.name);
      return matcher != null;
    }
    return true;
  });

  let markMax = 0;
  filtered.forEach(p => {
    if (p.mark > markMax) {
      markMax = p.mark;
    }
  });

  return {
    products: filtered, 
    markMax
  };
});

const patternAtom = atom("");
const regexAtom = atom<RegExp|null>(null);
const showOriginChartAtom = atom(false);
const showCompanyColorAtom = atom(false);
const showShortNameAtom = atom(false);
const showChineseNameAtom = atom(false);

export {
  productsAtom,
  filterResultAtom,
  
  patternAtom,
  regexAtom,
  showOriginChartAtom,
  showCompanyColorAtom,
  showShortNameAtom,
  showChineseNameAtom,
};
