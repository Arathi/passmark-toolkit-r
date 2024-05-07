type Product = {
  id: number;
  name: string;
  url: string;
  mark: number;
  price: string;
  company?: Company;
};

type Company = "intel" | "amd" | "nvidia";

export default Product;
export type {
  Company,
}
