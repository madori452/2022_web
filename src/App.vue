<template>

<Navbar></Navbar>
<Top></Top>

</template>

<style lang="scss">
@import "./assets/all.scss";
@import url('https://fonts.googleapis.com/css2?family=Tiro+Gurmukhi&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  // border: 1px solid #ddd
}

#app {
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}
 .swiper-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  @mixin phone{
    justify-content: start;
  }
}
.en_font{
  font-family: 'Tiro Gurmukhi', serif;
}
a{
  text-decoration: none;
}
.icon-love{
  width: 50px;
  margin-top: -10px;
}

</style>
<script>
import Navbar from './components/Navbar.vue'
import Top from './components/Top.vue'

export default {
  components: {
    Navbar,
    Top
  }

}

</script>
