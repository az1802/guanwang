<!--
 * @Author: sunj
 * @Date: 2021-09-22 18:09:36
 * @LastEditors: sunj
 * @LastEditTime: 2021-09-23 12:27:34
 * @FilePath: /guanwang/src/views/Product.vue
-->
<template>
  <div class="product">
    <div class="content">
      <div class="content-a">
        <div class="left">
          <p class="text">新一代</p>
          <p class="text">智能营销系统</p>
          <a class="btn" href="http://cn.mikecrm.com/88laUuQ" target='_blank'>立即体验</a>
        </div>
        <img src="../assets/product-content-a.png" alt="" class="img" />
        <div class="card-list">
          <div class="card-item">
            <div class="title">时来AI营销大脑</div>
            <div class="text">内置AI自动化营销引擎，大数据驱动门店营收增涨</div>
          </div>
          <div class="card-item">
            <div class="title">时来AI营销大脑</div>
            <div class="text">内置AI自动化营销引擎，大数据驱动门店营收增涨</div>
          </div>
          <div class="card-item">
            <div class="title">时来AI营销大脑</div>
            <div class="text">内置AI自动化营销引擎，大数据驱动门店营收增涨</div>
          </div>
        </div>
      </div>
      <div class="content-b">
        <div class="left">
          <p class="text">懂营销的</p>
          <p class="text">智能扫码点餐</p>
          <a class="btn" href="http://cn.mikecrm.com/88laUuQ" target='_blank'>立即体验</a>
        </div>
        <img src="../assets/product-content-b.png" alt="" class="img" />
      </div>
      <div class="content-c"></div>
      <div class="content-d">
        <div class="right">
          <p class="text">新一代</p>
          <p class="text">智能营销系统</p>
          <a class="btn" href="http://cn.mikecrm.com/88laUuQ" target='_blank'>立即体验</a>
        </div>
        <img src="../assets/product-content-d.png" alt="" class="img" />
        <div class="card-list">
          <div class="card-item">
            <div class="title">全场景小程序点餐</div>
            <div class="text">提供堂食、外带、自提的全消费场景点餐服务，大幅度降低门店人力成本</div>
          </div>
          <div class="card-item">
            <div class="title">自动化营销策略</div>
            <div class="text">基于大数据自动化调整营销策略，让营销更智能、更省心</div>
          </div>
          <div class="card-item">
            <div class="title">构建私域流量池</div>
            <div class="text">扫码即会员，帮助门店构建私域流量池</div>
          </div>
        </div>
      </div>
      <div class="content-e">
        <p class="title">丰富的营销玩法机制</p>
        <div class="list">
          <div class="list-item">
            <div class="text">
              <p class="cnt">返现红包</p>
              <p class="sub-title">返现红包会在顾客点餐付款后自动获得，多次积累后可提现或抵现使用</p>
            </div>
            <img class="img" src="../assets/product-content-e-1.png" alt="" />
          </div>
          <div class="list-item">
            <div class="text">
              <p class="cnt">特惠券包</p>
              <p class="sub-title">通过AI算法设计的特惠券包，可锁住顾客多次复购</p>
            </div>
            <img class="img" src="../assets/product-content-e-2.png" alt="" />
          </div>
          <div class="list-item">
            <div class="text">
              <p class="cnt">拉新裂变</p>
              <p class="sub-title">顾客可通过邀请好友到店消费获得佣金奖励，形成老带新的高效引流</p>
            </div>
            <img class="img" src="../assets/product-content-e-3.png" alt="" />
          </div>
          <div class="list-item">
            <div class="text">
              <p class="cnt">超值饭票</p>
              <p class="sub-title">饭票可用于优惠支付订单，用大额折扣诱惑顾客高频到店消费</p>
            </div>
            <img class="img" src="../assets/product-content-e-4.png" alt="" />
          </div>
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
.product {
  width: 100%;
  .btn {
    margin-top: 64px;
    background-color: #ff4b33;
    display: inline-block;
    color: white;
    font-size: 18px;
    padding: 0 34px;
    height: 58px;
    line-height: 58px;
    border-radius: 29px;
  }
  .content {
    width: 1440px;
    margin: 0 auto;
    .content-a {
      position: relative;
      height: 832px;
      padding: 0 120px;
      background-color: #f5f6f7;
      box-sizing: border-box;
      .left {
        position: absolute;
        top: 128px;
        left: 120px;
        .text {
          color: #333;
          font-size: 56px;
          line-height: 84px;
          font-weight: bold;
        }
      }
      .img {
        position: absolute;
        top: 14px;
        right: 227px;
        width: 463px;
        height: 618px;
      }
      .card-list {
        position: absolute;
        bottom: 128px;
        right: left;
        background-color: white;

        .card-item {
          display: inline-block;
          width: 300px;
          height: 152px;
          padding: 32px 0 0px 32px;
          box-sizing: border-box;
          .title {
            color: #333;
            font-size: 18px;
            height: 25px;
            line-height: 25px;
            font-weight: bold;
          }
          .text {
            width: 236px;
            margin-top: 16px;
            display: inline-block;
            color: #333;
            line-height: 20px;
            font-size: 14px;
          }
        }
      }
    }
    .content-b {
      height: 663px;
      padding: 0 120px;
      background-color: white;
      box-sizing: border-box;
      position: relative;
      .left {
        position: absolute;
        z-index: 100;
        top: 128px;
        left: 120px;
        .text {
          color: #333;
          font-size: 56px;
          line-height: 84px;
          font-weight: bold;
        }
      }
      .img {
        position: absolute;
        top: 0px;
        left: 120px;
        width: 1200px;
        height: 663px;
      }
    }
    .content-c {
      height: 126px;
      background-color: #f5f6f7;
      box-sizing: border-box;
    }
    .content-d {
      height: 882px;
      position: relative;
      background-color: white;
      padding: 0 120px;
      box-sizing: border-box;
      overflow: visible;
      .right {
        position: absolute;
        top: 128px;
        right: 120px;
        .text {
          color: #333;
          font-size: 56px;
          line-height: 84px;
          font-weight: bold;
        }
      }
      .img {
        position: absolute;
        top: 120px;
        left: 128px;
        width: 535px;
        height: 754px;
      }
      .card-list {
        position: absolute;
        top: 803px;
        left: 120px;
        background-color: transparent;
        z-index: 100;
        .card-item {
          display: inline-block;
          background-color: white;
          margin-right: 32px;
          width: 379px;
          height: 145px;
          padding: 32px 0 0px 32px;
          box-sizing: border-box;
          .title {
            color: #333;
            font-size: 18px;
            height: 25px;
            line-height: 25px;
            font-weight: bold;
          }
          .text {
            width: 314px;
            margin-top: 16px;
            display: inline-block;
            color: #333;
            line-height: 20px;
            font-size: 14px;
          }
        }
      }
    }
    .content-e {
      height: 1151px;
      position: relative;
      background-color: #f5f6f7;
      padding: 0 120px;
      box-sizing: border-box;
      .title {
        position: absolute;
        height: 50px;
        line-height: 50px;
        font-size: 36px;
        color: #333;
        font-weight: bold;
        top: 194px;
        left: 120px;
      }
      .list {
        position: absolute;
        top: 308px;
        left: 120px;
        .list-item {
          width:288px;
          height:631px; 
          margin-right: 16px;
          display: inline-block;
          box-sizing: border-box;
          padding:32px 16px 0 16px;
          background-color: white;
          .text {
            .cnt{
              height: 25px;
              line-height: 25px;
              color: #333;
              font-size: 18px;
              font-weight: bold;
            }
            .sub-title{
              height:60px;
              line-height: 20px;
              color: #333;
              font-size: 14px;
              margin-top:16px;
            }
          }
          .img {
            margin-top: 12px;
            width: 256px;
            height: 467px;
          }
         
        }
      }
    }
   
  }
}
</style>