/** @typedef {typeof __propDef.props}  ItemCardProps */
/** @typedef {typeof __propDef.events}  ItemCardEvents */
/** @typedef {typeof __propDef.slots}  ItemCardSlots */
export default class ItemCard extends SvelteComponent<{
    [x: string]: any;
    disabled?: boolean | undefined;
    as?: string | undefined;
    href?: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    actions: {};
}> {
}
export type ItemCardProps = typeof __propDef.props;
export type ItemCardEvents = typeof __propDef.events;
export type ItemCardSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean | undefined;
        as?: string | undefined;
        href?: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
        actions: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
//# sourceMappingURL=ItemCard.svelte.d.ts.map