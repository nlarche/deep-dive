<script setup lang="ts">
import ManoMeter from './ManoMeter.vue';
import BuoyancyControlDevice from './BuoyancyControlDevice.vue';
import FlotabilityIndicator from './FlotabilityIndicator.vue';
import DiveComputer from './DiveComputer.vue';
import DiveHelp from './DiveHelp.vue';
</script>
<template>
    <div class="controls">
        <DiveComputer class="firstLeft" />
        <ManoMeter class="firstRight" />
        <BuoyancyControlDevice class="secondLeft" />
        <FlotabilityIndicator class="thirdLeft" />
        <DiveHelp class="bottomLeft" />
    </div>
</template>

<style>
.controls {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: repeat(6, 1fr);
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

.bottomLeft {
    grid-area: 6 / 5 / 7 / 6;
}
</style>