import * as pd from 'pareto-core-data'

import { data, dictionary, externalTypeReference, glossaryParameter, group, imp, member, number, procedure, ref, sExternalInterfaceReference, sfunction, string, taggedUnion, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "model": imp(),
        "out": imp(),
    }),

        'glossary parameters': d({
        }),

        'root': {
            'namespaces': d({}),
            'types': d({
                "MapParameters": type(group({
                    "atom mappings": member(dictionary(taggedUnion({
                        "string": group({}),
                        "number": group({}),
                        "boolean": group({}),
                    }))),
                    "data": member(ref(externalTypeReference("in", "Type Library", { }))),
                }))
            }),
        },
        'asynchronous': {
            'interfaces': d({}),
            'algorithms': d({}),
        },
        'synchronous': {
            'interfaces': d({}),
            'algorithms': d({
                "Map": sfunction(externalTypeReference("out", "Root", { "Annotation": externalTypeReference("common", "Null") }), data(typeReference("MapParameters"))),
            }),
        },
}