<script setup lang="ts">
import { useStab } from '@/stores/stab';

const store = useStab()
</script>

<template>
    <section class="bcd-container">
        <div class="bcd"></div>
        <progress min="0" :max="store.stab.max" :value="store.stab.volume"></progress>
        <div class="actions">
            <button @click="store.inflate">+</button>
            <button @click="store.deflate">-</button>
            <button @click="store.purge">💨</button>
        </div>
    </section>
</template>

<style scoped>
.bcd-container {
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


