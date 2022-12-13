<template>
  <div class="section section-about">
    <div class="container" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-anchor-placement="center-bottom">
      <div class="row">
        <div class="col-md-3 offset-lg-1">
          <img src="../assets/Me.png" class="img-fluid me">
        </div>
        <div class="col-md-8 mt-4">
          <div class="row">
              <p class="title en_font text-left fw-bolder">
                <img class="d-inline-block me-auto icon-love" src="../assets/home/logo.svg" alt="">
                About Me
              </p>
          </div>
          <p class="text-left job-title">網頁前端程式 | 網頁前端設計 | 介面設計</p>
          <p class="content text-left">
              有四年以上的前端設計經驗，曾經在不同產業有設計以及前端協同合作的經歷。<br/>
              因為想學習更多前端知識，目前正在自我學習前端語法，希望能將「程式」以及「設計」結合，設計出更多有趣的作品。
          </p>
          <hr/>
          <p class="text-left experience-content mt-4 profile-content-color">
            每段經歷都是一段學習與反饋。
            從一開始純做網頁設計，到現在慢慢踏入前端的領域。
            每段工作經歷對我來說都是珍貴的體驗。
            在精英電腦的工作經驗，更是我想踏入前端領域的敲門磚。
            擔任前端設計師的我同時會接觸設計以及程式這兩塊領域。
            所以我在2022年中我做了一個決定，希望能轉職成為前端工程師。
            學習更多前端知識，並且結合自身的設計經驗，創作更有趣的作品。
          </p>
          <div class="row">
            <div class="col-lg-12 px-0">
              <img src="../assets/emailsvg.svg" class="ms-2">
              <span class="align-bottom info">madori452@gmail.com</span>

              <img src="../assets/github.svg" class="ms-3">
              <span class="align-bottom info">@madori452</span>

              <img src="../assets/linked.svg" class="ms-3">
              <span class="align-bottom info">Tracy Tung</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
 @import "../assets/scss/main.scss";
.title{
  font-size: 40px;
  @include phone{
    font-size: 30px;
  }
}
.job-title{
  color:$mainColor;
}
.content{
  color: $textPrimary;
  @include phone{
    font-size: 15px;
  }
}
.section-about{
  background-color: #F7F9FC;
}
span.info{
  font-weight: 900;
  color:$mainColor;
  @include phone{
    font-size: 12px;
  }
}
img.me{
  @include phone{
    width: 60%;
    margin: auto;
    display: block;
  }
}
</style>
