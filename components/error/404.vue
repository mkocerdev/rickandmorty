<template>
  <div class="flex items-center justify-center flex-col">
    <img
      src="~/assets/images/loader.png"
      class="mx-auto w-24 animate-spin mb-5"
    />
    <h1 class="text-3xl mb-2 text-black dark:text-white">
      This page doesn’t exist
    </h1>
    <p class="text-gray-500 mb-5">
      The link you clicked on may be broken or no longer exist.
    </p>
    <div class="text-gray-500 mb-5 text-center">
      {{ error.message }}.
      <button
        class="text-black dark:text-white focus:outline-none"
        @click="show = !show"
      >
        Details
      </button>
      <div v-if="show" class="text-gray-500">{{ error }}</div>
    </div>
    <button class="text-black dark:text-white" @click="goBack">Go Back</button>
  </div>
</template>
<script>
export default {
  name: 'Error404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>
