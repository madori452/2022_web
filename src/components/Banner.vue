<template>
  <div class="background home-bg  d-flex align-items-center  justify-content-center"  data-aos="fade-up"  data-aos-duration="800" data-aos-once="true" data-aos-delay="1000">
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
<script>
import Intro from '@/components/Intro.vue'
export default {
  components: {
    Intro
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.background {
  width: 100vw;
  background: #fff;
  padding: 200px 0;
  overflow: hidden;
  position: relative;
}

$particleSize:300px;
$animationDuration: 2s;
$amount: 40;
.background span {
  width: $particleSize;
  height: $particleSize;
  border-radius: 50%;
  backface-visibility: hidden;
  position: absolute;
  animation-name: move;
  animation-duration: $animationDuration;
  animation-timing-function: linear;

  animation-iteration-count: infinite;
  $colors: (
    #97b3fc7a,
    #7ed7ff5c,
    #ef92ac5e
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
      $blurRadius: 60px;
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
  @include phone{
   left: -20px;
   top:-20px;
   width: 80%;
  }
}
.bg03{
  width: 40%;
  z-index: 1;
  right: 0;
  bottom:-200px;
  opacity: 0.6;
  animation: love_fade 2s  forwards;
  @include xl-screen{
     bottom:-15px;
  }
  @include phone{
     width: 60%;
  }
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
