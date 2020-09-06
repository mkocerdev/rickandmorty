<template>
  <div
    class="w-full h-screen absolute flex items-center justify-center top-0 left-0 bg-white dark:bg-black"
  >
    <component :is="errorPage" :error="error" />
  </div>
</template>
<script>
import error404 from '~/components/error/404.vue'
import error500 from '~/components/error/500.vue'
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404
      }
      return error500
    },
  },
}
</script>
