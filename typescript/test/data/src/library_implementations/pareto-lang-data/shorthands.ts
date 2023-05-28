import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'

import * as g_this from "../../ts"

import T = g_this.pareto__lang__data.Unresolved.T

function ref($: string) {
    return {
        'referent': pd.getLocationInfo(2),
        'key': $,
    }
}

function dict<T>($: RawDictionary<T>): pt.Dictionary<T> {
    return pd.d($)
}

type RawDictionary<T> = { [key: string]: T }

//////////////////////////////////////////////////////////

export function imprt(
    library: string
): T.Imports.D.$<pd.SourceLocation> {
    return {
        'library': ref(library)
    }
}

export function typeLibrary(
    imports: RawDictionary<T.Imports.D.$<pd.SourceLocation>>,
    atomTypes: RawDictionary<T.Atom__Types.D.$<pd.SourceLocation>>,
    globalTypes: RawDictionary<T.Global__Type.$<pd.SourceLocation>>,
): T.TType__Library.$<pd.SourceLocation> {
    return {
        'imports': dict(imports),
        'atom types': dict(atomTypes),
        'global types': dict(globalTypes),
    }
}

export function array(type: T.TType.$<pd.SourceLocation>): T.TType.$<pd.SourceLocation> {
    return {
        'type': ['array', {
            'type': type,
            //'constraint': [false]
        }]
    }
}

export function optional(type: T.TType.$<pd.SourceLocation>): T.TType.$<pd.SourceLocation> {
    return {
        'type': ['optional', {
            'type': type,
        }]
    }
}

export function nothing(): T.TType.$<pd.SourceLocation> {
    return {
        'type': ['nothing', null]
    }
}

//doesn't do anything
export function prop(type: T.TType.$<pd.SourceLocation>): T.TType.$<pd.SourceLocation> {
    return type
}

export function dictionaryReference(
    type: T.TType__Selection.$<pd.SourceLocation>,
): T.TType.$<pd.SourceLocation> {
    return {
        'type': ['resolved reference', {
            'atom': {
                'type': ref("identifier")
            },
            'value': ['dictionary', {
                'type': type,
                'dictionary': pd.getLocationInfo(1),
            }],
        }]
    }
}

export function lookupReference(
    type: T.Global__Type__Selection.$<pd.SourceLocation>,
): T.TType.$<pd.SourceLocation> {
    return {
        'type': ['resolved reference', {
            'atom': {
                'type': ref("identifier")
            },
            'value': ['lookup', type],
        }]
    }
}

export function cyclicReference(
    gloRef: T.Global__Type__Selection.$<pd.SourceLocation>,
): T.TType.$<pd.SourceLocation> {
    return {
        'type': ['cyclic reference', {
            'atom': {
                'type': {
                    'referent': pd.getLocationInfo(1),
                    'key': "identifier",
                }
            },
            'sibling': gloRef,
        }]
    }
}

export function lookupConstraint(
    gloSel: T.Global__Type__Selection.$<pd.SourceLocation>
): T.TType._ltype.dictionary.constraints.D.$<pd.SourceLocation> {
    return ['lookup', gloSel]
}

export function dictionaryConstraint(
    type: T.TType__Selection.$<pd.SourceLocation>,
    dense: boolean
): T.TType._ltype.dictionary.constraints.D.$<pd.SourceLocation> {
    return ['dictionary', {
        'dictionary': {
            'type': type,
            'dictionary': pd.getLocationInfo(1),
        },
        'dense': dense
            ? ['yes', null]
            : ['no', null],
    }]
}


export function constrainedDictionary(
    constraints: RawDictionary<T.TType._ltype.dictionary.constraints.D.$<pd.SourceLocation>>,
    type: T.TType.$<pd.SourceLocation>
): T.TType.$<pd.SourceLocation> {
    return {
        'type': ['dictionary', {
            'key': {
                'type': ref("identifier"),
            },
            'constraints': dict(constraints),
            'type': type,
            //'autofill': pd.a([]),
        }]
    }
}

