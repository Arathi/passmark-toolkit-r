import { useAtom, useAtomValue } from "jotai";
import Product from "../../domains/Product";
import { showCompanyColorAtom } from "../../stores";

type Props = {
  product: Product;
  index: number;
  markMax: number;
};

const colors = [
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
];

enum CompanyColor {
  Intel = "#0068B5",
  AMD = "#EF281F",
  Nvidia = "#76B900",
}

const Item: React.FC<Props> = ({product, index, markMax}) => {
  const showCompanyColor = useAtomValue(showCompanyColorAtom);

  const {id, url, mark, price, company} = product;

  const alt = index % 2 == 1 ? "alt" : undefined;
  const productName = product.name;
  const color = colors[index % colors.length];
  const percent = mark * 86 / markMax;
  const width = `${percent.toFixed(0)}%`;
  const count = mark.toLocaleString();

  let companyColor: CompanyColor | undefined = undefined;
  if (showCompanyColor) {
    switch (company) {
      case "intel":
        companyColor = CompanyColor.Intel;
        break;
      case "amd":
        companyColor = CompanyColor.AMD;
        break;
      case "nvidia":
        companyColor = CompanyColor.Nvidia;
        break;
    }
  }

  return (
    <li id={`rk${id}`} className={alt}>
      <span className="more_details" onClick={() => {
        console.warn("暂未实现");
      }}></span>
      <a href={url}>
        <span className={"prdname"} style={{
          color: companyColor,
        }}>{productName}</span>
        <div>
          <span className={`index ${color}`} style={{
            width,
          }}>({width})</span>
        </div>
        <span className="count">{count}</span>
        <span className="price-neww">{price}</span>
      </a>
    </li>
  );
};

export default Item;