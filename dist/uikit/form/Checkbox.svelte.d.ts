/** @typedef {typeof __propDef.props}  CheckboxProps */
/** @typedef {typeof __propDef.events}  CheckboxEvents */
/** @typedef {typeof __propDef.slots}  CheckboxSlots */
export default class Checkbox extends SvelteComponent<{
    [x: string]: any;
    id?: string | undefined;
    disabled?: boolean | undefined;
    label?: string | undefined;
    checked?: boolean | undefined;
}, {
    change: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        id?: string | undefined;
        disabled?: boolean | undefined;
        label?: string | undefined;
        checked?: boolean | undefined;
    };
    events: {
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
//# sourceMappingURL=Checkbox.svelte.d.ts.map