import * as pt from 'pareto-core-types'

import * as g_dictionary from "res-pareto-dictionary"
import * as g_resolve from "res-pareto-resolve"
import * as g_string from "res-pareto-string"
import * as g_this from "./glossary"

export namespace D {
    
    export type map = {
        readonly 'addEntry': g_dictionary.SYNC.A.F.UnsafeAddEntry
        readonly 'escape': g_string.SYNC.A.F.Escape
        readonly 'filter': g_dictionary.SYNC.A.F.Filter
        readonly 'merge': g_dictionary.SYNC.A.F.MergeAndIgnore
        readonly 'mergeDictionaries': g_dictionary.SYNC.A.F.MergeDictionaries
        readonly 'rekey': g_dictionary.SYNC.A.F.UnsafeRekey
        readonly 'resolveDictionary': g_resolve.SYNC.A.F.SafeResolveDictionary
    }
}

export namespace A {
    
    export type map = ($d: D.map, ) => g_this.SYNC.A.F.Map
}

export type API = {
    readonly 'map': A.map
}