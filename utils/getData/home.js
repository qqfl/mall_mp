import network from "../network";
export function getMutiData() {
  return network({url: 'home/multidata'})
}
