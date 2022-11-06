<template>
  <div class="hello">
    <img class="d-block mx-auto" src="../assets/home/logo.svg" alt="">
    <h1 class="typing typewriter en_font text-center">HI ! I’m Tracy</h1>
    <p class="text-center">往前端工程邁進，<strong>愛貓成癡的女子02🐈</strong></p>
    <div class="row px-6">
      <div class="col-6">
         <router-link  to="/works" >
          <button class="d-block mx-auto btn btn-outline-primary rounded-pill">我的專案</button>
         </router-link>
      </div>
       <div class="col-6">
          <router-link  to="/portfolio" >
          <button class="d-block mx-auto btn btn-outline-primary rounded-pill">關於我</button>
         </router-link>
      </div>

    </div>
     <router-view/>

  </div>
</template>

<style lang="scss" scoped>
 @import "../assets/scss/main.scss";

h1.typing{
  font-size: 58px;
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
.typewriter  {
  color: $textPrimary;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .12em solid $mainColor; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .09em; /* Adjust as needed */
  animation:
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
    animation-delay: 1.5s;
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
