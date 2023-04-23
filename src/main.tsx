import ReactDOM from 'react-dom/client';
import './index.css';

import Chart from './components/Chart';
import { IProduct } from './stores/ProductStore';
import { unsafeWindow } from '$';

// @ts-ignore
let $ = unsafeWindow.jQuery;

// 获取产品信息 IProduct[]
let products: IProduct[] = [];
let lis = $("#mark li");
for (let liIndex = 0; liIndex < lis.length; liIndex++) {
  let li = lis[liIndex];
  let mark = $(".count", li).text().replace(',', '');
  let price = $(".price-neww", li).text().replace(',', '').replace('$', '').replace('*', '');
  let product = {
    id: Number(li.id.substring(2)),
    link: $("a", li).attr('href'),
    name: $(".prdname", li).text(),
    mark: parseInt(mark),
    price: price == 'NA' ? 0 : parseInt(price),
  } as IProduct;
  products.push(product);
}
console.info("获取产品信息：", products);

const markId = "mark";  // value
let mark = document.getElementById(markId);
if (mark == null) {
  mark = document.createElement('div');
  mark.id = markId;
  document.body.append(mark);
}

// 构建ReactDOM
let app = ReactDOM.createRoot(mark, {});

// 开始渲染
app.render(
  <Chart type="CPU" level="high_end" updateTime="2023-04-13" data={products} />
);