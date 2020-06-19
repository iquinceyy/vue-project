//---父组件
<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <HelloWorld :msg="msg1" :showmsg="show"   />-->
<!--    <qianfeng :msg="msg2" :showmsg="show"   />-->
<!--    //子传父1-->
<!--    <qianfeng :msg="msg2" :showmsg="show2"   />-->
<!--    子传父2  @-->
<!--    <qianfeng :msg="msg2" @showmsg1="show"   />-->
<!--    传递多个参数   -&#45;&#45;对象-->
    <qianfeng :msg="msg2" @showmsg1="show4"   />


    <javatable :list="list" :theads="['用户id','用户姓名']"></javatable>


  </div>
</template>

<script>

  //从HelloWorld中导过进来  ---注册  全局注册后就不需要了
  // import HelloWorld from './components/HelloWorld'
  // import qianfeng from "./components/qianfeng";

export default {

  name: 'App',

  data:function () {
      return {
        msg1:'123qweHelloWorld',
        msg2:'123qwe千锋',
        msg3:'子组件向父组件传递参数2',

        list:[{goodsId:999,title:'小香蕉'},{goodsId:998,title:'小香蕉'},{goodsId:997,title:'小香蕉'}]
      }
  },

  methods:{
    show(){
      alert("123")
    },
    show2(msg2){
      alert(msg2);//子组件向父组件传递参数1
    },
    show3(){
      alert("子组件向父组件传递参数2");//子组件向父组件传递参数2
    },
    show4(u){
      console.log(u)
    },
    ajaxList(){
      //

      this.list=[];
    }


  },


  // components: {
  //   // 引用子类组件 helloworld  全局注册后就不需要了
  //   HelloWorld,
  //   qianfeng
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
