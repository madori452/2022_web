<template>
  <div class="section section-about">
    <div class="container">
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
