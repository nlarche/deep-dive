<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Monitoring from './components/DiveMonitoring.vue'
import ScubaDiver from './components/ScubaDiver.vue'
import DiveStage from './components/DiveStage.vue';
import { useScubaDiver } from './stores/scubadiver'
import ManoMeter from './components/ManoMeter.vue';
const store = useScubaDiver()
const dive = ref<HTMLDivElement | null>(null)

onMounted(() => {
  dive.value?.focus()
})


</script>

<template>
  <div class="dive" tabindex="0" ref="dive" @keydown.down="store.down" @keydown.up="store.up" @keyup="store.stopMoving">
    <Monitoring />
    <ManoMeter />
    <DiveStage :pressure="store.scubadiver.dive.pressure" />
    <ScubaDiver class="scubadiver" />
  </div>
</template>

<style scoped>
.dive {
  margin: O;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
