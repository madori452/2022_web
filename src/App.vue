<template>

<Navbar></Navbar>
<Footer></Footer>
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
.en_font{
  font-family: 'Tiro Gurmukhi', serif;
}
a{
  text-decoration: none;
}

</style>
<script>
import Navbar from '../src/components/Navbar.vue'
import Top from '../src/components/Top.vue'

export default {
  components: {
    Navbar,
    Top
  }

}

</script>
