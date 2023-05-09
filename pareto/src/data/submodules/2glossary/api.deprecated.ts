import * as pd from 'pareto-core-data'

import { constructor, algorithm, procedure, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "map": algorithm(sfunction("this", {}, "Map"), {}, dependent(null, {
            "merge": sfunction("array", {}, "Merge"),
            "isEmpty": sfunction("dictionary", {}, "IsEmpty"),
            "filter": sfunction("dictionary", {}, "Filter")
        }, {}))
    }),
}