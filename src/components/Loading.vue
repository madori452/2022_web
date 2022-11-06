<template>
  <transition name="fade">
    <div
      class="backgrounnd-loading"
      v-if="active"
    >
    <div class="wrap">
      <div class="loading">
        <div class="bounceball"></div>
        <div class="text en-font">NOW LOADING</div>
      </div>
    </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    active: Boolean
  }

}
</script>

<style lang="scss" scoped>

body {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 999999999;
  background-color: #fff;
}

.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text {
  color:  #f00;
  display: inline-block;
  margin-left: 5px;
}

.bounceball {
  position: relative;
  display: inline-block;
  height: 37px;
  width: 15px;
}
.bounceball:before {
  position: absolute;
  content: "";
  display: block;
  top: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #f00;
  transform-origin: 50%;
  -webkit-animation: bounce 500ms alternate infinite ease;
          animation: bounce 500ms alternate infinite ease;
}

@-webkit-keyframes bounce {
  0% {
    top: 30px;
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  35% {
    height: 15px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
}

@keyframes bounce {
  0% {
    top: 30px;
    height: 5px;
    border-radius: 60px 60px 20px 20px;
    transform: scaleX(2);
  }
  35% {
    height: 15px;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 0;
  }
}

</style>
