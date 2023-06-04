import * as pd from 'pareto-core-data'

import * as g_pareto_lang_data from "lib-pareto-lang-data/dist/submodules/unresolved"

import {
    array, constrainedDictionary,
    dictionary,
    globalType,
    group,
    state,
    optional,
    prop,
    t_grp,
    t_sg,
    stateGroup,
    typeSelection,
    component,
    typeRef,
    dictionaryReference,
    lookupConstraint,
    cyclicReference,
    lookupReference,
    constraint,
    typeLibrary,
    t_dict,
} from "lib-pareto-lang-data/dist/submodules/unresolved/shorthands"

export const $: g_pareto_lang_data.T.Type__Library<pd.SourceLocation> = typeLibrary(
    {},
    {
        "text": null,
        "identifier": null,
    },
    {
        "Atom Types": globalType(
            dictionary(group({}))
        ),
        "Atom": globalType(
            group({
                "type": prop(dictionaryReference(typeSelection("Atom Types"))),
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
                        "arguments": prop(dictionary(group({}))),
                    })),
                    "constraint": state(component(typeRef("Type Selection", true))),
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
                            "type": prop(component(typeRef("Type", true))),
                        }))),
                    })),
                })),
            })
        ),
        "Imports": globalType(
            dictionary(
                group({
                    "library": prop(lookupReference(typeRef("Type Library", true)))
                })
            )
        ),
        "Global Type Declaration": globalType(group({
            "parameters": prop(dictionary(group({
                "type": prop(stateGroup({
                    "resolved value": state(cyclicReference(typeRef("Global Type Declaration", true))),
                    "sibling lookup": state(cyclicReference(typeRef("Global Type Declaration", true))),
                    "cyclic sibling lookup": state(cyclicReference(typeRef("Global Type Declaration", true))),
                })),
                "optional": prop(optional(group({}))),
            }))),
            "result": prop(optional(cyclicReference(typeRef("Global Type Declaration", true)))),
        })),
        "Global Type Declarations": globalType(dictionary(component(typeRef("Global Type Declaration")))),
        "Global Type Definition": globalType(
            group({
                "declaration": prop(constraint(typeSelection("Global Type Declarations", t_dict()))),
                "type": prop(component(typeRef("Type"))),
            })
        ),
        "Type Selection Tail": globalType(
            group({
                "step type": prop(stateGroup({
                    "dictionary": state(group({
                        "dictionary": prop(constraint(typeSelection("Type", t_grp("type", t_sg("dictionary"))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
                    })),
                    "optional": state(group({
                        "optional": prop(constraint(typeSelection("Type", t_grp("type", t_sg("optional"))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
                    })),
                    "array": state(group({
                        "array": prop(constraint(typeSelection("Type", t_grp("type", t_sg("array"))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
                    })),
                    "group": state(group({
                        "group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("group"))))),
                        "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties")))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
                    })),
                    "state group": state(group({
                        "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
                        "state": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
                    })),
                })),
            })
        ),
        "Type Selection": globalType(
            group({
                "import": prop(optional(dictionaryReference(typeSelection("Imports")))),
                "global type": prop(lookupReference(typeRef("Global Type Definition"))),
                "tail": prop(optional(component(typeRef("Type Selection Tail", true)))),
            }),
        ),
        "Dictionary Selection": globalType(
            group({
                "type": prop(component(typeRef("Type Selection"))),
                "dictionary": constraint(typeSelection("Type", t_grp("type", t_sg("dictionary")))),
            })
        ),
        "Type Library": globalType(
            group({
                "imports": prop(component(typeRef("Imports"))),
                "atom types": prop(component(typeRef("Atom Types"))),
                "global types": prop(group({
                    "declarations": prop(component(typeRef("Global Type Declarations"))),
                    "definitions": prop(dictionary(component(typeRef("Global Type Definition")))),
                })),
            })
        ),
        "Global Type Selection": globalType(
            stateGroup({
                "resolved sibling": state(group({
                    "type": prop(lookupReference(typeRef("Global Type Definition"))),
                })),
                "import": state(group({
                    "library": prop(dictionaryReference(typeSelection("Imports"))),
                    "type": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
                })),
                "cyclic sibling": state(group({
                    "type": prop(cyclicReference(typeRef("Global Type Definition"))),
                })),
            }),
        ),
        "Model": globalType(
            group({
                "type library": prop(component(typeRef("Type Library"))),
                "root": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
            })
        ),
        "Project": globalType(group({
            "type libraries": prop(dictionary(component(typeRef("Type Library")))),
        })),
        "Root": globalType(
            component(typeRef("Project"))
        )
    },
)