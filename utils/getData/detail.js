import network from "../network";

export function getDetailData(id) {
  return network({url: 'detail/detaildata?id='+ id})
}
