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
    .app-input__input {
        width: 100%;

        border: none;
        border-radius: 5px;
        padding: 10px;

        &:focus {
            outline: thin solid rgba($primary-color, 0.2);
        }
    }
    .app-input__button {
        margin-left: 10px;
    }
    .app-input__hint-text {
        position: absolute;
        top: calc(100% + 10px);

        font-size: 12px;
        color: $sub-dark-gray;
    }
}
</style>
