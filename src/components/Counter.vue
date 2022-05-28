<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();
</script>

<template>
    <div class="counter">
        <h3 class="counter__title">Counter.vue</h3>
        <button class="counter__add" @click="counterStore.increment()">
            +1
        </button>
        <button class="counter__add" @click="counterStore.$reset()">
            reset
        </button>
        <span class="counter__number">
            {{ counterStore.count }}
        </span>
    </div>
</template>

<style lang="scss" scoped>
.counter {
    display: flex;
    flex-direction: column;

    text-align: center;
}
</style>
