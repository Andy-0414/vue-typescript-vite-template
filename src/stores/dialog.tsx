import { defineStore } from "pinia";
import { VNode } from "vue";
import AppDialog from "../components/app/dialog/AppDialog.vue"

interface DialogInfo {
    vNode: VNode;
}

export const useDialogStore = defineStore("counterStore", {
    state: () => ({
        dialogInfoList: [] as DialogInfo[],
    }),
    actions: {
        closeDialog(idx: number) {
            this.$state.dialogInfoList.splice(idx, 1);
        },
        async showTextDialog(text: string) {
            let idx = this.$state.dialogInfoList.length;
            this.$state.dialogInfoList.push({
                vNode: (
                    <div>
                        {text}
                    </div>
                ),
            });
        },
    },
});
