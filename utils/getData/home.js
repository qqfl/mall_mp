import network from "../network";

export function getMutiData() {
  return network({url: 'home/multidata'})
}

export function getFeatureData() {
  return network({url: 'home/featuredata'})
}
