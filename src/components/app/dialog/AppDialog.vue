<script setup lang="ts">
import { VNode, onMounted, render, ref, VNodeRef } from "vue";
import SlideTransition from "../../../transitions/SlideTransition.vue";

interface Props {
    vNode?: VNode;
}
const props = defineProps<Props>();

const emit = defineEmits(["close"]);

const content: VNodeRef = ref(); // component

onMounted(() => {
    if (props.vNode) {
        render(props.vNode, content.value);
    }
});
</script>

<template>
    <div class="app-dialog">
        <SlideTransition>
            <div class="app-dialog__box">
                <div class="app-dialog__box__top__actions">
                    <div
                        class="app-dialog__box__top__actions__close"
                        @click="emit('close')"
                    >
                        ✕
                    </div>
                </div>
                <div class="app-dialog__box__content" ref="content">
                    <slot></slot>
                </div>
            </div>
        </SlideTransition>
    </div>
</template>

<style lang="scss" scoped>
.app-dialog {
    position: fixed;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.25);

    &__box {
        position: relative;

        background-color: white;
        border-radius: 5px;
        padding: 30px;

        &__top__actions {
            width: 100%;

            display: flex;
            justify-content: flex-end;

            position: absolute;
            left: 0;
            top: 0;

            &__close {
                cursor: pointer;

                padding: 10px;
            }
        }
    }
}
</style>
