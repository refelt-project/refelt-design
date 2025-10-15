/** @typedef {typeof __propDef.props}  ItemLinkProps */
/** @typedef {typeof __propDef.events}  ItemLinkEvents */
/** @typedef {typeof __propDef.slots}  ItemLinkSlots */
export default class ItemLink extends SvelteComponent<{
    [x: string]: any;
    href?: string | undefined;
    target?: any;
    rel?: any;
    muted?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    leading: {};
    default: {};
    trailing: {};
}> {
}
export type ItemLinkProps = typeof __propDef.props;
export type ItemLinkEvents = typeof __propDef.events;
export type ItemLinkSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        target?: any;
        rel?: any;
        muted?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        leading: {};
        default: {};
        trailing: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
