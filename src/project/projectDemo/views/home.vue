<template>
    <h1>测试Demo</h1>
    <h6>测试scss</h6>
    <div class="parent">
      <div class="child"></div>
    </div>
  <h6>测试tailwindcss
  </h6>
    <ul class="w-64 h-24 bg-slate-600 flex justify-evenly items-center">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  
    <h6>测试vant</h6>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <h5>引入icon-park</h5>
    <Camera theme="outline" size="24" fill="#333"/>
    <Unlike theme="outline" size="24" fill="#333"/>
  
    <h5>路由</h5>
    <van-button type="primary" @click="gotonext()">测试路由跳转</van-button>
   </template>
  <script setup>
  import { useRouter } from 'vue-router'
  import { Camera ,Unlike} from '@icon-park/vue-next'
  const router = useRouter() 
  console.log(router.getRoutes())
  const gotonext = () =>{
        router.push({name:"demo"})
   }
  </script>
  <style lang="scss" scoped>
  .parent {
    width: 100vw;
    height: 50vw;
    background-color: aquamarine;
    .child {
      width: 50vw;
      height: 50vw;
      background-color: coral;
    }
  }
  </style>
  