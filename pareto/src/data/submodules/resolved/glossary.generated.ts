import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<null> = {
    'imports': d({}),
    'glossary parameters': d({}),
    'root': {
        'types': d({
            "Atom": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "type": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                            "referent": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
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
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({})]]
            },
            "Dictionary Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "dictionary": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([
                                "type",
                                "dictionary",
                            ]),
                            'type arguments': d({}),
                        }]],
                    },
                    "type": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Global Type Declaration": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "parameters": {
                        'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                            "optional": {
                                'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({})]],
                            },
                            "type": {
                                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                                    "cyclic sibling lookup": <g_glossary.T.Type<null>>['group', d({
                                        "key": {
                                            'type': <g_glossary.T.Type<null>>['string', null],
                                        },
                                        "referent": {
                                            'type': <g_glossary.T.Type<null>>['computed', <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Global Type Declaration",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]]],
                                        },
                                    })],
                                    "resolved value": <g_glossary.T.Type<null>>['group', d({
                                        "key": {
                                            'type': <g_glossary.T.Type<null>>['string', null],
                                        },
                                        "referent": {
                                            'type': <g_glossary.T.Type<null>>['computed', <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Global Type Declaration",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]]],
                                        },
                                    })],
                                    "sibling lookup": <g_glossary.T.Type<null>>['group', d({
                                        "key": {
                                            'type': <g_glossary.T.Type<null>>['string', null],
                                        },
                                        "referent": {
                                            'type': <g_glossary.T.Type<null>>['computed', <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Global Type Declaration",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]]],
                                        },
                                    })],
                                })],
                            },
                        })]],
                    },
                    "result": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                            "referent": {
                                'type': <g_glossary.T.Type<null>>['computed', <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Global Type Declaration",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]]],
                            },
                        })]],
                    },
                })]
            },
            "Global Type Declarations": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                    'context': ['local', null],
                    'typeXX': "Global Type Declaration",
                    'tailXX': a([]),
                    'type arguments': d({}),
                }]]]
            },
            "Global Type Definition": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "declaration": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Global Type Declarations",
                            'tailXX': a([
                                "D",
                            ]),
                            'type arguments': d({}),
                        }]],
                    },
                    "type": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Global Type Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "cyclic sibling": <g_glossary.T.Type<null>>['group', d({
                        "type": {
                            'type': <g_glossary.T.Type<null>>['group', d({
                                "key": {
                                    'type': <g_glossary.T.Type<null>>['string', null],
                                },
                                "referent": {
                                    'type': <g_glossary.T.Type<null>>['computed', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Global Type Definition",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                        },
                    })],
                    "import": <g_glossary.T.Type<null>>['group', d({
                        "library": {
                            'type': <g_glossary.T.Type<null>>['group', d({
                                "key": {
                                    'type': <g_glossary.T.Type<null>>['string', null],
                                },
                                "referent": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
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
                            'type': <g_glossary.T.Type<null>>['group', d({
                                "key": {
                                    'type': <g_glossary.T.Type<null>>['string', null],
                                },
                                "referent": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type Library",
                                        'tailXX': a([
                                            "global types",
                                            "definitions",
                                            "D",
                                        ]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                        },
                    })],
                    "resolved sibling": <g_glossary.T.Type<null>>['group', d({
                        "type": {
                            'type': <g_glossary.T.Type<null>>['group', d({
                                "key": {
                                    'type': <g_glossary.T.Type<null>>['string', null],
                                },
                                "referent": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Global Type Definition",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                        },
                    })],
                })]
            },
            "Imports": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                    "library": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                            "referent": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Type Library",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })],
                    },
                })]]
            },
            "Model": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "root": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                            "referent": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Type Library",
                                    'tailXX': a([
                                        "global types",
                                        "definitions",
                                        "D",
                                    ]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })],
                    },
                    "type library": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Library",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Project": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "type libraries": {
                        'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Library",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Root": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                    'context': ['local', null],
                    'typeXX': "Project",
                    'tailXX': a([]),
                    'type arguments': d({}),
                }]]
            },
            "Type": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "type": {
                        'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                            "array": <g_glossary.T.Type<null>>['group', d({
                                "type": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "atom": <g_glossary.T.Type<null>>['group', d({
                                "atom": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Atom",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "component": <g_glossary.T.Type<null>>['group', d({
                                "type": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Global Type Selection",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "constraint": <g_glossary.T.Type<null>>['reference', ['type', {
                                'context': ['local', null],
                                'typeXX': "Type Selection",
                                'tailXX': a([]),
                                'type arguments': d({}),
                            }]],
                            "cyclic reference": <g_glossary.T.Type<null>>['group', d({
                                "atom": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Atom",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "sibling": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Global Type Selection",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "dictionary": <g_glossary.T.Type<null>>['group', d({
                                "constraints": {
                                    'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['taggedUnion', d({
                                        "dictionary": <g_glossary.T.Type<null>>['group', d({
                                            "dense": {
                                                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                                                    "no": <g_glossary.T.Type<null>>['group', d({})],
                                                    "yes": <g_glossary.T.Type<null>>['group', d({})],
                                                })],
                                            },
                                            "dictionary": {
                                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                    'context': ['local', null],
                                                    'typeXX': "Dictionary Selection",
                                                    'tailXX': a([]),
                                                    'type arguments': d({}),
                                                }]],
                                            },
                                        })],
                                        "lookup": <g_glossary.T.Type<null>>['reference', ['type', {
                                            'context': ['local', null],
                                            'typeXX': "Global Type Selection",
                                            'tailXX': a([]),
                                            'type arguments': d({}),
                                        }]],
                                    })]],
                                },
                                "key": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Atom",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "type": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "group": <g_glossary.T.Type<null>>['group', d({
                                "properties": {
                                    'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                                        "type": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                            })],
                            "nothing": <g_glossary.T.Type<null>>['group', d({})],
                            "optional": <g_glossary.T.Type<null>>['group', d({
                                "type": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "resolved reference": <g_glossary.T.Type<null>>['group', d({
                                "atom": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Atom",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "value": {
                                    'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                                        "dictionary": <g_glossary.T.Type<null>>['reference', ['type', {
                                            'context': ['local', null],
                                            'typeXX': "Dictionary Selection",
                                            'tailXX': a([]),
                                            'type arguments': d({}),
                                        }]],
                                        "lookup": <g_glossary.T.Type<null>>['reference', ['type', {
                                            'context': ['local', null],
                                            'typeXX': "Global Type Selection",
                                            'tailXX': a([]),
                                            'type arguments': d({}),
                                        }]],
                                    })],
                                },
                            })],
                            "state group": <g_glossary.T.Type<null>>['group', d({
                                "states": {
                                    'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                                        "type": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type",
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
                'type': <g_glossary.T.Type<null>>['group', d({
                    "atom types": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Atom Types",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "global types": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "declarations": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Global Type Declarations",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                            },
                            "definitions": {
                                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Global Type Definition",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]]],
                            },
                        })],
                    },
                    "imports": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Imports",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Type Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "global type": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                            "referent": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Global Type Definition",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })],
                    },
                    "import": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                            "referent": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Imports",
                                    'tailXX': a([
                                        "D",
                                    ]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })]],
                    },
                    "tail": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Type Selection Tail": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "step type": {
                        'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                            "array": <g_glossary.T.Type<null>>['group', d({
                                "array": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "type",
                                            "array",
                                        ]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "tail": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type Selection Tail",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                            "dictionary": <g_glossary.T.Type<null>>['group', d({
                                "dictionary": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "type",
                                            "dictionary",
                                        ]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "tail": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type Selection Tail",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                            "group": <g_glossary.T.Type<null>>['group', d({
                                "group": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "type",
                                            "group",
                                        ]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "property": {
                                    'type': <g_glossary.T.Type<null>>['group', d({
                                        "key": {
                                            'type': <g_glossary.T.Type<null>>['string', null],
                                        },
                                        "referent": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
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
                                "tail": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type Selection Tail",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                            "optional": <g_glossary.T.Type<null>>['group', d({
                                "optional": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "type",
                                            "optional",
                                        ]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "tail": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type Selection Tail",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                            "state group": <g_glossary.T.Type<null>>['group', d({
                                "state": {
                                    'type': <g_glossary.T.Type<null>>['group', d({
                                        "key": {
                                            'type': <g_glossary.T.Type<null>>['string', null],
                                        },
                                        "referent": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
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
                                "state group": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([
                                            "type",
                                            "state group",
                                        ]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "tail": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type Selection Tail",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                        })],
                    },
                })]
            },
        }),
        'namespaces': d({
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
            "Dictionary Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "dictionary": {
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
            "Global Type Declaration": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "parameters": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "optional": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "O": {
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
                                                    "type": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "TU": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "cyclic sibling lookup": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "resolved value": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                    "sibling lookup": {
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
            "Global Type Declarations": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({}),
                    },
                }),
            },
            "Global Type Definition": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "declaration": {
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
            "Global Type Selection": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "cyclic sibling": {
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
            "Imports": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({
                                    "library": {
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
            "Project": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "type libraries": {
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
                }),
            },
            "Root": {
                'types': d({}),
                'namespaces': d({}),
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
                                                            "type": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "constraint": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "cyclic reference": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "atom": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "sibling": {
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
                                                            "key": {
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
                                                        'namespaces': d({
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
                                                            "states": {
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
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "declarations": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                            "definitions": {
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
                                }),
                            },
                            "imports": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Type Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "global type": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "import": {
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
            "Type Selection Tail": {
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
                                            "array": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "array": {
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
                                            "dictionary": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "dictionary": {
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
                                            "group": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "group": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "property": {
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
                                            "optional": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "optional": {
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
                                                            "state group": {
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
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}