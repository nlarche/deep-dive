<script setup lang="ts">
import { useScubaDiver } from '@/stores/scubadiver';
import controlWrapper from './controlWrapper.vue';
import EqualIcon from "@/components/icons/EqualIcon.vue"
import ArrowDownRight from "@/components/icons/ArrowDownRight.vue"
import ArrowUpRight from "@/components/icons/ArrowUpRight.vue"

const store = useScubaDiver()
</script>

<template>
    <controlWrapper class="floatabilityIndicator">
        <div v-show="store.scubadiver.flotability === 0">
            <EqualIcon />
        </div>
        <div v-show="store.scubadiver.flotability < 0">
            <ArrowDownRight />
        </div>
        <div v-show="store.scubadiver.flotability > 0">
            <ArrowUpRight />
        </div>
    </controlWrapper>
</template>

<style scoped>
.floatabilityIndicator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

div {
    width: 3em;
    font-size: medium;
}
</style>