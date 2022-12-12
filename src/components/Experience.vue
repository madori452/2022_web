<template>
  <div class="section section-experience">
    <div class="container-fluid">

      <div class="row">
          <p class="title en_font text-center fw-bolder">
            <img class="d-inline-block mx-auto icon-love" src="../assets/home/logo.svg" alt="">
            Experience
          </p>
      </div>
      <div class="row mt-4">
        <div class="timeline">
          <div class="pulsating-circle"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 mt-4 ms-md-3">
          <p class="h5 en_font fw-bolder due">2022 04-11 前端學習</p>
          <p class="mt-2 content mb-1">Bootstrap 5 網頁切版整合術</p>
          <p class="content mb-1">JavaScript 入門篇 - 學徒的試煉</p>
          <p class="content mb-1">JS 必修篇最終關卡任務</p>
          <p class="content mb-1">JavaScript 核心篇(學習中)</p>
          <p class="content mb-1">Vue 3 實戰影音課程</p>
        </div>
        <div class="col-md-3 mt-4 ms-md-3">
          <p class="h5 en_font fw-bolder due">2020-2022 ECS 精英電腦 UI Designer & 前端設計</p>
          <p class="h6 mt-1 en_font">Pretso 品牌官網</p>
          <p class="mt-2 content mb-1">
            公司進行新品牌「Pretso」官網規劃以及前端設計。網站使用SVG動畫互動，並且以創新的故事流的方式呈現案例說明。
          </p>
          <p class="h6 mt-4 en_font">充電樁管理平台</p>
          <p class="mt-2 content mb-1">
            使用Figma進行協同設計，建立使用者情境分析以及Design Guideline設計。
          </p>
          <p class="h6 mt-4 en_font">國光客運智慧車載管理系統</p>
          <p class="mt-2 content mb-1">
            團隊工程師進行前端開發。使用Azure Devops  協同合作
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
            負責商品網頁的前端製作，在此時期大烈使用Bootstrap。
            並學習使用zeplin和設計師溝通。
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
.pulsating-circle {
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 20px;
  height: 20px;

  &:before {
    content: '';
    position: relative;
    display: block;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: 45px;
    background-color: $mainColor;
    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(.33);
    -webkit-transform:scale(.33);

  }
  80%, 100% {
    opacity: 0;
  }
}

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
