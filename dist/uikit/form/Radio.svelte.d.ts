export default Radio;
type Radio = SvelteComponent<{
    [x: string]: any;
    disabled?: boolean | undefined;
    value?: any;
    id?: string | undefined;
    label?: string | undefined;
    group?: any;
    name?: string | undefined;
}, {
    change: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> & {
    $$bindings?: string | undefined;
};
declare const Radio: $$__sveltets_2_IsomorphicComponent<{
    [x: string]: any;
    disabled?: boolean | undefined;
    value?: any;
    id?: string | undefined;
    label?: string | undefined;
    group?: any;
    name?: string | undefined;
}, {
    change: Event;
} & {
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
//# sourceMappingURL=Radio.svelte.d.ts.map