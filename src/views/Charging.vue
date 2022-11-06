<template>
<div id="Charging">
    <!-- 頁首 -->
    <div class="row">
        <div class="bg-mine">

        </div>
    </div>
    <!-- 專案簡述 -->
    <div class="container project-briefly">
        <div class="row">
            <div class="col-lg-12">2021.05 - 2021.09</div>
        </div>
        <div class="row mt-3">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-2"><h5>專案簡述</h5></div>
                    <div class="col-10">
                        <p>為充電站營運商(CPO)提供了充電站管理系統。<br>
                        掌握當下案場的充電狀況,發生異常時第一時間做初步了解。<br>
                        並且掌握該案場整體裝備健康度，以便後續維修保養。</p>
                    </div>
                </div>

            </div>
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-2"><h5>擔任角色</h5></div>
                    <div class="col-10">
                        <p>前期wireframe規劃討論<br>
                        設計完稿與交付、流程原型製作。
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class=" dash"></div>

    <!-- 前期研究 -->
    <div class="container preliminary-research">
        <div class="row">
            <div class="col-lg-6">
                <div class="react">
                    <h5 class="title">1.前期研究</h5>
                    <p class="content">相關產業分析，了解OCPP 2.0 電動載具和充電樁之間的應用層通訊協定 。</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="react">
                    <h5 class="title">2.使用功能規劃</h5>
                    <p class="content">設定使用情境，跟後端工程師討論可呈現在畫面的資訊。</p>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-lg-6">
                <div class="react">
                    <h5 class="title">3. 試用反饋</h5>
                    <p class="content">設計受測者執行的關鍵任務(由團隊PM以及工程師擔任受測者)，透過低擬真prototype進行操作。</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="react">
                    <h5 class="title"> 4. 畫面設計執行</h5>
                    <p class="content">以明亮簡潔為設計方向，建立Design Guideline，根據使用者情境決定先以桌機版做介面設計。</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 人物誌 -->
    <div class="persona">
        <div class="container">
            <div class="row">
                <h3 class="en_font">人物誌</h3>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <img src="../assets/charging/persona.png" class="persona-pic">
                </div>
                <div class="col-lg-8">
                    <h4>CPO 案場管理監控者</h4>
                    <p>情境設定：選擇案場，掌握當下案場的充電狀況,發生異常時第一時間做初步了解。並且掌握該案場整體裝備健康度，以便後續維修保養。</p>

                    <h4>User Needs</h4>
                    <p> -  即時收到事件警告通知，得知確切位置前往查看。
                        -  了解即時充電樁使用狀況。
                        -  查看案場當日尖峰以及離峰使用狀況，如需安排維修人員前往可參考。
                        -  充電狀態圖像化呈現，方便第一時間掌握即時充電概況。
                        -  明瞭的呈現使用者管理清單，進行用戶管理。
                        -  針對裝置維護有專屬列表，可了解裝置相關細節(ex:維修廠商)以及裝置狀態。</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 情境展演 -->
    <div class="container situational">
        <div class="row">
            <h3 class="en_font">情境展演</h3>
        </div>
        <div class="row">
            <img src="../assets/charging/flow.png" class="img-fluid mt-4 flow">
        </div>
    </div>

    <div class=" dash"></div>

    <!-- 架構設計 -->
    <div class="container framework">
        <div class="row">
            <h3 class="en_font">IA 架構設計</h3>
        </div>
        <div class="row">
            <img src="../assets/charging/IA.png" class="img-fluid mt-4 ia">
        </div>
    </div>

    <div class="design-system">
        <div class="container">
            <h3 class="en_font">設計規範</h3>
            <p>以藍色最為主色調，並定義充電樁在不同狀態下的顏色。搭配手繪 isometric 插圖。</p>
            <h4 class="mt-5">Color System</h4>
            <div class="row mt-5">
                <div class="col-lg-6">
                    <h5>Primary Color</h5>
                    <img class="img-fluid color" src="../assets/charging/blue.png">
                </div>
                 <div class="col-lg-6">
                    <h5>Text Color</h5>
                    <img class="img-fluid color" src="../assets/charging/gray.png">
                </div>
            </div>
             <div class="row mt-5">
                <div class="col-lg-6">
                    <h5>Charge Point Status Color</h5>
                    <img class="img-fluid color" src="../assets/charging/status.png">
                </div>
            </div>

            <div class="row mt-5">
                <h5>Button</h5>
                <img class="img-fluid btn_status d-block mx-auto" src="../assets/charging/btn.png">
            </div>

            <div class="row mt-5">
                <h5>Illustration</h5>
                <img class="img-fluid isometric  d-block mx-auto" src="../assets/charging/isometric.png">
            </div>

        </div>
    </div>

    <!-- 畫面說明 -->
    <div class="container description">
        <div class="row">
            <h3 class="en_font">畫面說明</h3>
        </div>
        <div class="row d-flex align-items-center">
           <div class="col-lg-6">
            <h4 class="en_font">地圖頁面選擇案場</h4>
            <p>地圖頁面查看各地案場狀態，並且顯示整體案場資訊(總充電量、碳足跡、案場是否異常...)。</p>
           </div>
            <div class="col-lg-6">
                <img src="../assets/charging/Site01.png" class="img-fluid site d-block mx-auto">
           </div>
        </div>

        <div class="row mt-4 d-flex align-items-center">
            <div class="col-lg-6 order-lg-end ">
                <h4 class="en_font">單一案場監控</h4>
                <p>查看單一案場狀態，顯示今日案產資訊(累積充電度數、充電格狀態、熱門充電時段...)。</p>
            </div>
              <div class="col-lg-6 order-lg-first">
                <img src="../assets/charging/site02.png" class="img-fluid site d-block mx-auto">
           </div>
        </div>

        <div class="row mt-4 d-flex align-items-center">
           <div class="col-lg-6">
            <h4 class="en_font">案場充電格狀態</h4>
            <p>案場充電格狀態顯示，可點選不同充電樁了解充電現況。(該充電格使用者、充電車牌...)</p>
           </div>
            <div class="col-lg-6">
                <img src="../assets/charging/Site03.png" class="img-fluid site d-block mx-auto">
           </div>
        </div>
    </div>

    <!-- 流程說明 -->
    <div class="prptotype">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-lg-4">
                    <h3 class="en_font">Prototype</h3>
                    <p>登入系統，模擬 CPO 監控案場的過程。</p>

                </div>
                <div class="col-lg-8 video">
                    <img src="../assets/charging/device.png" class="img-fluid deviece">
                    <!-- <video  autoplay control class="video-proccess" type="video/mp4"  src="../assets/charging/process.mp4"></video> -->
                </div>
            </div>
        </div>

    </div>

    <!-- 學習與反思 -->
    <div class="container learn">
        <div class="row">
            <h3 class="en_font">學習與反思</h3>
        </div>
        <div class="row d-flex align-items-center">
           <div class="col-lg-12">

            <h6 class="mt-4"># 學習在各方角力下取得平衡</h6>
            <p>專案開發過程中密集的跨部門溝通，除了常接觸的PM與工程師外，也有許多門市管理人員、門市 pos 機的開發團隊參與。與會過程中也讓我更看到不只是使用者的聲音，還有各方立場的角度。使用者體驗與開發成本、門市訓練、行銷需求...等之間，要有智慧的與各個單位溝通與平衡。</p>

            <h6 class="mt-4"># 修改難免，主動解釋脈絡能加速開發</h6>
            <p>因為業務單位不只一個，在開發過程中很容易因為需求變更而面臨設計要更改的狀況。而工程端的修改也遠比設計更不彈性，在提出修改需求時，主動的告訴工程師們自己的思考脈絡，以及為什麼新的設計體驗更好，能幫助雙方更快地達成共識。</p>

           </div>

        </div>

    </div>
    <Top></Top>

