import { create } from "zustand";

export interface IProduct {
  id: number;
  link: string;
  name: string;
  mark: number;
  price: number;
}

export class Product implements IProduct {
  id: number;
  link: string;
  name: string;
  mark: number;
  price: number;

  shortName: string;
  camp?: string;
  chineseName: string;

  constructor(options: IProduct) {
    this.id = options.id;
    this.link = options.link;
    this.name = options.name;
    this.mark = options.mark;
    this.price = options.price;

    this.shortName = this.generateShortName();
    this.camp = this.generateCamp();
    this.chineseName = this.generateChineseName();
  }

  generateShortName() {
    let name = this.name;

    // AMD
    name = name.replace("AMD ", "");
    name = name.replace("Ryzen Threadripper ", "Threadripper ");
    name = name.replace("Radeon ", "");

    // Intel
    name = name.replace("Intel ", "");

    // Nvidia
    name = name.replace("GeForce", "");

    return name;
  }

  generateChineseName() {
    let name = this.shortName;

    // AMD
    if (this.camp == "amd") {
      name = name.replace("EPYC ", "霄龙 ");
      name = name.replace("Threadripper ", "线程撕裂者 ");
      name = name.replace("Ryzen ", "锐龙 ");
    }

    // Intel
    if (this.camp == "intel") {
      name = name.replace("Xeon ", "至强 ");
      name = name.replace("Core ", "酷睿 ");
    }

    return name;
  }

  generateCamp() {
    if (this.name.indexOf("AMD ") >= 0 || this.name.indexOf("Radeon ") >= 0) {
      return "amd";
    }

    if (this.name.indexOf("Intel ") >= 0) {
      return "intel";
    }

    if (
      this.name.indexOf("GeForce") >= 0 ||
      this.name.indexOf("RTX") >= 0 ||
      this.name.indexOf("TITAN") >= 0 ||
      this.name.indexOf("Quadro") >= 0 ||
      this.name.indexOf("Tesla") >= 0 ||
      this.name.indexOf("NVIDIA") >= 0
    ) {
      return "nvidia";
    }

    if (this.name.indexOf("Apple ") >= 0) {
      return "arm";
    }

    return undefined;
  }
}

interface State {
  regex?: RegExp;
  products: Product[];
}

interface Actions {
  init: (initData: IProduct[]) => void;
  updateRegex: (regex?: RegExp) => void;
  filtered: () => Product[];
}

type ProductStore = State & Actions;

export const useProductStore = create<ProductStore>()((set, get) => ({
  // state
  pattern: "",
  products: [],

  // actions
  init: (initData) =>
    set((state) => {
      if (state.products.length == 0) {
        const products = initData.map((data) => {
          return new Product(data);
        });
        console.info(`正在初始化产品信息：`, products);
        return {
          products: products,
        };
      } else {
        console.warn("已有数据，请勿重复初始化");
        return {};
      }
    }),

  updateRegex: (regex) =>
    set((state) => ({
      regex: regex,
    })),

  filtered: () => {
    const products = get().products;
    const regex = get().regex;
    let results: Product[] = [];
    products.map((product) => {
      if (regex != undefined) {
        const matcher = regex.exec(product.name);
        if (matcher != null) {
          results.push(product);
        }
      } else {
        results.push(product);
      }
    });
    return results;
  },
}));

export default ProductStore;
