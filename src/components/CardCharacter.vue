<template>
  <div class="character box-shadow-1">
    <img :src="character.image" :alt="character.name" />
    <div class="character__info">
      <h3>
        {{ character.name }}
      </h3>

      <div class="status">
        <span
          :class="
            character.status == 'Alive'
              ? 'alive'
              : character.status == 'Dead'
              ? 'dead'
              : 'default'
          "
        ></span>
        <span> {{ character.status }} - {{ character.species }} </span>
      </div>

      <div class="origin">
        <span>Origin: {{ character.origin.name }}</span>
      </div>
      <div>
        <span> Location: {{ character.location.name }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"],
};
</script>

<style lang="scss">
.character {
  background-color: var(--background-card);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  height: 100%;

  img {
    max-width: 100%;
    height: auto;
  }
  &:hover {
    transform: scale(1.05);
    h3 {
      color: var(--text-white);
    }
  }
  span {
    color: var(--text-gray);
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  &__info {
    padding: 1.5rem;
    .status {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      span {
        color: var(--text-gray);
        &:first-child {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
      }
      .alive {
        background-color: green;
      }
      .dead {
        background-color: red;
      }
      .default {
        background-color: white;
      }
    }
    .origin {
      margin-bottom: 0.5rem;
    }
  }
}

.box-shadow-1 {
  box-shadow: 0.25rem 0.25rem 1rem var(--background-body);
}
</style>
