<script setup lang="ts">
import ManoMeter from './ManoMeter.vue';
import BuoyancyControlDevice from './BuoyancyControlDevice.vue';
import FlotabilityIndicator from './FlotabilityIndicator.vue';
import DiveComputer from './DiveComputer.vue';
</script>
<template>
    <div class="controls">
        <DiveComputer class="firstLeft" />
        <ManoMeter class="firstRight" />
        <BuoyancyControlDevice class="secondLeft" />
        <FlotabilityIndicator class="thirdLeft" />
    </div>
</template>

<style>
.controls {
    z-index: 1;
    position: absolute;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    box-sizing: border-box;
    padding: 1em;
}

.firstLeft {
    grid-area: 1 / 1 / 2 / 2;
}

.firstRight {
    grid-area: 1 / 5 / 2 / 6;
}

.secondLeft {
    grid-area: 2 / 1 / 3 / 2;
}

.thirdLeft {
    grid-area: 3 / 1 / 4 / 2;
}
</style>