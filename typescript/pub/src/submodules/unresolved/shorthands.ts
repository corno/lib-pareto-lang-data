import * as pd from 'pareto-core-data'
import * as pl from 'pareto-core-lib'

import * as g_common from 'glo-pareto-common'

import * as g_this from "./glossary";

const a = pd.a

type RawDictionary<T> = { [key: string]: T }

function r_imp(name: string, depth: number): g_common.T.AnnotatedKey<pd.SourceLocation> {
    return {
        key: name,
        annotation: pd.getLocationInfo(depth + 1),
    }
}

// function d_imp<T>($: RawDictionary<T>, annotation: pd.SourceLocation): g_common.T.AnnotatedDictionary<pd.SourceLocation, T> {
//     return {
//         'annotation': annotation,
//         'dictionary': pd.d($),
//     }
// }

// export function d<T>($: RawDictionary<T>) {
//     const li = pd.getLocationInfo(1)
//     return d_imp($, li)
// }

// export function r(name: string): g_common.T.AnnotatedKey<pd.SourceLocation> {
//     return r_imp(name, 1)
// }

export function array(type: g_this.T.Type<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['array', {
            'type': type,
            //'constraint': [false]
        }]
    }
}

export function optional(type: g_this.T.Type<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['optional', {
            'constraints': pd.d<g_this.T.Type._ltype.optional.constraints.D<pd.SourceLocation>>({}),
            'type': type,
        }]
    }
}

export function constrainedOptional(
    constraints: RawDictionary<g_this.T.Type._ltype.optional.constraints.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['optional', {
            'constraints': pd.d(constraints),
            'type': type,
        }]
    }
}

export function nothing(): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['nothing', null]
    }
}

//doesn't do anything
export function prop(type: g_this.T.Type<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return type
}

export function dictionaryReference(
    type: g_this.T.Type__Selection<pd.SourceLocation>,
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['resolved reference', {
            'atom': {
                'type': {
                    'annotation': pd.getLocationInfo(1),
                    'key': "identifier",
                }
            },
            'value': ['dictionary', {
                'type': type,
                'cast': ['dictionary', {
                    'annotation': pd.getLocationInfo(1),
                    'content': null,
                }],
            }],
        }]
    }
}

export function lookupReference(
    type: g_this.T.Global__Type__Selection<pd.SourceLocation>,
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['resolved reference', {
            'atom': {
                'type': {
                    'annotation': pd.getLocationInfo(1),
                    'key': "identifier",
                }
            },
            'value': ['lookup', type],
        }]
    }
}

export function cyclicReference(
    gloRef: g_this.T.Global__Type__Selection<pd.SourceLocation>,
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['cyclic reference', {
            'atom': {
                'type': {
                    'annotation': pd.getLocationInfo(1),
                    'key': "identifier",
                }
            },
            'sibling': gloRef,
        }]
    }
}

export function lookupConstraint(
    gloSel: g_this.T.Global__Type__Selection<pd.SourceLocation>
): g_this.T.Type._ltype.dictionary.constraints.D<pd.SourceLocation> {
    return ['lookup', gloSel]
}
export function dictionaryConstraint(
    type: g_this.T.Type__Selection<pd.SourceLocation>,
    dense: boolean
): g_this.T.Type._ltype.dictionary.constraints.D<pd.SourceLocation> {
    return ['dictionary', {
        'dictionary': {
            'type': type,
            'cast': ['dictionary', {
                'annotation': pd.getLocationInfo(1),
                'content': null,
            }],
        },
        'dense': dense ? ['yes', null] : ['no', null]
    }]
}


export function constrainedDictionary(
    constraints: RawDictionary<g_this.T.Type._ltype.dictionary.constraints.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['dictionary', {
            'key': {
                'type': {
                    'annotation': pd.getLocationInfo(1),
                    'key': "identifier",
                },
            },
            'constraints': pd.d(constraints),
            'type': type,
            //'autofill': pd.a([]),
        }]
    }
}

export function dictionary(type: g_this.T.Type<pd.SourceLocation>/*, autofill?: g_this.T.Type._ltype.dictionary.autofill.A<pd.SourceLocation>[]*/): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['dictionary', {
            // 'annotation': li,
            'key': {
                'type': r_imp("identifier", 1)
            },
            'constraints': pd.d<g_this.T.Type._ltype.dictionary.constraints.D<pd.SourceLocation>>({}),
            'type': type,
            //'autofill': pd.a(autofill === undefined ? [] : autofill),
        }]
    }
}

