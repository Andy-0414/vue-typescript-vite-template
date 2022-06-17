<script setup lang="ts">
import AppSmallButton from "../button/AppSmallButton.vue";

interface Props {
    buttonText?: string;
}
const props = defineProps<Props>();
</script>

<template>
    <div class="app-input">
        <input class="app-input__input" type="text" />
        <AppSmallButton class="app-input__button" v-if="props.buttonText">{{ props.buttonText }}</AppSmallButton>
        <div class="app-input__hint-text">힌트 문구</div>
    </div>
</template>

<style lang="scss" scoped>
.app-input {
    position: relative;

    display: flex;

    width: auto;
    .app-input__input {
        width: 100%;

        border: none;
        border-radius: 5px;
        padding: 10px;

        &:focus {
            outline: thin solid rgba($primary-color, 0.2);
        }
    }
    .app-input__button {
        margin-left: 10px;
    }
    .app-input__hint-text {
        position: absolute;
        top: calc(100% + 10px);

        font-size: 12px;
        color: $sub-dark-gray;
    }
}
</style>
