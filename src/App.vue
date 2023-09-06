<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Monitoring from './components/DiveMonitoring.vue'
import ScubaDiver from './components/ScubaDiver.vue'
import DiveStage from './components/DiveStage.vue';
import { useScubaDiver } from './stores/scubadiver'
import ManoMeter from './components/ManoMeter.vue';
import { useStab } from './stores/stab';
import BuoyancyControlDevice from './components/BuoyancyControlDevice.vue';
import FlotabilityIndicator from './components/FlotabilityIndicator.vue';
const store = useScubaDiver()
const stabStore = useStab()
const dive = ref<HTMLDivElement | null>(null)

onMounted(() => {
  dive.value?.focus()
})


</script>

<template>
  <div class="dive" tabindex="0" ref="dive" @keyup="store.stopMoving" @keydown.down="store.down" @keydown.up="store.up"
    @keydown.space="stabStore.purge" @keydown.z="stabStore.deflate" @keydown.a="stabStore.inflate">
    <div class="controls">
      <Monitoring />
      <ManoMeter />
      <BuoyancyControlDevice />
      <FlotabilityIndicator />
    </div>

    <DiveStage :pressure="store.scubadiver.dive.pressure" />
    <ScubaDiver class="scubadiver" />
  </div>
</template>

<style scoped>
.controls {
  z-index: 1;
  position: absolute;
  display: flex;
  margin: 20px;
}

.dive {
  margin: O;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
