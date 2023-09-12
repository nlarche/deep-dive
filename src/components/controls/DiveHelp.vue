<script setup lang="ts">
import { ref } from 'vue';
import QuestionIcon from '../icons/QuestionIcon.vue';
import DiveModal from '../common/DiveModal.vue';
// @ts-ignore
import { VueComponent } from '../../../README.md';
const open = ref(false);
</script>

<template>
    <div class="wrapper">
        <div class="question" @click="open = true">
            <QuestionIcon></QuestionIcon>
        </div>
        <DiveModal v-if="open" @close="open = false">
            <VueComponent />
        </DiveModal>
    </div>
</template>

<style scoped>
.wrapper {
    place-self: self-end;
}

.question {
    cursor: pointer;
    height: 2em;
    width: 2em;
}
</style>