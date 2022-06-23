<script setup lang="ts">
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import AppIcon from "../AppIcon.vue";
import { mdiTriangleSmallDown } from "@mdi/js";
import AppInput from "./AppInput.vue";
interface Props {
    hintText?: string;
    modelValue: string;
    list: string[];
}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const isShowList = ref(false);
const searchModelValue = ref("");

const modelValue = computed(() => props.modelValue);
const filteredList = computed(() => {
    if (!searchModelValue.value) return props.list;
    else return props.list.filter((i) => i.includes(searchModelValue.value));
});

function handleSelectItem(value: string) {
    emit("update:modelValue", value);
    searchModelValue.value = value;
    isShowList.value = !isShowList.value;
}
</script>

<template>
    <div class="app-selector">
        <AppInput v-model="searchModelValue" class="app-selector__input" @blur="isShowList = false" @focus="isShowList = true">
            <!-- <span>{{ modelValue }}</span>
            <AppIcon :path="mdiTriangleSmallDown"></AppIcon> -->
        </AppInput>
        <div class="app-selector__list" v-if="isShowList">
            <div class="app-selector__list__item" v-for="item of filteredList" :key="item" @mousedown="handleSelectItem(item)">{{ item }}</div>
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
        width: 100%;
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
