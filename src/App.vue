<template>
  <div class="container">
    <h1>Rick And Morty</h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacters />
  </div>
</template>

<script>
import ListCharacters from "./components/ListCharacters.vue";
import FilterByStatus from "./components/FilterByStatus.vue";
import FilterByName from "./components/FilterByName.vue";

export default {
  name: "App",
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName,
  },
};
</script>

<style lang="scss">
:root {
  --background-body: #24282f;
  --background-card: #3c3e44;
  --text-white: #ffffff;
  --text-gray: #c0c0c0;
  --text-orange: #ff9800;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  color: var(--text-orange);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  overflow-x: hidden;
}
h1 {
  margin-bottom: 3rem;
  text-align: center;
}
.container {
  width: 100%;
  max-width: 70%;
  height: 248px;
  margin: 5rem auto;
}
img {
  width: 100%;
}
</style>
