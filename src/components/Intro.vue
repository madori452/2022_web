<template>
  <div class="hello">
    <img class="d-block mx-auto" src="../assets/home/logo.svg" alt="">
    <h1 class="typing typewriter en_font text-center">HI ! I’m Tracy</h1>
    <p class="text-center slogan">融和<strong>「前端技術」</strong>以及<strong>「使用者體驗」</strong>創造有趣的作品!🐈 </p>
  </div>
</template>

<style lang="scss" scoped>
 @import "../assets/scss/main.scss";

h1.typing{
  font-size: 58px;
  position: relative;
  z-index: 3;
  @include pad{
    font-size: 40px;
  }
}
.hello{
  position: relative;
  z-index: 2;
  max-width: 460px;
}
.btn{
  width: 120px;
}
.btn:hover{
  color:#fff;
}
.typewriter  {
  color: $textPrimary;
  overflow: hidden;
  border-right: .12em solid $mainColor;
  white-space: nowrap;
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .09em; /* Adjust as needed */
  animation:
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
    animation-delay: 1.5s;
}
.slogan{
  @include phone{
    padding: 0px 20px;
  }
}
/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: $mainColor }
}
</style>
