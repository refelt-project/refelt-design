/** @typedef {typeof __propDef.props}  SwitchProps */
/** @typedef {typeof __propDef.events}  SwitchEvents */
/** @typedef {typeof __propDef.slots}  SwitchSlots */
export default class Switch extends SvelteComponent<{
    [x: string]: any;
    disabled?: boolean | undefined;
    id?: string | undefined;
    label?: string | undefined;
    checked?: boolean | undefined;
}, {
    change: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SwitchProps = typeof __propDef.props;
export type SwitchEvents = typeof __propDef.events;
export type SwitchSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean | undefined;
        id?: string | undefined;
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
//# sourceMappingURL=Switch.svelte.d.ts.map