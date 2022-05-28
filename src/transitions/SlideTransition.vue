<script setup lang="ts"></script>

<template>
    <transition name="slide" appear>
        <slot></slot>
    </transition>
</template>

<style lang="scss" scoped>
.slide-enter-active {
    transition: all 0.3s ease-out;
}

.slide-leave-active {
    transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>
