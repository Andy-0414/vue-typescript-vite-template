<script setup lang="ts">
import Counter from "../components/Counter.vue";
</script>

<template>
    <div class="home">
        <h2 class="home__title">Home.vue</h2>
        <div class="home__components">
            <div class="home__components__item">
                <Counter></Counter>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    &__title {
        font-size: 72px;
        margin-bottom: 20px;
    }

    &__components {
        display: flex;
        flex-direction: column;

        &__item {
        }
    }
}
</style>
