<script setup lang="ts">
import { ref } from "vue";
import Counter from "../components/Counter.vue";
import vLoading from "../directives/vLoading/vLoading";
import vUseDisabled from "../directives/vUseDisabled/vUseDisabled";
import { useDialogStore } from "../stores/dialog";
import AppButton from "../components/app/button/AppButton.vue";
import AppInput from "../components/app/input/AppInput.vue";
import AppSelector from "../components/app/input/AppSelector.vue";

const dialogStore = useDialogStore();

const inputMessage = ref("default value");
const dialogMessage = ref("");
</script>

<template>
    <div class="home">
        <h2 class="home__title">Home.vue</h2>
        <div class="home__components">
            <div class="home__components__item">
                <Counter></Counter>
            </div>
            <div class="home__components__item">
                <h3>AppButton</h3>
                <AppButton></AppButton>
            </div>
            <div class="home__components__item" style="margin-bottom: 100px">
                <h3>AppInput</h3>
                <AppInput v-model="inputMessage" button-text="입력" @click-button="inputMessage += '123'"></AppInput>
                {{ inputMessage }}
            </div>
            <div class="home__components__item" style="margin-bottom: 100px">
                <h3>AppSelector</h3>
                <AppSelector v-model="inputMessage"></AppSelector>
                {{ inputMessage }}
            </div>
            <div class="home__components__item">
                <h3>Loading Directive</h3>
                <div class="box" v-loading v-use-disabled>ID: <input /></div>
            </div>
            <div class="home__components__item">
                <h3>Custom Dialog</h3>
                <AppInput v-model="dialogMessage" button-text="보기" @click-button="dialogStore.showTextDialog(dialogMessage)"></AppInput>
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
