import network from "../network";

export function getTypeData() {
  return network({url: 'category/categorytype'})
}

export function getProductData() {
  return network({url: 'category/categorydata'})
}
