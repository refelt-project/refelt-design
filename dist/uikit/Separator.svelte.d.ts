/** @typedef {typeof __propDef.props}  SeparatorProps */
/** @typedef {typeof __propDef.events}  SeparatorEvents */
/** @typedef {typeof __propDef.slots}  SeparatorSlots */
export default class Separator extends SvelteComponent<{
    [x: string]: any;
    orientation?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SeparatorProps = typeof __propDef.props;
export type SeparatorEvents = typeof __propDef.events;
export type SeparatorSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        orientation?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
