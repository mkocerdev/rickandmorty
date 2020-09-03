<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="container mx-auto flex items-center">
      <div class="logo w-2/12 float-left">
        <nuxt-link to="/"><Logo class="w-full" /></nuxt-link>
      </div>
      <div class="menu w-10/12 float-left">
        <ul class="float-right flex items-center">
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
              href="https://github.com/mkocerdev/rickandmorty"
              target="__blank"
            >
              <githubIcon class="w-8 text-black dark:text-white" />
            </a>
          </li>
          <li class="float-left px-4 text-black dark:text-white">
            <button class="flex items-center" @click="changeMode">
              <p
                class="flex items-center px-5 py-3 bg-gray-300 dark:bg-black rounded-full transition duration-300 ease"
              >
                <img
                  v-if="$colorMode.preference === 'light'"
                  class="w-6"
                  src="~/assets/images/dark.png"
                  alt="Dark Mode"
                />
                <img
                  v-else
                  class="w-6"
                  src="~/assets/images/light.png"
                  alt="Light Mode"
                />
                <span class="pl-2"> {{ mode }} Mode </span>
              </p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import githubIcon from '~/components/icon/github'
export default {
  components: {
    githubIcon,
  },
  data() {
    return {}
  },
  computed: {
    mode() {
      return this.$colorMode.preference === 'light' ? 'Dark' : 'Light'
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
