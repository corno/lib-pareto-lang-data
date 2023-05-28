import * as g_dictionary from "res-pareto-dictionary";
import * as g_resolve from "res-pareto-resolve";
import * as g_string from "res-pareto-string";
import * as g_this from "./glossary";
export declare namespace D {
    type map = {
        readonly 'addEntry': g_dictionary.SYNC.A.F.UnsafeAddEntry;
        readonly 'escape': g_string.SYNC.A.F.Escape;
        readonly 'merge': g_dictionary.SYNC.A.F.MergeAndIgnore;
        readonly 'mergeDictionaries': g_dictionary.SYNC.A.F.MergeDictionaries;
        readonly 'rekey': g_dictionary.SYNC.A.F.UnsafeRekey;
        readonly 'resolveDictionary': g_resolve.SYNC.A.F.SafeResolveDictionary;
    };
}
export declare namespace A {
    type map = ($d: D.map) => g_this.Map;
}
export type API = {
    readonly 'map': A.map;
};
