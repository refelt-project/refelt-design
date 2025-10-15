/** @typedef {typeof __propDef.props}  InputProps */
/** @typedef {typeof __propDef.events}  InputEvents */
/** @typedef {typeof __propDef.slots}  InputSlots */
export default class Input extends SvelteComponent<{
    [x: string]: any;
    disabled?: boolean | undefined;
    label?: string | undefined;
    value?: string | undefined;
    id?: string | undefined;
    type?: string | undefined;
    placeholder?: string | undefined;
    min?: any;
    max?: any;
    step?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean | undefined;
        label?: string | undefined;
        value?: string | undefined;
        id?: string | undefined;
        type?: string | undefined;
        placeholder?: string | undefined;
        min?: any;
        max?: any;
        step?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
//# sourceMappingURL=Input.svelte.d.ts.map