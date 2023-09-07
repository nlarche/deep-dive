<script setup lang="ts">
import { useScubaDiver } from '@/stores/scubadiver'
import { computed } from 'vue'
import controlWrapper from './controlWrapper.vue';

const store = useScubaDiver()
const dive = computed(() => store.scubadiver.dive)

</script>

<template>
  <controlWrapper class="computer">
    <p>{{ dive.depth.toFixed(1) }} <span>m</span></p>
    <p class="maxDepth">
      <span>Max</span> {{ dive.maxDepth.toFixed(1) }} <span>m</span>
    </p>
    <p>{{ dive.time }} <span>min</span></p>
  </controlWrapper>
</template>

<style scoped>
.computer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.computer p {
  font-size: xx-large;
}

.computer .maxDepth {
  font-size: small;
}

.computer p span {
  font-size: xx-small;
}
</style>
