import {getTypeData,getProductData} from "../../utils/getData/category";

Page({
  data: {
    typeList:[],
    dataList:[],
    actSideBar: 0,
  },
  onLoad: function (options) {
    this.dataGetType();
    this.dataGetProduct();
  },
  dataGetType(){
    getTypeData().then(value => {
      this.setData({typeList: value.data.list})
    })
  },
  dataGetProduct(){
    getProductData().then(value => {
      this.setData({dataList: value.data.list})
    })
  },
  myChangeSideBar(e){
    this.setData({actSideBar:e.detail})
  }
});
