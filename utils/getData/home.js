import network from "../network";

export function getMutiData() {
  return network({url: 'home/multidata'})
}

export function getFeatureData() {
  return network({url: 'home/featuredata'})
}

export function getTabData(options) {
  return network({url: 'home/goodsdata?type=' + options.type + '&page=' + options.page})
}
