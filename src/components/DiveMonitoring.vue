<script setup lang="ts">
import { getGasParameters } from '@/core/ScubaDiver'
import { useScubaDiver } from '@/stores/scubadiver'
import { computed } from 'vue'

const store = useScubaDiver()
const gasParameters = computed(() => getGasParameters(store.scubadiver))
const dive = computed(() => store.scubadiver.dive)

</script>

<template>
  <div class="monitor">
    <section class="computer">
      <p>{{ dive.depth.toFixed(1) }} <span>m</span></p>
      <p class="maxDepth">
        <span>Max</span> {{ dive.maxDepth.toFixed(1) }} <span>m</span>
      </p>
      <p>{{ dive.time }} <span>min</span></p>
    </section>
    <section>
      <p>gas volume (l): {{ gasParameters.tankGas }}</p>
      <p>pressure: {{ dive.pressure }}</p>
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
  height: 10em;
  width: 10em;
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
