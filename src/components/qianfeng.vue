//-----子组件
<template>
  <div>
    <h1>{{ msg }}</h1>
<!--    <button @click="showmsg">点我试试</button>-->
<!--    <button @click="showmsg('子组件向父组件传递参数1')">点我试试2222</button>-->

    <!--    点击发射  前面要用@符号-->
<!--    <button @click="()=>this.$emit('showmsg1','hahahahah')">点我试试333</button>-->
<!--    传递多个参数-->
    <button @click="()=>this.$emit('showmsg1',{ user})">点我试试333</button>

  </div>
</template>

<script>
  //默认导出这个主键----在App中用
  export default {
    //改名字  default 改为 const  hell  父组件引用的时候 用{名字}

    name: 'HelloWorld',//这个名字决定了，这个组件导出后的名字
    data() {
      return {

        //多个参数的user
        user:{name:'张三',age:'18'}
      }
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

