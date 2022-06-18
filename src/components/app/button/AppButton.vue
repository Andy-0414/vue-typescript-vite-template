<script setup lang="ts"></script>

<template>
    <button class="app-button">버튼</button>
</template>

<style lang="scss" scoped>
.app-button {
    @include button;

    border-radius: 100px;
    padding: 10px 80px;

    font-size: 20px;
    color: white;

    &:hover {
        filter: brightness(0.9);
    }
    &:active {
        filter: brightness(0.95);
    }
}
</style>
