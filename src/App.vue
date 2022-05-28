<script setup lang="ts">
import { useDialogStore } from "./stores/dialog";
import AppDialog from "./components/app/dialog/AppDialog.vue";

const dialogStore = useDialogStore();
</script>

<template>
    <router-view />
    <div id="dialog">
        <AppDialog
            v-for="(dialog, idx) in dialogStore.dialogInfoList"
            :key="idx"
            :vNode="dialog.vNode"
            @close="dialogStore.closeDialog(idx)"
        ></AppDialog>
    </div>
</template>

<style lang="scss">
@import "./styles/app.scss";

#dialog {
}
</style>
