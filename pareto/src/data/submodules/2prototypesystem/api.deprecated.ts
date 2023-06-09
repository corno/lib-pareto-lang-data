import * as pd from 'pareto-core-data'

import { constructor, algorithm, procedure, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "map": algorithm(sfunction("this", {}, "Map"), { }, dependent(null, {
            "resolveDictionary": sfunction("resolve", {}, "SafeResolveDictionary"),
            "rekey": sfunction("dictionary", {}, "UnsafeRekey"),
            "escape": sfunction("string", {}, "Escape"),
            "merge": sfunction("dictionary", {}, "MergeAndIgnore"),
            "addEntry": sfunction("dictionary", {}, "UnsafeAddEntry"),
            "mergeDictionaries": sfunction("dictionary", {}, "MergeDictionaries"),
            "filter": sfunction("dictionary", {}, "Filter")
        }, {}))
    }),
}