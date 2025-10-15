/** @typedef {typeof __propDef.props}  LabelProps */
/** @typedef {typeof __propDef.events}  LabelEvents */
/** @typedef {typeof __propDef.slots}  LabelSlots */
export default class Label extends SvelteComponent<{
    [x: string]: any;
    required?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type LabelProps = typeof __propDef.props;
export type LabelEvents = typeof __propDef.events;
export type LabelSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        required?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
//# sourceMappingURL=Label.svelte.d.ts.map