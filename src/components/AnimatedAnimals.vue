<script setup lang="ts">
import { onMounted, ref } from 'vue';


const props = defineProps({ image: String, depth: Number, size: Number, rotate: Number, scaleX: Number, startLeft: Boolean })

const animal = ref<HTMLDivElement | null>(null)
onMounted(() => {
    if (animal.value && animal.value.style) {
        animal.value.style.animationDelay = Math.random() * 10 + 's'
        animal.value.style.animationDuration = Math.random() > 0.5 ? '20s' : '25s'

    }
})

</script>
<template>
    <div ref="animal" class="animals" :class="{ 'left': props.startLeft, 'right': !props.startLeft }" :style="{
        'background-image': `url(${props.image})`,
        'top': `${props.depth}em`,
        'height': `${props.size}em`,
        'width': `${props.size}em`,
        'transform': `rotate(${props.rotate || 0}deg) scaleX(${props.scaleX || 1})`,
    }"></div>
</template>
<style scoped>
.animals {
    position: relative;
    left: -20%;
    background-size: contain;
}


.left {
    animation: leftToRight 20s linear infinite;
}

.right {
    animation: rightToLeft 20s linear infinite;
}



@keyframes leftToRight {
    0% {
        left: -20%
    }

    50% {
        left: 50%
    }

    100% {
        left: 110%
    }
}

@keyframes rightToLeft {
    0% {
        left: 110%
    }

    50% {
        left: 50%
    }

    100% {
        left: -10%
    }
}
</style>