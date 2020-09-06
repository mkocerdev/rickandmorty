<template>
  <div class="w-full inline-block">
    <div
      class="w-full bg-white dark:bg-black border-t border-b border-gray-300 dark:border-gray-900"
    >
      <div class="container flex mx-auto px-2">
        <div class="w-full inline-block">
          <div class="w-full p-10 float-left flex items-center">
            <div class="float-left w-2/12">
              <img
                :src="character.image"
                :alt="character.name"
                class="rounded-full w-40 float-left"
              />
            </div>
            <div class="float-left w-10/12 pl-10">
              <div class="w-full mb-8">
                <p class="text-sm text-black dark:text-white">
                  <span
                    class="w-3 h-3 inline-block rounded-full mr-1"
                    :class="
                      character.status === 'Alive'
                        ? 'bg-green-500'
                        : character.status === 'Dead'
                        ? 'bg-red-500'
                        : 'bg-gray-500'
                    "
                  ></span>
                  {{ character.status }}
                </p>
                <h1
                  class="text-3xl font-bold text-black dark:text-white relative"
                >
                  {{ character.name }}
                  <span
                    v-if="character.type"
                    class="rounded-full border border-gray-300 dark:border-gray-900 font-normal py-1 px-3 text-sm inline-block text-black dark:text-white"
                    >{{ character.type }}</span
                  >
                </h1>
              </div>
              <div class="w-full">
                <div class="w-4/12 float-left">
                  <p class="text-gray-600 text-sm tracking-wider uppercase">
                    Species and Gender
                  </p>
                  <p class="text-base text-black dark:text-white">
                    {{ character.species }} - {{ character.gender }}
                  </p>
                </div>
                <div class="w-4/12 float-left">
                  <p class="text-gray-600 text-sm tracking-wider uppercase">
                    First seen in
                  </p>
                  <p class="text-base text-black dark:text-white">
                    {{ character.origin.name }}
                  </p>
                </div>
                <div class="w-4/12 float-left">
                  <p class="text-gray-600 text-sm tracking-wider uppercase">
                    Last known location:
                  </p>
                  <p class="text-base text-black dark:text-white">
                    {{ character.location.name }} -
                    {{ character.location.type }}
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
                  Episodes
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
            v-for="item in character.episode"
            :key="item.id"
            class="w-6/12 md:w-6/12 lg:w-6/12 float-left p-2"
          >
            <episode-list :data="item" />
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
      await store.dispatch('characters/fetchCharacter', params.id)
    } catch (e) {
      error({
        statusCode: 404,
        message: e,
      })
    }
  },
  computed: {
    character() {
      return this.$store.getters['characters/character']
    },
  },
}
</script>
