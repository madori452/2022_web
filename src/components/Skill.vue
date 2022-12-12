<template>
  <div class="section section-skill">
    <div class="container">
      <div class="row">
          <p class="title en_font text-center fw-bolder">
            <img class="d-inline-block mx-auto icon-love" src="../assets/home/logo.svg" alt="">
            Skills
          </p>
      </div>
      <div class="row mt-4">
        <div class="col-md-3">
          <div class="card rounded-0 p-1 me-1">
            <div class="row">
              <img class="d-block mx-auto skill-icon mt-4" src="../assets/JS.svg">
              <p class="skill-title en_font text-center fw-bolder mt-2">JavaScript</p>
            </div>
            <div class="row skill-content px-3">
              <p>熟悉 JavaScript 基礎語法</p>
              <p>學習ES6程式語法</p>
              <p>AJAX/JSON串接第三方API</p>
              <p>使用jQuery做出網頁互動效果</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card rounded-0 p-1 me-1">
            <div class="row">
              <img class="d-block mx-auto skill-icon mt-4" src="../assets/Vue.svg">
              <p class="skill-title en_font text-center fw-bolder mt-2">Vue</p>
            </div>
            <div class="row skill-content px-3">
              <p>使用Vue-Cli開發專案</p>
              <p>使用Vue-Router套件管理專案路由</p>
              <p>使用Components管理員件</p>
              <p>加入Vue第三方套件(Vuetify、vue-loading-overlay)</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card rounded-0 p-1 me-1">
            <div class="row">
              <img class="d-block mx-auto skill-icon mt-4" src="../assets/Web.svg">
              <p class="skill-title en_font text-center fw-bolder mt-2">Web Layout</p>
            </div>
            <div class="row skill-content px-3">
              <p>HTML5 / CSS3</p>
              <p>Bootstrap 5</p>
              <p>SVG 動畫</p>
              <p>使用GitHub上傳網站</p>
              <p>RWD 手刻網頁版面</p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card rounded-0 p-1 me-1">
            <div class="row">
              <img class="d-block mx-auto skill-icon mt-4" src="../assets/Design.svg">
              <p class="skill-title en_font text-center fw-bolder mt-2">Design</p>
            </div>
            <div class="row skill-content px-3">
              <p>使用Figma、Sketch設計UI介面</p>
              <p>使用AI、PS進行平面設計</p>
              <p>使用Zeplin跟工程師進行協同合作</p>
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
.card{
  height: 420px;
  box-shadow: 2px 2px 10px rgba(205, 205, 205, 0.413);
  @include phone{
    height: 360px;
    margin-bottom: 20px;
  }
}
.skill-title{
  font-size: 28px;
  color:$textTitle;
   @include pad-max{
    font-size: 22px;
   }
}
.skill-content{
  color: $textContent;
   @include pad-max{
    font-size: 14px;
   }
}
.section-skill{
  background-color: #b9defc4d;
}
.section .container{
  @include pad-max{
    max-width: 800px;
  }
}
.skill-icon{
  width: 100px;
  @include phone{
    width: 80px;
  }
}

</style>
