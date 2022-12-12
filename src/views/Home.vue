<template>
  <Loading :active="isLoading"></Loading>
  <Banner></Banner>
  <About></About>
  <Skill></Skill>
  <Experience></Experience>
  <Web></Web>
  <JS></JS>
  <UI></UI>
  <Design></Design>
  <Footer></Footer>

</template>

<script>
import Banner from '../components/Banner.vue'
import About from '../components/About.vue'
import Skill from '../components/Skill.vue'
import Experience from '../components/Experience.vue'
import Web from '../components/Web.vue'
import JS from '../components/Js.vue'
import UI from '../components/UI.vue'
import Design from '../components/Design.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Banner,
    About,
    Skill,
    Experience,
    Web,
    JS,
    UI,
    Design,
    Footer
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
<style lang="scss" scoped>
@import "../assets/scss/main.scss";

//animate*--//
body {
  margin: 0;
}
.section{
  padding: 150px 0;
  @include phone{
    padding: 100px 20px;
  }
}

</style>
