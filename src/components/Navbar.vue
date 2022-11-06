<!-- new-nav -->
<template>
<nav class="navbar navbar-expand-md navbar-light  w-100 position-fixed">
<div class="container">
    <router-link to="/" class="navbar-brand en_font">Tracy</router-link>
    <button class="navbar-toggler" type="button" ref="burgerBtn" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" ref="burgerNav" :class="{'navbar-toggler-icon-open':Navtoggle}" @click="openNav"></span>
    </button>
    <div ref="burgerMenu" class="collapse navbar-collapse justify-content-end"  id="navbarNavAltMarkup">
      <div class="navbar-nav">
          <router-link  to="/portfolio" class="nav-link me-3" aria-current="page"  href="#" @click="closeNav">
            <p class="mb-0">關於我</p>
            <p class="sub-title mb-0">About Me</p>
          </router-link>

          <router-link  to="/works" class="nav-link me-3" aria-current="page" href="#" @click="closeNav">
            <p class="mb-0">專案作品</p>
            <p class="sub-title mb-0">Project</p>
          </router-link>

          <a class="nav-link" href="#"  @click="closeNav">
            <p class="mb-0">下載履歷</p>
            <p class="sub-title mb-0">Resume</p>
          </a>
      </div>
    </div>
</div>
</nav>

<router-view/>
</template>
<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.navbar{
  z-index: 2;
  @include pad{
    background-color: #ffffff96;
  }
}
.navbar-toggler:focus{
   @include pad{
    box-shadow: none;
  }
}
.navbar-collapse{
  flex-grow: 0;
}
.navbar-bgscroll{
  background: #ffffff70 !important;
  transition: 1s;
}
.navbar-toggler{
  @include pad{
    border:none
  }
}
.navbar-toggler-icon-open{
 background-image: url('../assets/openNav.svg');
 transition: 0.2s;
}
a{
  text-decoration: none;
}
</style>
<script>

export default {
  data () {
    return {
      // Navtoggle: false

    }
  },

  methods: {
    scroll () {
      window.addEventListener('scroll', function () {
        const navbar = this.document.querySelector('.navbar')
        const scorllPercent = this.scrollY
        if (scorllPercent > 10) {
          navbar.classList.add('navbar-bgscroll')
        } else {
          navbar.classList.remove('navbar-bgscroll')
        }
      })
    },
    openNav () {
      this.$refs.burgerNav.classList.toggle('navbar-toggler-icon-open')
    },
    closeNav () {
      if (window.innerWidth < 992) {
        this.$refs.burgerBtn.ariaExpanded = false
        this.$refs.burgerBtn.classList.add('show')
        this.$refs.burgerNav.classList.remove('navbar-toggler-icon-open')
        this.$refs.burgerMenu.classList.remove('show')
      }
    }
  },
  created () {
    this.scroll()
  }

}
</script>
