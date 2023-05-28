"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imported = exports.typeRef = exports.component = exports.typeSelection = exports.externalTypeSelection = exports.t_sg = exports.t_arr = exports.t_dict = exports.t_grp = exports.atom = exports.stateGroup = exports.state = exports.group = exports.globalType = exports.constraint = exports.dictionary = exports.constrainedDictionary = exports.dictionaryConstraint = exports.lookupConstraint = exports.cyclicReference = exports.lookupReference = exports.dictionaryReference = exports.prop = exports.nothing = exports.optional = exports.array = exports.typeLibrary = exports.imprt = void 0;
const pd = __importStar(require("pareto-core-data"));
function ref($) {
    return {
        'referent': pd.getLocationInfo(2),
        'key': $,
    };
}
function dict($) {
    return pd.d($);
}
//////////////////////////////////////////////////////////
function imprt(library) {
    return {
        'library': ref(library)
    };
}
exports.imprt = imprt;
function typeLibrary(imports, atomTypes, globalTypes) {
    return {
        'imports': dict(imports),
        'atom types': dict(atomTypes),
        'global types': dict(globalTypes),
    };
}
exports.typeLibrary = typeLibrary;
function array(type) {
    return {
        'type': ['array', {
                'type': type,
                //'constraint': [false]
            }]
    };
}
exports.array = array;
function optional(type) {
    return {
        'type': ['optional', {
                'type': type,
            }]
    };
}
exports.optional = optional;
function nothing() {
    return {
        'type': ['nothing', null]
    };
}
exports.nothing = nothing;
//doesn't do anything
function prop(type) {
    return type;
}
exports.prop = prop;
function dictionaryReference(type) {
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
    };
}
exports.dictionaryReference = dictionaryReference;
function lookupReference(type) {
    return {
        'type': ['resolved reference', {
                'atom': {
                    'type': ref("identifier")
                },
                'value': ['lookup', type],
            }]
    };
}
exports.lookupReference = lookupReference;
function cyclicReference(gloRef) {
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
    };
}
exports.cyclicReference = cyclicReference;
function lookupConstraint(gloSel) {
    return ['lookup', gloSel];
}
exports.lookupConstraint = lookupConstraint;
function dictionaryConstraint(type, dense) {
    return ['dictionary', {
            'dictionary': {
                'type': type,
                'dictionary': pd.getLocationInfo(1),
            },
            'dense': dense
                ? ['yes', null]
                : ['no', null],
        }];
}
exports.dictionaryConstraint = dictionaryConstraint;
function constrainedDictionary(constraints, type) {
    return {
        'type': ['dictionary', {
                'key': {
                    'type': ref("identifier"),
                },
                'constraints': dict(constraints),
                'type': type,
                //'autofill': pd.a([]),
            }]
    };
}
exports.constrainedDictionary = constrainedDictionary;
function dictionary(type /*, autofill?: T.TType._ltype.dictionary.autofill.A.$<pd.SourceLocation>[]*/) {
    return {
        'type': ['dictionary', {
                // 'annotation': li,
                'key': {
                    'type': ref("identifier")
                },
                'constraints': dict({}),
                'type': type,
                //'autofill': pd.a(autofill === undefined ? [] : autofill),
            }]
    };
}
exports.dictionary = dictionary;
function constraint(type) {
    return {
        'type': ['constraint', type]
    };
}
exports.constraint = constraint;
function globalType(type) {
    return {
        'type': type,
    };
}
exports.globalType = globalType;
function group(rawProperties) {
    return {
        'type': ['group', {
                'properties': pd.d(rawProperties).__mapWithKey(($, key) => {
                    return {
                        'type': $,
                    };
                })
            }]
    };
}
exports.group = group;
function state(type) {
    return {
        'type': type,
    };
}
exports.state = state;
function stateGroup(states) {
    let firstKey = null;
    pd.d(states).__mapWithKey(($, key) => {
        if (firstKey === null) {
            firstKey = key;
        }
    });
    if (firstKey === null) {
        firstKey = "--NO OPTIONS--";
    }
    return {
        'type': ['state group', {
                'states': dict(states),
            }]
    };
}
exports.stateGroup = stateGroup;
function atom(type) {
    return {
        'type': ['atom', {
                'atom': {
                    'type': ref(type)
                },
            }]
    };
}
exports.atom = atom;
function t_grp(prop, tail) {
    return {
        'step type': ['group', {
                'group': pd.getLocationInfo(1),
                'property': ref(prop),
            }],
        'tail': tail === undefined ? [false] : [true, tail]
    };
}
exports.t_grp = t_grp;
function t_dict(tail) {
    return {
        'step type': ['dictionary', {
                'dictionary': pd.getLocationInfo(1),
            }],
        'tail': tail === undefined ? [false] : [true, tail]
    };
}
exports.t_dict = t_dict;
function t_arr(tail) {
    return {
        'step type': ['array', {
                'array': pd.getLocationInfo(1),
            }],
        'tail': tail === undefined ? [false] : [true, tail]
    };
}
exports.t_arr = t_arr;
function t_sg(opt, tail) {
    return {
        'step type': ['state group', {
                'state group': pd.getLocationInfo(1),
                'state': ref(opt),
            }],
        'tail': tail === undefined ? [false] : [true, tail]
    };
}
exports.t_sg = t_sg;
function externalTypeSelection(imp, globalType, tail) {
    return {
        'import': [true, ref(imp)],
        'global type': ref(globalType),
        'tail': tail === undefined ? [false] : [true, tail]
    };
}
exports.externalTypeSelection = externalTypeSelection;
function typeSelection(globalType, tail) {
    return {
        'import': [false],
        'global type': ref(globalType),
        'tail': tail === undefined ? [false] : [true, tail]
    };
}
exports.typeSelection = typeSelection;
// export function tuStep(option: string): T.Value__Selection.tail.A.$<pd.SourceLocation> {
//     return ['tagged union', {
//         'option': {
//             'annotation': pd.getLocationInfo(1),
//             'key': option
//         }
//     }]
// }
function component(type) {
    return {
        'type': ['component', {
                'type': type
            }]
    };
}
exports.component = component;
function typeRef(type, cyclic) {
    if (cyclic) {
        return ['cyclic sibling', {
                'type': ref(type)
            }];
    }
    else {
        return ['resolved sibling', {
                'type': ref(type),
            }];
    }
}
exports.typeRef = typeRef;
function imported(library, type) {
    return ['import', {
            'library': ref(library),
            'type': ref(type),
        }];
}
exports.imported = imported;
