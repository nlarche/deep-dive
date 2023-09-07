<script setup lang="ts">
import { useStab } from '@/stores/stab';
import controlWrapper from './controlWrapper.vue';

const store = useStab()
</script>

<template>
    <controlWrapper class="bcd-container">
        <div class="bcd"></div>
        <progress min="0" :max="store.stab.max" :value="store.stab.volume"></progress>
        <div class="actions">
            <button @click="store.inflate">+</button>
            <button @click="store.deflate">-</button>
            <button @click="store.purge">💨</button>
        </div>
    </controlWrapper>
</template>

<style scoped>
.bcd-container {
    --_size: 3em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

progress {
    rotate: -90deg;
    width: var(--_size);
}

.bcd {
    background-image: url('@/assets/bcd.png');
    background-size: contain;
    width: var(--_size);
    height: var(--_size);
}

.actions {
    display: flex;
    flex-direction: column;
}
</style>


