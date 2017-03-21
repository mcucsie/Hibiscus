<template>
  <div>
    <div id="app-top">
      <mu-appbar :zDepth="0" title="Title">
      </mu-appbar>
      <mu-paper :zDepth="1">
        <mu-bottom-nav :value="bottomNav"
                      @change="handleChange">
          <mu-bottom-nav-item value="student"
                              icon="person" />
          <mu-bottom-nav-item value="forum"
                              icon="forum" />
          <mu-bottom-nav-item value="menu"
                              icon="menu" />
          <mu-bottom-nav-item value="settings"
                              icon="settings" />
        </mu-bottom-nav>
      </mu-paper>
    </div>
    <div class="container-fluid" style="margin-top:112px">
      <transition name="fade"
                  mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        bottomNav: this.$router.path
      }
    },
    methods: {
      handleChange(val) {
        this.bottomNav = val
        this.$router.push(val)
      }
    }
  };
</script>

<style>

#app-top {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 99;
}

.container-fluid {
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
