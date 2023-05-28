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
exports.resolved = void 0;
const pl = __importStar(require("pareto-core-lib"));
const pm = __importStar(require("pareto-core-map"));
const select = __importStar(require("./selectImp"));
function mapOptional($, a) {
    return pl.optional($, ($) => {
        return [true, a($)];
    }, () => [false]);
}
function resolved($d, $se) {
    function getEntry($, key, annotation) {
        return $.__getEntry(key, ($) => $, () => {
            // let keys = ""
            // $.__forEach(() => false, ($, key) => {
            //     keys += `${key}, `
            // })
            //pl.panic(`No Such Entry: ${key} (${keys})`)
            $se.onError({
                //'annotation': annotation,
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
            'referent': getEntry($, key.key, key.referent)
        };
    }
    ///////////////////////////////////////////////////////////////
    const Function__Declaration = ($, $p) => {
        const $tp = Type__Parameters($['type parameters'], {
            'parent type parameters': [true, $p['type parameters']]
        });
        return {
            'type parameters': $tp,
            'context': Type($.context, {
                'resolved namespaces': $p['resolved namespaces'],
                'cyclic sibling types': $p['cyclic sibling types'],
                'resolved sibling types': $p['resolved sibling types'],
                'type parameters': $tp.aggregated
            }),
            'parameters': $.parameters.map(($) => Type($, {
                'resolved namespaces': $p['resolved namespaces'],
                'cyclic sibling types': $p['cyclic sibling types'],
                'resolved sibling types': $p['resolved sibling types'],
                'type parameters': $tp.aggregated
            }))
        };
    };
    const Local__Namespace = ($, $p) => {
        const $v_parameters = Type__Parameters($.parameters, {
            'parent type parameters': $p['parent type parameters'],
        });
        const v_namespaces = $d.resolveDictionary($.namespaces, {
            'map': ($, $l) => {
                return pl.cc($.value, ($) => {
                    switch ($[0]) {
                        case 'local': return pl.ss($, ($) => ['local', Local__Namespace($, {
                                'resolved sibling namespaces': [true, $l['non circular siblings']],
                                'parent type parameters': [true, $v_parameters.aggregated],
                            })]);
                        case 'parent sibling': return pl.ss($, ($) => ['parent sibling', pl.cc($, ($) => {
                                const x = $.namespace;
                                function mapOptional2NonOptional($, a) {
                                    return pl.optional($, ($) => a($), () => pl.panic("SFSDSFDF"));
                                }
                                return {
                                    'namespace': mapOptional2NonOptional($p['resolved sibling namespaces'], ($) => getAnnotatedEntry($, x))
                                };
                            })]);
                        default: return pl.au($[0]);
                    }
                });
            }
        });
        return {
            'parameters': $v_parameters,
            'namespaces': v_namespaces,
            'types': $d.resolveDictionary($.types, {
                'map': (($, $l) => Type($.value, {
                    'resolved namespaces': v_namespaces,
                    'cyclic sibling types': $l['all siblings'],
                    'resolved sibling types': $l['non circular siblings'],
                    'type parameters': $v_parameters.aggregated,
                }))
            })
        };
    };
    const Type = ($, $p) => {
        switch ($[0]) {
            case 'address function': return pl.ss($, ($) => {
                const $v_fd = Function__Declaration($.declaration, $p);
                return ['address function', {
                        'declaration': $v_fd,
                        'return type': Type($['return type'], {
                            'cyclic sibling types': $p['cyclic sibling types'],
                            'resolved namespaces': $p['resolved namespaces'],
                            'resolved sibling types': $p['resolved sibling types'],
                            'type parameters': $v_fd['type parameters'].aggregated
                        })
                    }];
            });
            case 'array': return pl.ss($, ($) => ['array', Type($, $p)]);
            case 'boolean': return pl.ss($, ($) => ['boolean', null]);
            case 'computed': return pl.ss($, ($) => ['computed', Type($, $p)]);
            case 'dictionary': return pl.ss($, ($) => ['dictionary', Type($, $p)]);
            case 'group': return pl.ss($, ($) => ['group', $.map(($) => ({
                    'type': Type($.type, $p),
                    'mutable': $.mutable,
                }))]);
            //case 'lookup': return pl.ss($, ($) => ['lookup', Type($, $p)])
            case 'null': return pl.ss($, ($) => ['null', null]);
            case 'number': return pl.ss($, ($) => ['number', null]);
            case 'optional': return pl.ss($, ($) => ['optional', Type($, $p)]);
            case 'procedure': return pl.ss($, ($) => ['procedure', {
                    'declaration': Function__Declaration($.declaration, $p)
                }]);
            case 'string': return pl.ss($, ($) => ['string', null]);
            case 'tagged union': return pl.ss($, ($) => ['tagged union', $.map(($) => Type($, $p))]);
            case 'type parameter': return pl.ss($, ($) => ['type parameter', getAnnotatedEntry($p['type parameters'], $)]);
            case 'type reference': return pl.ss($, ($) => ['type reference', pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'cyclic sibling': return pl.ss($, ($) => ['cyclic sibling', getAnnotatedEntry($p['cyclic sibling types'], $)]);
                        case 'external': return pl.ss($, ($) => {
                            const v_namespaces = Namespace__Selection($.namespaces, {
                                'resolved namespaces': $p['resolved namespaces'],
                                'cyclic sibling types': $p['cyclic sibling types'],
                                'resolved sibling types': $p['resolved sibling types'],
                                'type parameters': $p['type parameters'],
                            });
                            return ['external', {
                                    'namespaces': v_namespaces,
                                    'type': getAnnotatedEntry(select.selectLocalNSFromNS2(select.Namespace__Selection(v_namespaces)).types, $.type),
                                }];
                        });
                        case 'sibling': return pl.ss($, ($) => ['sibling', getAnnotatedEntry($p['resolved sibling types'], $)]);
                        default: return pl.au($[0]);
                    }
                })
            ]);
            case 'value function': return pl.ss($, ($) => {
                const $v_fd = Function__Declaration($.declaration, $p);
                return ['value function', {
                        'declaration': $v_fd,
                        'return type': Type($['return type'], {
                            'cyclic sibling types': $p['cyclic sibling types'],
                            'resolved namespaces': $p['resolved namespaces'],
                            'resolved sibling types': $p['resolved sibling types'],
                            'type parameters': $v_fd['type parameters'].aggregated
                        })
                    }];
            });
            default: return pl.au($[0]);
        }
    };
    const Type__Parameters = ($, $p) => {
        return {
            'local': $.local.map(($) => null),
            'aggregated': $d.mergeAndIgnore({
                'primary': $.local,
                'secondary': pl.optional($p['parent type parameters'], ($) => $, () => pm.wrapRawDictionary({}))
            }).map(($) => null)
        };
    };
    const Namespace__Selection = ($, $p) => {
        const v_namespace = getAnnotatedEntry($p['resolved namespaces'], $.namespace);
        const v_tail = mapOptional($.tail, 
        //getLocalNamespace(v_namespace.referent),
        ($) => Namespace__Selection($, {
            'resolved namespaces': select.selectLocalNSFromNS2(v_namespace.referent).namespaces,
            'cyclic sibling types': $p['cyclic sibling types'],
            'resolved sibling types': $p['resolved sibling types'],
            'type parameters': $p['type parameters'],
        }));
        return {
            'namespace': v_namespace,
            'arguments': $.arguments.__mapWithKey(($, key) => {
                return {
                    'type': Type($.type, {
                        'resolved namespaces': $p['resolved namespaces'],
                        'cyclic sibling types': $p['cyclic sibling types'],
                        'resolved sibling types': $p['resolved sibling types'],
                        'type parameters': $p['type parameters'],
                    }),
                    // 'constraints': {
                    //     'parameter': getEntry(
                    //         select.selectLocalNSFromNS2(v_namespace.referent).parameters.local,
                    //         key,
                    //         $.annotation,
                    //     )
                    // },
                    // 'content': {
                    // }
                };
            }),
            'tail': v_tail
        };
    };
    return {
        Function__Declaration: Function__Declaration,
        Local__Namespace: Local__Namespace,
    };
}
exports.resolved = resolved;
