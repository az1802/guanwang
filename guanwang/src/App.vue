<!--
 * @Author: sunj
 * @Date: 2021-09-22 18:09:36
 * @LastEditors: sunj
 * @LastEditTime: 2021-09-23 12:17:59
 * @FilePath: /guanwang/src/App.vue
-->

<template>
  <div id="app">
    <div class="header-wrapper">
      <div class="content">
        <img src="./assets/logo-name.png" alt="" class='logo-name'>
        <div class="tabs">
          <router-link class='tab-item' active-class='active' to='/'>首页</router-link>
          <router-link class='tab-item'  active-class='active' to='/product'>产品</router-link>
          <router-link class='tab-item'  active-class='active' to='/about'>关于我们</router-link>
        </div>
      </div>
    </div>
    <router-view />
     <div class="footer">
        <p class="name">深圳智易科技有限公司</p>
        <p class="en-name">Made by Zhiyi with from Shenzhen.</p>
        <p class="text">Copyright All Rights Reserved. Zhiyi Tech© 2018 |粤ICP备18038707号</p>
      </div>
  </div>
</template>
<script >
export default{
  mounted(){
    console.log(this)
  }
}
</script>
<style lang='less'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  background-color: #999;
}
.header-wrapper {
  width: 100%;
  .content {
    width: 1440px;
    background: white;
    height: 77px;
    padding : 0 120px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .logo-name{
      width: 85px;
      height:40px;
    }
    .tabs{
      .tab-item{
        color : #666;
        font-size:14px;
        margin-left:40px;
        &.active{
          font-weight:bold;
          color:black;
          text-decoration: unset;
        }
      }
    }
  }
}
.footer{
  margin: 0 auto;
  width:1440px;
  height:84px;
  position: relative;
  background-color:white;
  padding: 0 120px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .name,.en-name,.text{
    font-size:14px;
    color:#333
  }
}
</style>
