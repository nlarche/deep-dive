<script setup lang="ts">
import { useScubaDiver } from '@/stores/scubadiver'

const store = useScubaDiver()
const isOnReserve = (() => store.scubadiver.tank.reserve >= store.scubadiver.tank.pressure)
</script>

<template>
    <section class="manometer">
        <p :class="{ reserve: isOnReserve() }">{{ Math.round(store.scubadiver.tank.pressure) }} <span>bar</span></p>
    </section>
</template>

<style scoped>
.manometer {
    position: absolute;
    margin: 20px;
    right: 10px;
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

.manometer p {
    font-size: xx-large;
}

.manometre p span {
    font-size: xx-small;
}

.reserve {
    color: red;
}
</style>
