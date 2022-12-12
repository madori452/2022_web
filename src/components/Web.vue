<template>
  <div class="section-web">
    <div class="row">
      <p class="title en_font text-center fw-bolder">
        <img class="d-inline-block mx-auto icon-love" src="../assets/home/logo.svg" alt="">
      Web
      </p>
    </div>
    <!-- 電腦swiper -->
    <swiper
      :slidesPerView="4"
      :spaceBetween="30"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
    :modules="modules"
      class="d-none d-lg-block mySwiper mt-4"
    >
    <swiper-slide v-for="item in web" :key="item.blank">
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
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false,
      }"
    :modules="modules"
      class="d-none d-sm-block d-lg-none mySwiper mt-4"
    >
    <swiper-slide v-for="item in web" :key="item.blank">
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
      <div class="card-all" v-for="item in web" :key="item.blank">
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

      web: [
        {
          title: 'Pretso 官網',
          content: '品牌網站，使用BS4和jQuery。身兼前端程式開發及協同設計。',
          srcImg: 'web03.png',
          blank: 'https://madori452.github.io/2022_web/dist/#/works/Pretso',
          tag: ['BS4', 'SVG', 'jQuery']
        },

        {
          title: 'OMNIA Q1',
          content: '使用BS4進行網站前端撰寫，並且用Zeplin跟設計師進行溝通。',
          srcImg: 'web04.png',
          blank: 'https://www.adamelements.com/www/q1.html',
          tag: ['BS4', 'Zeplin']

        },
        {
          title: 'Scented Candel電商網站',
          content: 'Vue 3開發的電商網站購物前台。使用Vue-Cli進行專案管理。',
          srcImg: 'web01.png',
          blank: 'https://madori452.github.io/Vue_shop/dist/#/user/index',
          tag: ['Vue CLI', 'BS5', 'SCSS']
        },
        {
          title: 'Scented Candel後台網站',
          content: 'Vue 3開發的電商網站商品後台。使用Vue-Cli進行專案管理。',
          srcImg: 'web02.png',
          blank: 'https://madori452.github.io/Vue_shop/dist/#/login',
          tag: ['Vue CLI', 'BS5', 'SCSS']
        },
        {
          title: 'FLEET LensPro',
          content: '使用BS4進行網站前端撰寫，並且用Zeplin跟設計師進行溝通。',
          srcImg: 'web05.png',
          blank: 'https://www.adamelements.com/www/fleet-lens.html',
          tag: ['BS4', 'Zeplin']
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.section-web{
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
