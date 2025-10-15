/** @typedef {typeof __propDef.props}  RadioCardProps */
/** @typedef {typeof __propDef.events}  RadioCardEvents */
/** @typedef {typeof __propDef.slots}  RadioCardSlots */
export default class RadioCard extends SvelteComponent<{
    [x: string]: any;
    group?: any;
    value?: any;
    name?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    id?: string | undefined;
    disabled?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type RadioCardProps = typeof __propDef.props;
export type RadioCardEvents = typeof __propDef.events;
export type RadioCardSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        group?: any;
        value?: any;
        name?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        id?: string | undefined;
        disabled?: boolean | undefined;
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
//# sourceMappingURL=RadioCard.svelte.d.ts.map