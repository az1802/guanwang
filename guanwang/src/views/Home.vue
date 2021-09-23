<!--
 * @Author: sunj
 * @Date: 2021-09-22 18:09:36
 * @LastEditors: sunj
 * @LastEditTime: 2021-09-23 12:26:00
 * @FilePath: /guanwang/src/views/Home.vue
-->
<template>
  <div class="home">
    <div class="content">
      <div class="content-a">
        <div class="left">
          <p class="text">时来收银</p>
          <p class="text">专注餐饮营销增长</p>
          <a class="btn" href="http://cn.mikecrm.com/88laUuQ" target='_blank'>立即体验</a>
        </div>
        <img src="../assets/pos-a.png" alt="" class="img" />
      </div>
      <div class="content-b">
        <div class="card-wrapper">
          <div class="card-item">
            <h4 class="title">智能点餐</h4>
            <p class="sub-title">构建门店私域流量</p>
            <div class="list">
              <div class="list-item">智能收银系统</div>
              <div class="list-item">小程序扫码点餐</div>
              <div class="list-item">私域流量运营</div>
              <div class="list-item">私域流量运营</div>
            </div>
          </div>
          <div class="card-item">
            <h4 class="title">数据分析</h4>
            <p class="sub-title">帮助门店智慧运营</p>
            <div class="list">
              <div class="list-item">门店经营分析</div>
              <div class="list-item">顾客行为分析</div>
              <div class="list-item">复购消费分析</div>
              <div class="list-item">菜品销量分析</div>
            </div>
          </div>
          <div class="card-item">
            <h4 class="title">精准营销</h4>
            <p class="sub-title">千人千面精准推送</p>
            <div class="list">
              <div class="list-item">精准门店引流</div>
              <div class="list-item">社交裂变增长</div>
              <div class="list-item">唤醒沉睡顾客</div>
              <div class="list-item">促进顾客复购</div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-c">
        <div class="text">
          <p class="title">完整的数字化营销闭环</p>
         <p class="sub-title">用数据全方位指导餐饮经营决策</p>
        </div>
        <img  class="img" src="../assets/content-c.png" alt="">
      </div>
      <div class="content-d">
         <div class="text">
          <p class="title">全自动化智能私域经营</p>
         <p class="sub-title">用数据全方位指导餐饮经营决策</p>
        </div>
        <img class="img" src="../assets/content-d.png" />
      </div>
      <div class="content-e">
        <p class="title">适用多种业态</p>
        <div class="list">
          <div class="list-item" >
            <img class='img' src="../assets/content-e-1.png" alt="">
            <p class="text">自选快餐</p>
          </div>
          <div class="list-item">
            <img class='img' src="../assets/content-e-2.png" alt="">
            <p class="text">面馆</p>
          </div>
          <div class="list-item">
            <img class='img' src="../assets/content-e-3.png" alt="">
            <p class="text">奶茶果汁</p>
          </div>
          <div class="list-item">
            <img class='img' src="../assets/content-e-4.png" alt="">
            <p class="text">轻食沙拉</p>
          </div>
          <div class="list-item">
            <img class='img' src="../assets/content-e-5.png" alt="">
            <p class="text">中式快餐</p>
          </div>
          <div class="list-item">
            <img class='img' src="../assets/content-e-6.png" alt="">
            <p class="text">咖啡</p>
          </div>
          <div class="list-item">
            <img class='img' src="../assets/content-e-7.png" alt="">
            <p class="text">面包甜点</p>
          </div>
          <div class="list-item">
            <img class='img' src="../assets/content-e-8.png" alt="">
            <p class="text">小吃档口</p>
          </div>
        </div>
      </div>
      <div class="content-f">
         <div class="text">
           <p class="title">合作商户</p>
           <p class="sub-title">用涵盖简餐、正餐、火锅、日料、轻食、烧烤、茶饮等各类品类</p>
         </div>
         <div class="list">
           <img class="img" src="../assets/merchant1.png" alt="">
           <img class="img" src="../assets/merchant2.png" alt="">
           <img class="img" src="../assets/merchant3.png" alt="">
           <img class="img" src="../assets/merchant4.png" alt="">
           <img class="img" src="../assets/merchant5.png" alt="">
           <img class="img" src="../assets/merchant6.png" alt="">
           <img class="img" src="../assets/merchant7.png" alt="">
           <img class="img" src="../assets/merchant8.png" alt="">
           <img class="img" src="../assets/merchant9.png" alt="">
           <img class="img" src="../assets/merchant10.png" alt="">
           <img class="img" src="../assets/merchant11.png" alt="">
           <img class="img" src="../assets/merchant12.png" alt="">
           <img class="img" src="../assets/merchant13.png" alt="">
           <img class="img" src="../assets/merchant14.png" alt="">
           <img class="img" src="../assets/merchant15.png" alt="">
         </div>
      </div>
     
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
    
    }
  }
}
</script>
<style lang='less' scoped >
.home {
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
      height: 750px;
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
        top: 20px;
        right: 120px;
        width: 682px;
        height: 731px;
      }
    }
    .content-b {
      height: 364px;
      padding: 0 120px;
      background-color: #f5f6f7;
      box-sizing: border-box;
      .card-wrapper {
        margin-top: -20px;
        display: flex;
        justify-content: space-between;
        .card-item {
          width: 380px;
          height: 260px;
          padding: 32px;
          box-sizing: border-box;
          background-color: white;
          .title {
            height: 25px;
            line-height: 25px;
            font-size: 18px;
            font-weight: bold;
            color: #333;
          }
          .sub-title {
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            color: #666;
            margin: 16px 0 32px 0;
          }
          .list {
            .list-item {
              height: 20px;
              line-height: 20px;
              font-size: 14px;
              color: #333;
              margin-bottom: 8px;
              &:before {
                content: "";
                display: inline-block;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: #ff4b33;
                margin: 0 8px 2px 0;
              }
            }
          }
        }
      }
    }
    .content-c{
      height:614px;
      position: relative;
      background-color: white;
      padding: 0 120px;
      box-sizing: border-box;
      .text{
        position: absolute;
        left:120px;
        top:50%;
        transform: translateY(-50%);
        .title{
          height:50px;
          line-height: 50px;
          font-size:36px;
          color: #333;
          font-weight: bold;
        }
        .sub-title{
          height:25px;
          line-height: 25px;
          font-size:18px;
          color: #333;
          margin-top: 16px;
        }
      } 
      .img{
        position: absolute;
        top:23px;
        right:180px;
        width: 568px;
        height:568px;
      }
    }
    .content-d{
      height:705px;
      position: relative;
      background-color: #F5F6F7;
      padding: 0 120px;
      box-sizing: border-box;
      .text{
        position: absolute;
        right:120px;
        top:128px;
        .title{
          height:50px;
          line-height: 50px;
          font-size:36px;
          color: #333;
          font-weight: bold;
        }
        .sub-title{
          height:25px;
          line-height: 25px;
          font-size:18px;
          color: #333;
          margin-top: 16px;
        }
      }
      .img{
        position: absolute;
        top:283px;
        left:122px;
        width:1194px;
        height:286px;
      }
    }
    .content-e{
      height:912px;
      position: relative;
      background-color:white;
      padding: 0 120px;
      box-sizing: border-box;
      .title{
        position: absolute;
        height: 50px;
        line-height: 50px;
        font-size:36px;
        color:#333;
        font-weight: bold;
        top:128px;
        left:120px;
      }
      .list{
         position: absolute;
         top:242px;
         left:120px;
        .list-item{
          margin-bottom:32px;
          margin-right: 16px;
          display: inline-block;
          .img{
            width:288px;
            height:216px;
          }
          .text{
            height:20px;
            line-height:20px;
            color:#333;
            font-size:14px;
            margin-top: 19px;
          }
        }
      }
    }
    .content-f{
      height:780px;
      position: relative;
      background-color:#F5F6F7;
      padding: 0 120px;
      box-sizing: border-box;
      .text{
        position: absolute;
        top:128px;
        left:120px;
        .title{
          height: 50px;
          line-height: 50px;
          font-size:36px;
          color:#333;
          font-weight: bold;
        }
        .sub-title{
          height: 25px;
          line-height: 25px;
          font-size:18px;
          color:#333;
          margin-top:16px;
        }
      }
      .list{
        position: absolute;
        top:283px;
        left:120px;
        .img{
          width:228px;
          height:112px;
          margin:0 15px 16px 0
        }
      }
    }
    
  }
}
</style>