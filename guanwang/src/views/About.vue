<!--
 * @Author: sunj
 * @Date: 2021-09-22 18:09:36
 * @LastEditors: sunj
 * @LastEditTime: 2021-09-23 12:14:25
 * @FilePath: /guanwang/src/views/About.vue
-->
<template>
  <div class="about">
    <div class="content">
      <div class="content-a">
        <div class="left">
          <p class="text-a">时来</p>
          <p class="text-b">国内首个AI餐饮智能营销增长服务商</p>
          <p class="text-c">时来致力于解放门店商家的双手和大脑，帮助商家用数据更智慧地经营门店，构建私域流量池，提升门店营业额和顾客复购率</p>
        </div>
        <img src="../assets/about-content-a.png" alt="" class="img" />
      </div>
      <div class="content-b">
        <div class="left">
          <p class="text-a">业务覆盖</p>
          <p class="text-b">市场持续扩张中，在全国6个城市设有分公司</p>
        </div>
        <img src="../assets/about-content-b.png" alt="" class="img" />
      </div>
      <div class="content-c">
        <div class="left">
          <p class="text-a">业务覆盖</p>
        </div>
        <div class="list">
          <img class="img" src="../assets/about-content-c-1.png" alt="">
          <img class="img" src="../assets/about-content-c-2.png" alt="">
          <img class="img" src="../assets/about-content-c-3.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang='less' scoped >
.about {
  width: 100%;
  .content {
    width: 1440px;
    margin: 0 auto;
    .content-a {
      position: relative;
      height: 520px;
      padding: 0 120px;
      background-color: #f5f6f7;
      box-sizing: border-box;
      .left {
        position: absolute;
        top: 128px;
        left: 120px;
        .text-a{
          color: #333;
          font-size: 56px;
          line-height: 84px;
          font-weight: bold;
        }
        .text-b {
          color: #333;
          font-size: 36px;
          line-height: 50px;
          margin-top:16px;
        }
        .text-c{
          color: #333;
          font-size: 18px;
          line-height: 25px;
          margin-top:64px;
          width:609px;
          display: inline-block;
        }
      }
      .img {
        position: absolute;
        top: 126px;
        right: 118px;
        width: 250px;
        height: 250px;
      }
    }
    .content-b {
      height: 996px;
      padding: 0 120px;
      background-color: white;
      box-sizing: border-box;
      position: relative;
      .left {
        position: absolute;
        z-index: 100;
        top: 128px;
        left: 120px;
        .text-a {
          color: #333;
          font-size: 36px;
          line-height: 50px;
          font-weight: bold;
        }
        .text-b {
          color: #333;
          font-size: 18px;
          line-height: 25px;
          margin-top:16px
        }
      }
      .img {
        position: absolute;
        top: 251px;
        left: 120px;
        width: 1200px;
        height: 615px;
      }
    }
    .content-c {
      height: 562px;
      background-color: #f5f6f7;
      box-sizing: border-box;
      position: relative;
      .left{
        position: absolute;
        top: 128px;
        left:120px;
        .text-a{
          font-size: 36px;
          font-weight: bold;
          line-height: 50px;
        }
      }
      .list{
        position: absolute;
        top: 208px;
        left:120px;
        width:1200px;
        display: flex;
        justify-content: space-between;
        .img{
          width: 378px;
          height:142px;
        }
      }
    }
  }
}
</style>