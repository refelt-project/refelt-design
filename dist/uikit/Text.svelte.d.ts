/** @typedef {typeof __propDef.props}  TextProps */
/** @typedef {typeof __propDef.events}  TextEvents */
/** @typedef {typeof __propDef.slots}  TextSlots */
export default class Text extends SvelteComponent<{
    [x: string]: any;
    as?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TextProps = typeof __propDef.props;
export type TextEvents = typeof __propDef.events;
export type TextSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        as?: string | undefined;
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
//# sourceMappingURL=Text.svelte.d.ts.map