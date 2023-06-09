import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.deprecated"
import { $ as glossary } from "./glossary.deprecated"
import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "in": sibling("resolved"),
                "out": external("lib-proto-typesystem/dist/submodules/unresolved"),
                "common": external("glo-pareto-common")
            }),

        },
        'api': {
            'root': api,
            'imports': d({
                "this": this_(),
                "resolve": external("res-pareto-resolve"),
                "dictionary": external("res-pareto-dictionary"),
                "string": external("res-pareto-string"),
            }),
        },
    },
    'implementation': ['typescript', null],
    // 'implementation': {
    //     'implementations': d({}),
    // },
}