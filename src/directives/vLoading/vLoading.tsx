import { Directive, render } from "vue";
import VLoading from "./VLoading.vue";

export default {
    beforeMount: (el: HTMLDivElement) => {
        if (!["relative", "absolute", "fixed"].includes(el.style.position))
            el.style.position = "relative";

        // render(h(VLoading), el); // 다른 방법
        render(<VLoading></VLoading>, el);
    },
} as Directive;
