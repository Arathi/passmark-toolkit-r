import { Product } from "../stores/ProductStore";

interface RankListItemProps {
  // 产品名称信息
  product: Product;

  // 产品名称样式类（添加代表厂商的颜色）
  productNameClasses: string[];

  // 产品名称
  productName: string;

  // 分数条样式
  markBarClasses: string[];

  // 分数相对百分比（格式化为字符串）
  markPercentage: string;
}

export default function RankListItem(props: RankListItemProps) {
  return (
    <li id={`rk${props.product.id}`}>
      <span className="more_details"></span>
      <a href={props.product.link}>
        <span className={props.productNameClasses.join(" ")}>
          {props.productName}
        </span>
        <div>
          <span
            className={props.markBarClasses.join(" ")}
            style={{ width: `${props.markPercentage}%` }}
          >{`(${props.markPercentage}%)`}</span>
        </div>
        <span className="count">{props.product.mark.toLocaleString()}</span>
        <span className="price-neww">
          {props.product.price <= 0
            ? "NA"
            : `$${props.product.price.toLocaleString()}`}
        </span>
      </a>
    </li>
  );
}
