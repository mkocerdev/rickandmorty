<template>
  <div
    v-if="loading"
    class="loader fixed top-0 left-0 z-10 w-full h-full flex items-center justify-center"
  >
    <img src="~/assets/images/loader.png" class="mx-auto w-24 animate-spin" />
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
