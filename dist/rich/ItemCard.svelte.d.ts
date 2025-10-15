export default ItemCard;
type ItemCard = SvelteComponent<$$__sveltets_2_PropsWithChildren<{
    [x: string]: any;
    disabled?: boolean | undefined;
    as?: string | undefined;
    href?: any;
}, {
    default: {};
    actions: {};
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    actions: {};
}> & {
    $$bindings?: string | undefined;
};
declare const ItemCard: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<{
    [x: string]: any;
    disabled?: boolean | undefined;
    as?: string | undefined;
    href?: any;
}, {
    default: {};
    actions: {};
}>, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    actions: {};
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
//# sourceMappingURL=ItemCard.svelte.d.ts.map