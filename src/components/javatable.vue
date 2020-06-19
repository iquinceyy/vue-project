//-----子组件
<template>
  <table class="java-table">
<!--    表头-->
    <td v-for="k in theads">{{k}}</td>
<!--    子传父-->
<!--    <tr v-for="i in l">-->
<!--      <td>{{i.goodsId}}</td>-->
<!--      <td>{{i.title}}</td>-->
<!--    </tr>-->
<!--父传子-->
<!--    <tr v-for="i in list">-->
<!--      <td>{{i.goodsId}}</td>-->
<!--      <td>{{i.title}}</td>-->
<!--    </tr>-->


    <tr v-for="i in list">
<!--      <td v-for="key in keyAyy">{{i[key]}}</td>-->
      <td v-for="key in getArr()">{{i[key]}}</td>
    </tr>
  </table>
</template>

<script>
  //默认导出这个主键----在App中用
  export default {
    //改名字  default 改为 const  hell  父组件引用的时候 用{名字}
    name: 'javatable',//这个名字决定了，这个组件导出后的名字
    data() {
      return {
        l:[{goodsId:1,title:'苹果1'},{goodsId:2,title:'苹果2'},{goodsId:3,title:'苹果3'}]
      }
    },

    methods:{
      getArr(){
        console.log(123123123131231231231)
        let a=this.list[0];
        // this.keyAyy = Object.keys(a);

        return Object.keys(a);
      }
    },



    props:{
      list:{
        type:Array,
        defaultValue:[]  //给个空值
      },
      // keyAyy:[]

      theads:{
        type: Array
      }
    },
  }
</script>
<style>
  /*.layui-table td, .layui-table th, .layui-table-col-set, .layui-table-fixed-r, .layui-table-grid-down, .layui-table-header, .layui-table-page, .layui-table-tips-main, .layui-table-tool, .layui-table-total, .layui-table-view, .layui-table[lay-skin=line], .layui-table[lay-skin=row] {*/
  /*  border-width: 1px;*/
  /*  border-style: solid;*/
  /*  border-color: #e6e6e6*/
  /*}*/

  .java-table td{
    position: relative;
    padding: 9px 15px;
    min-height: 20px;
    line-height: 20px;
    font-size: 14px
  }
</style>
