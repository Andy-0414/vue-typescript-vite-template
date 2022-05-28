<script setup lang="ts"></script>

<template>
    <div class="v-loading">
        <div class="v-loading__circle"></div>
    </div>
</template>

<style lang="scss" scoped>
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
.v-loading {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.25);

    &__circle {
        width: 24px;
        height: 24px;

        border-top: 2px solid white;
        /* border-right: 2px solid none; */

        animation: spin 1s ease infinite;
        border-radius: 100%;
    }
}
</style>
