<script setup>
import Header from "./components/Header.vue";
import { store } from "./store";
const mrx_positions = [
  71, 78, 172, 35, 146, 132, 170, 166, 45, 51, 104, 127, 106,
];
const detective_positions = [
  50, 91, 53, 123, 141, 26, 94, 103, 29, 174, 112, 138, 13, 117, 155, 34,
];

function handleShuffleClick() {
  let positions;
  if (store.isDetective) {
    positions = detective_positions;
  } else {
    positions = mrx_positions;
  }
  store.position = positions[Math.floor(Math.random() * positions.length)];
}
</script>

<template>
  <div class="container" :style="{ backgroundColor: store.isDetective ? '#213547' : '#242424' }">
    <Header></Header>
    <div>
      <main>
        <p id="position">{{ store.position == 0 ? "?" : store.position }}</p>
        <button @click="handleShuffleClick" :style="{backgroundColor: store.isDetective ? '#172b3d' : '#1a1a1a',}">
          Shuffle
        </button>
      </main>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  width: 100%;
}

#position {
  font-size: 3em;
  margin: 0;
}

main {
  margin-top: 50%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
}

button {
  width: 9em;
}
</style>
