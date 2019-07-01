<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <br>

    <div class="container">
      <h4>router-view的复用</h4>
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    appHeader: Header
  },
  created() {
    // 跨域接口实现-fetch方式
    /*fetch("/apis/mock/5c27184d5ca2623e27d71021/test/", {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "username=yueban&password=123123"
    })
      .then(result => {
        // console.log(result);
        return result.json();
      })
      .then(data => {
        console.log(data);
      });*/
    // 跨域接口实现-axios方式
    this.$axios
      .post("/apis/mock/5c27184d5ca2623e27d71021/test/", {
        username: "yueban",
        password: "123123"
      })
      .then(data => {
        console.log(data);
      });
  }
};
</script>

<style>
</style>
