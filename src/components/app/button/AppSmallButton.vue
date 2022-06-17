<script setup lang="ts">
import AppButton from "./AppButton.vue";
</script>

<template>
    <AppButton class="app-small-button">
        <slot></slot>
    </AppButton>
</template>

<style lang="scss" scoped>
.app-small-button {
    width: fit-content;
    min-width: 60px;
    height: 40px;

    border-radius: 5px;
    padding: 10px;

    font-size: 16px;
}
</style>
