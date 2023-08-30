<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import Monitoring from './components/DiveMonitoring.vue'
import ScubaDiver from './components/ScubaDiver.vue'
import { useScubaDiver } from './stores/scubadiver'
const store = useScubaDiver()
const dive = ref<HTMLDivElement | null>(null)

onMounted(() => {
  dive.value?.focus()
})

const computedSea = computed(() => {
  return `${10 + store.scubadiver.pressure * 10}%`
})
</script>

<template>
  <div
    class="dive"
    tabindex="0"
    ref="dive"
    @keydown.down="store.down"
    @keydown.up="store.up"
    @keyup="store.stopMoving"
    :style="{ 'background-position-y': computedSea }"
  >
    <Monitoring />
    <div class="wrapper">
      <ScubaDiver />
    </div>
  </div>
</template>

<style scoped>
.dive {
  margin: O;
  padding: 0;
  width: 100%;
  height: 100%;
  background-image: url('./assets/sea.jpg');
  background-size: cover;
  background-position-y: 20%;
}
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
