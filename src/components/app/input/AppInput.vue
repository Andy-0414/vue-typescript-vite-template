<script setup lang="ts">
import { computed } from "@vue/reactivity";
import AppSmallButton from "../button/AppSmallButton.vue";

interface Props {
    buttonText?: string;
    hintText?: string;
    modelValue: string;
}
const props = defineProps<Props>();
const emit = defineEmits(["click-button", "update:modelValue"]);

const modelValue = computed(() => props.modelValue);

function handleInput(e: Event) {
    emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>

<template>
    <div class="app-input">
        <input v-model="modelValue" @input="handleInput" class="app-input__input" type="text" />
        <AppSmallButton v-if="props.buttonText" class="app-input__button" @click="emit('click-button')">{{ props.buttonText }}</AppSmallButton>
        <div v-if="props.hintText" class="app-input__hint-text">{{ hintText }}</div>
    </div>
</template>

<style lang="scss" scoped>
.app-input {
    position: relative;

    display: flex;

    width: auto;
    &__input {
        @include input;
    }
    &__button {
        margin-left: 10px;
    }
    &__hint-text {
        @include hint-text;
    }
}
</style>
