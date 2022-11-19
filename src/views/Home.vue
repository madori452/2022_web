<template>
  <Loading :active="isLoading"></Loading>
  <div class="background home-bg  d-flex align-items-center  justify-content-center">
     <div class="d-flex align-items-center">
      <div class="container  d-flex justify-content-center">
        <Intro class="mt-5"></Intro>
      </div>
        <img class="bg02" src="../assets/home/01love.png">
        <img class="bg03" src="../assets/home/02love.png">
     </div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  </div>

</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

//animate*--//
body {
  margin: 0;
}

.background {
  width: 100vw;
  height: 100vh;
  background: #fff;
}

$particleSize:380px;
$animationDuration: 2.5s;
$amount: 40;
.background span {
  width: $particleSize;
  height: $particleSize;
  @include xl-screen{
    width:280px;
    height: 280px;
  }
  border-radius: 50%;
  backface-visibility: hidden;
  position: absolute;
  animation-name: move;
  animation-duration: $animationDuration;
  animation-timing-function: linear;

  animation-iteration-count: infinite;
  $colors: (
    #6b92f7ab,
    #03a9f454,
    #ffeb3b9c
  );
  @for $i from 1 through $amount {
    &:nth-child(#{$i}) {
      color: nth($colors, random(length($colors)));
      top: random(100) * 1%;
      left: random(100) * 1%;
      animation-duration: (random($animationDuration * 10) / 10) * 1s + 10s;
      animation-delay: random(($animationDuration + 10s) * 10) / 10 * -1s;
      transform-origin: (random(50) - 25) * 1vw (random(50) - 25) * 1vh;
      $x: if(random() > 0.5, -1, 1);
      $blurRadius: 80px;
      box-shadow: ($particleSize * 2 * $x) 0 $blurRadius currentColor;
    }
  }
}

@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}
//animate end
.home-bg{
  position: relative;
  overflow: hidden;
  height:100vh;
}

.bg02,.bg03{
  position: absolute;
  opacity: 0;

}

.bg02{
  width: 50%;
  z-index: 1;
  left: -80px;
  top:-200px;
  opacity: 0.5;
  animation: love_fade 6s 2s  linear;
}
.bg03{
  width: 40%;
  z-index: 1;
  right: 0;
  bottom:-200px;
  opacity: 0.6;
  animation: love_fade 2s  forwards;
}

@keyframes bg_fade{
  100%{
    opacity: 1;
  }
}
@keyframes love_fade{
  100%{
    opacity: 0.5;
  }
}
</style>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'

export default {
  components: {
    Intro
  },
  methods: {
    getIntro () {
      this.isLoading = true
      setTimeout(() => { this.isLoading = false }, 1000)
    }
  },
  data () {
    return {
      isLoading: false
    }
  },
  created () {
    this.getIntro()
  }
}
</script>
