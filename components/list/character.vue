<template>
  <div
    class="w-full float-left rounded-lg overflow-hidden relative border bg-white dark:bg-dark dark:border-gray-900 flex items-center"
  >
    <nuxt-link :to="'/characters/' + data.id" class="w-full">
      <div class="w-full float-left">
        <img :src="data.image" class="w-full" :alt="data.name" />
      </div>
      <div class="w-full float-left text-left p-5">
        <p class="text-sm text-black dark:text-white">
          <span
            class="w-3 h-3 inline-block rounded-full mr-1"
            :class="
              data.status === 'Alive'
                ? 'bg-green-500'
                : data.status === 'Dead'
                ? 'bg-red-500'
                : 'bg-gray-500'
            "
          ></span>
          {{ data.status }}
        </p>
        <h2 class="font-bold text-xl text-black dark:text-white">
          {{ data.name }}
        </h2>
        <p class="text-sm text-black dark:text-white">
          {{ data.species }} - {{ data.gender }}
        </p>
        <div class="w-full mt-5">
          <p class="text-sm text-gray-600">Origin location</p>
          <p class="text-black dark:text-white">{{ data.origin.name }}</p>
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
