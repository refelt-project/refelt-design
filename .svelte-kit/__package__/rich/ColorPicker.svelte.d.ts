/** @typedef {typeof __propDef.props}  ColorPickerProps */
/** @typedef {typeof __propDef.events}  ColorPickerEvents */
/** @typedef {typeof __propDef.slots}  ColorPickerSlots */
export default class ColorPicker extends SvelteComponent<{
    [x: string]: any;
    group?: string | undefined;
    name?: string | undefined;
    options?: string[] | undefined;
    idPrefix?: string | undefined;
    disabled?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ColorPickerProps = typeof __propDef.props;
export type ColorPickerEvents = typeof __propDef.events;
export type ColorPickerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        group?: string | undefined;
        name?: string | undefined;
        options?: string[] | undefined;
        idPrefix?: string | undefined;
        disabled?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
