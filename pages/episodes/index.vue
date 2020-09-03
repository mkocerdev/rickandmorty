<template>
  <div class="w-full">
    <div class="container mx-auto px-2">
      <h1 class="text-3xl my-3 font-bold text-dark dark:text-white relative">
        Episodes
      </h1>
      <div class="w-full inline-block">
        <div class="w-2/12 float-left">
          <div class="w-full">
            <h2>Filters</h2>
          </div>
          <div class="w-full inline-block"></div>
        </div>
        {{ episodes.info }}
        <div class="w-10/12 float-right flex items-start flex-wrap">
          <div
            v-for="item in episodes.results"
            :key="item.id"
            class="w-6/12 md:w-6/12 lg:w-6/12 float-left p-2"
          >
            <episode-list :data="item" />
          </div>
          <div class="w-full float-left text-center my-5">
            <button
              :disabled="hasPrevPage"
              :class="hasPrevPage ? 'opacity-50 cursor-not-allowed' : ''"
              class="border bg-white dark:bg-gray-900 dark:border-gray-900 px-6 py-2 text-black dark:text-white rounded"
              @click="changePage(currentPage - 1)"
            >
              Prev
            </button>
            <span class="inline-block mx-2 text-black dark:text-white">
              {{ currentPage + ' / ' + totalPage }}</span
            >
            <button
              :disabled="hasNextPage"
              :class="hasNextPage ? 'opacity-50 cursor-not-allowed' : ''"
              class="border bg-white dark:bg-gray-900 dark:border-gray-900 px-6 py-2 text-black dark:text-white rounded"
              @click="changePage(currentPage + 1)"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import episodeList from '~/components/list/episode'
export default {
  components: {
    episodeList,
  },
  async asyncData({ route, params, error, store }) {
    try {
      await store.dispatch('episodes/fetchEpisodes')
    } catch (e) {
      error({
        statusCode: 404,
        message: e,
      })
    }
  },
  computed: {
    episodes() {
      return this.$store.getters['episodes/episodes']
    },
    currentPage() {
      return this.$store.getters['episodes/page']
    },
    totalPage() {
      return this.$store.getters['episodes/episodesTotalPage']
    },
    hasPrevPage() {
      return this.currentPage <= 1
    },
    hasNextPage() {
      return this.currentPage >= this.totalPage
    },
  },
  methods: {
    async changePage(page) {
      await Promise.all([
        this.$store.commit('episodes/setPage', page),
        this.$store.dispatch('episodes/fetchEpisodes'),
      ])
    },
  },
}
</script>

<style scoped>
.cover {
  height: 25rem;
}
</style>
