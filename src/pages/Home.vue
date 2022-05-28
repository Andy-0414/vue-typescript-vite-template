<script setup lang="ts">
import Counter from "../components/Counter.vue";
import vLoading from "../directive/vLoading/vLoading";
import vUseDisabled from "../directive/vUseDisabled/vUseDisabled";
</script>

<template>
    <div class="home">
        <h2 class="home__title">Home.vue</h2>
        <div class="home__components">
            <div class="home__components__item">
                <Counter></Counter>
            </div>
            <div class="home__components__item">
                <h3>Loading Directive</h3>
                <div class="box" v-loading v-use-disabled>ID: <input /></div>
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
            .box {
                display: flex;
                justify-content: center;
                align-items: center;

                width: 200px;
                height: 200px;

                border: 2px solid black;
                border-radius: 5px;
            }
        }
    }
}
</style>
