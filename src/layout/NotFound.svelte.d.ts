/** @typedef {typeof __propDef.props}  NotFoundProps */
/** @typedef {typeof __propDef.events}  NotFoundEvents */
/** @typedef {typeof __propDef.slots}  NotFoundSlots */
export default class NotFound extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NotFoundProps = typeof __propDef.props;
export type NotFoundEvents = typeof __propDef.events;
export type NotFoundSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
//# sourceMappingURL=NotFound.svelte.d.ts.map