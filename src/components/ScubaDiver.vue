<script setup lang="ts">
import { useScubaDiver } from '@/stores/scubadiver'
import { computed } from 'vue'

const store = useScubaDiver()

const transform = computed(() => {
  switch (store.move) {
    case 'DOWN':
      return 'rotate(0deg) scaleX(-1)'
    case 'UP':
      return 'rotate(-90deg) scaleX(-1)'
    default:
      return 'rotate(-45deg) scaleX(-1)'
  }
})
</script>
<template>
  <div class="scubadiver" :style="{ transform: transform }"></div>
</template>

<style scoped>
.scubadiver {
  position: absolute;
  left: 50vw;
  top: 50vh;
  background-image: url('@/assets/diving.png');
  width: 3em;
  height: 3em;
  margin-top: -1.5em;
  background-position: top;
  background-size: contain;
}
</style>
