<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ScubaDiver from './components/ScubaDiver.vue'
import DiveStage from './components/DiveStage.vue';
import { useScubaDiver } from './stores/scubadiver'
import { useStab } from './stores/stab';
import DiveControls from './components/controls/DiveControls.vue';
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
    <DiveControls />
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