</div>

    <Footer></Footer>
  </template>

<style scoped lang="scss">
@import '../assets/scss/main.scss';
.bg-mine{
    height: 80vh;
    background-image: url(../assets/charging/cover-charging.png);
    background-size: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
}
.project-briefly,.preliminary-research,.persona,.situational, .framework, .design-system,
.description{
    padding: 100px 0;
}
.learn{
    padding: 200px 0 300px 0;
}
.persona,.design-system{
    background-color: #F2F1F1;
}
.prptotype{
     background-image: url(../assets/charging/bg-device.png);
    background-size: cover;
    background-position: 50% 100%;
    background-repeat: no-repeat;
    padding: 150px 0;
}
.dash{
    width: 100%;
    height: 1px;
    background-color: #797878;
    opacity: 0.5;
}

.preliminary-research .react{
    width: 100%;
    height: 200px;
    background-color: #EBF0F3;
    padding: 80px 50px;
    border-radius: 8px;

}
img.flow{
    padding: 0 100px;
}
img.color{
    padding: 0 50px;
}
img.ia{
    padding: 0 180px;
}
img.persona-pic{
    max-width: 200px;
}
img.btn_status{
    width: 80%;
}
img.isometric{
    width: 70%;
}
img.site{
    width: 80%;
}

img.deviece{
    top: -20px;
    position: relative;
}
.video{
    position: relative;
}
video.video-proccess{
    position: absolute;
    left: 95px;
    width: 78%;
    height: 450px;
    top: 0px;

}
</style>

<script>
import Footer from '../components/Footer.vue'
import Top from '../components/Top.vue'

export default {
  components: {
    Footer,
    Top
  }
}
</script>
