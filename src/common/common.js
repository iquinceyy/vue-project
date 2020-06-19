import Vue from 'vue'
import components from "./components";




//初始化---->在main中导入并调用

//全局注册组件
export function init() {

  Object.keys(components).forEach((key)=>{//全局注册组件
    Vue.component(key,components[key]);
  });
}

//图片预览功能
export  function imgPreview(file, imgDom) {
  //判断是否支持FileReader
  if (window.FileReader) {
    var reader = new FileReader();
  } else {
    alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
  }
  var imageType = /^image\//;
  //是否是图片
  if (!imageType.test(file.type)) {
    alert("请选择图片！");
    return;
  }
  //读取完成
  reader.onload = function (e) {
    //获取图片dom
    //图片路径设置为读取的图片
    imgDom.src = e.target.result;

  };
  reader.readAsDataURL(file);
}
