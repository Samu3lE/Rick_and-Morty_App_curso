<template>
  <section>
    <div class="characters">
      <!-- {{ character }} -->
      <div
        class="characters_item"
        v-for="character in characters.charactersFilter"
        :key="character.id"
      >
        <CardCharacter :character="character" />
      </div>
    </div>
    <div class="pages">
      <span
        :class="characters.pages.prev === null ? 'none' : ''"
        @click="page_Nav(characters.pages.prev)"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="backward"
          class="svg-inline--fa fa-backward"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M459.5 71.41l-171.5 142.9v83.45l171.5 142.9C480.1 457.7 512 443.3 512 415.1V96.03C512 68.66 480.1 54.28 459.5 71.41zM203.5 71.41L11.44 231.4c-15.25 12.87-15.25 36.37 0 49.24l192 159.1c20.63 17.12 52.51 2.749 52.51-24.62v-319.9C255.1 68.66 224.1 54.28 203.5 71.41z"
          ></path>
        </svg>
      </span>
      <span
        :class="characters.pages.next === null ? 'none' : ''"
        @click="page_Nav(characters.pages.next)"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="forward"
          class="svg-inline--fa fa-forward"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M52.51 440.6l171.5-142.9V214.3L52.51 71.41C31.88 54.28 0 68.66 0 96.03v319.9C0 443.3 31.88 457.7 52.51 440.6zM308.5 440.6l192-159.1c15.25-12.87 15.25-36.37 0-49.24l-192-159.1c-20.63-17.12-52.51-2.749-52.51 24.62v319.9C256 443.3 287.9 457.7 308.5 440.6z"
          ></path>
        </svg>
      </span>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import CardCharacter from "@/components/CardCharacter.vue";

export default {
  components: {
    CardCharacter,
  },
  setup() {
    const store = useStore();
    const characters = computed(() => {
      const charactersFilter = store.state.charactersFilter;
      const pages = store.state.pages;
      return { charactersFilter, pages };
    });
    onMounted(() => {
      store.dispatch("getCharacters");
    });
    const page_Nav = (pag) => {
      store.dispatch("getCharacters", pag);
    };

    return { characters, page_Nav };
  },
};
</script>

<style>
.characters {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: 3rem;
  margin: 3rem 0;
}

.none {
  display: none;
}

span {
  cursor: pointer;
}
svg {
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem 1rem;
}

.pages {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 768px) {
  .characters {
    display: grid;
    grid-template-columns: repeat(2, 40%);
    justify-content: space-around;
  }
}
@media screen and (min-width: 1024px) {
  .characters {
    grid-template-columns: repeat(3, 23%);
    justify-content: space-around;
  }
}
</style>
