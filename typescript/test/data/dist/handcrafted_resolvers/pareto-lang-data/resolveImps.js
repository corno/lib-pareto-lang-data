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
exports.resolve = void 0;
const pl = __importStar(require("pareto-core-lib"));
const select = __importStar(require("./selectImp"));
function mapOptional($, a) {
    return pl.optional($, ($) => {
        return [true, a($)];
    }, () => [false]);
}
function resolve($d, $se) {
    function getEntry($, key, annotation) {
        return $.__getEntry(key, ($) => $, () => {
            // let keys = ""
            // $.__forEach(() => false, ($, key) => {
            //     keys += `${key}, `
            // })
            //pl.panic(`No Such Entry%% ${key} (${keys})`)
            $se.onError({
                'annotation': annotation,
                'message': ['no such entry', {
                        'key': key
                    }]
            });
            return pl.panic(`No Such EntryXX: ${key}`);
        });
    }
    function getAnnotatedEntry($, key) {
        return {
            'key': key.key,
            'referent': getEntry($, key.key, key.annotation)
        };
    }
    ///////////////////////////////////////////////////////////////
    const Atom = ($, $p) => ({
        'type': getAnnotatedEntry($p['atom types'], $.type)
    });
    const Dictionary__Selection = ($, $p) => {
        const x = $;
        const v_type = Type__Selection($.type, $p);
        return {
            'type': v_type,
            'dictionary': pl.cc(select.Type__Selection(v_type), ($) => {
                if ($.type[0] !== 'dictionary') {
                    $se.onError({
                        'annotation': x.dictionary,
                        'message': ['not the right state', {
                                'found': $.type[0],
                                'expected': `dictionary`
                            }]
                    });
                    pl.panic(`not a dictionary`);
                }
                return $.type[1];
            }),
        };
    };
    const Global__Type__Selection = ($, $p) => {
        switch ($[0]) {
            case 'cyclic sibling': return pl.ss($, ($) => {
                const v_type = getAnnotatedEntry($p['cyclic sibling global types'], $.type);
                return ['cyclic sibling', {
                        'type': v_type,
                    }];
            });
            case 'import': return pl.ss($, ($) => {
                const v_library = getAnnotatedEntry($p.imports, $.library);
                const v_type = getAnnotatedEntry(v_library.referent.library.referent['global types'].definitions, $.type);
                return ['import', {
                        'library': v_library,
                        'type': v_type,
                    }];
            });
            case 'resolved sibling': return pl.ss($, ($) => {
                const v_type = getAnnotatedEntry($p['sibling global types'], $.type);
                return ['resolved sibling', {
                        'type': v_type,
                    }];
            });
            default: return pl.au($[0]);
        }
    };
    const Model = ($, $p) => {
        const tl = Type__Library($['type library'], $p);
        return {
            'type library': tl,
            'root': getAnnotatedEntry(tl['global types'].definitions, $.root)
        };
    };
    const Root = ($, $p) => {
        return Project($, $p);
    };
    const Type = ($, $p) => {
        return {
            'type': pl.cc($.type, ($) => {
                switch ($[0]) {
                    case 'array': return pl.ss($, ($) => ['array', {
                            'type': Type($.type, $p)
                        }]);
                    case 'component': return pl.ss($, ($) => {
                        return ['component', {
                                'type': Global__Type__Selection($.type, $p),
                                'arguments': $.arguments.dictionary.map(($) => {
                                    return null;
                                })
                            }];
                    });
                    case 'constraint': return pl.ss($, ($) => ['constraint', Type__Selection($, $p)]);
                    case 'dictionary': return pl.ss($, ($) => ['dictionary', {
                            'constraints': $.constraints.dictionary.map(($) => pl.cc($, ($) => {
                                switch ($[0]) {
                                    case 'lookup': return pl.ss($, ($) => {
                                        const v_gts = Global__Type__Selection($, $p);
                                        return ['lookup', v_gts];
                                    });
                                    case 'dictionary': return pl.ss($, ($) => {
                                        return ['dictionary', {
                                                'dictionary': Dictionary__Selection($.dictionary, {
                                                    'cyclic sibling global types': $p['cyclic sibling global types'],
                                                    'imports': $p.imports,
                                                    'sibling global types': $p['sibling global types']
                                                }),
                                                'dense': pl.cc($.dense, ($) => {
                                                    switch ($[0]) {
                                                        case 'no': return pl.ss($, ($) => ['no', null]);
                                                        case 'yes': return pl.ss($, ($) => ['yes', null]);
                                                        default: return pl.au($[0]);
                                                    }
                                                }),
                                            }];
                                    });
                                    default: return pl.au($[0]);
                                }
                            })),
                            'key': Atom($.key, { 'atom types': $p['atom types'] }),
                            'type': Type($.type, $p)
                        }]);
                    case 'group': return pl.ss($, ($) => {
                        return ['group', {
                                'properties': $.properties.dictionary.map(($) => {
                                    return {
                                        'type': Type($.type, $p)
                                    };
                                })
                            }];
                    });
                    case 'nothing': return pl.ss($, ($) => ['nothing', null]);
                    case 'optional': return pl.ss($, ($) => ['optional', {
                            'type': Type($.type, $p),
                        }]);
                    case 'state group': return pl.ss($, ($) => {
                        return ['state group', {
                                'states': $d.resolveDictionary($.states.dictionary, {
                                    'map': ($, $l) => {
                                        return {
                                            'type': Type($.value.type, $p),
                                        };
                                    }
                                }),
                            }];
                    });
                    case 'cyclic reference': return pl.ss($, ($) => {
                        return ['cyclic reference', {
                                'atom': Atom($.atom, { 'atom types': $p['atom types'] }),
                                'sibling': Global__Type__Selection($.sibling, $p)
                            }];
                    });
                    case 'resolved reference': return pl.ss($, ($) => {
                        return ['resolved reference', {
                                'atom': Atom($.atom, { 'atom types': $p['atom types'] }),
                                'value': pl.cc($.value, ($) => {
                                    switch ($[0]) {
                                        case 'lookup': return pl.ss($, ($) => {
                                            const v_gts = Global__Type__Selection($, $p);
                                            return ['lookup', v_gts];
                                        });
                                        case 'dictionary': return pl.ss($, ($) => {
                                            return ['dictionary', Dictionary__Selection($, {
                                                    'cyclic sibling global types': $p['cyclic sibling global types'],
                                                    'imports': $p.imports,
                                                    'sibling global types': $p['sibling global types']
                                                })];
                                        });
                                        default: return pl.au($[0]);
                                    }
                                })
                            }];
                    });
                    case 'atom': return pl.ss($, ($) => {
                        return ['atom', {
                                'atom': Atom($.atom, { 'atom types': $p['atom types'] }),
                            }];
                    });
                    default: return pl.au($[0]);
                }
            })
        };
    };
    const Type__Selection = ($, $p) => {
        const v_import = mapOptional($.import, ($) => getAnnotatedEntry($p.imports, $));
        const v_global_type = getAnnotatedEntry(pl.optional(v_import, ($) => $.referent.library.referent['global types'].definitions, () => $p['sibling global types']), $['global type']);
        const v_tail = mapOptional($.tail, ($) => Type__Selection__Tail($, {
            'context': v_global_type.referent.type
        }));
        return {
            'import': v_import,
            'global type': v_global_type,
            'tail': v_tail,
        };
    };
    const Type__Selection__Tail = ($, $p) => {
        const v_step_type = pl.cc($['step type'], ($) => {
            switch ($[0]) {
                case 'array': return pl.ss($, ($) => {
                    const x = $;
                    const v_array = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'array') {
                            // $se.onError({
                            //     'annotation': undefined,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `array`
                            //     }]
                            // })
                            pl.panic(`not an array`);
                        }
                        return $[1];
                    });
                    const v_tail = mapOptional($.tail, ($) => {
                        return Type__Selection__Tail($, {
                            'context': v_array.type
                        });
                    });
                    return ['array', {
                            'array': v_array,
                            'tail': v_tail
                        }];
                });
                case 'dictionary': return pl.ss($, ($) => {
                    const x = $;
                    const v_dictionary = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'dictionary') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `dictionary`
                            //     }]
                            // })
                            pl.panic(`not a dictionary`);
                        }
                        return $[1];
                    });
                    const v_tail = mapOptional($.tail, ($) => {
                        return Type__Selection__Tail($, {
                            'context': v_dictionary.type
                        });
                    });
                    return ['dictionary', {
                            'dictionary': v_dictionary,
                            'tail': v_tail
                        }];
                });
                case 'group': return pl.ss($, ($) => {
                    const x = $;
                    const v_group = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'group') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `group`
                            //     }]
                            // })
                            pl.panic(`not a group`);
                        }
                        return $[1];
                    });
                    const v_property = getAnnotatedEntry(v_group.properties, $.property);
                    const v_tail = mapOptional($.tail, ($) => {
                        return Type__Selection__Tail($, {
                            'context': v_property.referent.type
                        });
                    });
                    return ['group', {
                            'group': v_group,
                            'property': v_property,
                            'tail': v_tail
                        }];
                });
                case 'optional': return pl.ss($, ($) => {
                    const x = $;
                    const v_optional = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'optional') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `optional`
                            //     }]
                            // })
                            pl.panic(`not an optional`);
                        }
                        return $[1];
                    });
                    const v_tail = mapOptional($.tail, ($) => {
                        return Type__Selection__Tail($, {
                            'context': v_optional.type
                        });
                    });
                    return ['optional', {
                            'optional': v_optional,
                            'tail': v_tail
                        }];
                });
                case 'state group': return pl.ss($, ($) => {
                    const x = $;
                    const v_state_group = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'state group') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `state group`
                            //     }]
                            // })
                            pl.panic(`not a state group`);
                        }
                        return $[1];
                    });
                    const v_state = getAnnotatedEntry(v_state_group.states, $.state);
                    const v_tail = mapOptional($.tail, ($) => {
                        return Type__Selection__Tail($, {
                            'context': v_state.referent.type
                        });
                    });
                    return ['state group', {
                            'state group': v_state_group,
                            'state': v_state,
                            'tail': v_tail
                        }];
                });
                default: return pl.au($[0]);
            }
        });
        return {
            'step type': v_step_type,
        };
    };
    const Project = ($, $p) => {
        return {
            'type libraries': $d.resolveDictionary($['type libraries'].dictionary, {
                'map': ($, $l) => Type__Library($.value, {
                    'external type libraries': $l['non circular siblings']
                })
            })
        };
    };
    const Type__Library = ($, $p) => {
        const imports = $.imports.dictionary.__mapWithKey(($, key) => {
            return {
                'library': getAnnotatedEntry($p['external type libraries'], $.library)
            };
        });
        const v_atom__types = $['atom types'].dictionary.map(($) => null);
        const v_decl = $d.resolveDictionary($['global types'].declarations.dictionary, { 'map': (($, $l) => {
                return {
                    'parameters': $d.resolveDictionary($.value.parameters.dictionary, { 'map': (($) => {
                            return {
                                'optional': $.value.optional,
                                'type': pl.cc($.value.type, ($) => {
                                    switch ($[0]) {
                                        case 'resolved value': return pl.ss($, ($) => {
                                            const xxx = getAnnotatedEntry($l['all siblings'], $);
                                            return ['resolved value', xxx];
                                        });
                                        case 'cyclic sibling lookup': return pl.ss($, ($) => {
                                            const xxx = getAnnotatedEntry($l['all siblings'], $);
                                            return ['cyclic sibling lookup', xxx];
                                        });
                                        case 'sibling lookup': return pl.ss($, ($) => {
                                            const xxx = getAnnotatedEntry($l['all siblings'], $);
                                            return ['sibling lookup', xxx];
                                        });
                                        default: return pl.au($[0]);
                                    }
                                })
                            };
                        }) }),
                    'result': mapOptional($.value.result, ($) => getAnnotatedEntry($l['all siblings'], $)),
                };
            }) });
        return {
            'imports': imports,
            'atom types': v_atom__types,
            'global types': {
                'declarations': v_decl,
                'definitions': $d.resolveDictionary($['global types'].definitions.dictionary, {
                    'map': (($, $l) => {
                        return {
                            'declaration': getEntry(v_decl, $.key, $.value.declaration),
                            'type': Type($.value.type, {
                                'atom types': v_atom__types,
                                'imports': imports,
                                'sibling global types': $l['non circular siblings'],
                                'cyclic sibling global types': $l['all siblings'],
                            }),
                        };
                    })
                })
            }
        };
    };
    return {
        'Atom': Atom,
        'Dictionary__Selection': Dictionary__Selection,
        'Global__Type__Selection': Global__Type__Selection,
        'Model': Model,
        'Project': Project,
        'Root': Root,
        'Type': Type,
        'Type__Library': Type__Library,
        'Type__Selection': Type__Selection,
        'Type__Selection__Tail': Type__Selection__Tail
    };
}
exports.resolve = resolve;
