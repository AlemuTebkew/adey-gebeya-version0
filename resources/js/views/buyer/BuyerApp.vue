<template>
  <the-header/>
    <router-view/>
  <the-footer/>
</template>
<script>
import TheHeader from '../../components/TheHeader.vue'
import TheFooter from '../../components/TheFooter.vue'
// import CategoryList from './components/CategoryList.vue'
export default {
  components: {
    TheHeader,
    TheFooter

    // CategoryList
  }
}
</script>
