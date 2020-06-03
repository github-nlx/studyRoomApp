<template>
  <div class="header">
    <van-row>
      <van-col span="8">
        span: 8
      </van-col>
      <van-col span="8">
        span: 8
      </van-col>
      <van-col span="8">
        span: 8
      </van-col>
    </van-row>
  </div>
</template>

<script>
import {Row,Col} from 'vant'
import Vue from 'vue'
Vue.use(Col)
Vue.use(Row)
export default {
data(){
  return{
    
  }
}
}
</script>

<style>
</style>