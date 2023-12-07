<script setup>
import Tabs from "./Tabs.vue";
</script>

<template>
  <div class="header">
    <div>
      <div>
        <p id="header-text">Scotland Yard</p>
      </div>
      <Tabs/>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: black;
  display: flex;
  justify-content: center;
}
p {
  margin: 0px;
  padding: 5px;
  margin-bottom: 20px;
}

#header-text {
  font-size: 2em;
}

.header > div {
    flex-grow: 1;
    max-width: 720px;
}
</style>