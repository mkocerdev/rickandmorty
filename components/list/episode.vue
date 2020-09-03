<template>
  <div
    class="w-full float-left rounded-lg overflow-hidden relative border bg-white dark:bg-gray-900 dark:border-gray-900 flex items-center"
  >
    <nuxt-link :to="'/episodes/' + data.id" class="w-full flex">
      <div class="w-4/12 float-left flex items-center justify-center">
        <p class="text-black dark:text-white">{{ data.episode }}</p>
      </div>
      <div class="w-8/12 float-left text-left p-5">
        <p class="text-sm text-black dark:text-white">
          {{ data.episode }}
        </p>
        <h2 class="font-bold text-xl text-black dark:text-white">
          {{ data.name }}
        </h2>
        <div class="w-full mt-5">
          <p class="text-sm text-gray-600">Episode Air Date</p>
          <p class="text-black dark:text-white">{{ data.air_date }}</p>
        </div>
        <div class="w-full mt-5">
          <p class="text-sm text-gray-600">
            {{ data.characters.length }} characters appear in the episode.
            episode.
          </p>
          <div
            class="whitespace-no-wrap overflow-x-auto w-full flex items-start py-2"
          >
            <div
              v-for="(character, index) in data.characters"
              :key="index"
              style="flex: 0 0 auto"
              class="w-8 h-8 flex items-center justify-center rounded-full text-black dark:text-white bg-gray-200 dark:bg-gray-800 float-left overflow-hidden m-1"
            >
              <img :src="character.image" class="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
}
</script>
<style scoped>
/* width */
::-webkit-scrollbar {
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px 4px #2d3848;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: black;
}
</style>