export function globalType(
    type: g_this.T.Type<pd.SourceLocation>,
): g_this.T.Global__Types.D<pd.SourceLocation> {
    return {
        'type': type,
    }
}

export function group(rawProperties: RawDictionary<g_this.T.Type<pd.SourceLocation>>): g_this.T.Type<pd.SourceLocation> {

    return {
        'type': ['group', {
            'properties': pd.d(rawProperties).__mapWithKey(($, key) => {
                return {
                    'type': $,
                }
            })
        }]
    }
}

export function state(
    type: g_this.T.Type<pd.SourceLocation>,
): g_this.T.Type._ltype.state__group.states.D<pd.SourceLocation> {
    return {
        'constraints': pd.d({}),
        'type': type,
    }
}


export function stateConstraint(
    type: g_this.T.Type__Selection<pd.SourceLocation>,
    option: string,
): g_this.T.Type._ltype.state__group.states.D.constraints.D<pd.SourceLocation> {
    return {
        'type': type,
        'cast': ['state group', {
            'annotation': pd.getLocationInfo(1),
            'content': {

                'state': {
                    'annotation': pd.getLocationInfo(1),
                    'key': option
                }
            }
        }]
    }
}

export function optionalConstraint(
    type: g_this.T.Type__Selection<pd.SourceLocation>,
): g_this.T.Type._ltype.optional.constraints.D<pd.SourceLocation> {
    return {
        'type': type,
        'cast': ['optional', {
            'annotation': pd.getLocationInfo(1),
            'content': null
        }]
    }
}

export function constrainedState(
    constraints: RawDictionary<g_this.T.Type._ltype.state__group.states.D.constraints.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>,
): g_this.T.Type._ltype.state__group.states.D<pd.SourceLocation> {
    return {
        'constraints': pd.d(constraints),
        'type': type,
    }
}

export function stateGroup(
    states: RawDictionary<g_this.T.Type._ltype.state__group.states.D<pd.SourceLocation>>,
): g_this.T.Type<pd.SourceLocation> {
    let firstKey: null | string = null
    pd.d(states).__mapWithKey(($, key) => {
        if (firstKey === null) {
            firstKey = key
        }
    })
    if (firstKey === null) {
        firstKey = "--NO OPTIONS--"
    }

    return {
        'type': ['state group', {
            'states': pd.d(states),
        }]
    }
}

export function atom(type: string): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['atom', {
            'atom': {
                'type': {
                    'annotation': pd.getLocationInfo(1),
                    'key': type,
                }
            },
        }]
    }
}

export function t_grp(
    prop: string,
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['group', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'property': r_imp(prop, 1),
            },
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function t_dict(
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['dictionary', {
            'annotation': pd.getLocationInfo(1),
            'content': null,
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function t_arr(
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['array', {
            'annotation': pd.getLocationInfo(1),
            'content': null,
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function t_sg(
    opt: string,
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['state group', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'state': r_imp(opt, 1),
            },
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function externalTypeSelection(
    imp: string,
    globalType: string,
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection<pd.SourceLocation> {
    return {
        'import': [true, {
            'key': imp,
            'annotation': pd.getLocationInfo(1),
        }],
        'global type': r_imp(globalType, 1),
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function typeSelection(
    globalType: string,
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection<pd.SourceLocation> {
    return {
        'import': [false],
        'global type': r_imp(globalType, 1),
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

// export function tuStep(option: string): g_this.T.Value__Selection.tail.A<pd.SourceLocation> {
//     return ['tagged union', {
//         'option': {
//             'annotation': pd.getLocationInfo(1),
//             'key': option
//         }
//     }]
// }

export function component(type: g_this.T.Global__Type__Selection<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['component', {
            'type': type
        }]
    }
}

export function typeRef(type: string, cyclic?: boolean): g_this.T.Global__Type__Selection<pd.SourceLocation> {
    if (cyclic) {
        return ['cyclic sibling', {
            'type': {
                'key': type,
                'annotation': pd.getLocationInfo(1)
            }
        }]
    } else {
        return ['resolved sibling', {
            'type': {
                'key': type,
                'annotation': pd.getLocationInfo(1)
            }
        }]

    }
}

export function imported(library: string, type: string): g_this.T.Global__Type__Selection<pd.SourceLocation> {
    return ['import', {
        'library': r_imp(library, 1),
        'type': r_imp(type, 1),
    }]
}