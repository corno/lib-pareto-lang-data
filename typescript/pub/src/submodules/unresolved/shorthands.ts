import * as pd from 'pareto-core-data'
import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'

import * as g_common from 'glo-pareto-common'

import * as g_this from "./glossary";

const a = pd.a


type AnnotatedDictionary<T> = {
    'annotation': pd.SourceLocation,
    'dictionary': pt.Dictionary<T>
}

function rawDict<T>($: RawDictionary<T>): AnnotatedDictionary<T> {
    return {
        'annotation': pd.getLocationInfo(2),
        'dictionary': pd.d($),
    }
}


type RawDictionary<T> = { [key: string]: T }

function ref(name: string): g_common.T.AnnotatedKey<pd.SourceLocation> {
    return {
        key: name,
        annotation: pd.getLocationInfo(2),
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

export function imprt(
    library: string
): g_this.T.Imports.dictionary.D<pd.SourceLocation> {
    return {
        'library': {
            'annotation': pd.getLocationInfo(1),
            'key': library,
        }
    }
}

export function typeLibrary(
    imports: RawDictionary<g_this.T.Imports.dictionary.D<pd.SourceLocation>>,
    atomTypes: RawDictionary<g_this.T.Atom__Types.dictionary.D<pd.SourceLocation>>,
    globalTypesDeclarations: RawDictionary<g_this.T.Global__Type__Declarations.dictionary.D<pd.SourceLocation>>,
    globalTypesDefinitions: RawDictionary<g_this.T.Global__Type__Definition<pd.SourceLocation>>,
): g_this.T.Type__Library<pd.SourceLocation> {
    return {
        'imports': rawDict(imports),
        'atom types': rawDict(atomTypes),
        'global types': {
            'declarations': rawDict(globalTypesDeclarations),
            'definitions': rawDict(globalTypesDefinitions),
        },
    }
}

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
                'dictionary': pd.getLocationInfo(1),
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
): g_this.T.Type._ltype.dictionary.constraints.dictionary.D<pd.SourceLocation> {
    return ['lookup', gloSel]
}

export function dictionaryConstraint(
    type: g_this.T.Type__Selection<pd.SourceLocation>,
    dense: boolean
): g_this.T.Type._ltype.dictionary.constraints.dictionary.D<pd.SourceLocation> {
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
    constraints: RawDictionary<g_this.T.Type._ltype.dictionary.constraints.dictionary.D<pd.SourceLocation>>,
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
            'constraints': rawDict(constraints),
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
                'type': ref("identifier")
            },
            'constraints': rawDict<g_this.T.Type._ltype.dictionary.constraints.dictionary.D<pd.SourceLocation>>({}),
            'type': type,
            //'autofill': pd.a(autofill === undefined ? [] : autofill),
        }]
    }
}

export function constraint(type: g_this.T.Type__Selection<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['constraint', type]
    }
}

export function pResolvedValue(type: string, optional?: boolean): g_this.T.Global__Type__Declaration.parameters.dictionary.D<pd.SourceLocation> {
    return {
        'optional': optional ? [true, null] : [false],
        'type': ['resolved value', ref(type)]
    }
}

export function pLookup(type: string, optional?: boolean): g_this.T.Global__Type__Declaration.parameters.dictionary.D<pd.SourceLocation> {
    return {
        'optional': optional ? [true, null] : [false],
        'type': ['sibling lookup', ref(type)]
    }
}

export function pCyclicLookup(type: string, optional?: boolean): g_this.T.Global__Type__Declaration.parameters.dictionary.D<pd.SourceLocation> {
    return {
        'optional': optional ? [true, null] : [false],
        'type': ['cyclic sibling lookup', ref(type)]
    }
}

export function globalTypeDeclaration(
    parameters: RawDictionary<g_this.T.Global__Type__Declaration.parameters.dictionary.D<pd.SourceLocation>>,
    result?: string
): g_this.T.Global__Type__Declarations.dictionary.D<pd.SourceLocation> {
    return {
        'parameters': rawDict(parameters),
        'result': result === undefined ? [false] : [true, ref(result)]
    }
}

export function globalTypeDefinition(
    type: g_this.T.Type<pd.SourceLocation>,
): g_this.T.Global__Type__Definition<pd.SourceLocation> {
    return {
        'declaration': pd.getLocationInfo(1),
        'type': type,
    }
}

export function group(rawProperties: RawDictionary<g_this.T.Type<pd.SourceLocation>>): g_this.T.Type<pd.SourceLocation> {

    return {
        'type': ['group', {
            'properties': {
                'annotation': pd.getLocationInfo(1),
                'dictionary': pd.d(rawProperties).__mapWithKey(($, key) => {
                    return {
                        'type': $,
                    }
                })
            }
        }]
    }
}

export function state(
    type: g_this.T.Type<pd.SourceLocation>,
): g_this.T.Type._ltype.state__group.states.dictionary.D<pd.SourceLocation> {
    return {
        'type': type,
    }
}

export function stateGroup(
    states: RawDictionary<g_this.T.Type._ltype.state__group.states.dictionary.D<pd.SourceLocation>>,
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
            'states': rawDict(states),
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
            'group': pd.getLocationInfo(1),
            'property': ref(prop),
            'tail': tail === undefined ? [false] : [true, tail]
        }],
    }
}

export function t_dict(
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['dictionary', {
            'dictionary': pd.getLocationInfo(1),
            'tail': tail === undefined ? [false] : [true, tail],
        }],
    }
}

export function t_arr(
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['array', {
            'array': pd.getLocationInfo(1),
            'tail': tail === undefined ? [false] : [true, tail],
        }],
    }
}

export function t_sg(
    opt: string,
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection__Tail<pd.SourceLocation> {
    return  {
        'step type': ['state group', {
            'state group': pd.getLocationInfo(1),
            'state': ref(opt),
            'tail': tail === undefined ? [false] : [true, tail],
        }],
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
        'global type': ref(globalType),
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function typeSelection(
    globalType: string,
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection<pd.SourceLocation> {
    return {
        'import': [false],
        'global type': ref(globalType),
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
            },
        }]

    }
}

export function imported(library: string, type: string): g_this.T.Global__Type__Selection<pd.SourceLocation> {
    return ['import', {
        'library': ref(library),
        'type': ref(type),
    }]
}