export default Input;
type Input = SvelteComponent<{
    [x: string]: any;
    type?: string | undefined;
    disabled?: boolean | undefined;
    value?: string | undefined;
    placeholder?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    min?: any;
    max?: any;
    step?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> & {
    $$bindings?: string | undefined;
};
declare const Input: $$__sveltets_2_IsomorphicComponent<{
    [x: string]: any;
    type?: string | undefined;
    disabled?: boolean | undefined;
    value?: string | undefined;
    placeholder?: string | undefined;
    id?: string | undefined;
    label?: string | undefined;
    min?: any;
    max?: any;
    step?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import("svelte").ComponentConstructorOptions<Props>): import("svelte").SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
//# sourceMappingURL=Input.svelte.d.ts.map