<template>
  <div class="w-full">
    <Header />
    <Nuxt class="w-full min-h-screen" />
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/layout/header'
import Footer from '~/components/layout/footer'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>
