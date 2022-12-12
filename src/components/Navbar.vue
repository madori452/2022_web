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
          <div  href="nav-link" id="About" class="nav-link me-3" aria-current="page" @click="about">
            <p class="mb-0 h5 en_font mt-2">About Me</p>
         </div>

          <div  href="nav-link" class="nav-link me-3" aria-current="page"  @click="experience">
            <p class="mb-0 h5 en_font mt-2">Experience</p>
          </div>

          <a class="nav-link" target="_blank" href="https://drive.google.com/file/d/1P7Q8L_IFE3GGn0pItqpJl8I38shw6jww/view?usp=share_link"  @click="closeNav">
            <p class="mb-0 h5 en_font resume">Resume</p>
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
  z-index: 299;
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
  background: #fff !important;
  transition: 1s;
}
.resume{
  background-color: $mainColor;
  border-radius: 20px;
  color: #fff;
  padding: 8px 10px;
}
.navbar-toggler{
  @include pad{
    border:none
  }
}
.nav-link{
  cursor: pointer;
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
// import $ from 'jquery'
export default {
  data () {
    return {
      Navtoggle: false
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
    },
    about () {
      this.closeNav()
      const elementBody = document.documentElement
      elementBody.scrollTop = 500
    },
    experience () {
      this.closeNav()
      const elementBody = document.documentElement
      if (window.innerWidth < 512) {
        elementBody.scrollTop = 3800
      } else {
        elementBody.scrollTop = 2000
      }
    }
  },
  created () {
    this.scroll()
  }
}
</script>
