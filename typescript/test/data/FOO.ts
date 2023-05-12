import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

nullexport const $: g_glossary.T.Glossary<undefined> = {
    'imports': d({}),
    'glossary parameters': d({
        "Annotation": null,
    }),
    'root': {
        'types': d({
            "Any Value Selection": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['group', d({
                    "start": {
                        'type': null<g_glossary.T.Type<undefined>>['optional', null<g_glossary.T.Type<undefined>>['group', d({
                            "annotation": {
                                'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "key": {
                                'type': null<g_glossary.T.Type<undefined>>['string', null],
                            },
                            "referent": {
                                'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Variables",
                                    'tailXX': a([
                                        "D",
                                    ]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })]],
                    },
                    "tail": {
                        'type': null<g_glossary.T.Type<undefined>>['optional', null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Value Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Atom": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['group', d({
                    "type": {
                        'type': null<g_glossary.T.Type<undefined>>['group', d({
                            "annotation": {
                                'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "key": {
                                'type': null<g_glossary.T.Type<undefined>>['string', null],
                            },
                            "referent": {
                                'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Atom Types",
                                    'tailXX': a([
                                        "D",
                                    ]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })],
                    },
                })]
            },
            "Atom Types": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['dictionary', null<g_glossary.T.Type<undefined>>['group', d({})]]
            },
            "Dictionary Constraints": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['dictionary', null<g_glossary.T.Type<undefined>>['taggedUnion', d({
                    "dictionary": null<g_glossary.T.Type<undefined>>['group', d({
                        "dense": {
                            'type': null<g_glossary.T.Type<undefined>>['taggedUnion', d({
                                "no": null<g_glossary.T.Type<undefined>>['group', d({})],
                                "yes": null<g_glossary.T.Type<undefined>>['group', d({})],
                            })],
                        },
                        "dictionary": {
                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Dictionary Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "lookup": null<g_glossary.T.Type<undefined>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Lookup Selection",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                })]]
            },
            "Dictionary Selection": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['group', d({
                    "cast": {
                        'type': null<g_glossary.T.Type<undefined>>['taggedUnion', d({
                            "dictionary": null<g_glossary.T.Type<undefined>>['group', d({
                                "annotation": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "constraints": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({
                                        "dictionary": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type",
                                                'tailXX': a([
                                                    "type",
                                                    "dictionary",
                                                ]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })],
                                },
                                "content": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({})],
                                },
                            })],
                        })],
                    },
                    "type": {
                        'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Value Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Global Type": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['group', d({
                    "parameters": {
                        'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Parameters",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "result": {
                        'type': null<g_glossary.T.Type<undefined>>['optional', null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Any Value Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                    "type": {
                        'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "variables": {
                        'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Variables",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Global Type Selection": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['taggedUnion', d({
                    "import": null<g_glossary.T.Type<undefined>>['group', d({
                        "library": {
                            'type': null<g_glossary.T.Type<undefined>>['group', d({
                                "annotation": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "key": {
                                    'type': null<g_glossary.T.Type<undefined>>['string', null],
                                },
                                "referent": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Imports",
                                        'tailXX': a([
                                            "D",
                                        ]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                        },
                        "type": {
                            'type': null<g_glossary.T.Type<undefined>>['group', d({
                                "annotation": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "key": {
                                    'type': null<g_glossary.T.Type<undefined>>['string', null],
                                },
                                "referent": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Global Types",
                                        'tailXX': a([
                                            "D",
                                        ]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                        },
                    })],
                    "resolved sibling": null<g_glossary.T.Type<undefined>>['group', d({
                        "type": {
                            'type': null<g_glossary.T.Type<undefined>>['group', d({
                                "annotation": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "key": {
                                    'type': null<g_glossary.T.Type<undefined>>['string', null],
                                },
                                "referent": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Global Type",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                        },
                    })],
                })]
            },
            "Global Types": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['dictionary', null<g_glossary.T.Type<undefined>>['reference', ['type', {
                    'context': ['local', null],
                    'typeXX': "Global Type",
                    'tailXX': a([]),
                    'type arguments': d({}),
                }]]]
            },
            "Imports": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['dictionary', null<g_glossary.T.Type<undefined>>['group', d({
                    "annotation": {
                        'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                    },
                    "constraints": {
                        'type': null<g_glossary.T.Type<undefined>>['group', d({
                            "library": {
                                'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Type Library",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })],
                    },
                    "content": {
                        'type': null<g_glossary.T.Type<undefined>>['group', d({})],
                    },
                })]]
            },
            "Lookup Selection": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['taggedUnion', d({
                    "parameter": null<g_glossary.T.Type<undefined>>['group', d({
                        "annotation": {
                            'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "key": {
                            'type': null<g_glossary.T.Type<undefined>>['string', null],
                        },
                        "referent": {
                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Parameters",
                                'tailXX': a([
                                    "D",
                                ]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "resolved dictionary": null<g_glossary.T.Type<undefined>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Value Selection",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "this": null<g_glossary.T.Type<undefined>>['group', d({})],
                })]
            },
            "Model": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['group', d({
                    "root": {
                        'type': null<g_glossary.T.Type<undefined>>['group', d({
                            "annotation": {
                                'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "key": {
                                'type': null<g_glossary.T.Type<undefined>>['string', null],
                            },
                            "referent": {
                                'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Global Types",
                                    'tailXX': a([
                                        "D",
                                    ]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })],
                    },
                    "type library": {
                        'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Library",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Parameters": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['dictionary', null<g_glossary.T.Type<undefined>>['group', d({
                    "type": {
                        'type': null<g_glossary.T.Type<undefined>>['taggedUnion', d({
                            "lookup": null<g_glossary.T.Type<undefined>>['group', d({
                                "type": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Global Type Selection",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "resolved value": null<g_glossary.T.Type<undefined>>['group', d({
                                "optional": {
                                    'type': null<g_glossary.T.Type<undefined>>['taggedUnion', d({
                                        "no": null<g_glossary.T.Type<undefined>>['group', d({})],
                                        "yes": null<g_glossary.T.Type<undefined>>['group', d({})],
                                    })],
                                },
                                "type": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Global Type Selection",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                        })],
                    },
                })]]
            },
            "Property": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['group', d({
                    "type": {
                        'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Root": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                    'context': ['local', null],
                    'typeXX': "Model",
                    'tailXX': a([]),
                    'type arguments': d({}),
                }]]
            },
            "State Constraints": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['dictionary', null<g_glossary.T.Type<undefined>>['reference', ['type', {
                    'context': ['local', null],
                    'typeXX': "State Selection",
                    'tailXX': a([]),
                    'type arguments': d({}),
                }]]]
            },
            "State Selection": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['group', d({
                    "cast": {
                        'type': null<g_glossary.T.Type<undefined>>['taggedUnion', d({
                            "state group": null<g_glossary.T.Type<undefined>>['group', d({
                                "annotation": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "constraints": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({
                                        "state group": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type",
                                                'tailXX': a([
                                                    "type",
                                                    "state group",
                                                ]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })],
                                },
                                "content": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({
                                        "state": {
                                            'type': null<g_glossary.T.Type<undefined>>['group', d({
                                                "annotation": {
                                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                                },
                                                "key": {
                                                    'type': null<g_glossary.T.Type<undefined>>['string', null],
                                                },
                                                "referent": {
                                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                        'context': ['local', null],
                                                        'typeXX': "Type",
                                                        'tailXX': a([
                                                            "type",
                                                            "state group",
                                                            "states",
                                                            "D",
                                                        ]),
                                                        'type arguments': d({}),
                                                    }]],
                                                },
                                            })],
                                        },
                                    })],
                                },
                            })],
                        })],
                    },
                    "type": {
                        'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Value Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Type": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['group', d({
                    "type": {
                        'type': null<g_glossary.T.Type<undefined>>['taggedUnion', d({
                            "array": null<g_glossary.T.Type<undefined>>['group', d({
                                "type": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "atom": null<g_glossary.T.Type<undefined>>['group', d({
                                "atom": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Atom",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "component": null<g_glossary.T.Type<undefined>>['group', d({
                                "arguments": {
                                    'type': null<g_glossary.T.Type<undefined>>['dictionary', null<g_glossary.T.Type<undefined>>['group', d({
                                        "annotation": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                        },
                                        "constraints": {
                                            'type': null<g_glossary.T.Type<undefined>>['group', d({
                                                "parameter": {
                                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                        'context': ['local', null],
                                                        'typeXX': "Parameters",
                                                        'tailXX': a([
                                                            "D",
                                                        ]),
                                                        'type arguments': d({}),
                                                    }]],
                                                },
                                            })],
                                        },
                                        "content": {
                                            'type': null<g_glossary.T.Type<undefined>>['group', d({
                                                "type": {
                                                    'type': null<g_glossary.T.Type<undefined>>['taggedUnion', d({
                                                        "lookup": null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "Lookup Selection",
                                                            'tailXX': a([]),
                                                            'type arguments': d({}),
                                                        }]],
                                                        "resolved value": null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "Value Selection",
                                                            'tailXX': a([]),
                                                            'type arguments': d({}),
                                                        }]],
                                                    })],
                                                },
                                            })],
                                        },
                                    })]],
                                },
                                "type": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Global Type Selection",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "dictionary": null<g_glossary.T.Type<undefined>>['group', d({
                                "constraints": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Dictionary Constraints",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "key": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Atom",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "type": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "variables": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Variables",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "group": null<g_glossary.T.Type<undefined>>['group', d({
                                "properties": {
                                    'type': null<g_glossary.T.Type<undefined>>['dictionary', null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Property",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                                "variables": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Variables",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "nothing": null<g_glossary.T.Type<undefined>>['group', d({
                                "result": {
                                    'type': null<g_glossary.T.Type<undefined>>['optional', null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Value Selection",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                            "optional": null<g_glossary.T.Type<undefined>>['group', d({
                                "result": {
                                    'type': null<g_glossary.T.Type<undefined>>['optional', null<g_glossary.T.Type<undefined>>['group', d({
                                        "not set": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Value Selection",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                        "set": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Any Value Selection",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                                "type": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "resolved reference": null<g_glossary.T.Type<undefined>>['group', d({
                                "atom": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Atom",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "value": {
                                    'type': null<g_glossary.T.Type<undefined>>['taggedUnion', d({
                                        "dictionary": null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                            'context': ['local', null],
                                            'typeXX': "Dictionary Selection",
                                            'tailXX': a([]),
                                            'type arguments': d({}),
                                        }]],
                                        "lookup": null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                            'context': ['local', null],
                                            'typeXX': "Lookup Selection",
                                            'tailXX': a([]),
                                            'type arguments': d({}),
                                        }]],
                                    })],
                                },
                            })],
                            "state group": null<g_glossary.T.Type<undefined>>['group', d({
                                "result": {
                                    'type': null<g_glossary.T.Type<undefined>>['optional', null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Global Type Selection",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                                "states": {
                                    'type': null<g_glossary.T.Type<undefined>>['dictionary', null<g_glossary.T.Type<undefined>>['group', d({
                                        "constraints": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "State Constraints",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                        "result": {
                                            'type': null<g_glossary.T.Type<undefined>>['optional', null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Any Value Selection",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]]],
                                        },
                                        "type": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                        "variables": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Variables",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                            })],
                        })],
                    },
                })]
            },
            "Type Library": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['group', d({
                    "atom types": {
                        'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Atom Types",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "global types": {
                        'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Global Types",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "imports": {
                        'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Imports",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Value Selection": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['group', d({
                    "start": {
                        'type': null<g_glossary.T.Type<undefined>>['group', d({
                            "annotation": {
                                'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "key": {
                                'type': null<g_glossary.T.Type<undefined>>['string', null],
                            },
                            "referent": {
                                'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Variables",
                                    'tailXX': a([
                                        "D",
                                    ]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })],
                    },
                    "tail": {
                        'type': null<g_glossary.T.Type<undefined>>['optional', null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Value Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Value Selection Tail": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['group', d({
                    "step type": {
                        'type': null<g_glossary.T.Type<undefined>>['taggedUnion', d({
                            "component": null<g_glossary.T.Type<undefined>>['group', d({
                                "annotation": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "constraints": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({
                                        "component": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type",
                                                'tailXX': a([
                                                    "type",
                                                    "component",
                                                ]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })],
                                },
                                "content": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({})],
                                },
                            })],
                            "group": null<g_glossary.T.Type<undefined>>['group', d({
                                "annotation": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "constraints": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({
                                        "group": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type",
                                                'tailXX': a([
                                                    "type",
                                                    "group",
                                                ]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })],
                                },
                                "content": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({
                                        "property": {
                                            'type': null<g_glossary.T.Type<undefined>>['group', d({
                                                "annotation": {
                                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                                },
                                                "key": {
                                                    'type': null<g_glossary.T.Type<undefined>>['string', null],
                                                },
                                                "referent": {
                                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                        'context': ['local', null],
                                                        'typeXX': "Type",
                                                        'tailXX': a([
                                                            "type",
                                                            "group",
                                                            "properties",
                                                            "D",
                                                        ]),
                                                        'type arguments': d({}),
                                                    }]],
                                                },
                                            })],
                                        },
                                    })],
                                },
                            })],
                            "nothing": null<g_glossary.T.Type<undefined>>['group', d({
                                "annotation": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "constraints": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({
                                        "nothing": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type",
                                                'tailXX': a([
                                                    "type",
                                                    "nothing",
                                                ]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })],
                                },
                                "content": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({})],
                                },
                            })],
                            "optional": null<g_glossary.T.Type<undefined>>['group', d({
                                "annotation": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "constraints": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({
                                        "optional": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type",
                                                'tailXX': a([
                                                    "type",
                                                    "optional",
                                                ]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })],
                                },
                                "content": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({})],
                                },
                            })],
                            "reference": null<g_glossary.T.Type<undefined>>['group', d({
                                "annotation": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "constraints": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({
                                        "reference": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type",
                                                'tailXX': a([
                                                    "type",
                                                    "resolved reference",
                                                ]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })],
                                },
                                "content": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({})],
                                },
                            })],
                            "state group": null<g_glossary.T.Type<undefined>>['group', d({
                                "annotation": {
                                    'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "constraints": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({
                                        "state group": {
                                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type",
                                                'tailXX': a([
                                                    "type",
                                                    "state group",
                                                ]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })],
                                },
                                "content": {
                                    'type': null<g_glossary.T.Type<undefined>>['group', d({})],
                                },
                            })],
                        })],
                    },
                    "tail": {
                        'type': null<g_glossary.T.Type<undefined>>['optional', null<g_glossary.T.Type<undefined>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Value Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Variable": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['taggedUnion', d({
                    "dictionary constraint": null<g_glossary.T.Type<undefined>>['group', d({
                        "annotation": {
                            'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "key": {
                            'type': null<g_glossary.T.Type<undefined>>['string', null],
                        },
                        "referent": {
                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Dictionary Constraints",
                                'tailXX': a([
                                    "D",
                                ]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "option constraint": null<g_glossary.T.Type<undefined>>['group', d({
                        "annotation": {
                            'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "key": {
                            'type': null<g_glossary.T.Type<undefined>>['string', null],
                        },
                        "referent": {
                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "State Constraints",
                                'tailXX': a([
                                    "D",
                                ]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "parameter": null<g_glossary.T.Type<undefined>>['group', d({
                        "annotation": {
                            'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "key": {
                            'type': null<g_glossary.T.Type<undefined>>['string', null],
                        },
                        "referent": {
                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Parameters",
                                'tailXX': a([
                                    "D",
                                ]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "parent variable": null<g_glossary.T.Type<undefined>>['group', d({
                        "annotation": {
                            'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "key": {
                            'type': null<g_glossary.T.Type<undefined>>['string', null],
                        },
                        "referent": {
                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Variable",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                    "sibling property": null<g_glossary.T.Type<undefined>>['group', d({
                        "annotation": {
                            'type': null<g_glossary.T.Type<undefined>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "key": {
                            'type': null<g_glossary.T.Type<undefined>>['string', null],
                        },
                        "referent": {
                            'type': null<g_glossary.T.Type<undefined>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Property",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                        },
                    })],
                })]
            },
            "Variables": {
                'parameters': d({}),
                'type': null<g_glossary.T.Type<undefined>>['dictionary', null<g_glossary.T.Type<undefined>>['reference', ['type', {
                    'context': ['local', null],
                    'typeXX': "Variable",
                    'tailXX': a([]),
                    'type arguments': d({}),
                }]]]
            },
        }),
        'namespaces': d({
            "Any Value Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "start": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "tail": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Atom": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "type": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Atom Types": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Dictionary Constraints": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "TU": {
                                'types': d({}),
                                'namespaces': d({
                                    "dictionary": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "dense": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "TU": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "no": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "yes": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                    "dictionary": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                    "lookup": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Dictionary Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "cast": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "dictionary": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "type": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Global Type": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "parameters": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "result": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "type": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "variables": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Global Type Selection": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "import": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "library": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "type": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "resolved sibling": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "type": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Global Types": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({}),
                    },
                }),
            },
            "Imports": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Lookup Selection": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "parameter": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "resolved dictionary": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "this": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Model": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "root": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "type library": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Parameters": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({
                                    "type": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "TU": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "lookup": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "type": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                    "resolved value": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "optional": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "TU": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "no": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "G": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                    "yes": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "G": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                    "type": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Property": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "type": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Root": {
                'types': d({}),
                'namespaces': d({}),
            },
            "State Constraints": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({}),
                    },
                }),
            },
            "State Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "cast": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "state group": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "state": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "type": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Type": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "type": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "array": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "type": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "atom": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "atom": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "component": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "arguments": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "D": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "type": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "TU": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({
                                                                                                    "lookup": {
                                                                                                        'types': d({}),
                                                                                                        'namespaces': d({}),
                                                                                                    },
                                                                                                    "resolved value": {
                                                                                                        'types': d({}),
                                                                                                        'namespaces': d({}),
                                                                                                    },
                                                                                                }),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                            "type": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "dictionary": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "constraints": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "key": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "type": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "variables": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "group": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "properties": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "D": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                            "variables": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "nothing": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "result": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "O": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "optional": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "result": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "O": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "not set": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "set": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                            "type": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "resolved reference": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "atom": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "value": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "TU": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "dictionary": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                            "lookup": {
                                                                                'types': d({}),
                                                                                'namespaces': d({}),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "state group": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "result": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "O": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                            "states": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "D": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "constraints": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "result": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "O": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                    "type": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "variables": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Type Library": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "atom types": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "global types": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "imports": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Value Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "start": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "tail": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Value Selection Tail": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "step type": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "component": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "group": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "property": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "nothing": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "optional": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "reference": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "state group": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "tail": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Variable": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "dictionary constraint": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "option constraint": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "parameter": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "parent variable": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "sibling property": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Variables": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({}),
                    },
                }),
            },
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}