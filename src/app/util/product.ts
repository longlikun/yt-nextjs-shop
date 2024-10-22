import { IProductSku } from "../types/products";

interface ProductWithSku {
  title: string;
  image: string;
  products_sku: IProductSku[];
}

function findLowestPriceSku(data: ProductWithSku[]): IProductSku | undefined {
  // 初始化一个变量，用于存储当前找到的最低价格 SKU
  let lowestPriceSku: IProductSku | undefined;

  // 遍历数据中的每个产品
  data.forEach(product => {
    // 如果 products_sku 是空数组，跳过
    if (!product.products_sku.length) {
      return;
    }

    // 遍历产品下的所有 SKU
    product.products_sku.forEach(sku => {
      // 如果是第一个 SKU 或价格更低，更新 lowestPriceSku
      if (!lowestPriceSku || sku.price < lowestPriceSku.price) {
        lowestPriceSku = sku;
      }
    });
  });

  return lowestPriceSku;
}

export default findLowestPriceSku