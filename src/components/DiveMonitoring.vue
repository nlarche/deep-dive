<script setup lang="ts">
import { getGasParameters } from '@/core/ScubaDiver'
import { useScubaDiver } from '@/stores/scubadiver'
import { useTimer } from '@/stores/timer'
import { computed, watch } from 'vue'

const store = useScubaDiver()
const timeStore = useTimer()
const gasParameters = computed(() => getGasParameters(store.scubadiver))
watch(store.scubadiver, (scubadiver) => {
  scubadiver.depth > 0 ? timeStore.start() : timeStore.stop()
})
</script>

<template>
  <div class="monitor">
    <section class="computer">
      <p>{{ store.scubadiver.depth.toFixed(1) }} <span>m</span></p>
      <p class="maxDepth">
        <span>Max</span> {{ store.scubadiver.maxDepth.toFixed(1) }} <span>m</span>
      </p>
      <p>{{ timeStore.timer }} <span>min</span></p>
    </section>
    <section>
      <p>gas volume (l): {{ gasParameters.tankGas }}</p>
      <p>pressure: {{ store.scubadiver.pressure }}</p>
      <p>gas autonomy (min): {{ gasParameters.autonomy }}</p>
    </section>
  </div>
</template>

<style scoped>
.monitor {
  position: absolute;
  margin: 20px;
}

.computer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  /* border: 4px solid black; */
  border-radius: 40%;
  background-color: whitesmoke;
  color: gray;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
