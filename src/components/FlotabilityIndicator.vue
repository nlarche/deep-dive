<script setup lang="ts">
import { useScubaDiver } from '@/stores/scubadiver';

const store = useScubaDiver()
</script>

<template>
    <div class="floatabilityIndicator">
        <div v-show="store.scubadiver.flotability === 0">=</div>
        <div v-show="store.scubadiver.flotability < 0">down</div>
        <div v-show="store.scubadiver.flotability > 0">up</div>
    </div>
</template>

<style scoped>
.floatabilityIndicator {
    --_size: 3em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 10em;
    width: 10em;
    border-radius: 40%;
    background-color: whitesmoke;
    color: gray;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>