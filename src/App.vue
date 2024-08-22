<template>
  <div class="page-wrapper">
    <div>
      <Header />
      <router-view /> <!-- This is where the page-specific content will be rendered -->
      <Footer />
    </div>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MainFooter from './components/MainFooter.vue'
export default {
  components: {
    Header : MainHeader,
    Footer : MainFooter,
  },
  data() {
    return {
     
    };
  },
};
</script>

<style>

</style>