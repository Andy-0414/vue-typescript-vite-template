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
        /**
         * @description idx 번째 다이얼로그를 삭제합니다.
         * @param idx 다이얼로그 인덱스
         */
        closeDialog(idx: number) {
            this.$state.dialogInfoList.splice(idx, 1);
        },
        /**
         * @description 단순 텍스트 다이얼로그를 띄웁니다.
         * @param text 
         */
        showTextDialog(text: string) {
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
