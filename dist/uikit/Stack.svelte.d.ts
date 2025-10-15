/** @typedef {typeof __propDef.props}  StackProps */
/** @typedef {typeof __propDef.events}  StackEvents */
/** @typedef {typeof __propDef.slots}  StackSlots */
export default class Stack extends SvelteComponent<{
    [x: string]: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type StackProps = typeof __propDef.props;
export type StackEvents = typeof __propDef.events;
export type StackSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
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
//# sourceMappingURL=Stack.svelte.d.ts.map