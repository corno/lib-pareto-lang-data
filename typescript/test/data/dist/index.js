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
exports.$ = void 0;
const _pl = __importStar(require("pareto-core-lib"));
const _pd = __importStar(require("pareto-core-dev"));
exports.$ = {
    'pareto lang data': {
        'createResolveContext': ($) => _pl.cc($, ($) => {
            const Atom__Types = ($) => $.map(($) => _pl.cc($, ($) => {
                return null;
            }));
            const Atom = ($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                return {
                    'type': _ltype,
                };
            });
            const Type = ($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => _pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'array': return _pl.ss($, ($) => ['array', _pl.cc($, ($) => {
                                const _ltype = _pl.cc($['type'], ($) => Type($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }));
                                return {
                                    'type': _ltype,
                                };
                            })]);
                        case 'atom': return _pl.ss($, ($) => ['atom', _pl.cc($, ($) => {
                                const atom = _pl.cc($['atom'], ($) => Atom($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                }));
                                return {
                                    'atom': atom,
                                };
                            })]);
                        case 'component': return _pl.ss($, ($) => ['component', _pl.cc($, ($) => {
                                const _ltype = _pl.cc($['type'], ($) => Global__Type__Selection($, {
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }));
                                const _larguments = _pl.cc($['arguments'], ($) => $.map(($) => _pl.cc($, ($) => {
                                    return null;
                                })));
                                return {
                                    'arguments': _larguments,
                                    'type': _ltype,
                                };
                            })]);
                        case 'constraint': return _pl.ss($, ($) => ['constraint', Type__Selection($, {
                                'imports': _pd.implementMe("ARGS"),
                                'sibling global types': _pd.implementMe("ARGS"),
                            })]);
                        case 'cyclic reference': return _pl.ss($, ($) => ['cyclic reference', _pl.cc($, ($) => {
                                const atom = _pl.cc($['atom'], ($) => Atom($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                }));
                                const sibling = _pl.cc($['sibling'], ($) => Global__Type__Selection($, {
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }));
                                return {
                                    'atom': atom,
                                    'sibling': sibling,
                                };
                            })]);
                        case 'dictionary': return _pl.ss($, ($) => ['dictionary', _pl.cc($, ($) => {
                                const key = _pl.cc($['key'], ($) => Atom($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                }));
                                const constraints = _pl.cc($['constraints'], ($) => $.map(($) => _pl.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'dictionary': return _pl.ss($, ($) => ['dictionary', _pl.cc($, ($) => {
                                                const dictionary = _pl.cc($['dictionary'], ($) => Dictionary__Selection($, {
                                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                                    'imports': _pd.implementMe("ARGS"),
                                                    'sibling global types': _pd.implementMe("ARGS"),
                                                }));
                                                const dense = _pl.cc($['dense'], ($) => _pl.cc($, ($) => {
                                                    switch ($[0]) {
                                                        case 'no': return _pl.ss($, ($) => ['no', _pl.cc($, ($) => {
                                                                return null;
                                                            })]);
                                                        case 'yes': return _pl.ss($, ($) => ['yes', _pl.cc($, ($) => {
                                                                return null;
                                                            })]);
                                                        default: return _pl.au($[0]);
                                                    }
                                                }));
                                                return {
                                                    'dense': dense,
                                                    'dictionary': dictionary,
                                                };
                                            })]);
                                        case 'lookup': return _pl.ss($, ($) => ['lookup', Global__Type__Selection($, {
                                                'cyclic sibling global types': _pd.implementMe("ARGS"),
                                                'imports': _pd.implementMe("ARGS"),
                                                'sibling global types': _pd.implementMe("ARGS"),
                                            })]);
                                        default: return _pl.au($[0]);
                                    }
                                })));
                                const _ltype = _pl.cc($['type'], ($) => Type($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }));
                                return {
                                    'constraints': constraints,
                                    'key': key,
                                    'type': _ltype,
                                };
                            })]);
                        case 'group': return _pl.ss($, ($) => ['group', _pl.cc($, ($) => {
                                const properties = _pl.cc($['properties'], ($) => $.map(($) => _pl.cc($, ($) => {
                                    const _ltype = _pl.cc($['type'], ($) => Type($, {
                                        'atom types': _pd.implementMe("ARGS"),
                                        'cyclic sibling global types': _pd.implementMe("ARGS"),
                                        'imports': _pd.implementMe("ARGS"),
                                        'sibling global types': _pd.implementMe("ARGS"),
                                    }));
                                    return {
                                        'type': _ltype,
                                    };
                                })));
                                return {
                                    'properties': properties,
                                };
                            })]);
                        case 'nothing': return _pl.ss($, ($) => ['nothing', _pl.cc($, ($) => {
                                return null;
                            })]);
                        case 'optional': return _pl.ss($, ($) => ['optional', _pl.cc($, ($) => {
                                const _ltype = _pl.cc($['type'], ($) => Type($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }));
                                return {
                                    'type': _ltype,
                                };
                            })]);
                        case 'resolved reference': return _pl.ss($, ($) => ['resolved reference', _pl.cc($, ($) => {
                                const atom = _pl.cc($['atom'], ($) => Atom($, {
                                    'atom types': _pd.implementMe("ARGS"),
                                }));
                                const value = _pl.cc($['value'], ($) => _pl.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'dictionary': return _pl.ss($, ($) => ['dictionary', Dictionary__Selection($, {
                                                'cyclic sibling global types': _pd.implementMe("ARGS"),
                                                'imports': _pd.implementMe("ARGS"),
                                                'sibling global types': _pd.implementMe("ARGS"),
                                            })]);
                                        case 'lookup': return _pl.ss($, ($) => ['lookup', Global__Type__Selection($, {
                                                'cyclic sibling global types': _pd.implementMe("ARGS"),
                                                'imports': _pd.implementMe("ARGS"),
                                                'sibling global types': _pd.implementMe("ARGS"),
                                            })]);
                                        default: return _pl.au($[0]);
                                    }
                                }));
                                return {
                                    'atom': atom,
                                    'value': value,
                                };
                            })]);
                        case 'state group': return _pl.ss($, ($) => ['state group', _pl.cc($, ($) => {
                                const states = _pl.cc($['states'], ($) => $.map(($) => _pl.cc($, ($) => {
                                    const _ltype = _pl.cc($['type'], ($) => Type($, {
                                        'atom types': _pd.implementMe("ARGS"),
                                        'cyclic sibling global types': _pd.implementMe("ARGS"),
                                        'imports': _pd.implementMe("ARGS"),
                                        'sibling global types': _pd.implementMe("ARGS"),
                                    }));
                                    return {
                                        'type': _ltype,
                                    };
                                })));
                                return {
                                    'states': states,
                                };
                            })]);
                        default: return _pl.au($[0]);
                    }
                }));
                return {
                    'type': _ltype,
                };
            });
            const Imports = ($) => $.map(($) => _pl.cc($, ($) => {
                const library = _pl.cc($['library'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                return {
                    'library': library,
                };
            }));
            const Global__Type__Declaration = ($) => _pl.cc($, ($) => {
                const parameters = _pl.cc($['parameters'], ($) => $.map(($) => _pl.cc($, ($) => {
                    const _ltype = _pl.cc($['type'], ($) => _pl.cc($, ($) => {
                        switch ($[0]) {
                            case 'resolved value': return _pl.ss($, ($) => ['resolved value', _pd.implementMe("CyCLIC REFERENCE")]);
                            case 'sibling lookup': return _pl.ss($, ($) => ['sibling lookup', _pd.implementMe("CyCLIC REFERENCE")]);
                            case 'cyclic sibling lookup': return _pl.ss($, ($) => ['cyclic sibling lookup', _pd.implementMe("CyCLIC REFERENCE")]);
                            default: return _pl.au($[0]);
                        }
                    }));
                    const optional = _pl.cc($['optional'], ($) => _pd.implementMe("OPTIONAL"));
                    return {
                        'optional': optional,
                        'type': _ltype,
                    };
                })));
                const result = _pl.cc($['result'], ($) => _pd.implementMe("OPTIONAL"));
                return {
                    'parameters': parameters,
                    'result': result,
                };
            });
            const Global__Type__Declarations = ($) => $.map(($) => Global__Type__Declaration($, {
                'all siblings': _pd.implementMe("ARGS"),
            }));
            const Global__Type__Definition = ($) => _pl.cc($, ($) => {
                const declaration = _pl.cc($['declaration'], ($) => _pd.implementMe("CONSTRAINT"));
                const _ltype = _pl.cc($['type'], ($) => Type($, {
                    'atom types': _pd.implementMe("ARGS"),
                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                    'imports': _pd.implementMe("ARGS"),
                    'sibling global types': _pd.implementMe("ARGS"),
                }));
                return {
                    'declaration': declaration,
                    'type': _ltype,
                };
            });
            const Type__Selection__Tail = ($) => _pl.cc($, ($) => {
                const step__type = _pl.cc($['step type'], ($) => _pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'dictionary': return _pl.ss($, ($) => ['dictionary', _pl.cc($, ($) => {
                                const dictionary = _pl.cc($['dictionary'], ($) => _pd.implementMe("CONSTRAINT"));
                                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                                return {
                                    'dictionary': dictionary,
                                    'tail': tail,
                                };
                            })]);
                        case 'optional': return _pl.ss($, ($) => ['optional', _pl.cc($, ($) => {
                                const optional = _pl.cc($['optional'], ($) => _pd.implementMe("CONSTRAINT"));
                                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                                return {
                                    'optional': optional,
                                    'tail': tail,
                                };
                            })]);
                        case 'array': return _pl.ss($, ($) => ['array', _pl.cc($, ($) => {
                                const array = _pl.cc($['array'], ($) => _pd.implementMe("CONSTRAINT"));
                                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                                return {
                                    'array': array,
                                    'tail': tail,
                                };
                            })]);
                        case 'group': return _pl.ss($, ($) => ['group', _pl.cc($, ($) => {
                                const group = _pl.cc($['group'], ($) => _pd.implementMe("CONSTRAINT"));
                                const property = _pl.cc($['property'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                                return {
                                    'group': group,
                                    'property': property,
                                    'tail': tail,
                                };
                            })]);
                        case 'state group': return _pl.ss($, ($) => ['state group', _pl.cc($, ($) => {
                                const state__group = _pl.cc($['state group'], ($) => _pd.implementMe("CONSTRAINT"));
                                const state = _pl.cc($['state'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                                return {
                                    'state': state,
                                    'state group': state__group,
                                    'tail': tail,
                                };
                            })]);
                        default: return _pl.au($[0]);
                    }
                }));
                return {
                    'step type': step__type,
                };
            });
            const Type__Selection = ($) => _pl.cc($, ($) => {
                const _limport = _pl.cc($['import'], ($) => _pd.implementMe("OPTIONAL"));
                const global__type = _pl.cc($['global type'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                return {
                    'global type': global__type,
                    'import': _limport,
                    'tail': tail,
                };
            });
            const Dictionary__Selection = ($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => Type__Selection($, {
                    'imports': _pd.implementMe("ARGS"),
                    'sibling global types': _pd.implementMe("ARGS"),
                }));
                const dictionary = _pl.cc($['dictionary'], ($) => _pd.implementMe("CONSTRAINT"));
                return {
                    'dictionary': dictionary,
                    'type': _ltype,
                };
            });
            const Type__Library = ($) => _pl.cc($, ($) => {
                const imports = _pl.cc($['imports'], ($) => Imports($, {
                    'external type libraries': _pd.implementMe("ARGS"),
                }));
                const atom__types = _pl.cc($['atom types'], ($) => Atom__Types($));
                const global__types = _pl.cc($['global types'], ($) => _pl.cc($, ($) => {
                    const declarations = _pl.cc($['declarations'], ($) => Global__Type__Declarations($));
                    const definitions = _pl.cc($['definitions'], ($) => $.map(($) => Global__Type__Definition($, {
                        'all siblings': _pd.implementMe("ARGS"),
                        'atom types': _pd.implementMe("ARGS"),
                        'global type declarations': _pd.implementMe("ARGS"),
                        'imports': _pd.implementMe("ARGS"),
                        'key': _pd.implementMe("ARGS"),
                        'non cyclic siblings': _pd.implementMe("ARGS"),
                    })));
                    return {
                        'declarations': declarations,
                        'definitions': definitions,
                    };
                }));
                return {
                    'atom types': atom__types,
                    'global types': global__types,
                    'imports': imports,
                };
            });
            const Global__Type__Selection = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'resolved sibling': return _pl.ss($, ($) => ['resolved sibling', _pl.cc($, ($) => {
                            const _ltype = _pl.cc($['type'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                            return {
                                'type': _ltype,
                            };
                        })]);
                    case 'import': return _pl.ss($, ($) => ['import', _pl.cc($, ($) => {
                            const library = _pl.cc($['library'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                            const _ltype = _pl.cc($['type'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                            return {
                                'library': library,
                                'type': _ltype,
                            };
                        })]);
                    case 'cyclic sibling': return _pl.ss($, ($) => ['cyclic sibling', _pl.cc($, ($) => {
                            const _ltype = _pl.cc($['type'], ($) => _pd.implementMe("CyCLIC REFERENCE"));
                            return {
                                'type': _ltype,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const Model = ($) => _pl.cc($, ($) => {
                const type__library = _pl.cc($['type library'], ($) => Type__Library($, {
                    'external type libraries': _pd.implementMe("ARGS"),
                }));
                const root = _pl.cc($['root'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                return {
                    'root': root,
                    'type library': type__library,
                };
            });
            const Project = ($) => _pl.cc($, ($) => {
                const type__libraries = _pl.cc($['type libraries'], ($) => $.map(($) => Type__Library($, {
                    'external type libraries': _pd.implementMe("ARGS"),
                })));
                return {
                    'type libraries': type__libraries,
                };
            });
            const Root = ($) => Project($);
            const Variable = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'parent variable': return _pl.ss($, ($) => ['parent variable', _pd.implementMe("RESOLVED REFERENCE")]);
                    default: return _pl.au($[0]);
                }
            });
            const Variables = ($) => $.map(($) => Variable($));
            const Value__Selection__Tail = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'reference': return _pl.ss($, ($) => ['reference', _pl.cc($, ($) => {
                            const reference = _pl.cc($['reference'], ($) => _pd.implementMe("CONSTRAINT"));
                            const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'reference': reference,
                                'tail': tail,
                            };
                        })]);
                    case 'component': return _pl.ss($, ($) => ['component', _pl.cc($, ($) => {
                            const component = _pl.cc($['component'], ($) => _pd.implementMe("CONSTRAINT"));
                            const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'component': component,
                                'tail': tail,
                            };
                        })]);
                    case 'state group': return _pl.ss($, ($) => ['state group', _pl.cc($, ($) => {
                            const state__group = _pl.cc($['state group'], ($) => _pd.implementMe("CONSTRAINT"));
                            const result__type = _pl.cc($['result type'], ($) => Global__Type__Selection($, {
                                'cyclic sibling global types': _pd.implementMe("ARGS"),
                                'imports': _pd.implementMe("ARGS"),
                                'sibling global types': _pd.implementMe("ARGS"),
                            }));
                            const states = _pl.cc($['states'], ($) => $.map(($) => Any__Value__Selection($)));
                            return {
                                'result type': result__type,
                                'state group': state__group,
                                'states': states,
                            };
                        })]);
                    case 'group': return _pl.ss($, ($) => ['group', _pl.cc($, ($) => {
                            const group = _pl.cc($['group'], ($) => _pd.implementMe("CONSTRAINT"));
                            const property = _pl.cc($['property'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                            const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'group': group,
                                'property': property,
                                'tail': tail,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const No__Context__Value__Selection = ($) => _pl.cc($, ($) => {
                const start = _pl.cc($['start'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                return {
                    'start': start,
                    'tail': tail,
                };
            });
            const Any__Value__Selection = ($) => _pl.cc($, ($) => {
                const start = _pl.cc($['start'], ($) => _pd.implementMe("OPTIONAL"));
                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                return {
                    'start': start,
                    'tail': tail,
                };
            });
            return {
                'Any Value Selection': Any__Value__Selection,
                'Atom': Atom,
                'Atom Types': Atom__Types,
                'Dictionary Selection': Dictionary__Selection,
                'Global Type Declaration': Global__Type__Declaration,
                'Global Type Declarations': Global__Type__Declarations,
                'Global Type Definition': Global__Type__Definition,
                'Global Type Selection': Global__Type__Selection,
                'Imports': Imports,
                'Model': Model,
                'No Context Value Selection': No__Context__Value__Selection,
                'Project': Project,
                'Root': Root,
                'Type': Type,
                'Type Library': Type__Library,
                'Type Selection': Type__Selection,
                'Type Selection Tail': Type__Selection__Tail,
                'Value Selection Tail': Value__Selection__Tail,
                'Variable': Variable,
                'Variables': Variables,
            };
        }),
        'createSerializeContext': ($) => ({
            'Any Value Selection': ($) => { },
            'Atom': ($) => { },
            'Atom Types': ($) => { },
            'Dictionary Selection': ($) => { },
            'Global Type Declaration': ($) => { },
            'Global Type Declarations': ($) => { },
            'Global Type Definition': ($) => { },
            'Global Type Selection': ($) => { },
            'Imports': ($) => { },
            'Model': ($) => { },
            'No Context Value Selection': ($) => { },
            'Project': ($) => { },
            'Root': ($) => { },
            'Type': ($) => { },
            'Type Library': ($) => { },
            'Type Selection': ($) => { },
            'Type Selection Tail': ($) => { },
            'Value Selection Tail': ($) => { },
            'Variable': ($) => { },
            'Variables': ($) => { },
        }),
    },
    'proto implementation': {
        'createResolveContext': ($) => _pl.cc($, ($) => {
            const Type__Selection = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'current namespaceXXXXX': return _pl.ss($, ($) => ['current namespaceXXXXX', _pd.implementMe("RESOLVED REFERENCE")]);
                    case 'child namespace': return _pl.ss($, ($) => ['child namespace', _pl.cc($, ($) => {
                            const namespacex = _pl.cc($['namespacex'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                            const selection = _pl.cc($['selection'], ($) => Type__Selection($));
                            return {
                                'namespacex': namespacex,
                                'selection': selection,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const Type__Arguments = ($) => $.map(($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => Type__Selection($));
                return {
                    'type': _ltype,
                };
            }));
            const Local__Variables = ($) => $.map(($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => Type__Selection($));
                const initialization = _pl.cc($['initialization'], ($) => Initialization($));
                return {
                    'initialization': initialization,
                    'type': _ltype,
                };
            }));
            const Aggregated__Variable = ($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => _pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'variable stack2': return _pl.ss($, ($) => ['variable stack2', _pl.cc($, ($) => {
                                const variable = _pl.cc($['variable'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                                return {
                                    'variable': variable,
                                };
                            })]);
                        case 'local': return _pl.ss($, ($) => ['local', _pl.cc($, ($) => {
                                return null;
                            })]);
                        default: return _pl.au($[0]);
                    }
                }));
                return {
                    'type': _ltype,
                };
            });
            const Aggregated__Variables = ($) => $.map(($) => Aggregated__Variable($));
            const Variables = ($) => _pl.cc($, ($) => {
                const local = _pl.cc($['local'], ($) => Local__Variables($));
                const aggregated = _pl.cc($['aggregated'], ($) => Aggregated__Variables($));
                return {
                    'aggregated': aggregated,
                    'local': local,
                };
            });
            const Target__Selection__Tail = ($) => _pd.implementMe("OPTIONAL");
            const Target__Selection = ($) => _pl.cc($, ($) => {
                const variable = _pl.cc($['variable'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                const tail = _pl.cc($['tail'], ($) => Target__Selection__Tail($));
                return {
                    'tail': tail,
                    'variable': variable,
                };
            });
            const Source__Selection__Tail = ($) => _pd.implementMe("OPTIONAL");
            const Source__Selection = ($) => _pl.cc($, ($) => {
                const start = _pl.cc($['start'], ($) => _pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'context': return _pl.ss($, ($) => ['context', _pl.cc($, ($) => {
                                return null;
                            })]);
                        case 'variable': return _pl.ss($, ($) => ['variable', _pd.implementMe("RESOLVED REFERENCE")]);
                        default: return _pl.au($[0]);
                    }
                }));
                const tail = _pl.cc($['tail'], ($) => Source__Selection__Tail($));
                return {
                    'start': start,
                    'tail': tail,
                };
            });
            const Initialization__Or__Selection = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'initialization': return _pl.ss($, ($) => ['initialization', Initialization($)]);
                    case 'selection': return _pl.ss($, ($) => ['selection', _pl.cc($, ($) => {
                            const selection = _pl.cc($['selection'], ($) => Source__Selection($));
                            return {
                                'selection': selection,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const String__Initialization__Or__Selection = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'initialization': return _pl.ss($, ($) => ['initialization', String__Initialization($)]);
                    case 'selection': return _pl.ss($, ($) => ['selection', _pl.cc($, ($) => {
                            const selection = _pl.cc($['selection'], ($) => Source__Selection($));
                            const _lstring = _pl.cc($['string'], ($) => _pd.implementMe("CONSTRAINT"));
                            return {
                                'selection': selection,
                                'string': _lstring,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const Numerical__Initialization__Or__Selection = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'initialization': return _pl.ss($, ($) => ['initialization', Numerical__Initialization($)]);
                    case 'selection': return _pl.ss($, ($) => ['selection', _pl.cc($, ($) => {
                            const selection = _pl.cc($['selection'], ($) => Source__Selection($));
                            const _lnumber = _pl.cc($['number'], ($) => _pd.implementMe("CONSTRAINT"));
                            return {
                                'number': _lnumber,
                                'selection': selection,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const Boolean__Initialization__Or__Selection = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'initialization': return _pl.ss($, ($) => ['initialization', Boolean__Initialization($)]);
                    case 'selection': return _pl.ss($, ($) => ['selection', _pl.cc($, ($) => {
                            const selection = _pl.cc($['selection'], ($) => Source__Selection($));
                            const _lboolean = _pl.cc($['boolean'], ($) => _pd.implementMe("CONSTRAINT"));
                            return {
                                'boolean': _lboolean,
                                'selection': selection,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const Boolean__Initialization = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'and': return _pl.ss($, ($) => ['and', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => Boolean__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => Boolean__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'or': return _pl.ss($, ($) => ['or', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => Boolean__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => Boolean__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'false': return _pl.ss($, ($) => ['false', _pl.cc($, ($) => {
                            return null;
                        })]);
                    case 'not': return _pl.ss($, ($) => ['not', Boolean__Initialization__Or__Selection($)]);
                    case 'true': return _pl.ss($, ($) => ['true', _pl.cc($, ($) => {
                            return null;
                        })]);
                    case 'string equals': return _pl.ss($, ($) => ['string equals', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => String__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => String__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'string not equals': return _pl.ss($, ($) => ['string not equals', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => String__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => String__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'number equals': return _pl.ss($, ($) => ['number equals', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => Numerical__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'number not equals': return _pl.ss($, ($) => ['number not equals', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => Numerical__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'greater than': return _pl.ss($, ($) => ['greater than', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => Numerical__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'less than': return _pl.ss($, ($) => ['less than', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => Numerical__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const Numerical__Initialization = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'minus': return _pl.ss($, ($) => ['minus', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => Numerical__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'plus': return _pl.ss($, ($) => ['plus', _pl.cc($, ($) => {
                            const left__hand__side = _pl.cc($['left hand side'], ($) => Numerical__Initialization__Or__Selection($));
                            const right__hand__side = _pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection($));
                            return {
                                'left hand side': left__hand__side,
                                'right hand side': right__hand__side,
                            };
                        })]);
                    case 'predecrement': return _pl.ss($, ($) => ['predecrement', Numerical__Initialization__Or__Selection($)]);
                    case 'preincrement': return _pl.ss($, ($) => ['preincrement', Numerical__Initialization__Or__Selection($)]);
                    case 'postdecrement': return _pl.ss($, ($) => ['postdecrement', Numerical__Initialization__Or__Selection($)]);
                    case 'postincrement': return _pl.ss($, ($) => ['postincrement', Numerical__Initialization__Or__Selection($)]);
                    case 'numeric literal': return _pl.ss($, ($) => ['numeric literal', $]);
                    default: return _pl.au($[0]);
                }
            });
            const String__Initialization = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'string literal': return _pl.ss($, ($) => ['string literal', $]);
                    default: return _pl.au($[0]);
                }
            });
            const Initialization = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'array literal': return _pl.ss($, ($) => ['array literal', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const initialization = _pl.cc($['initialization'], ($) => $.map(($) => Initialization__Or__Selection($)));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                            };
                        })]);
                    case 'array map': return _pl.ss($, ($) => ['array map', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const source = _pl.cc($['source'], ($) => Source__Selection($));
                            const initialization = _pl.cc($['initialization'], ($) => Initialization__Or__Selection($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                                'source': source,
                            };
                        })]);
                    case 'boolean': return _pl.ss($, ($) => ['boolean', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const initialization = _pl.cc($['initialization'], ($) => Boolean__Initialization($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                            };
                        })]);
                    case 'change context': return _pl.ss($, ($) => ['change context', _pl.cc($, ($) => {
                            const source = _pl.cc($['source'], ($) => Source__Selection($));
                            const initialization = _pl.cc($['initialization'], ($) => Initialization__Or__Selection($));
                            return {
                                'initialization': initialization,
                                'source': source,
                            };
                        })]);
                    case 'dictionary literal': return _pl.ss($, ($) => ['dictionary literal', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const initialization = _pl.cc($['initialization'], ($) => $.map(($) => Initialization__Or__Selection($)));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                            };
                        })]);
                    case 'dictionary map': return _pl.ss($, ($) => ['dictionary map', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const source = _pl.cc($['source'], ($) => Source__Selection($));
                            const initialization = _pl.cc($['initialization'], ($) => Initialization__Or__Selection($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                                'source': source,
                            };
                        })]);
                    case 'group literal': return _pl.ss($, ($) => ['group literal', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const properties = _pl.cc($['properties'], ($) => $.map(($) => Initialization__Or__Selection($)));
                            return {
                                'definition': definition,
                                'properties': properties,
                            };
                        })]);
                    case 'implement me': return _pl.ss($, ($) => ['implement me', $]);
                    case 'null': return _pl.ss($, ($) => ['null', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            return {
                                'definition': definition,
                            };
                        })]);
                    case 'numerical': return _pl.ss($, ($) => ['numerical', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const initialization = _pl.cc($['initialization'], ($) => Numerical__Initialization($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                            };
                        })]);
                    case 'optional': return _pl.ss($, ($) => ['optional', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            return {
                                'definition': definition,
                            };
                        })]);
                    case 'procedure': return _pl.ss($, ($) => ['procedure', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const temp__has__parameters = _pl.cc($['temp has parameters'], ($) => _pd.implementMe("OPTIONAL"));
                            const variables = _pl.cc($['variables'], ($) => Aggregated__Variables($));
                            const block = _pl.cc($['block'], ($) => Block($));
                            return {
                                'block': block,
                                'definition': definition,
                                'temp has parameters': temp__has__parameters,
                                'variables': variables,
                            };
                        })]);
                    case 'tagged union literal': return _pl.ss($, ($) => ['tagged union literal', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const state = _pl.cc($['state'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                            const initialization = _pl.cc($['initialization'], ($) => Initialization__Or__Selection($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                                'state': state,
                            };
                        })]);
                    case 'string': return _pl.ss($, ($) => ['string', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const initialization = _pl.cc($['initialization'], ($) => String__Initialization($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                            };
                        })]);
                    case 'switch': return _pl.ss($, ($) => ['switch', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const temp__type = _pl.cc($['temp type'], ($) => Type__Selection($));
                            const source = _pl.cc($['source'], ($) => Source__Selection($));
                            const cases = _pl.cc($['cases'], ($) => $.map(($) => Initialization__Or__Selection($)));
                            const _ldefault = _pl.cc($['default'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'cases': cases,
                                'default': _ldefault,
                                'definition': definition,
                                'source': source,
                                'temp type': temp__type,
                            };
                        })]);
                    case 'value function': return _pl.ss($, ($) => ['value function', _pl.cc($, ($) => {
                            const definition = _pl.cc($['definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const temp__has__parameters = _pl.cc($['temp has parameters'], ($) => _pd.implementMe("OPTIONAL"));
                            const variables = _pl.cc($['variables'], ($) => Aggregated__Variables($));
                            const initialization = _pl.cc($['initialization'], ($) => Initialization__Or__Selection($));
                            return {
                                'definition': definition,
                                'initialization': initialization,
                                'temp has parameters': temp__has__parameters,
                                'variables': variables,
                            };
                        })]);
                    case 'variables': return _pl.ss($, ($) => ['variables', _pl.cc($, ($) => {
                            const variables = _pl.cc($['variables'], ($) => Variables($));
                            const initialization = _pl.cc($['initialization'], ($) => Initialization__Or__Selection($));
                            return {
                                'initialization': initialization,
                                'variables': variables,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const Block = ($) => _pl.cc($, ($) => {
                const variables = _pl.cc($['variables'], ($) => Variables($));
                const statements = _pl.cc($['statements'], ($) => Statements($));
                return {
                    'statements': statements,
                    'variables': variables,
                };
            });
            const Assign = ($) => _pl.cc($, ($) => {
                const target = _pl.cc($['target'], ($) => Target__Selection($));
                const initialization = _pl.cc($['initialization'], ($) => Initialization__Or__Selection($));
                return {
                    'initialization': initialization,
                    'target': target,
                };
            });
            const Statements = ($) => $.map(($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'block': return _pl.ss($, ($) => ['block', Block($)]);
                    case 'call': return _pl.ss($, ($) => ['call', _pl.cc($, ($) => {
                            const _lfunction = _pl.cc($['function'], ($) => Source__Selection($));
                            const context__definition = _pl.cc($['context definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const context = _pl.cc($['context'], ($) => Source__Selection($));
                            const _larguments = _pl.cc($['arguments'], ($) => $.map(($) => Initialization__Or__Selection($)));
                            return {
                                'arguments': _larguments,
                                'context': context,
                                'context definition': context__definition,
                                'function': _lfunction,
                            };
                        })]);
                    case 'change context': return _pl.ss($, ($) => ['change context', _pl.cc($, ($) => {
                            const source = _pl.cc($['source'], ($) => Source__Selection($));
                            const block = _pl.cc($['block'], ($) => Block($));
                            return {
                                'block': block,
                                'source': source,
                            };
                        })]);
                    case 'if': return _pl.ss($, ($) => ['if', _pl.cc($, ($) => {
                            const condition = _pl.cc($['condition'], ($) => Boolean__Initialization__Or__Selection($));
                            const then = _pl.cc($['then'], ($) => Block($));
                            const _lelse = _pl.cc($['else'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'condition': condition,
                                'else': _lelse,
                                'then': then,
                            };
                        })]);
                    case 'switch': return _pl.ss($, ($) => ['switch', _pl.cc($, ($) => {
                            const source = _pl.cc($['source'], ($) => Source__Selection($));
                            const context__definition = _pl.cc($['context definition'], ($) => _pd.implementMe("CONSTRAINT"));
                            const cases = _pl.cc($['cases'], ($) => $.map(($) => Block($)));
                            const _ldefault = _pl.cc($['default'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'cases': cases,
                                'context definition': context__definition,
                                'default': _ldefault,
                                'source': source,
                            };
                        })]);
                    case 'with': return _pl.ss($, ($) => ['with', _pl.cc($, ($) => {
                            const source = _pl.cc($['source'], ($) => Source__Selection($));
                            const action = _pl.cc($['action'], ($) => _pl.cc($, ($) => {
                                switch ($[0]) {
                                    case 'assign': return _pl.ss($, ($) => ['assign', Assign($)]);
                                    case 'minus assign': return _pl.ss($, ($) => ['minus assign', _pl.cc($, ($) => {
                                            const _lnumber = _pl.cc($['number'], ($) => _pd.implementMe("CONSTRAINT"));
                                            const right__hand__side = _pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection($));
                                            return {
                                                'number': _lnumber,
                                                'right hand side': right__hand__side,
                                            };
                                        })]);
                                    case 'plus assign': return _pl.ss($, ($) => ['plus assign', _pl.cc($, ($) => {
                                            const _lnumber = _pl.cc($['number'], ($) => _pd.implementMe("CONSTRAINT"));
                                            const right__hand__side = _pl.cc($['right hand side'], ($) => Numerical__Initialization__Or__Selection($));
                                            return {
                                                'number': _lnumber,
                                                'right hand side': right__hand__side,
                                            };
                                        })]);
                                    default: return _pl.au($[0]);
                                }
                            }));
                            return {
                                'action': action,
                                'source': source,
                            };
                        })]);
                    case 'while': return _pl.ss($, ($) => ['while', _pl.cc($, ($) => {
                            const condition = _pl.cc($['condition'], ($) => Boolean__Initialization__Or__Selection($));
                            const block = _pl.cc($['block'], ($) => Block($));
                            return {
                                'block': block,
                                'condition': condition,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            }));
            const Source__File = ($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => Type__Selection($));
                const initialization = _pl.cc($['initialization'], ($) => Initialization($));
                return {
                    'initialization': initialization,
                    'type': _ltype,
                };
            });
            const Root = ($) => Source__File($);
            return {
                'Aggregated Variable': Aggregated__Variable,
                'Aggregated Variables': Aggregated__Variables,
                'Assign': Assign,
                'Block': Block,
                'Boolean Initialization': Boolean__Initialization,
                'Boolean Initialization Or Selection': Boolean__Initialization__Or__Selection,
                'Initialization': Initialization,
                'Initialization Or Selection': Initialization__Or__Selection,
                'Local Variables': Local__Variables,
                'Numerical Initialization': Numerical__Initialization,
                'Numerical Initialization Or Selection': Numerical__Initialization__Or__Selection,
                'Root': Root,
                'Source File': Source__File,
                'Source Selection': Source__Selection,
                'Source Selection Tail': Source__Selection__Tail,
                'Statements': Statements,
                'String Initialization': String__Initialization,
                'String Initialization Or Selection': String__Initialization__Or__Selection,
                'Target Selection': Target__Selection,
                'Target Selection Tail': Target__Selection__Tail,
                'Type Arguments': Type__Arguments,
                'Type Selection': Type__Selection,
                'Variables': Variables,
            };
        }),
        'createSerializeContext': ($) => ({
            'Aggregated Variable': ($) => { },
            'Aggregated Variables': ($) => { },
            'Assign': ($) => { },
            'Block': ($) => { },
            'Boolean Initialization': ($) => { },
            'Boolean Initialization Or Selection': ($) => { },
            'Initialization': ($) => { },
            'Initialization Or Selection': ($) => { },
            'Local Variables': ($) => { },
            'Numerical Initialization': ($) => { },
            'Numerical Initialization Or Selection': ($) => { },
            'Root': ($) => { },
            'Source File': ($) => { },
            'Source Selection': ($) => { },
            'Source Selection Tail': ($) => { },
            'Statements': ($) => { },
            'String Initialization': ($) => { },
            'String Initialization Or Selection': ($) => { },
            'Target Selection': ($) => { },
            'Target Selection Tail': ($) => { },
            'Type Arguments': ($) => { },
            'Type Selection': ($) => { },
            'Variables': ($) => { },
        }),
    },
    'proto typesystem': {
        'createResolveContext': ($) => _pl.cc($, ($) => {
            const Aggregated__Type__Parameters = ($) => $.map(($) => _pl.cc($, ($) => {
                return null;
            }));
            const Type__Parameters = ($) => _pl.cc($, ($) => {
                const local = _pl.cc($['local'], ($) => $.map(($) => _pl.cc($, ($) => {
                    return null;
                })));
                const aggregated = _pl.cc($['aggregated'], ($) => Aggregated__Type__Parameters($));
                return {
                    'aggregated': aggregated,
                    'local': local,
                };
            });
            const Function__Declaration = ($) => _pl.cc($, ($) => {
                const type__parameters = _pl.cc($['type parameters'], ($) => Type__Parameters($, {
                    'parent type parameters': _pd.implementMe("ARGS"),
                }));
                const context = _pl.cc($['context'], ($) => Type($, {
                    'cyclic sibling types': _pd.implementMe("ARGS"),
                    'resolved namespaces': _pd.implementMe("ARGS"),
                    'resolved sibling types': _pd.implementMe("ARGS"),
                    'type parameters': _pd.implementMe("ARGS"),
                }));
                const parameters = _pl.cc($['parameters'], ($) => $.map(($) => Type($, {
                    'cyclic sibling types': _pd.implementMe("ARGS"),
                    'resolved namespaces': _pd.implementMe("ARGS"),
                    'resolved sibling types': _pd.implementMe("ARGS"),
                    'type parameters': _pd.implementMe("ARGS"),
                })));
                return {
                    'context': context,
                    'parameters': parameters,
                    'type parameters': type__parameters,
                };
            });
            const Imports = ($) => $.map(($) => Import($));
            const Nested__Namespace = ($) => _pl.cc($, ($) => {
                const imports = _pl.cc($['imports'], ($) => Imports($));
                const namespace = _pl.cc($['namespace'], ($) => Namespace($, {
                    'parent type parameters': _pd.implementMe("ARGS"),
                    'resolved sibling namespaces': _pd.implementMe("ARGS"),
                }));
                return {
                    'imports': imports,
                    'namespace': namespace,
                };
            });
            const Import = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'sibling': return _pl.ss($, ($) => ['sibling', _pd.implementMe("RESOLVED REFERENCE")]);
                    case 'parent import': return _pl.ss($, ($) => ['parent import', _pd.implementMe("RESOLVED REFERENCE")]);
                    default: return _pl.au($[0]);
                }
            });
            const Namespace = ($) => _pl.cc($, ($) => {
                const namespaces = _pl.cc($['namespaces'], ($) => $.map(($) => Nested__Namespace($, {
                    'resolved parent sibling namespaces': _pd.implementMe("ARGS"),
                })));
                const parameters = _pl.cc($['parameters'], ($) => Type__Parameters($, {
                    'parent type parameters': _pd.implementMe("ARGS"),
                }));
                const types = _pl.cc($['types'], ($) => $.map(($) => Type($, {
                    'cyclic sibling types': _pd.implementMe("ARGS"),
                    'resolved namespaces': _pd.implementMe("ARGS"),
                    'resolved sibling types': _pd.implementMe("ARGS"),
                    'type parameters': _pd.implementMe("ARGS"),
                })));
                return {
                    'namespaces': namespaces,
                    'parameters': parameters,
                    'types': types,
                };
            });
            const Type = ($) => _pl.cc($, ($) => {
                switch ($[0]) {
                    case 'address function': return _pl.ss($, ($) => ['address function', _pl.cc($, ($) => {
                            const declaration = _pl.cc($['declaration'], ($) => Function__Declaration($, {
                                'cyclic sibling types': _pd.implementMe("ARGS"),
                                'resolved namespaces': _pd.implementMe("ARGS"),
                                'resolved sibling types': _pd.implementMe("ARGS"),
                                'type parameters': _pd.implementMe("ARGS"),
                            }));
                            const return__type = _pl.cc($['return type'], ($) => Type($, {
                                'cyclic sibling types': _pd.implementMe("ARGS"),
                                'resolved namespaces': _pd.implementMe("ARGS"),
                                'resolved sibling types': _pd.implementMe("ARGS"),
                                'type parameters': _pd.implementMe("ARGS"),
                            }));
                            return {
                                'declaration': declaration,
                                'return type': return__type,
                            };
                        })]);
                    case 'array': return _pl.ss($, ($) => ['array', Type($, {
                            'cyclic sibling types': _pd.implementMe("ARGS"),
                            'resolved namespaces': _pd.implementMe("ARGS"),
                            'resolved sibling types': _pd.implementMe("ARGS"),
                            'type parameters': _pd.implementMe("ARGS"),
                        })]);
                    case 'boolean': return _pl.ss($, ($) => ['boolean', _pl.cc($, ($) => {
                            return null;
                        })]);
                    case 'computed': return _pl.ss($, ($) => ['computed', Type($, {
                            'cyclic sibling types': _pd.implementMe("ARGS"),
                            'resolved namespaces': _pd.implementMe("ARGS"),
                            'resolved sibling types': _pd.implementMe("ARGS"),
                            'type parameters': _pd.implementMe("ARGS"),
                        })]);
                    case 'dictionary': return _pl.ss($, ($) => ['dictionary', Type($, {
                            'cyclic sibling types': _pd.implementMe("ARGS"),
                            'resolved namespaces': _pd.implementMe("ARGS"),
                            'resolved sibling types': _pd.implementMe("ARGS"),
                            'type parameters': _pd.implementMe("ARGS"),
                        })]);
                    case 'group': return _pl.ss($, ($) => ['group', $.map(($) => _pl.cc($, ($) => {
                            const _ltype = _pl.cc($['type'], ($) => Type($, {
                                'cyclic sibling types': _pd.implementMe("ARGS"),
                                'resolved namespaces': _pd.implementMe("ARGS"),
                                'resolved sibling types': _pd.implementMe("ARGS"),
                                'type parameters': _pd.implementMe("ARGS"),
                            }));
                            const mutable = _pl.cc($['mutable'], ($) => _pd.implementMe("OPTIONAL"));
                            return {
                                'mutable': mutable,
                                'type': _ltype,
                            };
                        }))]);
                    case 'lookup': return _pl.ss($, ($) => ['lookup', Type($, {
                            'cyclic sibling types': _pd.implementMe("ARGS"),
                            'resolved namespaces': _pd.implementMe("ARGS"),
                            'resolved sibling types': _pd.implementMe("ARGS"),
                            'type parameters': _pd.implementMe("ARGS"),
                        })]);
                    case 'null': return _pl.ss($, ($) => ['null', _pl.cc($, ($) => {
                            return null;
                        })]);
                    case 'number': return _pl.ss($, ($) => ['number', _pl.cc($, ($) => {
                            return null;
                        })]);
                    case 'optional': return _pl.ss($, ($) => ['optional', Type($, {
                            'cyclic sibling types': _pd.implementMe("ARGS"),
                            'resolved namespaces': _pd.implementMe("ARGS"),
                            'resolved sibling types': _pd.implementMe("ARGS"),
                            'type parameters': _pd.implementMe("ARGS"),
                        })]);
                    case 'procedure': return _pl.ss($, ($) => ['procedure', _pl.cc($, ($) => {
                            const declaration = _pl.cc($['declaration'], ($) => Function__Declaration($, {
                                'cyclic sibling types': _pd.implementMe("ARGS"),
                                'resolved namespaces': _pd.implementMe("ARGS"),
                                'resolved sibling types': _pd.implementMe("ARGS"),
                                'type parameters': _pd.implementMe("ARGS"),
                            }));
                            return {
                                'declaration': declaration,
                            };
                        })]);
                    case 'string': return _pl.ss($, ($) => ['string', _pl.cc($, ($) => {
                            return null;
                        })]);
                    case 'tagged union': return _pl.ss($, ($) => ['tagged union', $.map(($) => Type($, {
                            'cyclic sibling types': _pd.implementMe("ARGS"),
                            'resolved namespaces': _pd.implementMe("ARGS"),
                            'resolved sibling types': _pd.implementMe("ARGS"),
                            'type parameters': _pd.implementMe("ARGS"),
                        }))]);
                    case 'type parameter': return _pl.ss($, ($) => ['type parameter', _pd.implementMe("RESOLVED REFERENCE")]);
                    case 'type reference': return _pl.ss($, ($) => ['type reference', _pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'external': return _pl.ss($, ($) => ['external', _pl.cc($, ($) => {
                                        const namespace__path = _pl.cc($['namespace path'], ($) => Namespace__Selection($, {
                                            'cyclic sibling types': _pd.implementMe("ARGS"),
                                            'resolved namespaces': _pd.implementMe("ARGS"),
                                            'resolved sibling types': _pd.implementMe("ARGS"),
                                            'type parameters': _pd.implementMe("ARGS"),
                                        }));
                                        const _ltype = _pl.cc($['type'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                                        return {
                                            'namespace path': namespace__path,
                                            'type': _ltype,
                                        };
                                    })]);
                                case 'sibling': return _pl.ss($, ($) => ['sibling', _pd.implementMe("RESOLVED REFERENCE")]);
                                case 'cyclic sibling': return _pl.ss($, ($) => ['cyclic sibling', _pd.implementMe("CyCLIC REFERENCE")]);
                                default: return _pl.au($[0]);
                            }
                        })]);
                    case 'value function': return _pl.ss($, ($) => ['value function', _pl.cc($, ($) => {
                            const declaration = _pl.cc($['declaration'], ($) => Function__Declaration($, {
                                'cyclic sibling types': _pd.implementMe("ARGS"),
                                'resolved namespaces': _pd.implementMe("ARGS"),
                                'resolved sibling types': _pd.implementMe("ARGS"),
                                'type parameters': _pd.implementMe("ARGS"),
                            }));
                            const return__type = _pl.cc($['return type'], ($) => Type($, {
                                'cyclic sibling types': _pd.implementMe("ARGS"),
                                'resolved namespaces': _pd.implementMe("ARGS"),
                                'resolved sibling types': _pd.implementMe("ARGS"),
                                'type parameters': _pd.implementMe("ARGS"),
                            }));
                            return {
                                'declaration': declaration,
                                'return type': return__type,
                            };
                        })]);
                    default: return _pl.au($[0]);
                }
            });
            const Type__Arguments = ($) => $.map(($) => _pl.cc($, ($) => {
                const _ltype = _pl.cc($['type'], ($) => Type($, {
                    'cyclic sibling types': _pd.implementMe("ARGS"),
                    'resolved namespaces': _pd.implementMe("ARGS"),
                    'resolved sibling types': _pd.implementMe("ARGS"),
                    'type parameters': _pd.implementMe("ARGS"),
                }));
                return {
                    'type': _ltype,
                };
            }));
            const Namespace__Selection__Tail = ($) => _pl.cc($, ($) => {
                const namespace = _pl.cc($['namespace'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                const _larguments = _pl.cc($['arguments'], ($) => Type__Arguments($));
                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                return {
                    'arguments': _larguments,
                    'namespace': namespace,
                    'tail': tail,
                };
            });
            const Namespace__Selection = ($) => _pl.cc($, ($) => {
                const start = _pl.cc($['start'], ($) => _pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'import': return _pl.ss($, ($) => ['import', _pl.cc($, ($) => {
                                const namespace = _pl.cc($['namespace'], ($) => _pd.implementMe("RESOLVED REFERENCE"));
                                const _larguments = _pl.cc($['arguments'], ($) => Type__Arguments($));
                                const tail = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"));
                                return {
                                    'arguments': _larguments,
                                    'namespace': namespace,
                                    'tail': tail,
                                };
                            })]);
                        case 'local': return _pl.ss($, ($) => ['local', _pl.cc($, ($) => {
                                const namespace = _pl.cc($['namespace'], ($) => Namespace__Selection__Tail($));
                                return {
                                    'namespace': namespace,
                                };
                            })]);
                        default: return _pl.au($[0]);
                    }
                }));
                return {
                    'start': start,
                };
            });
            const Root = ($) => Namespace($, {
                'parent type parameters': _pd.implementMe("ARGS"),
                'resolved sibling namespaces': _pd.implementMe("ARGS"),
            });
            return {
                'Aggregated Type Parameters': Aggregated__Type__Parameters,
                'Function Declaration': Function__Declaration,
                'Import': Import,
                'Imports': Imports,
                'Namespace': Namespace,
                'Namespace Selection': Namespace__Selection,
                'Namespace Selection Tail': Namespace__Selection__Tail,
                'Nested Namespace': Nested__Namespace,
                'Root': Root,
                'Type': Type,
                'Type Arguments': Type__Arguments,
                'Type Parameters': Type__Parameters,
            };
        }),
        'createSerializeContext': ($) => ({
            'Aggregated Type Parameters': ($) => { },
            'Function Declaration': ($) => { },
            'Import': ($) => { },
            'Imports': ($) => { },
            'Namespace': ($) => { },
            'Namespace Selection': ($) => { },
            'Namespace Selection Tail': ($) => { },
            'Nested Namespace': ($) => { },
            'Root': ($) => { },
            'Type': ($) => { },
            'Type Arguments': ($) => { },
            'Type Parameters': ($) => { },
        }),
    },
};
