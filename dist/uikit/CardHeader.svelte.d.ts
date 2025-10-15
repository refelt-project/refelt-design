/** @typedef {typeof __propDef.props}  CardHeaderProps */
/** @typedef {typeof __propDef.events}  CardHeaderEvents */
/** @typedef {typeof __propDef.slots}  CardHeaderSlots */
export default class CardHeader extends SvelteComponent<{
    class?: string | undefined;
    title?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    action: {};
}> {
}
export type CardHeaderProps = typeof __propDef.props;
export type CardHeaderEvents = typeof __propDef.events;
export type CardHeaderSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        title?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        action: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
