import { defineStore } from "pinia";

export const useCounterStore = defineStore("counterStore", {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
        },
    },
});
