<template>
  <div class="w-full float-left text-center my-5">
    <button
      :disabled="hasPrevPage"
      :class="hasPrevPage ? 'opacity-50 cursor-not-allowed' : ''"
      class="border bg-white dark:bg-dark dark:border-gray-900 px-6 py-2 text-black dark:text-white rounded"
      @click="change(currentPage - 1)"
    >
      Prev
    </button>
    <span class="inline-block mx-2 text-black dark:text-white">
      {{ currentPage + ' / ' + totalPage }}</span
    >
    <button
      :disabled="hasNextPage"
      :class="hasNextPage ? 'opacity-50 cursor-not-allowed' : ''"
      class="border bg-white dark:bg-dark dark:border-gray-900 px-6 py-2 text-black dark:text-white rounded"
      @click="change(currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: {
    totalPage: {
      required: true,
      type: Number,
      default: null,
    },
  },
  computed: {
    currentPage() {
      let currentPage = null
      const queryPage = parseInt(this.$route.query.page)
      if (queryPage && queryPage <= this.totalPage && queryPage > 0) {
        currentPage = queryPage
      } else {
        currentPage = 1
      }
      return currentPage
    },
    hasPrevPage() {
      return this.currentPage <= 1
    },
    hasNextPage() {
      return this.currentPage >= this.totalPage
    },
  },
  methods: {
    async change(page) {
      await Promise.all([this.$router.push({ query: { page } })])
    },
  },
}
</script>
