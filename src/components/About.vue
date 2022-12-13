<template>
  <div class="section section-about">
    <div class="container" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-anchor-placement="center-bottom">
      <div class="row">
        <div class="col-md-3 offset-lg-1 d-flex align-items-center">
          <img src="../assets/Me.png" class="img-fluid me px-lg-3">
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
             具備四年以上的前端設計資歷，並有前端技術相互合作的經驗，將設計思維與前端程式交合，優化使用者體驗。
          </p>
          <hr/>
          <p class="text-left experience-content mt-4 profile-content-color">
           職場過程中，透過每一段學習經歷及反饋，從網頁設計，涉獵到前端程式的領域中，深知要持續學習並精進自身的技能，才能在科技產業中與時俱進。
           在轉職期間，為有效的強化自身前端工程師的技術，學習期間透過線上平台及課程小組討論等方式自我學習，培養獨立思辨並強化前端程式編譯能力，期盼能將技術為基底的「程式」及視覺感官為框架的「設計」融合，創造出富有美感與功能兼具的作品。
          </p>
          <div class="row">
            <div class="col-lg-12 px-0">
              <img src="../assets/emailsvg.svg" class="ms-2">
              <span class="align-bottom info">madori452@gmail.com</span>

              <img src="../assets/github.svg" class="ms-3">
              <a href="https://github.com/madori452?tab=repositories" target="_blank"><span class="align-bottom info ms-2 ms-sm-0">@madori452</span></a>

              <img src="../assets/linked.svg" class="ms-2 ms-sm-3">
              <a href="https://www.linkedin.com/in/tracy-tung-54bb60123/" target="_blank"><span class="align-bottom info">Tracy Tung</span></a>
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
    font-size: 15px;
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
