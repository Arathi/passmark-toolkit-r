import Product, { Company } from "@domains/Product";

export function parseProducts(ul: HTMLUListElement): Product[] {
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

export function parseProduct(li: HTMLLIElement): Product | null {
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

  // 颜色
  let company: Company | undefined = undefined;

  // Intel
  if (name.indexOf("Intel") >= 0) {
    company = "intel";
  }

  // AMD
  if (
    name.indexOf("AMD") >= 0 || 
    name.indexOf("Radeon") >= 0 || 
    name.indexOf("Ryzen") >= 0 || 
    name.indexOf("FirePro") >= 0
  ) {
    company = "amd";
  }

  // Nvidia
  if (
    name.indexOf("NVIDIA") >= 0 || 
    name.indexOf("GeForce") >= 0 || 
    name.indexOf("RTX") >= 0 || 
    name.indexOf("TITAN") >= 0 || 
    name.indexOf("Quadro") >= 0 || 
    name.indexOf("Tesla") >= 0 || 
    name.indexOf("GRID") >= 0
  ) {
    company = "nvidia";
  }

  // 中文
  let chinese = name;

  // Intel
  chinese = chinese.replaceAll("Intel Xeon ", "至强 ");
  chinese = chinese.replaceAll("Intel Core ", "酷睿 ");
  chinese = chinese.replaceAll("Intel Atom ", "凌动 ");
  chinese = chinese.replaceAll("Intel Core2 ", "酷睿2 ");
  chinese = chinese.replaceAll("Intel Pentium ", "奔腾 ");
  chinese = chinese.replaceAll("Intel Celeron ", "赛扬 ");

  // AMD
  chinese = chinese.replaceAll("AMD Ryzen Threadripper ", "锐龙 线程撕裂者 ");
  chinese = chinese.replaceAll("AMD EPYC ", "霄龙 ");
  chinese = chinese.replaceAll("AMD Ryzen ", "锐龙 ");
  chinese = chinese.replaceAll("AMD Opteron ", "皓龙 ");
  chinese = chinese.replaceAll("AMD Phenom ", "羿龙 ");
  chinese = chinese.replaceAll("AMD Athlon ", "速龙 ");
  chinese = chinese.replaceAll("AMD Turion ", "炫龙 ");

  return {
    id,
    name,
    url,
    mark,
    price,
    company,
    chinese,
  };
}
