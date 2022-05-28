import { Directive } from "vue";

export default {
    beforeMount: (el: HTMLDivElement) => {
        el.style.userSelect = "none";
        el.oncontextmenu = function (e) {
            e.preventDefault();
        };
    },
} as Directive;
