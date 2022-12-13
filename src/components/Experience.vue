<template>
  <div class="section section-experience">
    <div class="container-fluid" data-aos="fade-up" data-aos-duration="800" data-aos-once="true" data-aos-anchor-placement="center-bottom">
      <div class="row">
          <p class="title en_font text-center fw-bolder">
            <img class="d-inline-block mx-auto icon-love" src="../assets/home/logo.svg" alt="">
            Experience
          </p>
      </div>
      <div class="row mt-4">
        <div class="timeline">
          <div class="pulse-box">
            <svg class="pulse-svg" width="50px" height="50px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <circle class="circle first-circle" fill="#fff" cx="19" cy="19" r="10"></circle>
              <circle class="circle second-circle" fill="#FF6347" cx="18.5" cy="19" r="10"></circle>
              <circle class="circle" fill="#fff" cx="18" cy="17" r="7"></circle>
            </svg>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 mt-4 ms-md-3">
          <p class="h5 en_font fw-bolder due">2022 04-11 前端學習</p>
          <p class="mt-2 content mb-1">Bootstrap 5</p>
          <p class="content mb-1">JavaScript 基礎語法</p>
          <p class="content mb-1">JavaScript ES6(學習中)</p>
          <p class="content mb-1">Vue 3</p>
        </div>
        <div class="col-md-3 mt-4 ms-md-3">
          <p class="h5 en_font fw-bolder due">2020-2022 ECS 精英電腦 UI Designer & 前端設計</p>
          <p class="h6 mt-1 en_font">Pretso 品牌官網</p>
          <p class="mt-2 content mb-1">
            公司進行新品牌「Pretso」官網規劃以及前端設計。網站使用SVG動畫互動，並且以創新故事流的方式呈現案例說明。
          </p>
          <p class="h6 mt-4 en_font">充電樁管理平台</p>
          <p class="mt-2 content mb-1">
            使用Figma進行協同設計，建立使用者情境分析以及Design Guideline設計。
          </p>
          <p class="h6 mt-4 en_font">國光客運智慧車載管理系統</p>
          <p class="mt-2 content mb-1">
            團隊工程師進行前端開發。使用Azure Devops 協同合作
          </p>
        </div>
        <div class="col-md-3 mt-4 ms-md-3">
          <p class="h5 en_font fw-bolder due">2018-2019 集智顧問公司 UI Designer & 前端設計</p>
          <p class="h6 mt-1 en_font">官網 & Logo CIS設計</p>
          <p class="mt-2 content mb-1">
            為公司進行官網設計以及Logo CIS 設計。
            以前端框架「Bootstrap」為基準去建立官網。
          </p>
          <p class="h6 mt-4 en_font">快速設計開發</p>
          <p class="mt-2 content mb-1">
            為因應公司快速提案，我學習了使用Sketch Component功能來快速產出，來加速設計產出。
          </p>
        </div>
        <div class="col-md-3 mt-4 ms-md-3">
          <p class="h5 en_font fw-bolder due">2017-2018 亞果元素 網頁前端設計</p>
          <p class="h6 mt-1 en_font">接觸前端領域</p>
          <p class="mt-2 content mb-1">
            負責商品網頁的前端製作，在此時期大量使用Bootstrap。
            並學習使用zeplin和網頁設計師溝通。
          </p>
          <p class="h6 mt-4 en_font">參與App設計</p>
          <p class="mt-2 content mb-1">
            參與App iKlips(上架於App Store)製作與討論，初次使用Sketch進行協同設計。
          </p>
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

.section-experience{
  background-color: #F7F9FC;
}
p.due{
  @include pad{
    font-size: 18px;
  }
}
// ---------------circle
@mixin circle($circleSize) {
  width: $circleSize;
  height: $circleSize;
  border-radius: $circleSize/2;
}

/* pulse in SVG */
svg.pulse-svg {
  overflow: visible;
  position: absolute;
  top: -20px;
  left: 66px;
  .first-circle {
    fill: rgb(65, 103, 255);
    transform: scale(0.5);
    transform-origin: center center;
    animation: pulse-me 2s linear infinite;
  }
  .second-circle {
    @extend .first-circle;
    animation-delay: 0.5s;
  }
}

/* pulse in CSS */
.pulse-css {
  @include circle(30px);
  background: rgb(65, 103, 255);;
  position: relative;
  &:before,
  &:after {
    content: "";
    @include circle(20px);
    background-color: rgba(65, 103, 255, 0.794);;
    position: absolute;
    top: 0px;
    left: -2px;
    margin: auto;
    transform: scale(0.5);
    transform-origin: center center;
    animation: pulse-me 1.5s linear infinite;
  }
  &:after {
    animation-delay: 1s;
  }
}

@keyframes pulse-me {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
  70% {
    opacity: 0.1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}
// ---------------circle

.timeline{
  position: relative;
  width: 100%;
  height: 2px;
  background-color: #5383ff38;
  @include phone{
    display: none;
  }
}
p.content{
  color: $textContent;
  @include pad{
    font-size: 14px;
  }
}
</style>
