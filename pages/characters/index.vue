<template>
  <div class="w-full">
    <div class="container mx-auto px-2">
      <h1 class="text-3xl my-3 font-bold text-dark dark:text-white relative">
        Characters
      </h1>
      <div class="w-full inline-block">
        {{ characters.info }}
        <div class="w-full float-right flex items-start flex-wrap">
          <loader />
          <div
            v-for="item in characters.results"
            :key="item.id"
            class="w-6/12 md:w-1/12 lg:w-3/12 float-left p-2"
          >
            <character-list :data="item" />
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
import characterList from '~/components/list/character'
import pagination from '~/components/list/pagination'
export default {
  components: {
    characterList,
    pagination,
  },
  async asyncData({ route, params, error, store }) {
    try {
      await Promise.all([
        store.commit('characters/setPage', 1),
        store.dispatch('characters/fetchCharacters'),
      ])
    } catch (e) {
      error({
        statusCode: 404,
        message: e,
      })
    }
  },
  computed: {
    characters() {
      return this.$store.getters['characters/characters']
    },
    totalPage() {
      return this.$store.getters['characters/charactersTotalPage']
    },
    currentPage() {
      return this.$store.getters['characters/page']
    },
  },
  methods: {
    async changePage(page) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        window.scrollTo(0, 0)
      })
      await Promise.all([
        this.$store.commit('characters/setPage', page),
        this.$store.dispatch('characters/fetchCharacters'),
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
