<template>
  <div class="w-full">
    <div class="container mx-auto px-2">
      <h1 class="text-3xl my-3 font-bold text-dark dark:text-white relative">
        Episodes
      </h1>
      <div class="w-full inline-block">
        {{ episodes.info }}
        <div class="w-full float-right flex items-start flex-wrap">
          <loader />
          <div
            v-for="item in episodes.results"
            :key="item.id"
            class="w-6/12 md:w-6/12 lg:w-6/12 float-left p-2"
          >
            <episode-list :data="item" />
          </div>
          <div class="w-full float-left text-center my-5">
            <pagination
              :total-page="totalPage"
              :current-page="currentPage"
              @change="changePage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import episodeList from '~/components/list/episode'
import pagination from '~/components/list/pagination'
export default {
  components: {
    episodeList,
    pagination,
  },
  async asyncData({ route, params, error, store }) {
    try {
      await Promise.all([
        store.commit('episodes/setPage', 1),
        store.dispatch('episodes/fetchEpisodes'),
      ])
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
    totalPage() {
      return this.$store.getters['episodes/episodesTotalPage']
    },
    currentPage() {
      return this.$store.getters['episodes/page']
    },
  },
  methods: {
    async changePage(page) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        window.scrollTo(0, 0)
      })
      await Promise.all([
        this.$store.commit('episodes/setPage', page),
        this.$store.dispatch('episodes/fetchEpisodes'),
      ])
      this.$nuxt.$loading.finish()
    },
  },
}
</script>

<style scoped>
.cover {
  height: 25rem;
}
</style>
