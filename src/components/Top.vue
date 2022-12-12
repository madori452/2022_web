<template>
 <div class="top-icon">
  <img src="../assets/top.png" class="top" @click="backTop()">
 </div>
</template>
<script>

export default {
  methods: {
    scroll () {
      window.addEventListener('scroll', function () {
        const top = this.document.querySelector('img.top')
        const scorllPercent = this.scrollY
        if (scorllPercent > 100) {
          top.classList.add('showNav')
        } else {
          top.classList.remove('showNav')
        }
      })
    },
    backTop () {
      const elementBody = document.documentElement
      elementBody.scrollTop = 0
    }
  },
  created () {
    this.scroll()
  }

}

</script>
<style lang="scss">
img.top{
  width: 50px;
  position: fixed;
  right: 50px;
  bottom: 200px;
  cursor: pointer;
  transition: 0.5s;
  opacity: 0;
}
.showNav{
  opacity: 1 !important;
}
</style>
