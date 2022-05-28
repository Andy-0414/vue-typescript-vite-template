<script setup lang="ts"></script>

<template>
    <transition name="fade" appear>
        <slot></slot>
    </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active {
    transition: all 0.3s ease-out;
}

.fade-leave-active {
    transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
