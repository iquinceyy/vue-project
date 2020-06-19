// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//------注册
import Vue from 'vue'
import App from './App'

//这种导入针对于default的
import components from "./common/components";

//Object.keys对某个js对象做循环操作
//1.全局注册组件

// let obj={userName:'张三',age:'19'}
// Object.keys(obj).forEach((key)=>{//全局注册主键
//       console.log(key)
//       console.log(obj[key])
// });


//1.全局注册组件----->以后会有很多组件------>移动到common.js

// Object.keys(components).forEach((key)=>{//全局注册主键
//   Vue.component(key,components[key]);
//
// });


//导入初始化的组件----->就是上面移动到common.js的
import {init} from "./common/common";
init();


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
