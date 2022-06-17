<script setup lang="ts">
import AppButton from "./AppButton.vue";
</script>

<template>
    <AppButton class="app-flexible-button">
        <slot></slot>
    </AppButton>
</template>

<style lang="scss" scoped>
.app-flexible-button {
    width: 100%;
    height: 100%;

    border-radius: 15px;
    padding: 10px;
}
</style>
