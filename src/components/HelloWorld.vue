//-----子组件
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="showmsg">点我试试</button>
  </div>
</template>

<script>
  //默认导出这个主键----在App中用
  export default {
    //改名字  default 改为 const  hell  父组件引用的时候 用{名字}

    name: 'HelloWorld',//这个名字决定了，这个组件导出后的名字
    data() {
      return {}
    },
    props:{
      msg:{
        type:String
      },
      showmsg:{
        type: Function
      }

    }
  }
</script>

