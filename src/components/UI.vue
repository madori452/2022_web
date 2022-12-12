<template>
  <div class="section-js">
    <div class="row">
      <p class="title en_font text-center fw-bolder">
        <img class="d-inline-block mx-auto icon-love" src="../assets/home/logo.svg" alt="">
      UI
      </p>
    </div>
    <!-- 電腦swiper -->
    <swiper
      :slidesPerView="4"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
        }"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
     :modules="modules"
     class="d-none d-lg-block mySwiper mt-4"
    >
    <swiper-slide v-for="item in ui" :key="item.blank">
      <div class="card-work w-100">
        <div class="mask"></div>
        <div class="bg-image" >
          <a :href="item.blank" target="_blank">
          <div class="mask en_font">
              See More
            </div>
          </a>
          <div class="rounded-0 card-img-top" :style="{backgroundImage:'url('+require('../assets/work/all/' + item.srcImg)+')'}"></div>
        </div>
        <div class="card-body rounded-0">
          <h5 class="card-title en_font mt-4">{{item.title}}</h5>
          <p class="card-text px-3">{{item.content}}</p>
          <span class="text-primary tag flex-row" v-for="(tags,index) in item.tag" :key="index">{{tags}}</span>
        </div>
      </div>
    </swiper-slide>
    </swiper>

    <!-- 平板swiper -->
    <swiper
      :slidesPerView="2"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
        }"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
    :modules="modules"
      class="d-none d-sm-block d-lg-none mySwiper mt-4"
    >
    <swiper-slide v-for="item in ui" :key="item.blank">
      <div class="card-work w-100">
        <div class="mask"></div>
        <div class="bg-image" >
          <a :href="item.blank" target="_blank">
          <div class="mask en_font">
              See More
            </div>
          </a>
          <div class="rounded-0 card-img-top" :style="{backgroundImage:'url('+require('../assets/work/all/' + item.srcImg)+')'}"></div>
        </div>
        <div class="card-body rounded-0">
          <h5 class="card-title en_font mt-4">{{item.title}}</h5>
          <p class="card-text px-3">{{item.content}}</p>
          <span class="text-primary tag flex-row" v-for="(tags,index) in item.tag" :key="index">{{tags}}</span>
        </div>
      </div>
    </swiper-slide>
    </swiper>

    <!-- 手機swiper -->
    <div class="d-block d-sm-none mySwiper mt-4">
      <div class="card-all" v-for="item in ui" :key="item.blank">
        <div class="card-work w-80 w-sm-100">
          <div class="mask"></div>
          <div class="bg-image" >
            <a :href="item.blank" target="_blank">
            <div class="mask en_font">
                See More
              </div>
            </a>
            <div class="rounded-0 card-img-top" :style="{backgroundImage:'url('+require('../assets/work/all/' + item.srcImg)+')'}"></div>
          </div>
          <div class="card-body rounded-0">
            <h5 class="card-title en_font mt-4">{{item.title}}</h5>
            <p class="card-text px-3">{{item.content}}</p>
            <div class="row mx-auto d-block ms-2">
              <span class="text-primary tag flex-row" v-for="(tags,index) in item.tag" :key="index">{{tags}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'

// import Swiper core and required module
// import required modules
import SwiperCore, {
  Navigation,
  Autoplay
} from 'swiper/core'
SwiperCore.use([Autoplay, Navigation])
export default {
  components: {
    Swiper,
    SwiperSlide

  },
  setup () {
    return {
      modules: [Autoplay],
      ui: [{
        title: 'Pretso 充電樁管理平台',
        content: '充電樁案場監控。掌握當下案場的充電狀況,異常時第一時間了解。',
        srcImg: 'ui01.png',
        blank: 'https://www.behance.net/gallery/156168617/Pretso-Charging-Site-MGT',
        tag: ['Figma']
      }, {
        title: 'Pretso Charging App',
        content: '電動車車主專用 App。快速預約附近充電格，並建立會員制度。',
        srcImg: 'ui02.png',
        blank: 'https://www.behance.net/gallery/156170575/Pretso-Charging-App',
        tag: ['Figma']
      },
      {
        title: '茶癮',
        content: '出門購買手搖飲不會再忘記集點卡，並第一時間掌握最新優惠資訊。',
        srcImg: 'ui03.png',
        blank: 'https://www.behance.net/gallery/158768071/-App',
        tag: ['Sketch']
      }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.section-js{
  background-color: #b9defc4d;
  padding: 100px 0 200px 0;
  position: relative;
  z-index: 0;
}
.title{
  font-size: 40px;
  @include phone{
    font-size: 30px;
  }
}
span.tag{
  padding: 5px 15px;
  border:2px solid $mainColor;
  border-radius: 20px;
  margin-right: 5px;
  font-size: 14px;
  @include phone{
    font-size: 12px;
  }
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
    @include phone{
    margin-right: 0px !important;
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: 50% 50%;
}
h5.card-title {
  @include phone{
    font-size: 18px;
    text-align: center;
  }
}
// -------mobile
.card-work{
  box-shadow: 2px 2px 8px #00000010;
  height: 340px;
  background: #fff;
  @include xl-screen{
    height: 360px;
  }
  @include phone{
    height: 370px;
  }
}
.card-all{
  width: 80%;
  margin: 20px auto;
}
// -------end mobile
.card-work{
  box-shadow: 2px 2px 8px #00000010;
  height: 340px;
  background: #fff;
  @include xl-screen{
    height: 360px;
  }
  @include phone{
    height: 370px;
  }
}
.card-text{
  color: #6a6a6a;
  font-size: 14px;
  @include phone{
    font-size: 13px;
    text-align: left;
  }
}
.bg-image{
  position: relative;
}
.card-img-top{
  height: 200px;
  background-size: cover;
  background-position: 50% 50%;
  @media (max-width:575px){
  }
}
.mask{
  cursor: pointer;
  position: absolute;
  width: 100%;
  background-color: #020202;
  font-size: 24px;
  text-align: center;
  line-height:200px;
  counter-reset: #ddd;
  opacity: 0;
  transition: 0.5s;
}
.bg-image a{
  color: #fff;
  opacity: 0.5;
  text-decoration: none;
}
.mask:hover{
  opacity: 0.8;
}
</style>
