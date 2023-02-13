<template>

<div>
    <van-button type="primary" @click="$router.go(-1)">返回</van-button>
     <h1>demo</h1>

     <div>
         <ul>
            <li v-for="(item,index) in myobj" :key="index">{{ item }}</li>
         </ul>

         <ul><li v-for="(item,index) of list" :key="index">
           <img :src="item.src" class="w-full h-60" alt="" /> 
        </li></ul>
     </div>
</div>

</template>

<script setup >
import { demoHttp,getImgs } from '@/api/demoApi';
import {ref,onMounted} from 'vue'

const myobj = ref(null)
const list = ref([])
onMounted(async () =>{
   const res = await demoHttp()
   const imgs = await getImgs()
   myobj.value = res.data
   list.value = imgs.data
   console.log(myobj.value)
   console.log(list.value)
})

</script>
<style lang='scss' scoped>

</style>