<template>
  <div class="w-full inline-block">
    <div
      class="w-full bg-white dark:bg-black border-t border-b border-gray-300 dark:border-gray-900"
    >
      <div class="container flex mx-auto px-2">
        <div class="w-full inline-block">
          <div class="w-full p-10 float-left flex items-center">
            <div class="float-left w-2/12">
              <p
                class="text-3xl text-black w-40 h-40 flex items-center justify-center dark:text-white bg-gray-300 dark:bg-dark rounded-full"
              >
                {{ location.name.charAt(0) }}
              </p>
            </div>
            <div class="float-left w-10/12 pl-10">
              <div class="w-full mb-8">
                <h1
                  class="text-3xl font-bold text-black dark:text-white relative"
                >
                  {{ location.name }}
                </h1>
              </div>
              <div class="w-full">
                <div class="w-4/12 float-left">
                  <p class="text-gray-600 text-sm tracking-wider uppercase">
                    Type
                  </p>
                  <p class="text-base text-black dark:text-white">
                    {{ location.type }}
                  </p>
                </div>
                <div class="w-4/12 float-left">
                  <p class="text-gray-600 text-sm tracking-wider uppercase">
                    Dimension
                  </p>
                  <p class="text-base text-black dark:text-white">
                    {{ location.dimension }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full pl-10 float-left">
            <div class="w-10/12 pl-10 float-right">
              <div class="-mx-3 float-left">
                <button
                  class="float-left py-3 px-3 mr-5 text-black dark:text-white border-b-2 border-black dark:border-white"
                >
                  Characters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-5">
      <div class="container mx-auto px-2">
        <div class="flex flex-wrap">
          <div
            v-for="item in location.residents"
            :key="item.id"
            class="w-6/12 md:w-1/12 lg:w-3/12 float-left p-2"
          >
            <character-list :data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import characterList from '~/components/list/character'
export default {
  components: {
    characterList,
  },
  async asyncData({ route, params, error, store }) {
    try {
      await store.dispatch('locations/fetchLocation', params.id)
    } catch (e) {
      error({
        statusCode: 404,
        message: e,
      })
    }
  },
  computed: {
    location() {
      return this.$store.getters['locations/location']
    },
  },
}
</script>
