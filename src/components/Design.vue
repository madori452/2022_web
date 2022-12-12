<template>

  <div class="Design">
    <div class="container-fluid px-0" data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="600">
      <div class="row">
        <p class="title en_font text-center fw-bolder">
          <img class="d-inline-block mx-auto icon-love" src="../assets/home/logo.svg" alt="">
        Design
        </p>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 px-0">
          <div class="img-work img-work01">
            <div class="mask-work">
              <p class="title en_font">蛋糕卷設計</p>
              <p class="content">幫店家設計的專屬兌換卷</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 px-0">
          <div class="img-work img-work02">
            <div class="mask-work">
              <p class="title en_font">資策會海報設計</p>
              <p class="content">第47屆資策會發表會邀請海報設計</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 px-0">
          <div class="img-work img-work03">
            <div class="mask-work">
              <p class="title en_font">拖延症小卡設計</p>
              <p class="content">畢業製作設計，拖延指數小卡片設計</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 px-0">
          <div class="img-work img-work-04 img-work04">
            <div class="mask-work mask-work04">
              <p class="title en_font">茶癮名片設計</p>
              <p class="content">茶類飲品茶類飲品名片設計</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 px-0">
          <div class="img-work img-work-05 img-work05">
            <div class="mask-work  mask-work05">
              <p class="title en_font">自由創作-擁抱</p>
              <p class="content">愛不應該有限制，擁抱不同的愛</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
 @import "../assets/scss/main.scss";
.Design{
  padding: 100px 0;
  background-color: #ededed45;
  @include phone{
    padding: 50px 0;
  }
}

.img-work{
  position: relative;
  height: 400px;
  background-size: cover;
  background-position: 50% 50%;
  cursor: pointer;
}
.title{
  font-size: 40px;
  @include phone{
    font-size: 30px;
  }
}
.img-work-04,.img-work-05{
  height: 550px;
  @include pad {
    height: 400px;
  }
}
.img-work01{
  background-image: url('../assets/work/all/pic01.png');
}
.img-work02{
  background-image: url('../assets/work/all/pic02.png');
}
.img-work03{
  background-image: url('../assets/work/all/pic03.png');
}
.img-work04{
  background-image: url('../assets/work/all/pic04.png');
}
.img-work05{
  background-image: url('../assets/work/all/pic05.png');
}
.mask-work{
  position: absolute;
  width: 100%;
  height: 400px;
  background-color: #1b1b1b9d;
  opacity: 0;
  transition: 0.5s;
}
.mask-work04,.mask-work05{
  height: 550px;
  @include pad{
    height: 400px;
  }
}
.mask-work p.title{
  font-size: 24px;
  text-align: center;
  margin-top:150px;
  color: #fff;
}
.mask-work p.content{
  font-size: 16px;
  text-align: center;
  line-height: 0px;
  color: #fff;
}
.mask-work04 p.title,.mask-work05 p.title{
  margin-top:250px;
  @include pad {
  margin-top:150px;
  }
}

.mask-work:hover{
    opacity: 1;
}
</style>
