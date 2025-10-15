/** @typedef {typeof __propDef.props}  RadioProps */
/** @typedef {typeof __propDef.events}  RadioEvents */
/** @typedef {typeof __propDef.slots}  RadioSlots */
export default class Radio extends SvelteComponent<{
    [x: string]: any;
    group?: any;
    name?: string | undefined;
    disabled?: boolean | undefined;
    label?: string | undefined;
    value?: any;
    id?: string | undefined;
}, {
    change: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RadioProps = typeof __propDef.props;
export type RadioEvents = typeof __propDef.events;
export type RadioSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        group?: any;
        name?: string | undefined;
        disabled?: boolean | undefined;
        label?: string | undefined;
        value?: any;
        id?: string | undefined;
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
//# sourceMappingURL=Radio.svelte.d.ts.map