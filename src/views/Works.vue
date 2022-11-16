<template>
<div id="work">
  <div class="web">
    <div class="container" >
      <div  data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="600">
        <p class="h3 en_font text-center">- Web -</p>
        <div class="row mt-4 d-flex justify-content-center">
          <div class="col-lg-4 mt-4" v-for="item in web" :key="item.blank">
            <div class="card card-work mx-auto">
              <div class="mask"></div>
              <div class="bg-image" >
                <a :href="item.blank" target="_blank">
                <div class="mask en_font">
                    see more
                  </div>
                </a>
                <img :src="require('../assets/work/all/' + item.srcImg)"  class="card-img-top" >

              </div>
              <div class="card-body">
                <h5 class="card-title en_font">{{item.title}}</h5>
                <p class="card-text">{{item.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="UI">
    <div class="container">
      <div  data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="600">
        <p class="h3 en_font text-center">- UI -</p>
        <div class="row mt-4 d-flex justify-content-center">
          <div class="col-lg-4 mt-2" v-for="item in ui" :key="item.blank">
            <div class="card card-work mx-auto">
              <div class="mask"></div>
              <div class="bg-image" >
                <a :href="item.blank" target="_blank">
                <div class="mask en_font">
                    see more
                  </div>
                </a>
                <img :src="require('../assets/work/all/' + item.srcImg)"  class="card-img-top" >

              </div>
              <div class="card-body">
                <h5 class="card-title en_font">{{item.title}}</h5>
                <p class="card-text">{{item.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="JS">
    <div class="container">
      <div  data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="600">
        <p class="h3 en_font text-center">- Vanilla JS -</p>
        <div class="row mt-4 d-flex justify-content-center">
          <div class="col-lg-4 mt-2" v-for="item in js" :key="item.blank">
            <div class="card card-work mx-auto">
              <div class="mask"></div>
              <div class="bg-image" >
                <a :href="item.blank" target="_blank">
                <div class="mask en_font">
                    see more
                  </div>
                </a>
                <img :src="require('../assets/work/all/' + item.srcImg)"  class="card-img-top" >

              </div>
              <div class="card-body">
                <h5 class="card-title en_font">{{item.title}}</h5>
                <p class="card-text">{{item.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="Design">
    <div class="container-fluid px-0" data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="600">
      <p class="h3 en_font text-center">- Design -</p>
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
  <Footer></Footer>

</div>

</template>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
.banner{
  height: 600px;
  background-image: url('../assets/work/portfolio_bg02.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  @include xl-screen{
    height: 400px;
  }
  @include pad{
    height: 500px;
  }
}
.web{
  padding: 100px 0;
  background-color: #dddddd29;
  @include phone{
    padding: 50px 0;
  }
}
.card{
  position: relative;
  box-shadow: 2px 2px 8px #00000010
}
.card-work{
  max-width: 400px;
  height: 320px;
  margin-top: 20px;
}
.card-text{
  color: #6a6a6a;
  font-size: 14px;
}
.bg-image{
  position: relative;
}
.card-img-top{
  height: 200px;
}
.mask{
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 200px;
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
.UI{
  padding: 100px 0;
  background-color: #ededed45;
  @include phone{
    padding: 50px 0;
  }
}
.JS{
 padding: 100px 0 ;
 background-color: #fff;
  @include phone{
    padding: 50px 0;
  }
}
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
.img-work-04,.img-work-05{
  height: 550px;
  @include phone {
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
  @include phone {
  margin-top:150px;
  }
}

.mask-work:hover{
    opacity: 1;
}
</style>

<script>
import Footer from '../components/Footer.vue'

export default {
  components: {
    Footer
  },
  data () {
    return {
      web: [{
        title: 'Scented Candel電商網站',
        content: 'Vue 3開發的電商網站前台。使用Vue-Cli 進行專案管理。',
        srcImg: 'web01.png',
        blank: 'https://madori452.github.io/Vue_shop/dist/#/user/index'
      },
      {
        title: 'Scented Candel後台網站',
        content: 'Vue 3開發的電商網站前台。使用Vue-Cli 進行專案管理。',
        srcImg: 'web02.png',
        blank: 'https://madori452.github.io/Vue_shop/dist/#/login'
      },
      {
        title: 'Pretso 官網',
        content: 'SVG互動網站，使用BS4框架以及jQuery。擔任網頁前端程式撰寫以及協同設計',
        srcImg: 'web03.png',
        blank: 'https://madori452.github.io/2022_web/dist/#/works/Pretso'
      },
      {
        title: 'OMNIA Q1',
        content: '使用BS4進行產品網站前端設計，並且運用Zeplin跟設計師進行溝通',
        srcImg: 'web04.png',
        blank: 'https://www.adamelements.com/www/q1.html'
      },
      {
        title: 'FLEET LensPro',
        content: '使用BS4進行產品網站前端設計，並且運用Zeplin跟設計師進行溝通',
        srcImg: 'web05.png',
        blank: 'https://www.adamelements.com/www/fleet-lens.html'
      }
      ],
      ui: [{
        title: 'Pretso 充電樁管理平台',
        content: '充電樁管理案場監控。掌握當下案場的充電狀況,發生異常時第一時間初步了解。並掌握案場整體裝備健康度，以便後續維修保養。',
        srcImg: 'ui01.png',
        blank: 'https://www.behance.net/gallery/156168617/Pretso-Charging-Site-MGT'
      }, {
        title: 'Pretso Charging App',
        content: '快速預約附近充電格，藉由結合優惠活動以及會員制度，刺激消費並培養新的消費流。。',
        srcImg: 'ui02.png',
        blank: 'https://www.behance.net/gallery/156170575/Pretso-Charging-App'
      },
      {
        title: '茶癮',
        content: '快速預約附近充電格，藉由結合優惠活動以及會員制度，刺激消費並培養新的消費流。。',
        srcImg: 'ui03.png',
        blank: 'https://www.behance.net/gallery/156170575/Pretso-Charging-App'
      }
      ],
      js: [{
        title: 'BMI計算機',
        content: '使用localstorage進行資料儲存，並且判斷BMI狀態以及判斷資料數',
        srcImg: 'js01.png',
        blank: 'https://codepen.io/Tracy_Tung/pen/XWzzRNZ'
      },
      {
        title: '高雄旅遊網',
        content: '使用AJAX進行API串接，將景點資訊呈現在畫面。並且加入地區篩選以及分頁呈現功能',
        srcImg: 'js02.png',
        blank: 'https://codepen.io/Tracy_Tung/pen/gOogqLY'
      },
      {
        title: 'Todo List',
        content: '使用JS語法撰寫，具備新增、刪除、修改等功能。並且可以切換不同狀態',
        srcImg: 'js03.png',
        blank: 'https://codepen.io/Tracy_Tung/pen/xxpBreE'
      },
      {
        title: '農產比價網',
        content: '使用axios串接json資料，並且加上種類篩選以及搜尋等功能',
        srcImg: 'js04.png',
        blank: 'https://codepen.io/Tracy_Tung/pen/qBpzmWr'
      },
      {
        title: '九九乘法表',
        content: '練習JS的for迴圈',
        srcImg: 'js05.png',
        blank: 'https://codepen.io/Tracy_Tung/pen/KKZOxoB'
      }, {
        title: 'SVG動畫',
        content: 'SVG動畫練習',
        srcImg: 'js06.png',
        blank: 'https://codepen.io/Tracy_Tung/pen/QWjmdZe'
      }
      ]
    }
  }
}
</script>
