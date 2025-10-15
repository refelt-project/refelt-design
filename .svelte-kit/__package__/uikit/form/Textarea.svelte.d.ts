/** @typedef {typeof __propDef.props}  TextareaProps */
/** @typedef {typeof __propDef.events}  TextareaEvents */
/** @typedef {typeof __propDef.slots}  TextareaSlots */
export default class Textarea extends SvelteComponent<{
    [x: string]: any;
    disabled?: boolean | undefined;
    rows?: number | undefined;
    value?: string | undefined;
    placeholder?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
}, {
    input: Event;
    focus: FocusEvent;
    blur: FocusEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextareaProps = typeof __propDef.props;
export type TextareaEvents = typeof __propDef.events;
export type TextareaSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        disabled?: boolean | undefined;
        rows?: number | undefined;
        value?: string | undefined;
        placeholder?: string | undefined;
        id?: string | undefined;
        label?: string | undefined;
    };
    events: {
        input: Event;
        focus: FocusEvent;
        blur: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
//# sourceMappingURL=Textarea.svelte.d.ts.map