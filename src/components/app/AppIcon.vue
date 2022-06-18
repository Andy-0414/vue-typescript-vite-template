<script setup lang="ts">
import { computed } from "@vue/reactivity";

interface Props {
    size?: number;
    color?: string;
    path: string;
}
const props = withDefaults(defineProps<Props>(), {
    color: "#000000",
    size: 24,
});

const size = computed(() => `${props.size}px`);
</script>

<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" :fill="color">
        <path :d="path" />
    </svg>
</template>

<style lang="scss" scoped></style>