export function dictionary(type: T.TType.$<pd.SourceLocation>/*, autofill?: T.TType._ltype.dictionary.autofill.A.$<pd.SourceLocation>[]*/): T.TType.$<pd.SourceLocation> {
    return {
        'type': ['dictionary', {
            // 'annotation': li,
            'key': {
                'type': ref("identifier")
            },
            'constraints': dict<T.TType._ltype.dictionary.constraints.D.$<pd.SourceLocation>>({}),
            'type': type,
            //'autofill': pd.a(autofill === undefined ? [] : autofill),
        }]
    }
}

export function constraint(type: T.TType__Selection.$<pd.SourceLocation>): T.TType.$<pd.SourceLocation> {
    return {
        'type': ['constraint', type]
    }
}

export function globalType(
    type: T.TType.$<pd.SourceLocation>,
): T.Global__Type.$<pd.SourceLocation> {
    return {
        'type': type,
    }
}

export function group(rawProperties: RawDictionary<T.TType.$<pd.SourceLocation>>): T.TType.$<pd.SourceLocation> {

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
    type: T.TType.$<pd.SourceLocation>,
): T.TType._ltype.state__group.states.D.$<pd.SourceLocation> {
    return {
        'type': type,
    }
}

export function stateGroup(
    states: RawDictionary<T.TType._ltype.state__group.states.D.$<pd.SourceLocation>>,
): T.TType.$<pd.SourceLocation> {
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
            'states': dict(states),
        }]
    }
}

export function atom(type: string): T.TType.$<pd.SourceLocation> {
    return {
        'type': ['atom', {
            'atom': {
                'type': ref(type)
            },
        }]
    }
}

export function t_grp(
    prop: string,
    tail?: T.TType__Selection__Tail.$<pd.SourceLocation>,
): T.TType__Selection__Tail.$<pd.SourceLocation> {
    return {
        'step type': ['group', {
            'group': pd.getLocationInfo(1),
            'property': ref(prop),
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function t_dict(
    tail?: T.TType__Selection__Tail.$<pd.SourceLocation>,
): T.TType__Selection__Tail.$<pd.SourceLocation> {
    return {
        'step type': ['dictionary', {
            'dictionary': pd.getLocationInfo(1),
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function t_arr(
    tail?: T.TType__Selection__Tail.$<pd.SourceLocation>,
): T.TType__Selection__Tail.$<pd.SourceLocation> {
    return {
        'step type': ['array', {
            'array': pd.getLocationInfo(1),
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function t_sg(
    opt: string,
    tail?: T.TType__Selection__Tail.$<pd.SourceLocation>,
): T.TType__Selection__Tail.$<pd.SourceLocation> {
    return {
        'step type': ['state group', {
            'state group': pd.getLocationInfo(1),
            'state': ref(opt),
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function externalTypeSelection(
    imp: string,
    globalType: string,
    tail?: T.TType__Selection__Tail.$<pd.SourceLocation>,
): T.TType__Selection.$<pd.SourceLocation> {
    return {
        'import': [true, ref(imp)],
        'global type': ref(globalType),
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function typeSelection(
    globalType: string,
    tail?: T.TType__Selection__Tail.$<pd.SourceLocation>,
): T.TType__Selection.$<pd.SourceLocation> {
    return {
        'import': [false],
        'global type': ref(globalType),
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

// export function tuStep(option: string): T.Value__Selection.tail.A.$<pd.SourceLocation> {
//     return ['tagged union', {
//         'option': {
//             'annotation': pd.getLocationInfo(1),
//             'key': option
//         }
//     }]
// }

export function component(type: T.Global__Type__Selection.$<pd.SourceLocation>): T.TType.$<pd.SourceLocation> {
    return {
        'type': ['component', {
            'type': type
        }]
    }
}

export function typeRef(type: string, cyclic?: boolean): T.Global__Type__Selection.$<pd.SourceLocation> {
    if (cyclic) {
        return ['cyclic sibling', {
            'type': ref(type)
        }]
    } else {
        return ['resolved sibling', {
            'type': ref(type),
        }]

    }
}

export function imported(library: string, type: string): T.Global__Type__Selection.$<pd.SourceLocation> {
    return ['import', {
        'library': ref(library),
        'type': ref(type),
    }]
}