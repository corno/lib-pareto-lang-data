import * as pd from 'pareto-core-data'

import * as g_pareto_lang_data from "lib-pareto-lang-data/dist/submodules/unresolved"

import {
    array, constrainedDictionary,
    constrainedState,
    dictionary,
    globalType,
    group,
    state,
    stateConstraint,
    optional,
    prop,
    t_grp,
    t_sg,
    stateGroup,
    typeSelection,
    component,
    cyclicSibling,
    resolvedSibling,
    resolvedReference,
    dict,
    dictSel,
    lookup,
    lookupConstraint,
    cyclicReference,
} from "lib-pareto-lang-data/dist/submodules/unresolved/shorthands"

export const $: g_pareto_lang_data.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({}),
    'atom types': pd.d({
        "text": null,
        "identifier": null,
    }),
    'global types': pd.d({
        "Atom Types": globalType(
            dictionary(group({}))
        ),
        "Atom": globalType(
            group({
                "type": prop(resolvedReference(dict(dictSel(typeSelection("Atom Types"))))),
            })
        ),
        "Type": globalType(
            group({
                "type": prop(stateGroup({
                    "array": state(group({
                        "type": prop(component(cyclicSibling("Type"))),
                    })),
                    "atom": state(group({
                        "atom": prop(component(resolvedSibling("Atom"))),
                    })),
                    "component": state(group({
                        "type": prop(component(cyclicSibling("Global Type Selection"))),
                    })),
                    "cyclic reference": state(group({
                        "atom": prop(component(resolvedSibling("Atom"))),
                        "sibling": component(cyclicSibling("Global Type Selection")),
                    })),
                    "dictionary": state(group({
                        "key": prop(component(resolvedSibling("Atom"))),
                        "constraints": prop(dictionary(stateGroup({
                            "dictionary": state(group({
                                "dictionary": prop(component(cyclicSibling("Dictionary Selection"))),
                                "dense": prop(stateGroup({
                                    "no": state(group({})),
                                    "yes": state(group({})),
                                }))
                            })),
                            "lookup": state(component(cyclicSibling("Global Type Selection"))),
                        }))),
                        "type": prop(component(cyclicSibling("Type"))),
                    })),
                    "group": state(group({
                        "properties": prop(dictionary(group({
                            "type": prop(component(cyclicSibling("Type"))),
                        }))),
                    })),
                    "nothing": state(group({
                    })),
                    "optional": state(group({
                        "type": prop(component(cyclicSibling("Type"))),
                    })),
                    "resolved reference": state(group({
                        "atom": prop(component(resolvedSibling("Atom"))),
                        "value": prop(stateGroup({
                            "dictionary": state(component(cyclicSibling("Dictionary Selection"))),
                            "lookup": state(component(cyclicSibling("Global Type Selection"))),
                        }))
                    })),
                    "state group": state(group({
                        "states": prop(dictionary(group({
                            "constraints": prop(dictionary(component(cyclicSibling("State Group Selection")))),
                            "type": prop(component(cyclicSibling("Type"))),
                        }))),
                    })),
                })),
            })
        ),

        "Imports": globalType(
            constrainedDictionary(
                {
                    "library": lookupConstraint(cyclicSibling("Type Library"))
                },
                group({})
            )
        ),
        "Global Types": globalType(
            dictionary(group({
                "type": prop(component(resolvedSibling("Type"))),
            }))
        ),
        "Type Selection Tail": globalType(
            group({
                "step type": prop(stateGroup({
                    "dictionary": constrainedState({
                        "dictionary": stateConstraint(typeSelection("Type", t_grp("type")), "dictionary")
                    }, group({})),
                    "optional": constrainedState({
                        "optional": stateConstraint(typeSelection("Type", t_grp("type")), "optional")
                    }, group({})),
                    "array": constrainedState({
                        "array": stateConstraint(typeSelection("Type", t_grp("type")), "array")
                    }, group({})),
                    "group": constrainedState({
                        "group": stateConstraint(typeSelection("Type", t_grp("type")), "group")
                    }, group({
                        "property": prop(resolvedReference(dict(dictSel(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties"))))))))
                    })),
                    "state group": constrainedState({
                        "state group": stateConstraint(typeSelection("Type", t_grp("type")), "state group")
                    }, group({
                        "state": prop(resolvedReference(dict(dictSel(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))))))),
                    })),
                })),
                "tail": prop(optional(component(cyclicSibling("Type Selection Tail"))))
            }),
        ),
        "Type Selection": globalType(
            group({
                "import": prop(optional(resolvedReference(dict(dictSel(typeSelection("Imports")))))),
                "global type": prop(resolvedReference(dict(dictSel(typeSelection("Global Types"))))),
                "tail": prop(optional(component(resolvedSibling("Type Selection Tail"))))
            }),
        ),
        "State Group Selection": globalType(
            group({
                "type": prop(component(resolvedSibling("Type Selection"))),
                "cast": prop(stateGroup({
                    "state group": constrainedState(
                        {
                            "state group": stateConstraint(typeSelection("Type", t_grp("type")), "state group")
                        },
                        group({
                            "state": prop(resolvedReference(dict(dictSel(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))))))),
                        }),
                    )
                }))
            })
        ),
        "Dictionary Selection": globalType(
            group({
                "type": prop(component(resolvedSibling("Type Selection"))),
                "cast": prop(stateGroup({
                    "dictionary": constrainedState(
                        {
                            "dictionary": stateConstraint(typeSelection("Type", t_grp("type")), "dictionary")
                        },
                        group({}),
                    )
                })),

            })
        ),
        "Global Type Selection": globalType(
            stateGroup({
                "resolved sibling": state(group({
                    "type": prop(resolvedReference(lookup(resolvedSibling("Global Types")))),
                })),
                "import": state(group({
                    "library": prop(resolvedReference(dict(dictSel(typeSelection("Imports"))))),
                    "type": prop(resolvedReference(dict(dictSel(typeSelection("Global Types"))))),
                })),
                "cyclic sibling": state(group({
                    "type": prop(resolvedReference(dict(dictSel(typeSelection("Global Types"))))),
                })),
            }),
        ),
        "Type Library": globalType(
            group({
                "imports": prop(component(resolvedSibling("Imports"))),
                "atom types": prop(component(resolvedSibling("Atom Types"))),
                "global types": prop(component(resolvedSibling("Global Types"))),
            })
        ),
        "Model": globalType(
            group({
                "type library": prop(component(resolvedSibling("Type Library"))),
                "root": prop(resolvedReference(dict(dictSel(typeSelection("Global Types"))))),
            })
        ),
        "Root": globalType(
            component(resolvedSibling("Model"))
        )
    }),
}