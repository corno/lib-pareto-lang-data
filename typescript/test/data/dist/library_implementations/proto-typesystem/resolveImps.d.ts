import * as pt from 'pareto-core-types';
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
type MergeParameters<TType> = {
    readonly 'primary': pt.Dictionary<TType>;
    readonly 'secondary': pt.Dictionary<TType>;
};
export declare function resolved($d: {
    readonly resolveDictionary: g_resolve.SYNC.A.F.SafeResolveDictionary;
    readonly mergeAndIgnore: <TType>($: MergeParameters<TType>) => pt.Dictionary<TType>;
}, $se: {
    readonly 'onError': ($: Error) => void;
}): xx.Res;
export {};
