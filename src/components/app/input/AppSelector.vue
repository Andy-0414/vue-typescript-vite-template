<script setup lang="ts">
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import AppIcon from "../AppIcon.vue";
import { mdiTriangleSmallDown } from "@mdi/js";
interface Props {
    hintText?: string;
    modelValue: string;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const modelValue = computed(() => props.modelValue);
const isShowList = ref(false);

function handleSelectItem(value: string) {
    emit("update:modelValue", value);
    isShowList.value = !isShowList.value;
}
</script>

<template>
    <div class="app-selector">
        <div class="app-selector__input" @click="isShowList = !isShowList">
            <span>{{ modelValue }}</span>
            <AppIcon :path="mdiTriangleSmallDown"></AppIcon>
        </div>
        <div class="app-selector__list" v-if="isShowList">
            <div class="app-selector__list__item" v-for="num of 10" :key="num" @click="handleSelectItem(String(num))">{{ num }}</div>
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
        width: 100%;
        height: fit-content;
        max-height: 200px;

        overflow: hidden;
        overflow-y: scroll;

        display: flex;
        flex-direction: column;

        position: absolute;
        top: calc(100% + 5px);

        background: white;

        z-index: 1;

        &__item {
            @include clickable;

            padding: 10px;
            border-bottom: 1px solid gray;

            background-color: #dddddd;

            &:last-child {
                border-bottom: none;
            }

            &:hover {
                filter: brightness(0.9);
            }
            &:active {
                filter: brightness(0.95);
            }
        }
    }
    &__hint-text {
        @include hint-text;
    }
}
</style>
