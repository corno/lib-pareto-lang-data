import * as g_resolve from "res-pareto-resolve";
import * as xx from "./Resolve";
export type Error = {
    readonly 'message': [
        'no such entry',
        {
            readonly 'key': string;
        }
    ] | [
        'not the right state',
        {
            readonly 'expected': string;
            readonly 'found': string;
        }
    ];
};
export declare function resolved($d: {
    readonly resolveDictionary: g_resolve.SYNC.A.F.SafeResolveDictionary;
}, $se: {
    readonly 'onError': ($: Error) => void;
}): xx.Resolve;
