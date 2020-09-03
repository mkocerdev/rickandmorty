<template>
  <div class="bg-white dark:bg-black">
    <div class="container mx-auto flex items-center">
      <div class="logo w-2/12 float-left">
        <nuxt-link to="/"><Logo class="w-full" /></nuxt-link>
      </div>
      <div class="menu w-10/12 float-left">
        <ul class="float-right">
          <li class="float-left px-4 text-black dark:text-white">
            <nuxt-link to="/characters">Characters</nuxt-link>
          </li>
          <li class="float-left px-4 text-black dark:text-white">
            <nuxt-link to="/episodes">Episodes</nuxt-link>
          </li>
          <li class="float-left px-4 text-black dark:text-white">
            <nuxt-link to="/locations">Locations</nuxt-link>
          </li>
          <li class="float-left px-4 text-black dark:text-white">
            <a
              href="https://github.com/mehmetkocerr/rickandmorty"
              target="__blank"
              >Github</a
            >
          </li>
          <li class="float-left px-4 text-black dark:text-white">
            <button
              class="btn border capitalize border-black dark:border-white"
              @click="changeMode"
            >
              {{ btnLabel }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    btnLabel() {
      return this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
  },
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
  },
}
</script>
