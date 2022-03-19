import {onBeforeMount, ref} from "vue";
import {FIELD, LEVEL} from "@/constants";

export default function useGameInit(number) {
    let level = ref(LEVEL);
    let fields = ref([]);
    const init = () => {
        fields.value = [];
        for (let i = 0; i < number; i++) {
            fields.value.push({
                id: i,
                clicked: false,
                value: FIELD.EMPTY
            });
        }
    };
    onBeforeMount(init);
    return {
        level,
        fields,
        init
    }
}