export default Card;
type Card = SvelteComponent<$$__sveltets_2_PropsWithChildren<{
    [x: string]: any;
    variant?: string | undefined;
}, {
    header: {};
    default: {};
    footer: {};
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    header: {};
    default: {};
    footer: {};
}> & {
    $$bindings?: string | undefined;
};
declare const Card: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<{
    [x: string]: any;
    variant?: string | undefined;
}, {
    header: {};
    default: {};
    footer: {};
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    header: {};
    default: {};
    footer: {};
}, {}, string>;
type $$__sveltets_2_PropsWithChildren<Props, Slots> = Props & (Slots extends {
    default: any;
} ? Props extends Record<string, never> ? any : {
    children?: any;
} : {});
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
