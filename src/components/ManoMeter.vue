<script setup lang="ts">
import { useScubaDiver } from '@/stores/scubadiver'
import { ref, watch } from 'vue';

const manometer = ref<HTMLDivElement | null>(null)

const store = useScubaDiver()

watch(store.scubadiver, (diver) => {
    if (manometer.value) {
        // 150 os 0 deg // 300 is 118 deg
        const delta = diver.tank.pressure - 150
        const pressure = Math.round(delta * 118 / 150)
        manometer.value.style.setProperty('--_arm', `${pressure}deg`);
    }
})

const valuesToDisplay = [0, 5, 10, 15, 20, 25, 30]
const ticks = Array.from({ length: 31 }).map((i, index) => index).map(i => valuesToDisplay.includes(i) ? '' + (i * 10) : '-')
</script>

<template>
    <section class="manometer" ref="manometer">
        <div class="manometer-face">
            <span class="legend">Bar</span>
            <span class="number" :class="{ tick: tick === '-', reserve: i <= 5 }" v-for="(tick, i) in ticks" :key="i">{{
                tick }}</span>
            <span class="arm"></span>
            <span class="about">Made by nlarche</span>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.manometer {
    z-index: 1;
    position: absolute;
    margin: 20px;
    right: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    --_ow: 10em;
    --_w: 92cqi;
    --_r: calc((var(--_w) - var(--_sz)) / 2);
    --_sz: 12cqi;

    background: #222;
    block-size: var(--_ow);
    border-radius: 50%;
    container-type: inline-size;
    display: grid;
    inline-size: var(--_ow);
    margin-inline: auto;
    place-content: center;
}


.manometer-face {
    aspect-ratio: 1;
    background: var(--_bgc, #FFF);
    border-radius: 50%;
    block-size: var(--_w);
    font-size: xx-small;
    font-weight: 700;
    list-style-type: none;
    inline-size: var(--_w);
    padding: unset;
    position: relative;
}


.reserve {
    color: red;
    font-weight: bold;
}

.number {
    --_x: calc(var(--_r) + (var(--_r) * cos(var(--_d))));
    --_y: calc(var(--_r) + (var(--_r) * sin(var(--_d))));
    display: grid;
    height: var(--_sz);
    left: var(--_x);
    place-content: center;
    position: absolute;
    top: var(--_y);
    width: var(--_sz);
}

.tick {
    transform: rotate(var(--_d));
}

$deg : 150deg;

@for $i from 31 to -1 {
    $add : calc($i * 8deg);
    $d: calc($deg + $add);

    .number:nth-child(#{$i+1}) {
        --_d: #{$d};
    }
}

.legend {
    position: absolute;
    top: 25cqi;
    left: 40cqi
}

.about {
    position: absolute;
    top: 55cqi;
    left: 30cqi;
    font-size: 0.5em
}


.arm {
    --_abg: rgb(39, 35, 31);
    --_ah: 40cqi;
    --_aw: 1cqi;
    background-color: var(--_abg);
    border-radius: calc(var(--_aw) * 2);
    display: block;
    height: var(--_ah);
    left: calc((var(--_w) - var(--_aw)) / 2);
    position: absolute;
    top: calc((var(--_w) / 2) - var(--_ah));
    transform: rotate(0deg);
    transform-origin: bottom;
    width: var(--_aw);
    rotate: var(--_arm);
}


.arm::before {
    background-color: #fff;
    border: 1cqi solid #333;
    border-radius: 50%;
    content: "";
    display: block;
    height: 4cqi;
    position: absolute;
    bottom: -3cqi;
    left: -1.75cqi;
    width: 4cqi;
}


// @keyframes turn {
//     to {
//         transform: rotate(1turn);
//     }
// }

// @supports not (left: calc(1px * cos(45deg))) {
//     .number {
//         left: 50% !important;
//         top: 50% !important;
//         transform: translate(-50%, -50%) rotate(var(--_d)) translate(var(--_r)) rotate(calc(-1*var(--_d)));
//     }

// }
</style>


