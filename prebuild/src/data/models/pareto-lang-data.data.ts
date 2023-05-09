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
    typeRef,
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
                        "type": prop(component(typeRef("Type", true))),
                    })),
                    "atom": state(group({
                        "atom": prop(component(typeRef("Atom"))),
                    })),
                    "component": state(group({
                        "type": prop(component(typeRef("Global Type Selection", true))),
                    })),
                    "cyclic reference": state(group({
                        "atom": prop(component(typeRef("Atom"))),
                        "sibling": component(typeRef("Global Type Selection", true)),
                    })),
                    "dictionary": state(group({
                        "key": prop(component(typeRef("Atom"))),
                        "constraints": prop(dictionary(stateGroup({
                            "dictionary": state(group({
                                "dictionary": prop(component(typeRef("Dictionary Selection", true))),
                                "dense": prop(stateGroup({
                                    "no": state(group({})),
                                    "yes": state(group({})),
                                }))
                            })),
                            "lookup": state(component(typeRef("Global Type Selection", true))),
                        }))),
                        "type": prop(component(typeRef("Type", true))),
                    })),
                    "group": state(group({
                        "properties": prop(dictionary(group({
                            "type": prop(component(typeRef("Type", true))),
                        }))),
                    })),
                    "nothing": state(group({
                    })),
                    "optional": state(group({
                        "type": prop(component(typeRef("Type", true))),
                    })),
                    "resolved reference": state(group({
                        "atom": prop(component(typeRef("Atom"))),
                        "value": prop(stateGroup({
                            "dictionary": state(component(typeRef("Dictionary Selection", true))),
                            "lookup": state(component(typeRef("Global Type Selection", true))),
                        }))
                    })),
                    "state group": state(group({
                        "states": prop(dictionary(group({
                            "constraints": prop(dictionary(component(typeRef("State Group Selection", true)))),
                            "type": prop(component(typeRef("Type", true))),
                        }))),
                    })),
                })),
            })
        ),

        "Imports": globalType(
            constrainedDictionary(
                {
                    "library": lookupConstraint(typeRef("Type Library", true))
                },
                group({})
            )
        ),
        "Global Type": globalType(
            group({
                "type": prop(component(typeRef("Type"))),
            })
        ),
        "Global Types": globalType(
            dictionary(component(typeRef("Global Type")))
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
                "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
            }),
        ),
        "Type Selection": globalType(
            group({
                "import": prop(optional(resolvedReference(dict(dictSel(typeSelection("Imports")))))),
                "global type": prop(resolvedReference(dict(dictSel(typeSelection("Global Types"))))),
                "tail": prop(optional(component(typeRef("Type Selection Tail"))))
            }),
        ),
        "State Group Selection": globalType(
            group({
                "type": prop(component(typeRef("Type Selection"))),
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
                "type": prop(component(typeRef("Type Selection"))),
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
                    "type": prop(resolvedReference(lookup(typeRef("Global Type")))),
                })),
                "import": state(group({
                    "library": prop(resolvedReference(dict(dictSel(typeSelection("Imports"))))),
                    "type": prop(resolvedReference(dict(dictSel(typeSelection("Global Types"))))),
                })),
                "cyclic sibling": state(group({
                    "type": prop(cyclicReference(typeRef("Global Type"))),
                })),
            }),
        ),
        "Type Library": globalType(
            group({
                "imports": prop(component(typeRef("Imports"))),
                "atom types": prop(component(typeRef("Atom Types"))),
                "global types": prop(component(typeRef("Global Types"))),
            })
        ),
        "Model": globalType(
            group({
                "type library": prop(component(typeRef("Type Library"))),
                "root": prop(resolvedReference(dict(dictSel(typeSelection("Global Types"))))),
            })
        ),
        "Root": globalType(
            component(typeRef("Model"))
        )
    }),
}