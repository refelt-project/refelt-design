/** @typedef {typeof __propDef.props}  GridProps */
/** @typedef {typeof __propDef.events}  GridEvents */
/** @typedef {typeof __propDef.slots}  GridSlots */
export default class Grid extends SvelteComponent<{
    [x: string]: any;
    columns?: string | undefined;
    rows?: string | undefined;
    preset?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type GridProps = typeof __propDef.props;
export type GridEvents = typeof __propDef.events;
export type GridSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        columns?: string | undefined;
        rows?: string | undefined;
        preset?: string | undefined;
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
//# sourceMappingURL=Grid.svelte.d.ts.map