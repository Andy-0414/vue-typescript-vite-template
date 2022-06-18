<script setup lang="ts">
import { computed } from "@vue/reactivity";
import AppIcon from "../AppIcon.vue";
import { mdiTriangleSmallDown } from "@mdi/js";
interface Props {
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
    <div class="app-selector">
        <div class="app-selector__input">
            <span></span>
            <AppIcon :path="mdiTriangleSmallDown"></AppIcon>
        </div>
        <div class="app-selector__list">
            <div class="app-selector__list__item">1</div>
            <div class="app-selector__list__item">2</div>
        </div>
        <div v-if="props.hintText" class="app-selector__hint-text">{{ hintText }}</div>
    </div>
</template>

<style lang="scss" scoped>
.app-selector {
    position: relative;

    display: flex;

    width: auto;
    &__input {
        @include clickable;
        @include input;
        display: flex;
        justify-content: space-between;
    }
    &__list {
        display: flex;
        flex-direction: column;

        position: absolute;
        top: calc(100% + 10px);
    }
    &__hint-text {
        @include hint-text;
    }
}
</style>
