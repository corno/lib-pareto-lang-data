import * as pd from 'pareto-core-data'

import * as g_pareto_lang_data from "lib-pareto-lang-data/dist/submodules/unresolved"

import {
    array, constrainedDictionary,
    dictionary,
    globalTypeDeclaration,
    globalTypeDefinition,
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
    pResolvedValue,
    pLookup,
    pCyclicLookup,
} from "lib-pareto-lang-data/dist/submodules/unresolved/shorthands"

export const $: g_pareto_lang_data.T.Type__Library<pd.SourceLocation> = typeLibrary(
    {},
    {
        "text": null,
        "identifier": null,
    },
    {
        "Atom Types": globalTypeDeclaration({}),
        "Atom": globalTypeDeclaration({
            "atom types": pResolvedValue("Atom Types")
        }),
        "Dictionary Selection": globalTypeDeclaration({
            "imports": pResolvedValue("Imports"),
            "sibling global types": pLookup("Global Type Definition"),
            "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
        }),
        "Global Type Declaration": globalTypeDeclaration({}),
        "Global Type Declarations": globalTypeDeclaration({}),
        "Global Type Definition": globalTypeDeclaration({}),
        "Global Type Selection": globalTypeDeclaration({
            "imports": pResolvedValue("Imports"),
            "sibling global types": pLookup("Global Type Definition"),
            "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
        }),
        "Imports": globalTypeDeclaration({}),
        "Model": globalTypeDeclaration({
            "external type libraries": pLookup("Type Library")
        }),
        "Project": globalTypeDeclaration({}),
        "Root": globalTypeDeclaration({}),
        "Type Library": globalTypeDeclaration({
            "external type libraries": pLookup("Type Library"),
        }),
        "Type Selection Tail": globalTypeDeclaration({
            "context": pResolvedValue("Type"),
        }, "Type"),
        "Type Selection": globalTypeDeclaration({
            "imports": pResolvedValue("Imports"),
            "sibling global types": pLookup("Global Type Definition"),
        }, "Type"),
        "Type": globalTypeDeclaration({
            "atom types": pResolvedValue("Atom Types"),
            "imports": pResolvedValue("Imports"),
            "sibling global types": pLookup("Global Type Definition"),
            "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
        }),
    },
    {
        "Atom Types": globalTypeDefinition(
            dictionary(group({}))
        ),
        "Atom": globalTypeDefinition(
            group({
                "type": prop(dictionaryReference(typeSelection("Atom Types"))),
            })
        ),
        "Type": globalTypeDefinition(
            group({
                "type": prop(stateGroup({
                    "array": state(group({
                        "type": prop(component(typeRef("Type", true), {
                            "atom types": null,
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        })),
                    })),
                    "atom": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": null,
                        })),
                    })),
                    "component": state(group({
                        "type": prop(component(typeRef("Global Type Selection", true), {
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        })),
                        "arguments": prop(dictionary(group({}))),
                    })),
                    "constraint": state(component(typeRef("Type Selection", true), {
                        "imports": null,
                        "sibling global types": null,
                    })),
                    "cyclic reference": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": null
                        })),
                        "sibling": component(typeRef("Global Type Selection", true), {
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        }),
                    })),
                    "dictionary": state(group({
                        "key": prop(component(typeRef("Atom"), {
                            "atom types": null
                        })),
                        "constraints": prop(dictionary(stateGroup({
                            "dictionary": state(group({
                                "dictionary": prop(component(typeRef("Dictionary Selection", true), {
                                    "imports": null,
                                    "sibling global types": null,
                                    "cyclic sibling global types": null,
                                })),
                                "dense": prop(stateGroup({
                                    "no": state(group({})),
                                    "yes": state(group({})),
                                }))
                            })),
                            "lookup": state(component(typeRef("Global Type Selection", true), {
                                "imports": null,
                                "sibling global types": null,
                                "cyclic sibling global types": null,
                            })),
                        }))),
                        "type": prop(component(typeRef("Type", true), {
                            "atom types": null,
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        })),
                    })),
                    "group": state(group({
                        "properties": prop(dictionary(group({
                            "type": prop(component(typeRef("Type", true), {
                                "atom types": null,
                                "imports": null,
                                "sibling global types": null,
                                "cyclic sibling global types": null,
                            })),
                        }))),
                    })),
                    "nothing": state(group({
                    })),
                    "optional": state(group({
                        "type": prop(component(typeRef("Type", true), {
                            "atom types": null,
                            "imports": null,
                            "sibling global types": null,
                            "cyclic sibling global types": null,
                        })),
                    })),
                    "resolved reference": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": null
                        })),
                        "value": prop(stateGroup({
                            "dictionary": state(component(typeRef("Dictionary Selection", true), {
                                "imports": null,
                                "sibling global types": null,
                                "cyclic sibling global types": null,
                            })),
                            "lookup": state(component(typeRef("Global Type Selection", true), {
                                "imports": null,
                                "sibling global types": null,
                                "cyclic sibling global types": null,
                            })),
                        }))
                    })),
                    "state group": state(group({
                        "states": prop(dictionary(group({
                            "type": prop(component(typeRef("Type", true), {
                                "atom types": null,
                                "imports": null,
                                "sibling global types": null,
                                "cyclic sibling global types": null,
                            })),
                        }))),
                    })),
                })),
            })
        ),
        "Imports": globalTypeDefinition(
            dictionary(
                group({
                    "library": prop(lookupReference(typeRef("Type Library", true)))
                })
            )
        ),
        "Global Type Declaration": globalTypeDefinition(group({
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
        "Global Type Declarations": globalTypeDefinition(dictionary(component(typeRef("Global Type Declaration"), {}))),
        "Global Type Definition": globalTypeDefinition(
            group({
                "declaration": prop(constraint(typeSelection("Global Type Declarations", t_dict()))),
                "type": prop(component(typeRef("Type"), {
                    "atom types": null,
                    "imports": null,
                    "sibling global types": null,
                    "cyclic sibling global types": null,
                })),
            })
        ),
        "Type Selection Tail": globalTypeDefinition(
            group({
                "step type": prop(stateGroup({
                    "dictionary": state(group({
                        "dictionary": prop(constraint(typeSelection("Type", t_grp("type", t_sg("dictionary"))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
                    })),
                    "optional": state(group({
                        "optional": prop(constraint(typeSelection("Type", t_grp("type", t_sg("optional"))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
                    })),
                    "array": state(group({
                        "array": prop(constraint(typeSelection("Type", t_grp("type", t_sg("array"))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
                    })),
                    "group": state(group({
                        "group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("group"))))),
                        "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties")))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
                    })),
                    "state group": state(group({
                        "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
                        "state": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))))),
                        "tail": prop(optional(component(typeRef("Type Selection Tail", true), {})))
                    })),
                })),
            })
        ),
        "Type Selection": globalTypeDefinition(
            group({
                "import": prop(optional(dictionaryReference(typeSelection("Imports")))),
                "global type": prop(lookupReference(typeRef("Global Type Definition"))),
                "tail": prop(optional(component(typeRef("Type Selection Tail", true), {}))),
            }),
        ),
        "Dictionary Selection": globalTypeDefinition(
            group({
                "type": prop(component(typeRef("Type Selection"), {
                    "imports": null,
                    "sibling global types": null,
                })),
                "dictionary": constraint(typeSelection("Type", t_grp("type", t_sg("dictionary")))),
            })
        ),
        "Type Library": globalTypeDefinition(
            group({
                "imports": prop(component(typeRef("Imports"), {})),
                "atom types": prop(component(typeRef("Atom Types"), {})),
                "global types": prop(group({
                    "declarations": prop(component(typeRef("Global Type Declarations"), {})),
                    "definitions": prop(dictionary(component(typeRef("Global Type Definition"), {}))),
                })),
            })
        ),
        "Global Type Selection": globalTypeDefinition(
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
        "Model": globalTypeDefinition(
            group({
                "type library": prop(component(typeRef("Type Library"), {
                    "external type libraries": null,
                })),
                "root": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
            })
        ),
        "Project": globalTypeDefinition(group({
            "type libraries": prop(dictionary(component(typeRef("Type Library"), {
                "external type libraries": null,
            }))),
        })),
        "Root": globalTypeDefinition(
            component(typeRef("Project"), {})
        )
    },
)