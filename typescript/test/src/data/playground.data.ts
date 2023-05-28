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
                    "Atom Types": globalTypeDeclaration({}),
                    "Atom": globalTypeDeclaration({
                        "atom types": pResolvedValue("Atom Types")
                    }),
                    "Dictionary Selection": globalTypeDeclaration({
                        "imports": pResolvedValue("Imports"),
                        "sibling global types": pLookup("Global Type"),
                        "cyclic sibling global types": pCyclicLookup("Global Type"),
                    }),
                    "Global Type Selection": globalTypeDeclaration({
                        "imports": pResolvedValue("Imports"),
                        "sibling global types": pLookup("Global Type"),
                        "cyclic sibling global types": pCyclicLookup("Global Type"),
                    }),
                    "Global Type": globalTypeDeclaration({}),
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
                        "sibling global types": pLookup("Global Type"),
                    }, "Type"),
                    "Type": globalTypeDeclaration({
                        "atom types": pResolvedValue("Atom Types"),
                        "imports": pResolvedValue("Imports"),
                        "sibling global types": pLookup("Global Type"),
                        "cyclic sibling global types": pCyclicLookup("Global Type"),
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
                                    "type": prop(component(typeRef("Type", true))),
                                })),
                                "atom": state(group({
                                    "atom": prop(component(typeRef("Atom"))),
                                })),
                                "component": state(group({
                                    "type": prop(component(typeRef("Global Type Selection", true))),
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
                    "Imports": globalTypeDefinition(
                        dictionary(
                            group({
                                "library": prop(lookupReference(typeRef("Type Library", true)))
                            })
                        )
                    ),
                    "Global Type": globalTypeDefinition(
                        group({
                            "type": prop(component(typeRef("Type"))),
                        })
                    ),
                    "Type Selection Tail": globalTypeDefinition(
                        group({
                            "step type": prop(stateGroup({
                                "dictionary": state(group({
                                    "dictionary": prop(constraint(typeSelection("Type", t_grp("type", t_sg("dictionary"))))),
                                })),
                                "optional": state(group({
                                    "optional": prop(constraint(typeSelection("Type", t_grp("type", t_sg("optional"))))),
                                })),
                                "array": state(group({
                                    "array": prop(constraint(typeSelection("Type", t_grp("type", t_sg("array"))))),
                                })),
                                "group": state(group({
                                    "group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("group"))))),
                                    "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties"))))))
                                })),
                                "state group": state(group({
                                    "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
                                    "state": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states"))))))
                                })),
                            })),
                            "tail": prop(optional(component(typeRef("Type Selection Tail", true))))
                        }),
                    ),
                    "Type Selection": globalTypeDefinition(
                        group({
                            "import": prop(optional(dictionaryReference(typeSelection("Imports")))),
                            "global type": prop(lookupReference(typeRef("Global Type"))),
                            "tail": prop(optional(component(typeRef("Type Selection Tail"))))
                        }),
                    ),
                    "Dictionary Selection": globalTypeDefinition(
                        group({
                            "type": prop(component(typeRef("Type Selection"))),
                            "dictionary": constraint(typeSelection("Type", t_grp("type", t_sg("dictionary")))),
                        })
                    ),
                    "Type Library": globalTypeDefinition(
                        group({
                            "imports": prop(component(typeRef("Imports"))),
                            "atom types": prop(component(typeRef("Atom Types"))),
                            "global types": prop(dictionary(component(typeRef("Global Type")))),
                        })
                    ),
                    "Global Type Selection": globalTypeDefinition(
                        stateGroup({
                            "resolved sibling": state(group({
                                "type": prop(lookupReference(typeRef("Global Type"))),
                            })),
                            "import": state(group({
                                "library": prop(dictionaryReference(typeSelection("Imports"))),
                                "type": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types")))),
                            })),
                            "cyclic sibling": state(group({
                                "type": prop(cyclicReference(typeRef("Global Type"))),
                            })),
                        }),
                    ),
                    "Model": globalTypeDefinition(
                        group({
                            "type library": prop(component(typeRef("Type Library"))),
                            "root": prop(dictionaryReference(typeSelection("Type Library", t_grp("global types")))),
                        })
                    ),
                    "Project": globalTypeDefinition(group({
                        "type libraries": prop(dictionary(component(typeRef("Type Library")))),
                    })),
                    "Root": globalTypeDefinition(
                        component(typeRef("Project"))
                    )
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

                        "resolved namespaces": pLookup("Namespace 2"),
                        "resolved sibling types": pLookup("Type"),
                        "cyclic sibling types": pCyclicLookup("Type"),
                        "type parameters": pResolvedValue("Aggregated Type Parameters"),
                    }),
                    "Local Namespace": globalTypeDeclaration({
                        "resolved sibling namespaces": pLookup("Namespace 2", true),
                        "parent type parameters": pResolvedValue("Aggregated Type Parameters", true),

                    }),
                    "Namespace 2": globalTypeDeclaration({
                        "resolved parent sibling namespaces": pLookup("Namespace 2", true),
                    }, "Local Namespace"),
                    "Namespace Selection": globalTypeDeclaration({
                        "resolved namespaces": pLookup("Namespace 2"),
                        "resolved sibling types": pLookup("Type"),
                        "cyclic sibling types": pCyclicLookup("Type"),
                        "type parameters": pResolvedValue("Aggregated Type Parameters"),
                    }, "Namespace 2"),
                    "Root": globalTypeDeclaration({}),
                    "Type Arguments": globalTypeDeclaration({}),
                    "Type Parameters": globalTypeDeclaration({
                        "parent type parameters": pResolvedValue("Aggregated Type Parameters", true),
                    }),
                    "Type": globalTypeDeclaration({
                        "resolved namespaces": pLookup("Namespace 2"),
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
                            "aggregated": prop(component(typeRef("Aggregated Type Parameters")))
                        })
                    ),
                    "Function Declaration": globalTypeDefinition(
                        group({
                            "type parameters": prop(component(typeRef("Type Parameters"))),
                            "context": prop(component(typeRef("Type", true))),
                            "parameters": prop(dictionary(component(typeRef("Type", true)))),
                        })
                    ),
                    "Namespace 2": globalTypeDefinition(
                        stateGroup({
                            "parent sibling": state(group({
                                "namespace": prop(lookupReference(typeRef("Namespace 2", true))),
                            })),
                            "local": state(component(typeRef("Local Namespace", true))),
                        })
                    ),
                    "Local Namespace": globalTypeDefinition(
                        group({
                            "namespaces": prop(dictionary(component(typeRef("Namespace 2")))),
                            "parameters": prop(component(typeRef("Type Parameters"))),
                            "types": prop(dictionary(component(typeRef("Type", true)))),
                        }),
                    ),
                    "Type": globalTypeDefinition(
                        stateGroup({
                            "address function": state(group({
                                "declaration": prop(component(typeRef("Function Declaration"))),
                                "return type": prop(component(typeRef("Type", true))),
                            })),
                            "array": state(component(typeRef("Type", true))),
                            "boolean": state(group({})),
                            "computed": state(component(typeRef("Type", true))),
                            "dictionary": state(component(typeRef("Type", true))),
                            "group": state(dictionary(group({
                                "type": prop(component(typeRef("Type", true))),
                                "mutable": prop(optional(group({}))),
                            }))),
                            "null": state(group({})),
                            "number": state(group({})),
                            "optional": state(component(typeRef("Type", true))),
                            "procedure": state(group({
                                "declaration": prop(component(typeRef("Function Declaration"))),
                            })),
                            "string": state(group({})),
                            "tagged union": state(dictionary(component(typeRef("Type", true)))),
                            "type parameter": state(dictionaryReference(typeSelection("Aggregated Type Parameters"))),
                            "type reference": state(stateGroup({
                                "external": state(group({
                                    "namespaces": prop(component(typeRef("Namespace Selection", true))),
                                    "type": prop(dictionaryReference(typeSelection("Local Namespace", t_grp("types")))),

                                })),
                                "sibling": state(lookupReference(typeRef("Type", true))),
                                "cyclic sibling": state(cyclicReference(typeRef("Type", true))),
                            })),
                            "value function": state(group({
                                "declaration": prop(component(typeRef("Function Declaration"))),
                                "return type": prop(component(typeRef("Type", true))),
                            })),
                        })
                    ),
                    "Type Arguments": globalTypeDefinition(constrainedDictionary(
                        {
                            "parameter": dictionaryConstraint(typeSelection("Type Parameters", t_grp("local")), true),
                        },
                        group({
                            //link to parameter
                            "type": prop(component(typeRef("Type", true))),
                        }))),
                    "Namespace Selection": globalTypeDefinition(
                        group({
                            "namespace": prop(dictionaryReference(typeSelection("Local Namespace", t_grp("namespaces")))),
                            "arguments": prop(component(typeRef("Type Arguments"))),
                            "tail": prop(optional(component(typeRef("Namespace Selection", true))))
                        })
                    ),
                    // "Namespace Selection": globalType(
                    //     group({
                    //         "namespace": prop(resolvedReference(lookup(typeRef("Local Namespace")))),
                    //         "tail": prop(optional(component(typeRef("Namespace Selection"))))
                    //     })
                    // ),
                    "Root": globalTypeDefinition(
                        component(typeRef("Local Namespace")),
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
                    // "Address Selection Tail": globalTypeDeclaration({}),
                    // "Address Selection": globalTypeDeclaration({}),
                    // "Assign": globalTypeDeclaration({}),
                    // "Block": globalTypeDeclaration({}),
                    // "Boolean Initialization Or Selection": globalTypeDeclaration({}),
                    // "Boolean Initialization": globalTypeDeclaration({}),
                    // "Initialization Or Selection": globalTypeDeclaration({}),
                    // "Initialization": globalTypeDeclaration({}),
                    // "Numerical Initialization Or Selection": globalTypeDeclaration({}),
                    // "Numerical Initialization": globalTypeDeclaration({}),
                    // "Root": globalTypeDeclaration({}),
                    // "Source File": globalTypeDeclaration({}),
                    // "Statements": globalTypeDeclaration({}),
                    // "String Initialization Or Selection": globalTypeDeclaration({}),
                    // "String Initialization": globalTypeDeclaration({}),
                    // "Type Arguments": globalTypeDeclaration({}),
                    // "Type Selection": globalTypeDeclaration({}),
                    // "Variables": globalTypeDeclaration({}),
                },
                {
                    // "Type Selection": globalTypeDefinition(
                    //     stateGroup(
                    //         {
                    //             "current namespaceXXXXX": state(
                    //                 dictionaryReference(externalTypeSelection("typesystem", "Local Namespace", t_grp("types"))),
                    //             ),
                    //             "child namespace": state(
                    //                 group({
                    //                     "namespacex": prop(dictionaryReference(externalTypeSelection("typesystem", "Local Namespace", t_grp("namespaces")))),
                    //                     "selection": prop(component(typeRef("Type Selection", true))),
                    //                 }),
                    //             )
                    //         }
                    //     )
                    // ),
                    // "Type Arguments": globalTypeDefinition(
                    //     constrainedDictionary(
                    //         { "x": dictionaryConstraint(externalTypeSelection("typesystem", "Type Parameters", t_grp("local")), true) },
                    //         group({
                    //             "type": prop(component(typeRef("Type Selection")))
                    //         })
                    //     )
                    // ),
                    // "Address Selection Tail": globalTypeDefinition(
                    //     optional(
                    //         group({
                    //             "step": prop(stateGroup({
                    //                 "call": state(group({
                    //                     "address function": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("address function")))),
                    //                     // "function": prop(component(typeRef("Address Selection", {
                    //                     //     "namespace": aResolvedValue(valSel("namespace")),
                    //                     //     "variable stack": aResolvedValue(valSel("variable stack"))
                    //                     // })), /*constraint tagged union: type === address function*/
                    //                     "type arguments": prop(component(typeRef("Type Arguments"))),
                    //                     // "arguments": prop(constrainedDictionary({
                    //                     //     "parameter": dictConstraint(valSel("address function", s_group("declaration", s_group("parameters"))), tempExternalTypeSelection("typesystem", "Function Declaration", t_grp("parameters")))
                    //                     // }, component(typeRef("Initialization", {
                    //                     //     "expected type": aResolvedValue(valSel("parameter", /*s_group("type")*/)),
                    //                     //     "namespace": aResolvedValue(valSel("namespace")),
                    //                     //     "variable stack": aResolvedValue(valSel("variable stack")),
                    //                     // }))),
                    //                 })),
                    //                 "property": state(
                    //                     group({
                    //                         "group": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                    //                         "property": prop(dictionaryReference(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                    //                     }),
                    //                 ),
                    //             })),
                    //             "tail": prop(component(typeRef("Address Selection Tail", true)))
                    //         }),
                    //     )
                    // ),
                    // "Variables": globalTypeDefinition(
                    //     dictionary(group({
                    //         "type": prop(stateGroup({
                    //             //FIXME "parameter": state(group({
                    //             //     "parameter": prop(dictionaryReference(valSel("parameters"), tempExternalTypeSelection("typesystem", "Parameters"))),
                    //             // }), tailSel(s_group("parameter", s_reference(s_group("type"))))),
                    //             "variable stack2": state(group({
                    //                 "variable": prop(lookupReference(typeRef("Variables", true))),
                    //             })),
                    //             "local": state(group({
                    //                 "type": prop(component(typeRef("Type Selection"))),
                    //                 "initialization": prop(component(typeRef("Initialization", true))),
                    //             })),
                    //         })),
                    //     }))
                    // ),
                    // "Address Selection": globalTypeDefinition(
                    //     group({
                    //         "variable": prop(dictionaryReference(typeSelection("Variables"))),
                    //         "tail": prop(component(typeRef("Address Selection Tail"))),
                    //     })
                    // ),

                    // ///////////////////////////////////////////////////////////////////////////////
                    // //Expressions
                    // "Initialization Or Selection": globalTypeDefinition(
                    //     stateGroup({
                    //         "initialization": state(component(typeRef("Initialization", true))),
                    //         "selection": state(group({
                    //             "selection": prop(component(typeRef("Address Selection"))),
                    //             "string": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("string")))),
                    //         })),
                    //     })
                    // ),
                    // "String Initialization Or Selection": globalTypeDefinition(
                    //     stateGroup({
                    //         "initialization": state(component(typeRef("String Initialization", true))),
                    //         "selection": state(group({
                    //             "selection": prop(component(typeRef("Address Selection"))),
                    //             "string": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("string")))),
                    //         })),
                    //     })
                    // ),
                    // "Numerical Initialization Or Selection": globalTypeDefinition(
                    //     stateGroup({
                    //         "initialization": state(component(typeRef("Numerical Initialization", true))),
                    //         "selection": state(group({
                    //             "selection": prop(component(typeRef("Address Selection"))),
                    //             "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("number")))),
                    //         })),

                    //     })
                    // ),
                    // "Boolean Initialization Or Selection": globalTypeDefinition(
                    //     stateGroup({
                    //         "initialization": state(component(typeRef("Boolean Initialization", true))),
                    //         "selection": state(group({
                    //             "selection": prop(component(typeRef("Address Selection"))),
                    //             "boolean": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("boolean"))))
                    //         })),
                    //     })
                    // ),
                    // "Boolean Initialization": globalTypeDefinition(
                    //     stateGroup({
                    //         "and": state(group({
                    //             "left hand side": prop(component(typeRef("Boolean Initialization Or Selection"))),
                    //             "right hand side": prop(component(typeRef("Boolean Initialization Or Selection"))),
                    //         })),
                    //         "or": state(group({
                    //             "left hand side": prop(component(typeRef("Boolean Initialization Or Selection"))),
                    //             "right hand side": prop(component(typeRef("Boolean Initialization Or Selection"))),
                    //         })),
                    //         "false": state(group({})),
                    //         "not": state(component(typeRef("Boolean Initialization Or Selection"))),
                    //         "true": state(group({})),
                    //         // //boolean/string
                    //         "string equals": state(group({
                    //             "left hand side": prop(component(typeRef("String Initialization Or Selection"))),
                    //             "right hand side": prop(component(typeRef("String Initialization Or Selection"))),
                    //         })),
                    //         "string not equals": state(group({
                    //             "left hand side": prop(component(typeRef("String Initialization Or Selection"))),
                    //             "right hand side": prop(component(typeRef("String Initialization Or Selection"))),
                    //         })),
                    //         // //boolean/number
                    //         "number equals": state(group({
                    //             "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //             "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //         })),
                    //         "number not equals": state(group({
                    //             "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //             "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //         })),
                    //         "greater than": state(group({
                    //             "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //             "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //         })),
                    //         "less than": state(group({
                    //             "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //             "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //         })),
                    //     })
                    // ),
                    // "Numerical Initialization": globalTypeDefinition(
                    //     stateGroup({
                    //         "minus": state(group({
                    //             "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //             "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //         })),
                    //         "plus": state(group({
                    //             "left hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //             "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //         })),
                    //         "predecrement": state(component(typeRef("Numerical Initialization Or Selection"))),
                    //         "preincrement": state(component(typeRef("Numerical Initialization Or Selection"))),
                    //         "postdecrement": state(component(typeRef("Numerical Initialization Or Selection"))),
                    //         "postincrement": state(component(typeRef("Numerical Initialization Or Selection"))),
                    //         "numeric literal": state(atom("numeric literal")),
                    //     })
                    // ),
                    // "String Initialization": globalTypeDefinition(
                    //     stateGroup({
                    //         "string literal": state(atom("string literal")),
                    //     })
                    // ),
                    // "Initialization": globalTypeDefinition(
                    //     stateGroup({
                    //         // //array
                    //         "array literal": state(array(group({
                    //             "array": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("array")))),
                    //             "initialization": prop(component(typeRef("Initialization Or Selection")))
                    //         }))),
                    //         // //object
                    //         "object literal": state(group({
                    //             "group": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("group")))),
                    //             "properties": prop(constrainedDictionary(
                    //                 {
                    //                     "prop": dictionaryConstraint(externalTypeSelection("typesystem", "Type", t_sg("group")), true)
                    //                 },
                    //                 component(typeRef("Initialization Or Selection")
                    //                 )
                    //             )),
                    //         })),
                    //         // //function (inline function)
                    //         // "address function": constrainedstate({
                    //         //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type"))
                    //         // }, group({
                    //         //     "parameters": prop(dictionary(group({}))), //no type info needed
                    //         //     //"signature": prop(component(typeRef("FunctionSignature", {})),
                    //         //     "variables": prop(component(typeRef("Variables", {
                    //         //         "namespace": aResolvedValue(valSel("namespace")),
                    //         //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                    //         //         "variable stack": aResolvedValue(valSel("variable stack")),
                    //         //     })),
                    //         //     "statements": prop(component(typeRef("Statements", {
                    //         //         "function": aResolvedValue(valSel("out")),
                    //         //         "namespace": aResolvedValue(valSel("namespace")),
                    //         //         "variable stack": aResolvedValue(valSel("variables"))
                    //         //     })),
                    //         //     "return selection": prop(component(typeRef("Address Selection", {
                    //         //         // "function": aResolvedValue(valSel("out")),
                    //         //         // "namespace": aResolvedValue(valSel("namespace")),
                    //         //         // "variable stack": aResolvedValue(valSel("variables"))
                    //         //     })),
                    //         // })),
                    //         // "value function": constrainedstate({
                    //         //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type"))
                    //         // }, group({
                    //         //     "parameters": prop(dictionary(group({}))), //no type info needed
                    //         //     //"signature": prop(component(typeRef("FunctionSignature", {})),
                    //         //     "variables": prop(component(typeRef("Variables", {
                    //         //         "namespace": aResolvedValue(valSel("namespace")),
                    //         //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                    //         //         "variable stack": aResolvedValue(valSel("variable stack")),
                    //         //     })),
                    //         //     "statements": prop(component(typeRef("Statements", {
                    //         //         "function": aResolvedValue(valSel("out")),
                    //         //         "namespace": aResolvedValue(valSel("namespace")),
                    //         //         "variable stack": aResolvedValue(valSel("variables"))
                    //         //     })),
                    //         //     "return expression": prop(component(typeRef("Initialization", {
                    //         //         // "function": aResolvedValue(valSel("out")),
                    //         //         // "namespace": aResolvedValue(valSel("namespace")),
                    //         //         // "variable stack": aResolvedValue(valSel("variables"))
                    //         //     })),
                    //         // })),
                    //         // // "procedure": constrainedstate({
                    //         // //     "out": optionConstraint(valSel("type"), "function", externalTypeSelection("typesystem", "Type"))
                    //         // // }, group({
                    //         // //     "parameters": prop(dictionary(group({}))), //no type info needed
                    //         // //     //"signature": prop(component(typeRef("FunctionSignature", {})),
                    //         // //     "variables": prop(component(typeRef("Variables", {
                    //         // //         "namespace": aResolvedValue(valSel("namespace")),
                    //         // //         //"parameters": [true, aResolvedValue(valSel("parameters"))],
                    //         // //         "variable stack": aResolvedValue(valSel("variable stack")),
                    //         // //     })),
                    //         // //     "statements": prop(component(typeRef("Statements", {
                    //         // //         "function": aResolvedValue(valSel("out")),
                    //         // //         "namespace": aResolvedValue(valSel("namespace")),
                    //         // //         "variable stack": aResolvedValue(valSel("variables"))
                    //         // //     })),
                    //         // // })),
                    //         //boolean
                    //         "boolean": state(group({
                    //             "boolean": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("boolean")))),
                    //             "x": prop(component(typeRef("Boolean Initialization"))),
                    //         })),
                    //         "numerical": state(group({
                    //             "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("number")))),
                    //             "x": prop(component(typeRef("Numerical Initialization"))),
                    //         })),
                    //         "string": state(group({
                    //             "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("string")))),
                    //             "x": prop(component(typeRef("String Initialization"))),
                    //         })),
                    //         // //any
                    //         // "conditional": state(group({
                    //         //     "test": prop(component(typeRef("Boolean Initialization Or Selection", {
                    //         //         "namespace": aResolvedValue(valSel("namespace")),
                    //         //         "variable stack": aResolvedValue(valSel("variable stack"))
                    //         //     })),
                    //         //     "true": prop(component(typeRef("Initialization", {
                    //         //         "variable stack": aResolvedValue(valSel("variable stack")),
                    //         //         "namespace": aResolvedValue(valSel("namespace")),
                    //         //         "type": aResolvedValue(valSel("type")),
                    //         //     })),
                    //         //     "false": prop(component(typeRef("Initialization", {
                    //         //         "expected type": aResolvedValue(valSel("expected type")),
                    //         //         "variable stack": aResolvedValue(valSel("variable stack")),
                    //         //         "namespace": aResolvedValue(valSel("namespace")),
                    //         //     })),
                    //         // })),
                    //         // //"identifier": state(atom("identifier")),
                    //         // // "new": state(group({
                    //         // //     "class": prop(atom("identifier")),
                    //         // //     "parameters": prop(dictionary(component(typeRef("Initialization", {}))),
                    //         // // })),
                    //         // // "noSubstitutionTemplateLiteral": empty("NoSubstitutionTemplateLiteral"),
                    //         "null": state(group({
                    //             "null": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("null")))),
                    //         })),
                    //         // //"parenthesized": state(component(typeRef("Initialization", {})),
                    //         // "symbol": state(component(typeRef("Address Selection", { //something that is stored
                    //         //     "namespace": aResolvedValue(valSel("namespace")),
                    //         //     "variable stack": aResolvedValue(valSel("variable stack"))
                    //         // })),
                    //         // // "template": composite("TemplateExpression", group({
                    //         // //     "head": member(empty("TemplateHead", { "text": atom() })),
                    //         // //     "spans": member(array(composite("TemplateSpan", group({
                    //         // //         "Initialization": member(component(typeRef("Initialization")),
                    //         // //         "type": member(choice({
                    //         // //             "middle": empty("TemplateMiddle", { "text": atom() }),
                    //         // //             "tail": empty("TemplateTail", { "text": atom() }),
                    //         // //         })),
                    //         // //     })))),
                    //         // // })),
                    //     })
                    // ),


                    // //Statements
                    // "Block": globalTypeDefinition(
                    //     group({
                    //         "variables": prop(component(typeRef("Variables"))),
                    //         "statements": prop(component(typeRef("Statements", true)))
                    //     })
                    // ),
                    // "Assign": globalTypeDefinition(
                    //     group({
                    //         "target": prop(component(typeRef("Address Selection"))),
                    //         "initialization": prop(component(typeRef("Initialization Or Selection"))),
                    //     }),
                    // ),
                    // "Statements": globalTypeDefinition(
                    //     array(stateGroup({
                    //         "block": state(component(typeRef("Block"))),
                    //         "with": state(group({
                    //             "address": prop(component(typeRef("Address Selection"))),
                    //             "action": prop(stateGroup({
                    //                 //         "call": constrainedstate({
                    //                 //             "procedure address": optionConstraint(valSel("address", s_component()), "procedure", externalTypeSelection("typesystem", "Type", [tu("procedure")]))
                    //                 //         }, group({
                    //                 //             "type arguments": prop(component(typeRef("Type Arguments", {
                    //                 //                 "type parameters": aResolvedValue(valSel("function")),
                    //                 //                 "namespace": aResolvedValue(valSel("namespace")),
                    //                 //             })),
                    //                 //             "arguments": prop(constrainedDictionary(
                    //                 //                 { "parameter": dictConstraint(valSel("function"), externalTypeSelection("typesystem", "Parameters")) },
                    //                 //                 component(typeRef("Initialization", {
                    //                 //                     "expected type": aResolvedValue(valSel("parameter")),
                    //                 //                     "variable stack": aResolvedValue(valSel("variable stack")),
                    //                 //                     "namespace": aResolvedValue(valSel("namespace")),
                    //                 //                 })
                    //                 //             )),
                    //                 //         })),
                    //                 "assign": state(component(typeRef("Assign"))),
                    //                 "minus assign": state(group({/*must be number*/
                    //                     "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("number")))),
                    //                     "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //                 })),
                    //                 "plus assign": state(group({/*must be number*/
                    //                     "number": prop(constraint(externalTypeSelection("typesystem", "Type", t_sg("number")))),
                    //                     "right hand side": prop(component(typeRef("Numerical Initialization Or Selection"))),
                    //                 })),

                    //                 //         "switch": constrainedstate({
                    //                 //             "tagged union address": optionConstraint(valSel("address", s_component()), "tagged union", typeSelection("Foo"))
                    //                 //         }, group({
                    //                 //             "cases": prop(constrainedDictionary(
                    //                 //                 { "option": dictConstraint(valSel("tagged union address", s_group("options")), externalTypeSelection("typesystem", "Type", [tu("tagged union"), grp("options")])) },
                    //                 //                 group({
                    //                 //                     "block": prop(component(typeRef("Block", {
                    //                 //                         "function": aResolvedValue(valSel("function")),
                    //                 //                         "namespace": aResolvedValue(valSel("namespace")),
                    //                 //                         "variable stack": aResolvedValue(valSel("variable stack")),
                    //                 //                     }))
                    //                 //                 })
                    //                 //             )),
                    //                 //             "default": prop(optional(component(typeRef("Block", {
                    //                 //                 "function": aResolvedValue(valSel("function")),
                    //                 //                 "namespace": aResolvedValue(valSel("namespace")),
                    //                 //                 "variable stack": aResolvedValue(valSel("variable stack")),
                    //                 //             }))),
                    //                 //         })),
                    //             }))
                    //         })),
                    //         // "for": state(group({
                    //         //     "condition": prop(component(typeRef("Boolean Initialization", {
                    //         //         "variable stack": aResolvedValue(valSel("variable stack")),
                    //         //         "namespace": aResolvedValue(valSel("namespace")),
                    //         //     })),
                    //         //     "incrementer": prop(component(typeRef("Assign", {
                    //         //         "namespace": aResolvedValue(valSel("namespace")),
                    //         //         "variable stack": aResolvedValue(valSel("variable stack")),
                    //         //     })),
                    //         //     "block": prop(component(typeRef("Block", {
                    //         //         "function": aResolvedValue(valSel("function")),
                    //         //         "namespace": aResolvedValue(valSel("namespace")),
                    //         //         "variable stack": aResolvedValue(valSel("variable stack")),
                    //         //     })),
                    //         ///})),
                    //         "if": state(group({
                    //             "condition": prop(component(typeRef("Boolean Initialization Or Selection"))),
                    //             "then": prop(component(typeRef("Block"))),
                    //             "else": prop(optional(component(typeRef("Block")))),
                    //         })),
                    //         // // "labeled": composite("LabeledStatement", group({
                    //         // //     "label": member(component(typeRef("identifier")),
                    //         // //     "statement": member(component(typeRef("statement")),
                    //         // // })),
                    //         // // "return": state(group({
                    //         // //     "Initialization": prop(optional(component(typeRef("Initialization", {
                    //         // //         "expected type": aResolvedValue(valSel("function", s_group("return type", result()))),
                    //         // //         "variable stack": aResolvedValue(valSel("variable stack")),
                    //         // //         "namespace": aResolvedValue(valSel("namespace")),
                    //         // //     })))
                    //         // // })),
                    //         // // "throw": state(component(typeRef("Initialization", {})),
                    //         // // "try": state(group({
                    //         // //     "block": prop(component(typeRef("Block", {})),
                    //         // //     "catchClause": prop(group({
                    //         // //         "variable": prop(component(typeRef("variableDeclaration")),
                    //         // //         "block": member(component(typeRef("block")),
                    //         // //     }))),
                    //         // // }))),
                    //         "while": state(group({
                    //             "condition": prop(component(typeRef("Boolean Initialization Or Selection"))),
                    //             "block": prop(component(typeRef("Block"))),
                    //         })),
                    //     }))
                    // ),

                    // // // "Symbols": globalTypeDefinition({
                    // // //     "namespace": pExternalResolvedValue("typesystem", "Namespace", false),
                    // // // }, dictionary(stateGroup({
                    // // //     "namespace": state(group({
                    // // //         "symbols": prop(component(typeRef("Symbols", {
                    // // //             "namespace": aResolvedValue(valSel("namespace"))
                    // // //         }))
                    // // //     })),
                    // // //     "symbol": state(group({
                    // // //         "type path": prop(component(typeRef("Type Selection", {
                    // // //             "namespace": aResolvedValue(valSel("namespace"))
                    // // //         })),
                    // // //     })),
                    // // // }))),
                    // // // "Type Selection Tail": globalTypeDefinition(
                    // // //     {
                    // // //         "namespace": pExternalResolvedValue("typesystem", "Namespace", false)
                    // // //     },
                    // // //     optional(
                    // // //         group({
                    // // //             //"step type": prop(dictionaryReference(valSel("TBD"), externalTypeSelection("typesystem", "Type" /*constrain type to namespace*/))),
                    // // //             "tail": prop(component(typeRef("Type Selection Tail", {
                    // // //                 "namespace": aResolvedValue(valSel("namespace"))
                    // // //             })),
                    // // //         }),
                    // // //         optionalResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_group("tail", s_component())), valSel("namespace"))),
                    // // //     globalTypeResult(externalGlobalTypeSelection("typesystem", "Type"), tailSel(s_optional()))
                    // // // ),

                    // "Source File": globalTypeDefinition(
                    //     group({
                    //         "type": prop(component(typeRef("Type Selection"))),
                    //         "initialization": prop(component(typeRef("Initialization", true))),
                    //     })
                    // ),
                    // "Root": globalTypeDefinition(
                    //     component(typeRef("Source File"))
                    // )
                }
            ),
        })
    }
}