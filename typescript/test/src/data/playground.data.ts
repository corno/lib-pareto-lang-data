import * as pd from 'pareto-core-data'

import * as g_pareto_lang_data from "../../../pub/dist/submodules/unresolved"

import {
    array, constrainedDictionary,
    dictionary,
    globalTypeDeclaration,
    globalTypeDefinition,
    group,
    state,
    optional,
    prop,
    t_dict,
    t_grp,
    t_sg,
    stateGroup,
    typeSelection,
    component,
    typeRef,
    dictionaryReference,
    lookupReference,
    lookupConstraint,
    cyclicReference,
    dictionaryConstraint,
    typeLibrary,
    constraint,
    externalTypeSelection,
    imprt,
    atom,
    pResolvedValue,
    pLookup,
    pCyclicLookup,
    pKey,
} from "../../../pub/dist/submodules/unresolved/shorthands"

export const $: g_pareto_lang_data.T.Project<pd.SourceLocation> = {
    'type libraries': {
        'annotation': pd.getLocationInfo(0),
        'dictionary': pd.d({
            "pareto lang data": typeLibrary(
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
                    "Global Type Declaration": globalTypeDeclaration({
                        "all siblings": pCyclicLookup("Global Type Declaration", false)
                    }),
                    "Global Type Declarations": globalTypeDeclaration({}),
                    "Global Type Definition": globalTypeDeclaration({
                        "global type declarations": pResolvedValue("Global Type Declarations"),
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
                    "No Context Value Selection": globalTypeDeclaration({}),
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
                                    "arguments": prop(dictionary(optional(component(typeRef("No Context Value Selection", true), {})))),
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
                                    "properties": prop(dictionary(group({
                                        "type": prop(component(typeRef("Type", true), {
                                            "atom types": [false],
                                            "imports": [false],
                                            "sibling global types": [false],
                                            "cyclic sibling global types": [false],
                                        })),
                                    }))),
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
                                "key": state(group({})),
                            })),
                            "optional": prop(optional(group({}))),
                        }))),
                        "result": prop(optional(cyclicReference(typeRef("Global Type Declaration", true)))),
                    })),
                    "Global Type Declarations": globalTypeDefinition(dictionary(component(typeRef("Global Type Declaration"), {
                        "all siblings": [false],
                    }))),
                    "Global Type Definition": globalTypeDefinition(
                        group({
                            "declaration": prop(constraint(typeSelection("Global Type Declarations", t_dict()))),
                            "variables": prop(component(typeRef("Variables"), {
            
                            })),
                            "type": prop(component(typeRef("Type"), {
                                "atom types": [false],
                                "imports": [false],
                                "sibling global types": [false],
                                "cyclic sibling global types": [false],
                            })),
                            "result": prop(optional(component(typeRef("Value Selection Tail", true), {}))),
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
                                "declarations": prop(component(typeRef("Global Type Declarations"), {})),
                                "definitions": prop(dictionary(component(typeRef("Global Type Definition"), {
                                    "global type declarations": [false],
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
                            // "parameter": state(group({
                            //     "parameter": prop(dictionaryReference(typeSelection("Parameters"))),
                            //     //"resolved value": prop(constraint(typeSelection("Parameters", t_dict(t_grp("type", t_sg("resolved value"))))))
                            // })),
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
                    "No Context Value Selection": globalTypeDefinition(
                        group({
                            "start": prop(dictionaryReference(typeSelection("Variables"))),
                            "tail": prop(optional(component(typeRef("Value Selection Tail"), {})))
                        }),
                    ),
                    "Any Value Selection": globalTypeDefinition(
                        group({
                            "start": prop(optional(dictionaryReference(typeSelection("Variables")))),
                            "tail": prop(optional(component(typeRef("Value Selection Tail"), {})))
                        }),
                    ),
                },
            ),
            "proto typesystem": typeLibrary(
                {
                },
                {
                    "identifier": null,
                },
                {
                    "Aggregated Type Parameters": globalTypeDeclaration({}),
                    "Function Declaration": globalTypeDeclaration({
                        "resolved namespaces": pLookup("Nested Namespace"),
                        "resolved sibling types": pLookup("Type"),
                        "cyclic sibling types": pCyclicLookup("Type"),
                        "type parameters": pResolvedValue("Aggregated Type Parameters"),
                    }),
                    "Import": globalTypeDeclaration({}),
                    "Imports": globalTypeDeclaration({}),
                    "Namespace": globalTypeDeclaration({
                        "resolved sibling namespaces": pLookup("Nested Namespace", true),
                        "parent type parameters": pResolvedValue("Aggregated Type Parameters", true),
                    }),
                    "Nested Namespace": globalTypeDeclaration({
                        "resolved parent sibling namespaces": pLookup("Nested Namespace", true),
                    }, "Namespace"),
                    "Namespace Selection": globalTypeDeclaration({
                        "resolved namespaces": pLookup("Nested Namespace"),
                        "resolved sibling types": pLookup("Type"),
                        "cyclic sibling types": pCyclicLookup("Type"),
                        "type parameters": pResolvedValue("Aggregated Type Parameters"),
                    }, "Nested Namespace"),
                    "Namespace Selection Tail": globalTypeDeclaration({}),
                    "Root": globalTypeDeclaration({}),
                    "Type Arguments": globalTypeDeclaration({}),
                    "Type Parameters": globalTypeDeclaration({
                        "parent type parameters": pResolvedValue("Aggregated Type Parameters", true),
                    }),
                    "Type": globalTypeDeclaration({
                        "resolved namespaces": pLookup("Nested Namespace"),
                        "resolved sibling types": pLookup("Type"),
                        "cyclic sibling types": pCyclicLookup("Type"),
                        "type parameters": pResolvedValue("Aggregated Type Parameters"),
                    }),
                },
                {
                    "Aggregated Type Parameters": globalTypeDefinition(dictionary(group({}))),
                    "Type Parameters": globalTypeDefinition(
                        group({
                            "local": prop(dictionary(group({}))),
                            "aggregated": prop(component(typeRef("Aggregated Type Parameters"), {}))
                        })
                    ),
                    "Function Declaration": globalTypeDefinition(
                        group({
                            "type parameters": prop(component(typeRef("Type Parameters"), {
                                "parent type parameters": [false],
                            })),
                            "context": prop(component(typeRef("Type", true), {
                                "resolved namespaces": [false],
                                "resolved sibling types": [false],
                                "cyclic sibling types": [false],
                                "type parameters": [false],
                            })),
                            "parameters": prop(dictionary(component(typeRef("Type", true), {
                                "resolved namespaces": [false],
                                "resolved sibling types": [false],
                                "cyclic sibling types": [false],
                                "type parameters": [false],
                            }))),
                        })
                    ),
                    "Imports": globalTypeDefinition(
                        dictionary(component(typeRef("Import", true), {}))
                    ),
                    "Nested Namespace": globalTypeDefinition(
                        group({
                            "imports": prop(component(typeRef("Imports"), {})),
                            "namespace": prop(component(typeRef("Namespace", true), {
                                "resolved sibling namespaces": [false],
                                "parent type parameters": [false],
                            })),
                        })
                    ),
                    "Import": globalTypeDefinition(
                        stateGroup({
                            "sibling": state(lookupReference(typeRef("Nested Namespace"))),
                            "parent import": state(dictionaryReference(typeSelection("Imports"))),
                        })
                    ),
                    "Namespace": globalTypeDefinition(
                        group({
                            "namespaces": prop(dictionary(component(typeRef("Nested Namespace"), {
                                "resolved parent sibling namespaces": [false],
                            }))),
                            "parameters": prop(component(typeRef("Type Parameters"), {
                                "parent type parameters": [false],
                            })),
                            "types": prop(dictionary(component(typeRef("Type", true), {
                                "resolved namespaces": [false],
                                "resolved sibling types": [false],
                                "cyclic sibling types": [false],
                                "type parameters": [false],
                            }))),
                        }),
                    ),
                    "Type": globalTypeDefinition(
                        stateGroup({
                            "atom": state(stateGroup({
                                "boolean": state(group({})),
                                "null": state(group({})),
                                "number": state(group({})),
                                "string": state(group({})),
                            })),
                            "array": state(component(typeRef("Type", true), {
                                "resolved namespaces": [false],
                                "resolved sibling types": [false],
                                "cyclic sibling types": [false],
                                "type parameters": [false],
                            })),
                            "computed": state(component(typeRef("Type", true), {
                                "resolved namespaces": [false],
                                "resolved sibling types": [false],
                                "cyclic sibling types": [false],
                                "type parameters": [false],
                            })),
                            "dictionary": state(component(typeRef("Type", true), {
                                "resolved namespaces": [false],
                                "resolved sibling types": [false],
                                "cyclic sibling types": [false],
                                "type parameters": [false],
                            })),
                            "group": state(dictionary(group({
                                "type": prop(component(typeRef("Type", true), {
                                    "resolved namespaces": [false],
                                    "resolved sibling types": [false],
                                    "cyclic sibling types": [false],
                                    "type parameters": [false],
                                })),
                                "mutable": prop(optional(group({}))),
                            }))),
                            "initialization function": state(group({
                                "declaration": prop(component(typeRef("Function Declaration"), {
                                    "resolved namespaces": [false],
                                    "resolved sibling types": [false],
                                    "cyclic sibling types": [false],
                                    "type parameters": [false],
                                })),
                                "return type": prop(component(typeRef("Type", true), {
                                    "resolved namespaces": [false],
                                    "resolved sibling types": [false],
                                    "cyclic sibling types": [false],
                                    "type parameters": [false],
                                })),
                            })),
                            "lookup": state(component(typeRef("Type", true), {
                                "resolved namespaces": [false],
                                "resolved sibling types": [false],
                                "cyclic sibling types": [false],
                                "type parameters": [false],
                            })),
                            "optional": state(component(typeRef("Type", true), {
                                "resolved namespaces": [false],
                                "resolved sibling types": [false],
                                "cyclic sibling types": [false],
                                "type parameters": [false],
                            })),
                            "procedure": state(group({
                                "declaration": prop(component(typeRef("Function Declaration"), {
                                    "resolved namespaces": [false],
                                    "resolved sibling types": [false],
                                    "cyclic sibling types": [false],
                                    "type parameters": [false],
                                })),
                            })),
                            "selection function": state(group({
                                "declaration": prop(component(typeRef("Function Declaration"), {
                                    "resolved namespaces": [false],
                                    "resolved sibling types": [false],
                                    "cyclic sibling types": [false],
                                    "type parameters": [false],
                                })),
                                "return type": prop(component(typeRef("Type", true), {
                                    "resolved namespaces": [false],
                                    "resolved sibling types": [false],
                                    "cyclic sibling types": [false],
                                    "type parameters": [false],
                                })),
                            })),
                            "tagged union": state(dictionary(component(typeRef("Type", true), {
                                "resolved namespaces": [false],
                                "resolved sibling types": [false],
                                "cyclic sibling types": [false],
                                "type parameters": [false],
                            }))),
                            "type parameter": state(dictionaryReference(typeSelection("Aggregated Type Parameters"))),
                            "type reference": state(stateGroup({
                                "external": state(group({
                                    "namespace path": prop(component(typeRef("Namespace Selection", true), {
                                        "resolved namespaces": [false],
                                        "resolved sibling types": [false],
                                        "cyclic sibling types": [false],
                                        "type parameters": [false],
                                    })),
                                    "type": prop(dictionaryReference(typeSelection("Namespace", t_grp("types")))),
            
                                })),
                                "sibling": state(lookupReference(typeRef("Type", true))),
                                "cyclic sibling": state(cyclicReference(typeRef("Type", true))),
                            })),
                        })
                    ),
                    "Type Arguments": globalTypeDefinition(constrainedDictionary(
                        {
                            "parameter": dictionaryConstraint(typeSelection("Type Parameters", t_grp("local")), true),
                        },
                        group({
                            //link to parameter
                            "type": prop(component(typeRef("Type", true), {
                                "resolved namespaces": [false],
                                "resolved sibling types": [false],
                                "cyclic sibling types": [false],
                                "type parameters": [false],
                            })),
                        }))),
                    "Namespace Selection Tail": globalTypeDefinition(
                        group({
                            "namespace": prop(dictionaryReference(typeSelection("Namespace", t_grp("namespaces")))),
                            "arguments": prop(component(typeRef("Type Arguments"), {})),
                            "tail": prop(optional(component(typeRef("Namespace Selection Tail", true), {})))
                        })
                    ),
                    "Namespace Selection": globalTypeDefinition(
                        group({
                            "start": prop(stateGroup({
                                "import": state(group({
                                    "namespace": prop(dictionaryReference(typeSelection("Imports"))),
                                    "arguments": prop(component(typeRef("Type Arguments"), {})),
                                    "tail": prop(optional(component(typeRef("Namespace Selection Tail"), {})))
                                })),
                                "local": state(group({
                                    "namespace": prop(component(typeRef("Namespace Selection Tail"), {})),
                                })),
                            })),
                        })
                    ),
                    // "Namespace Selection": globalTypeDefinition(
                    //     group({
                    //         "namespace": prop(resolvedReference(lookup(typeRef("Local Namespace")))),
                    //         "tail": prop(optional(component(typeRef("Namespace Selection"))))
                    //     })
                    // ),
                    "Root": globalTypeDefinition(
                        component(typeRef("Namespace"), {
                            "resolved sibling namespaces": [false],
                            "parent type parameters": [false],
                        }),
                    )
                }
            ),
            "proto implementation": typeLibrary(
                {
                    "typesystem": imprt("proto typesystem"),
                },
                {
                    "numeric literal": null,
                    "string literal": null,
                    "identifier": null,
                },
                {
                    "Aggregated Variable": globalTypeDeclaration({}),
                    "Aggregated Variables": globalTypeDeclaration({}),
                    "Assign": globalTypeDeclaration({}),
                    "Block": globalTypeDeclaration({}),
                    "Boolean Initialization Or Selection": globalTypeDeclaration({}),
                    "Boolean Initialization": globalTypeDeclaration({}),
                    "Function Call": globalTypeDeclaration({}),
                    "Generic Initialization": globalTypeDeclaration({}),
                    "Initialization": globalTypeDeclaration({}),
                    "Local Variables": globalTypeDeclaration({}),
                    "Numerical Initialization Or Selection": globalTypeDeclaration({}),
                    "Numerical Initialization": globalTypeDeclaration({}),
                    "Root": globalTypeDeclaration({}),
                    "Source File": globalTypeDeclaration({}),
                    "Source Selection Tail": globalTypeDeclaration({}),
                    "Source Selection": globalTypeDeclaration({}),
                    "Statements": globalTypeDeclaration({}),
                    "String Initialization Or Selection": globalTypeDeclaration({}),
                    "String Initialization": globalTypeDeclaration({}),
                    "Target Selection Tail": globalTypeDeclaration({}),
                    "Target Selection": globalTypeDeclaration({}),
                    "Type Arguments": globalTypeDeclaration({}),
                    "Type Selection": globalTypeDeclaration({}),
                    "Variables": globalTypeDeclaration({}),
                },
                {
                    "Type Selection": globalTypeDefinition(
                        stateGroup(
                            {
                                "current namespaceXXXXX": state(
                                    dictionaryReference(externalTypeSelection("typesystem", "Namespace", t_grp("types"))),
                                ),
                                "child namespace": state(
                                    group({
                                        "namespacex": prop(dictionaryReference(externalTypeSelection("typesystem", "Namespace", t_grp("namespaces")))),
                                        "selection": prop(component(typeRef("Type Selection", true), {})),
                                    }),
                                )
                            }
                        )
                    ),
                    "Type Arguments": globalTypeDefinition(
                        constrainedDictionary(
                            { "x": dictionaryConstraint(externalTypeSelection("typesystem", "Type Parameters", t_grp("local")), true) },
                            group({
                                "type": prop(component(typeRef("Type Selection"), {}))
                            })
                        )
                    ),
                    "Local Variables": globalTypeDefinition(
                        dictionary(group({
                            "type": prop(component(typeRef("Type Selection"), {})),
                            "initialization": prop(component(typeRef("Initialization", true), {})),
                        }))
                    ),
                    "Aggregated Variable": globalTypeDefinition(
                        group({
                            "type": prop(stateGroup({
                                //FIXME "parameter": state(group({
                                //     "parameter": prop(dictionaryReference(valSel("parameters"), tempExternalTypeSelection("typesystem", "Parameters"))),
                                // }), tailSel(s_group("parameter", s_reference(s_group("type"))))),
                                "variable stack2": state(group({
                                    "variable": prop(lookupReference(typeRef("Aggregated Variable", true))),
                                })),
                                "local": state(group({
                                    //"variable": prop(dictionaryReference(typeSelection("Local Variables"))),
                                })),
                            })),
                        })
                    ),
                    "Aggregated Variables": globalTypeDefinition(
                        dictionary(component(typeRef("Aggregated Variable"), {}))
                    ),
                    "Variables": globalTypeDefinition(
                        group({
                            "local": prop(component(typeRef("Local Variables"), {})),
                            "aggregated": prop(component(typeRef("Aggregated Variables"), {}))
                        })
                    ),
                    "Target Selection Tail": globalTypeDefinition(
                        optional(
                            group({
                                "step": prop(stateGroup({
                                    "property": state(
                                        group({
                                            "group": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                                            "property": prop(dictionaryReference(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                                        }),
                                    ),
                                })),
                                "tail": prop(component(typeRef("Target Selection Tail", true), {}))
                            }),
                        )
                    ),
                    "Target Selection": globalTypeDefinition(
                        group({
                            "variable": prop(dictionaryReference(typeSelection("Aggregated Variables"))),
                            "tail": prop(component(typeRef("Target Selection Tail"), {})),
                        })
                    ),
                    "Function Call": globalTypeDefinition(
                        group({
                            // "function": prop(component(typeRef("Source Selection", {
                            //     "namespace": aResolvedValue(valSel("namespace")),
                            //     "variable stack": aResolvedValue(valSel("variable stack"))
                            // })), /*constraint tagged union: type === address function*/
                            "type arguments": prop(component(typeRef("Type Arguments"), {})),
                            "context": prop(component(typeRef("Source Selection", true), {})),
                            "arguments": prop(constrainedDictionary(
                                {
                                    "parameter": dictionaryConstraint(externalTypeSelection("typesystem", "Function Declaration", t_grp("parameters")), true)
                                },
                                stateGroup({
                                    "initialization": state(component(typeRef("Initialization", true), {})),
                                    "selection": state(group({
                                        "selection": prop(component(typeRef("Source Selection", true), {})),
                                    })),
                                })
                            ))
                        })
                    ),
                    "Source Selection Tail": globalTypeDefinition(
                        optional(
                            group({
                                "step": prop(stateGroup({
                                    "call": state(group({
                                        "selection function": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("selection function")))),
                                        "call": prop(component(typeRef("Function Call"), {})),
                                    })),
                                    "property": state(
                                        group({
                                            "group": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                                            "property": prop(dictionaryReference(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                                        }),
                                    ),
                                })),
                                "tail": prop(component(typeRef("Source Selection Tail", true), {}))
                            }),
                        )
                    ),
                    "Source Selection": globalTypeDefinition(
                        group({
                            "start": stateGroup({
                                "context": state(group({})),
                                "variable": state(dictionaryReference(typeSelection("Aggregated Variables")))
                            }),
                            "tail": prop(component(typeRef("Source Selection Tail"), {})),
                        }),
                    ),
            
                    ///////////////////////////////////////////////////////////////////////////////
                    //Expressions
                    "String Initialization Or Selection": globalTypeDefinition(
                        stateGroup({
                            "initialization": state(component(typeRef("String Initialization", true), {})),
                            "selection": state(group({
                                "selection": prop(component(typeRef("Source Selection"), {})),
                                "string": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("string"))))),
                            })),
                        })
                    ),
                    "Numerical Initialization Or Selection": globalTypeDefinition(
                        stateGroup({
                            "initialization": state(component(typeRef("Numerical Initialization", true), {})),
                            "selection": state(group({
                                "selection": prop(component(typeRef("Source Selection"), {})),
                                "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("number"))))),
                            })),
            
                        })
                    ),
                    "Boolean Initialization Or Selection": globalTypeDefinition(
                        stateGroup({
                            "initialization": state(component(typeRef("Boolean Initialization", true), {})),
                            "selection": state(group({
                                "selection": prop(component(typeRef("Source Selection"), {})),
                                "boolean": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("boolean")))))
                            })),
                        })
                    ),
                    "Boolean Initialization": globalTypeDefinition(
                        stateGroup({
                            "and": state(group({
                                "left hand side": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
                                "right hand side": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
                            })),
                            "or": state(group({
                                "left hand side": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
                                "right hand side": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
                            })),
                            "false": state(group({})),
                            "not": state(component(typeRef("Boolean Initialization Or Selection"), {})),
                            "true": state(group({})),
                            // //boolean/string
                            "string equals": state(group({
                                "left hand side": prop(component(typeRef("String Initialization Or Selection"), {})),
                                "right hand side": prop(component(typeRef("String Initialization Or Selection"), {})),
                            })),
                            "string not equals": state(group({
                                "left hand side": prop(component(typeRef("String Initialization Or Selection"), {})),
                                "right hand side": prop(component(typeRef("String Initialization Or Selection"), {})),
                            })),
                            // //boolean/number
                            "number equals": state(group({
                                "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                                "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                            })),
                            "number not equals": state(group({
                                "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                                "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                            })),
                            "greater than": state(group({
                                "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                                "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                            })),
                            "less than": state(group({
                                "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                                "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                            })),
                        })
                    ),
                    "Numerical Initialization": globalTypeDefinition(
                        stateGroup({
                            "minus": state(group({
                                "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                                "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                            })),
                            "plus": state(group({
                                "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                                "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                            })),
                            "predecrement": state(component(typeRef("Numerical Initialization Or Selection"), {})),
                            "preincrement": state(component(typeRef("Numerical Initialization Or Selection"), {})),
                            "postdecrement": state(component(typeRef("Numerical Initialization Or Selection"), {})),
                            "postincrement": state(component(typeRef("Numerical Initialization Or Selection"), {})),
                            "numeric literal": state(atom("numeric literal")),
                        })
                    ),
                    "String Initialization": globalTypeDefinition(
                        stateGroup({
                            "string literal": state(atom("string literal")),
                        })
                    ),
                    "Generic Initialization": globalTypeDefinition(
                        stateGroup({
                            "change context": state(group({
                                "source": prop(component(typeRef("Source Selection"), {})),
                                "initialization": prop(component(typeRef("Initialization", true), {})),
                            })),
                            "implement me": state(atom("string literal")),
                            "panic": state(atom("string literal")),
                            "switch": state(group({
                                "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("tagged union")))),
                                "temp type": prop(component(typeRef("Type Selection"), {})),
                                "source": prop(component(typeRef("Source Selection"), {})),
                                "cases": prop(constrainedDictionary(
                                    {
            
                                    },
                                    component(typeRef("Initialization", true), {})
                                )),
                                "default": prop(optional(component(typeRef("Initialization", true), {})))
                            })),
                            "variables": state(group({
                                "variables": prop(component(typeRef("Variables"), {})),
                                "initialization": prop(component(typeRef("Initialization", true), {})),
                            }))
                        }),
                    ),
                    "Initialization": globalTypeDefinition(
                        stateGroup({
                            "generic": state(component(typeRef("Generic Initialization"), {})),
                            "call": state(group({
                                "function": prop(component(typeRef("Source Selection"), {})),
                                "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("initialization function")))),
                                "call": prop(component(typeRef("Function Call"), {})),
                            })),
                            // "conditional": state(group({
                            //     "test": prop(component(typeRef("Boolean Initialization Or Selection", {
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //         "variable stack": aResolvedValue(valSel("variable stack"))
                            //     })),
                            //     "true": prop(component(typeRef("Initialization", {
                            //         "variable stack": aResolvedValue(valSel("variable stack")),
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //         "type": aResolvedValue(valSel("type")),
                            //     })),
                            //     "false": prop(component(typeRef("Initialization", {
                            //         "expected type": aResolvedValue(valSel("expected type")),
                            //         "variable stack": aResolvedValue(valSel("variable stack")),
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //     })),
                            // })),
                            "type": state(stateGroup({
                                "array": state(group({
                                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("array")))),
                                    "type": prop(stateGroup({
                                        "literal": state(group({
                                            "initialization": prop(array(component(typeRef("Initialization", true), {}))),
                                        })),
                                        "map": state(group({
                                            "source": prop(component(typeRef("Source Selection"), {})),
                                            "initialization": prop(component(typeRef("Initialization", true), {})),
                                        })),
                                    }))
                                })),
                                "atom": state(group({
                                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom")))),
                                    "type": prop(stateGroup({
                                        "boolean": state(group({
                                            "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("boolean"))))),
                                            "initialization": prop(component(typeRef("Boolean Initialization"), {})),
                                        })),
                                        "copy": state(group({
                                            "source": prop(component(typeRef("Source Selection", true), {})),
                                        })),
                                        "null": state(group({
                                            "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("null"))))),
                                        })),
                                        "numerical": state(group({
                                            "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("number"))))),
                                            "initialization": prop(component(typeRef("Numerical Initialization"), {})),
                                        })),
                                        "string": state(group({
                                            "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("string"))))),
                                            "initialization": prop(component(typeRef("String Initialization"), {})),
                                        })),
            
                                    })),
                                })),
                                "computed": state(group({
                                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("computed")))),
                                    //FIXME
                                })),
                                "dictionary": state(group({
                                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("dictionary")))),
                                    "type": prop(stateGroup({
                                        "literal": state(group({
                                            "initialization": prop(dictionary(component(typeRef("Initialization", true), {}))),
                                        })),
                                        "map": state(group({
                                            "source": prop(component(typeRef("Source Selection"), {})),
                                            "initialization": prop(component(typeRef("Initialization", true), {})),
                                        })),
                                    }))
                                })),
                                "group": state(group({
                                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                                    "properties": prop(constrainedDictionary(
                                        {
                                            "definition": dictionaryConstraint(externalTypeSelection("typesystem", "Type", t_sg("group")), true)
                                        },
                                        component(typeRef("Initialization", true), {}),
                                    )),
                                })),
                                "initialization function": state(group({
                                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("initialization function")))),
                                    "temp has parameters": prop(optional(group({}))),
                                    "variables": prop(component(typeRef("Aggregated Variables"), {})),
                                    "initialization": prop(component(typeRef("Initialization", true), {}))
                                })),
                                "lookup": state(group({
                                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("lookup")))),
                                    //FIXME
                                })),
                                "optional": state(group({
                                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("optional")))),
                                    //"initialization": prop(component(typeRef("Boolean Initialization"), {})),
                                })),
                                "procedure": state(group({
                                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("procedure")))),
                                    "temp has parameters": prop(optional(group({}))),
                                    "variables": prop(component(typeRef("Aggregated Variables"), {})),
                                    "block": prop(component(typeRef("Block", true), {}))
                                })),
                                "selection function": state(group({
                                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("selection function")))),
                                    "temp has parameters": prop(optional(group({}))),
                                    "variables": prop(component(typeRef("Aggregated Variables"), {})),
                                    "initialization": prop(component(typeRef("Initialization", true), {}))
                                })),
                                "tagged union": state(group({
                                    "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("tagged union")))),
                                    "state": prop(dictionaryReference(externalTypeSelection("typesystem", "Type", t_sg("tagged union")))),
                                    "initialization": prop(component(typeRef("Initialization", true), {})),
                                })),
                            })),
                        })
                    ),
            
            
                    //Statements
                    "Block": globalTypeDefinition(
                        group({
                            "variables": prop(component(typeRef("Variables"), {})),
                            "statements": prop(component(typeRef("Statements", true), {}))
                        })
                    ),
                    "Assign": globalTypeDefinition(
                        group({
                            "target": prop(component(typeRef("Target Selection"), {})),
                            "initialization": prop(component(typeRef("Initialization"), {})),
                        }),
                    ),
                    "Statements": globalTypeDefinition(
                        array(stateGroup({
                            "block": state(component(typeRef("Block"), {})),
                            "call": state(group({
                                "function": prop(component(typeRef("Source Selection"), {})),
                                "definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("procedure")))),
                                "call": prop(component(typeRef("Function Call"), {})),
                            })),
                            "change context": state(group({
                                "source": prop(component(typeRef("Source Selection"), {})),
                                "block": prop(component(typeRef("Block"), {}))
                            })),
            
                            "if": state(group({
                                "condition": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
                                "then": prop(component(typeRef("Block"), {})),
                                "else": prop(optional(component(typeRef("Block"), {}))),
                            })),
                            "switch": state(group({
                                "source": prop(component(typeRef("Source Selection"), {})),
                                "context definition": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("tagged union")))),
                                "cases": prop(constrainedDictionary(
                                    {
            
                                    },
                                    component(typeRef("Block"), {})
                                )),
                                "default": prop(optional(component(typeRef("Block"), {})))
                            })),
                            "with": state(group({
                                "source": prop(component(typeRef("Source Selection"), {})),
                                "action": prop(stateGroup({
                                    // "call": constrainedstate({
                                    //     "procedure address": optionConstraint(valSel("address", s_component()), "procedure", externalTypeSelection("typesystem", "Type", [tu("procedure")]))
                                    // }, group({
                                    //     "type arguments": prop(component(typeRef("Type Arguments", {
                                    //         "type parameters": aResolvedValue(valSel("function")),
                                    //         "namespace": aResolvedValue(valSel("namespace")),
                                    //     })),
                                    //         "arguments": prop(constrainedDictionary(
                                    //             { "parameter": dictConstraint(valSel("function"), externalTypeSelection("typesystem", "Parameters")) },
                                    //             component(typeRef("Initialization", {
                                    //                 "expected type": aResolvedValue(valSel("parameter")),
                                    //                 "variable stack": aResolvedValue(valSel("variable stack")),
                                    //                 "namespace": aResolvedValue(valSel("namespace")),
                                    //             })
                                    //             )),
                                    //         })),
                                    "assign": state(component(typeRef("Assign"), {})),
                                    "minus assign": state(group({/*must be number*/
                                        "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("number"))))),
                                        "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                                    })),
                                    "plus assign": state(group({/*must be number*/
                                        "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("atom", t_sg("number"))))),
                                        "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"), {})),
                                    })),
            
            
                                }))
                            })),
                            // "for": state(group({
                            //     "condition": prop(component(typeRef("Boolean Initialization", {
                            //         "variable stack": aResolvedValue(valSel("variable stack")),
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //     })),
                            //     "incrementer": prop(component(typeRef("Assign", {
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //         "variable stack": aResolvedValue(valSel("variable stack")),
                            //     })),
                            //     "block": prop(component(typeRef("Block", {
                            //         "function": aResolvedValue(valSel("function")),
                            //         "namespace": aResolvedValue(valSel("namespace")),
                            //         "variable stack": aResolvedValue(valSel("variable stack")),
                            //     })),
                            ///})),
                            // // "labeled": composite("LabeledStatement", group({
                            // //     "label": member(component(typeRef("identifier"), {}),
                            // //     "statement": member(component(typeRef("statement"), {}),
                            // // })),
                            // // "return": state(group({
                            // //     "Initialization": prop(optional(component(typeRef("Initialization", {
                            // //         "expected type": aResolvedValue(valSel("function", s_group("return type", result()))),
                            // //         "variable stack": aResolvedValue(valSel("variable stack")),
                            // //         "namespace": aResolvedValue(valSel("namespace")),
                            // //     })))
                            // // })),
                            // // "throw": state(component(typeRef("Initialization", {})),
                            // // "try": state(group({
                            // //     "block": prop(component(typeRef("Block", {})),
                            // //     "catchClause": prop(group({
                            // //         "variable": prop(component(typeRef("variableDeclaration"), {}),
                            // //         "block": member(component(typeRef("block"), {}),
                            // //     }))),
                            // // }))),
                            "while": state(group({
                                "condition": prop(component(typeRef("Boolean Initialization Or Selection"), {})),
                                "block": prop(component(typeRef("Block"), {})),
                            })),
                        }))
                    ),
            
                    // // "Symbols": globalTypeDefinition({
                    // //     "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                    // // }, dictionary(stateGroup({
                    // //     "namespace": state(group({
                    // //         "symbols": prop(component(typeRef("Symbols", {
                    // //             "namespace": aResolvedValue(valSel("namespace"))
                    // //         }))
                    // //     })),
                    // //     "symbol": state(group({
                    // //         "type path": prop(component(typeRef("Type Selection", {
                    // //             "namespace": aResolvedValue(valSel("namespace"))
                    // //         })),
                    // //     })),
                    // // }))),
                    // // "Type Selection Tail": globalTypeDefinition(
                    // //     {
                    // //         "namespace": pExternalResolvedValue("typesystem", "Namespace", false)
                    // //     },
                    // //     optional(
                    // //         group({
                    // //             //"step type": prop(dictionaryReference(valSel("TBD"), externalTypeSelection("typesystem", "Type" /*constrain type to namespace*/))),
                    // //             "tail": prop(component(typeRef("Type Selection Tail", {
                    // //                 "namespace": aResolvedValue(valSel("namespace"))
                    // //             })),
                    // //         }),
                    // //         optionalResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_group("tail", s_component())), valSel("namespace"))),
                    // //     globalTypeResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_optional()))
                    // // ),
            
                    "Source File": globalTypeDefinition(
                        group({
                            "type": prop(component(typeRef("Type Selection"), {})),
                            "initialization": prop(component(typeRef("Initialization", true), {})),
                        })
                    ),
                    "Root": globalTypeDefinition(
                        component(typeRef("Source File"), {})
                    )
                }
            )
            
        })
    }
}