<script setup lang="ts">
import { computed } from 'vue'
import AnimatedAnimals from './AnimatedAnimals.vue';
import { useAnimals } from '@/stores/animals'

const store = useAnimals()

const props = defineProps({ pressure: Number })

const marginTop = computed(() => {
    return props.pressure ? `-${(props.pressure - 1) * 40}%` : '0%'
})

</script>
<template>
    <div class="sky"></div>
    <div class="sea" :style="{ 'margin-top': marginTop }">
        <AnimatedAnimals v-for="(animal, i) in store.animals" :key="i" :image="animal.image" :depth="animal.depth"
            :size="animal.size" :startLeft="animal.startLeft" :rotate="animal.rotate" :scaleX="animal.scaleX" />
    </div>
</template>

<style>
.sky {
    background-color: #52b9e6;
    height: 50vh;
}

.sea {
    background: linear-gradient(180deg, rgba(29, 149, 215, 1) 5%, rgba(27, 134, 210, 1) 10%, rgba(24, 128, 197, 1) 15%, rgba(25, 121, 191, 1) 20%, rgba(22, 117, 180, 1) 30%, rgba(20, 101, 161, 1) 40%, rgba(16, 85, 139, 1) 50%, rgba(12, 54, 92, 1) 60%, rgb(5, 39, 70) 100%);
    height: 1000vh;
}
</style>