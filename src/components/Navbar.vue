<template>
  <nav class="green darken-1">
    <div class="nav-wrapper" >
      <a  class="brand-logo center">{{pageTitle}}</a>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    pageTitle: function() {
        return this.$route.meta.title;
    }

  }
}
</script>

<style lang="scss" scoped>
  nav {
      padding: 0 2rem;
  }
</style>