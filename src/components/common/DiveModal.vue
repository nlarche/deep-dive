<script setup lang="ts">
const emit = defineEmits(['close'])

</script>

<template>
    <Teleport to="body">
        <div class="wrapper" @click="emit('close')">
            <div class="modal">
                <slot />
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.wrapper {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.50);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

}

.modal {
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background: white;
    border-radius: 20px;
    padding: 2em;
    overflow-y: scroll;
}
</style>