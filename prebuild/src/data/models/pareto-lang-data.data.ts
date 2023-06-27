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
    dictionaryConstraint,
} from "lib-pareto-lang-data/dist/submodules/unresolved/shorthands"

export const $: g_pareto_lang_data.T.Type__Library<pd.SourceLocation> = typeLibrary(
    {},
    {
        "text": null,
        "identifier": null,
    },
    {
        "Any Value Selection": globalTypeDeclaration({}),
        "Atom Types": globalTypeDeclaration({}),
        "Atom": globalTypeDeclaration({
            "atom types": pResolvedValue("Atom Types")
        }),
        "Dictionary Selection": globalTypeDeclaration({
            "imports": pResolvedValue("Imports"),
            "sibling global types": pLookup("Global Type Definition"),
            "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
        }),
        "Global Type Resolver Declaration": globalTypeDeclaration({
            "all siblings": pCyclicLookup("Global Type Resolver Declaration", false)
        }),
        "Global Type Resolver Declarations": globalTypeDeclaration({}),
        "Global Type Definition": globalTypeDeclaration({
            "key": pResolvedValue("Atom"),
            "all siblings": pCyclicLookup("Global Type Definition"),
            "non cyclic siblings": pLookup("Global Type Definition"),
            "atom types": pResolvedValue("Atom Types"),
            "imports": pResolvedValue("Imports"),
        }),
        "Global Type Resolver Implementation": globalTypeDeclaration({
            "key": pResolvedValue("Atom"),
            "all siblings": pCyclicLookup("Global Type Definition"),
            "non cyclic siblings": pLookup("Global Type Definition"),
            "atom types": pResolvedValue("Atom Types"),
            "imports": pResolvedValue("Imports"),
        }),
        "Global Type Selection": globalTypeDeclaration({
            "imports": pResolvedValue("Imports"),
            "sibling global types": pLookup("Global Type Definition"),
            "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
        }),
        "Imports": globalTypeDeclaration({
            "external type libraries": pLookup("Type Library"),
        }),
        "Model": globalTypeDeclaration({
            "external type libraries": pLookup("Type Library")
        }),
        //"No Context Value Selection": globalTypeDeclaration({}),
        "Parameters": globalTypeDeclaration({}),
        "Property": globalTypeDeclaration({
            "atom types": pResolvedValue("Atom Types"),
            "imports": pResolvedValue("Imports"),
            "sibling global types": pLookup("Global Type Definition"),
            "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
        }),
        "PropertyResolver": globalTypeDeclaration({
            "atom types": pResolvedValue("Atom Types"),
            "imports": pResolvedValue("Imports"),
            "sibling global types": pLookup("Global Type Definition"),
            "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
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
        "TypeResolver": globalTypeDeclaration({
            "atom types": pResolvedValue("Atom Types"),
            "imports": pResolvedValue("Imports"),
            "sibling global types": pLookup("Global Type Definition"),
            "cyclic sibling global types": pCyclicLookup("Global Type Definition"),
        }),
        "Value Selection Tail": globalTypeDeclaration({}),
        "Variable": globalTypeDeclaration({}),
        "Variables": globalTypeDeclaration({}),
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
        "Property": globalTypeDefinition(
            group({
                "type": prop(component(typeRef("Type", true), {
                    "atom types": [false],
                    "imports": [false],
                    "sibling global types": [false],
                    "cyclic sibling global types": [false],
                })),
            })
        ),
        "PropertyResolver": globalTypeDefinition(
            group({
                "type": prop(component(typeRef("TypeResolver", true), {
                    "atom types": [false],
                    "imports": [false],
                    "sibling global types": [false],
                    "cyclic sibling global types": [false],
                })),
            })
        ),
        "Type": globalTypeDefinition(
            group({
                "type": prop(stateGroup({
                    "array": state(group({
                        "type": prop(component(typeRef("Type", true), {
                            "atom types": [false],
                            "imports": [false],
                            "sibling global types": [false],
                            "cyclic sibling global types": [false],
                        })),
                    })),
                    "atom": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": [false],
                        })),
                    })),
                    "component": state(group({
                        "type": prop(component(typeRef("Global Type Selection", true), {
                            "imports": [false],
                            "sibling global types": [false],
                            "cyclic sibling global types": [false],
                        })),
                    })),
                    "constraint": state(component(typeRef("Type Selection", true), {
                        "imports": [false],
                        "sibling global types": [false],
                    })),
                    "cyclic reference": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": [false]
                        })),
                        "sibling": component(typeRef("Global Type Selection", true), {
                            "imports": [false],
                            "sibling global types": [false],
                            "cyclic sibling global types": [false],
                        }),
                    })),
                    "dictionary": state(group({
                        "key": prop(component(typeRef("Atom"), {
                            "atom types": [false]
                        })),
                        "constraints": prop(dictionary(stateGroup({
                            "dictionary": state(group({
                                "dictionary": prop(component(typeRef("Dictionary Selection", true), {
                                    "imports": [false],
                                    "sibling global types": [false],
                                    "cyclic sibling global types": [false],
                                })),
                                "dense": prop(stateGroup({
                                    "no": state(group({})),
                                    "yes": state(group({})),
                                }))
                            })),
                            "lookup": state(component(typeRef("Global Type Selection", true), {
                                "imports": [false],
                                "sibling global types": [false],
                                "cyclic sibling global types": [false],
                            })),
                        }))),
                        "type": prop(component(typeRef("Type", true), {
                            "atom types": [false],
                            "imports": [false],
                            "sibling global types": [false],
                            "cyclic sibling global types": [false],
                        })),
                    })),
                    "group": state(group({
                        "properties": prop(dictionary(component(typeRef("Property"), {}))),
                    })),
                    "nothing": state(group({
                    })),
                    "optional": state(group({
                        "type": prop(component(typeRef("Type", true), {
                            "atom types": [false],
                            "imports": [false],
                            "sibling global types": [false],
                            "cyclic sibling global types": [false],
                        })),
                    })),
                    "resolved reference": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": [false]
                        })),
                        "value": prop(stateGroup({
                            "dictionary": state(component(typeRef("Dictionary Selection", true), {
                                "imports": [false],
                                "sibling global types": [false],
                                "cyclic sibling global types": [false],
                            })),
                            "lookup": state(component(typeRef("Global Type Selection", true), {
                                "imports": [false],
                                "sibling global types": [false],
                                "cyclic sibling global types": [false],
                            })),
                        }))
                    })),
                    "state group": state(group({
                        "states": prop(dictionary(group({
                            "type": prop(component(typeRef("Type", true), {
                                "atom types": [false],
                                "imports": [false],
                                "sibling global types": [false],
                                "cyclic sibling global types": [false],
                            })),
                        }))),
                    })),
                })),
            })
        ),
        "TypeResolver": globalTypeDefinition(
            group({
                "type": prop(stateGroup({
                    "array": state(group({
                        "type": prop(component(typeRef("TypeResolver", true), {
                            "atom types": [false],
                            "imports": [false],
                            "sibling global types": [false],
                            "cyclic sibling global types": [false],
                        })),
                    })),
                    "atom": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": [false],
                        })),
                    })),
                    "component": state(group({
                        "type": prop(component(typeRef("Global Type Selection", true), {
                            "imports": [false],
                            "sibling global types": [false],
                            "cyclic sibling global types": [false],
                        })),
                        "arguments": prop(dictionary(group({}))),
                    })),
                    "constraint": state(component(typeRef("Type Selection", true), {
                        "imports": [false],
                        "sibling global types": [false],
                    })),
                    "cyclic reference": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": [false]
                        })),
                        "sibling": component(typeRef("Global Type Selection", true), {
                            "imports": [false],
                            "sibling global types": [false],
                            "cyclic sibling global types": [false],
                        }),
                    })),
                    "dictionary": state(group({
                        "key": prop(component(typeRef("Atom"), {
                            "atom types": [false]
                        })),
                        "constraints": prop(dictionary(stateGroup({
                            "dictionary": state(group({
                                "dictionary": prop(component(typeRef("Dictionary Selection", true), {
                                    "imports": [false],
                                    "sibling global types": [false],
                                    "cyclic sibling global types": [false],
                                })),
                                "dense": prop(stateGroup({
                                    "no": state(group({})),
                                    "yes": state(group({})),
                                }))
                            })),
                            "lookup": state(component(typeRef("Global Type Selection", true), {
                                "imports": [false],
                                "sibling global types": [false],
                                "cyclic sibling global types": [false],
                            })),
                        }))),
                        "type": prop(component(typeRef("TypeResolver", true), {
                            "atom types": [false],
                            "imports": [false],
                            "sibling global types": [false],
                            "cyclic sibling global types": [false],
                        })),
                    })),
                    "group": state(group({
                        "properties": prop(dictionary(component(typeRef("PropertyResolver"), {}))),
                    })),
                    "nothing": state(group({
                    })),
                    "optional": state(group({
                        "type": prop(component(typeRef("TypeResolver", true), {
                            "atom types": [false],
                            "imports": [false],
                            "sibling global types": [false],
                            "cyclic sibling global types": [false],
                        })),
                    })),
                    "resolved reference": state(group({
                        "atom": prop(component(typeRef("Atom"), {
                            "atom types": [false]
                        })),
                        "value": prop(stateGroup({
                            "dictionary": state(component(typeRef("Dictionary Selection", true), {
                                "imports": [false],
                                "sibling global types": [false],
                                "cyclic sibling global types": [false],
                            })),
                            "lookup": state(component(typeRef("Global Type Selection", true), {
                                "imports": [false],
                                "sibling global types": [false],
                                "cyclic sibling global types": [false],
                            })),
                        }))
                    })),
                    "state group": state(group({
                        "states": prop(dictionary(group({
                            "type": prop(component(typeRef("TypeResolver", true), {
                                "atom types": [false],
                                "imports": [false],
                                "sibling global types": [false],
                                "cyclic sibling global types": [false],
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
        "Parameters": globalTypeDefinition(
            dictionary(group({
                "type": prop(stateGroup({
                    "resolved value": state(cyclicReference(typeRef("Global Type Resolver Declaration", true))),
                    "sibling lookup": state(cyclicReference(typeRef("Global Type Resolver Declaration", true))),
                    "cyclic sibling lookup": state(cyclicReference(typeRef("Global Type Resolver Declaration", true))),
                    "key": state(group({})),
                })),
                "optional": prop(optional(group({}))),
            }))
        ),
        "Global Type Resolver Declaration": globalTypeDefinition(group({
            //"definition": prop(constraint(typeSelection("Global Type Definition", t_dict()))),
            "parameters": prop(component(typeRef("Parameters"), {})),
            "result": prop(optional(cyclicReference(typeRef("Global Type Resolver Declaration", true)))),
        })),
        "Global Type Resolver Declarations": globalTypeDefinition(dictionary(component(typeRef("Global Type Resolver Declaration"), {
            "all siblings": [false],
        }))),
        "Global Type Resolver Implementation": globalTypeDefinition(
            group({
                "variables": prop(component(typeRef("Variables"), {

                })),
                "type": prop(component(typeRef("TypeResolver"), {
                    "atom types": [false],
                    "imports": [false],
                    "sibling global types": [false],
                    "cyclic sibling global types": [false],
                })),
                "result": prop(optional(component(typeRef("Value Selection Tail", true), {}))),
            })
        ),
        "Global Type Definition": globalTypeDefinition(
            group({
                "type": prop(component(typeRef("Type"), {
                    "atom types": [false],
                    "imports": [false],
                    "sibling global types": [false],
                    "cyclic sibling global types": [false],
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
                    "imports": [false],
                    "sibling global types": [false],
                })),
                "dictionary": constraint(typeSelection("Type", t_grp("type", t_sg("dictionary")))),
            })
        ),
        "Type Library": globalTypeDefinition(
            group({
                "imports": prop(component(typeRef("Imports"), {
                    "external type libraries": [false],
                })),
                "atom types": prop(component(typeRef("Atom Types"), {})),
                "global types": prop(group({
                    "definitions": prop(dictionary(component(typeRef("Global Type Definition"), {
                        "key": [false],
                        "all siblings": [false],
                        "non cyclic siblings": [false],
                        "atom types": [false],
                        "imports": [false],
                    }))),
                    //"selectors": prop(component(typeRef("Global Type Resolver Declarations"), {})),
                    "declarations": prop(component(typeRef("Global Type Resolver Declarations"), {})),
                    "implementations": prop(dictionary(component(typeRef("Global Type Resolver Implementation"), {
                        "key": [false],
                        "all siblings": [false],
                        "non cyclic siblings": [false],
                        "atom types": [false],
                        "imports": [false],
                    }))),
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
                    "external type libraries": [false],
                })),
                "root": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
            })
        ),
        "Project": globalTypeDefinition(group({
            "type libraries": prop(dictionary(component(typeRef("Type Library"), {
                "external type libraries": [false],
            }))),
        })),
        "Root": globalTypeDefinition(
            component(typeRef("Project"), {})
        ),
        "Variable": globalTypeDefinition(
            stateGroup({
                // "sibling property": state(lookupReference(typeRef("Property"))),
                // "state constraint": state(dictionaryReference(typeSelection("State Constraints"))),
                // "dictionary constraint": state(dictionaryReference(typeSelection("Dictionary Constraints"))),
                "parameter": state(group({
                    "parameter": prop(dictionaryReference(typeSelection("Parameters"))),
                    "resolved value": prop(constraint(typeSelection("Parameters", t_dict(t_grp("type", t_sg("resolved value"))))))
                })),
                "parent variable": state(lookupReference(typeRef("Variable", true))),
            })
        ),
        "Variables": globalTypeDefinition(
            dictionary(component(typeRef("Variable"), {}))
        ),
        "Value Selection Tail": globalTypeDefinition(
            stateGroup({
                "reference": state(group({
                    "reference": prop(constraint(typeSelection("Type", t_grp("type", t_sg("resolved reference"))))),
                    "tail": prop(optional(component(typeRef("Value Selection Tail", true), {})))
                })),
                "component": state(group({
                    "component": prop(constraint(typeSelection("Type", t_grp("type", t_sg("component"))))),
                    "tail": prop(optional(component(typeRef("Value Selection Tail", true), {})))

                })),
                "state group": state(group({
                    "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
                    "result type": prop(component(typeRef("Global Type Selection", true), {
                        "imports": [false],
                        "sibling global types": [false],
                        "cyclic sibling global types": [false],
                    })),
                    "states": prop(constrainedDictionary(
                        {
                            "state": dictionaryConstraint(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))), true)
                        },
                        component(typeRef("Any Value Selection", true), {})
                    ))
                })),
                // "optional": state(group({
                //     "optional": prop(constraint(typeSelection("Type", t_grp("type", t_sg("optional"))))),
                //     "set": prop(component(typeRef("Any Value Selection", true))),
                //     "not set": prop(component(typeRef("No Context Value Selection", true))),//validate result is equal to 'set' result
                // })),
                "group": state(group({
                    "group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("group"))))),
                    "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties")))))),
                    "tail": prop(optional(component(typeRef("Value Selection Tail", true), {})))
                })),
            }),
        ),
        // "No Context Value Selection": globalTypeDefinition(
        //     group({
        //         "start": prop(dictionaryReference(typeSelection("Variables"))),
        //         "tail": prop(optional(component(typeRef("Value Selection Tail"), {})))
        //     }),
        // ),
        "Any Value Selection": globalTypeDefinition(
            group({
                "start": prop(optional(dictionaryReference(typeSelection("Variables")))),
                "tail": prop(optional(component(typeRef("Value Selection Tail"), {})))
            }),
        ),
    },
)