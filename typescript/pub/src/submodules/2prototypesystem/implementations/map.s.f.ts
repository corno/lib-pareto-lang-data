import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"
import * as g_in from "../../resolved"
import * as g_out from "lib-proto-typesystem/dist/submodules/unresolved"

import { A } from "../api.generated"


function mapOptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => RT,
): pt.OptionalValue<RT> {
    return pl.optional(
        $,
        ($): pt.OptionalValue<RT> => {
            return [true, a($)]
        },
        () => [false]
    )
}

export const $$: A.map = ($d,) => {
    return ($) => {
        // return {
        //     'namespaces'
        // }
        type NSType =
            | ['unresolved', null]
            | ['resolved', null]
        function escape($: string) {
            return $d.escape({
                'string': $,
                'escape': "T",
                'patterns to escape': pm.wrapRawArray([]),
            })
        }

        function rekey($: g_out.T.Local__Namespace.namespaces.dictionary<null>) {
            return $d.rekey(
                $,
                {
                    'map': ($) => escape($.key)
                }
            )
        }


        function doTail($: pt.OptionalValue<g_in.T.Type__Selection__Tail>): string {
            return pl.optional(
                $,
                ($) => {
                    const tail = $.tail
                    return pl.cc($['step type'], ($) => {
                        switch ($[0]) {
                            case 'array': return pl.ss($, ($) => "A$" + doTail(tail))
                            case 'dictionary': return pl.ss($, ($) => "D$" + doTail(tail))
                            case 'group': return pl.ss($, ($) => $.property.key + "$" + doTail(tail))
                            case 'optional': return pl.ss($, ($) => "O$" + doTail(tail))
                            case 'state group': return pl.ss($, ($) => $.state.key + "$" + doTail(tail))
                            default: return pl.au($[0])
                        }
                    })
                },
                () => ""
            )
        }
        const Type__Selection2Path = ($: g_in.T.Type__Selection): string => {
            return $['global type'].key + "$" + doTail($.tail)
        }


        const Dictionary__Selection2Type = ($: g_in.T.Dictionary__Selection): g_out.T.Type<null> => {

            const tail = $.type.tail
            return pl.optional(
                $.type.import,
                ($) => {
                    return pd.implementMe(`XXXXX`)
                },
                () => {

                    return ['type reference', ['sibling', {
                        'annotation': null,
                        'key': Type__Selection2Path($.type) + "D$"
                    }]]
                }
            )
        }
        const Type__Selection2Type = ($: g_in.T.Type__Selection): g_out.T.Type<null> => {


            const tail = $.tail
            return pl.optional(
                $.import,
                ($) => {
                    return pd.implementMe(`XXXXX`)
                },
                () => {

                    return ['type reference', ['sibling', {
                        'annotation': null,
                        'key': Type__Selection2Path($)
                    }]]
                }
            )
        }

        const Global__Type__Selection2Type = ($: g_in.T.Global__Type__Selection): g_out.T.Type<null> => {
            switch ($[0]) {
                case 'cyclic sibling': return pl.ss($, ($) => ['type reference', ['cyclic sibling', {
                    'annotation': null,
                    'key': $.type.key + "$"
                }]])
                case 'import': return pl.ss($, ($) => pd.implementMe("IMPORT"))
                case 'resolved sibling': return pl.ss($, ($): g_out.T.Type<null> => ['type reference', ['sibling', {
                    'annotation': null,
                    'key': $.type.key + "$"
                }]])
                default: return pl.au($[0])
            }
        }

        function flatten($: g_in.T.Type): pt.Dictionary<g_in.T.Type> {
            return $d.addEntry({
                'dictionary': $d.mergeDictionaries({
                    'dictionaries': pl.cc($.type, ($): pt.Dictionary<pt.Dictionary<g_in.T.Type>> => {
                        switch ($[0]) {
                            case 'array': return pl.ss($, ($) => pm.wrapRawDictionary({
                                "A": flatten($.type)
                            }))
                            case 'atom': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'component': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'constraint': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'cyclic reference': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'dictionary': return pl.ss($, ($) => pm.wrapRawDictionary({
                                "D": flatten($.type)
                            }))
                            case 'group': return pl.ss($, ($) => $.properties.map(($) => {
                                return flatten($.type)
                            }))
                            case 'nothing': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'optional': return pl.ss($, ($) => pm.wrapRawDictionary({
                                "O": flatten($.type)
                            }))
                            case 'resolved reference': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'state group': return pl.ss($, ($) =>
                                $.states.map(($) => {
                                    return flatten($.type)
                                })
                            )
                            default: return pl.au($[0])
                        }
                    }),
                    'escape': "_",
                    'separator': "$",
                }),
                'keyValuePair': {
                    'key': "",
                    'value': $
                }
            })
        }

        const Type2Namespace = (
            $: g_in.T.Type,
            $p: {
                'path': string,
                'type': NSType
            }
        ): g_out.T.Local__Namespace<null> => {
            return {
                'namespaces': {
                    'annotation': null,
                    'dictionary': $d.addEntry({
                        'dictionary': pl.cc($.type, ($) => {
                            switch ($[0]) {
                                case 'array': return pl.ss($, ($) => pm.wrapRawDictionary({
                                    "A": ['local', Type2Namespace(
                                        $.type,
                                        {
                                            'path': $p.path + "A$",
                                            'type': $p.type,
                                        }
                                    )]
                                }))
                                case 'atom': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                                case 'component': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                                case 'constraint': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                                case 'cyclic reference': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                                case 'dictionary': return pl.ss($, ($) => pm.wrapRawDictionary({
                                    "D": ['local', Type2Namespace(
                                        $.type,
                                        {
                                            'path': $p.path + "D$",
                                            'type': $p.type,
                                        }
                                    )]
                                }))
                                case 'group': return pl.ss($, ($) => rekey($.properties.__mapWithKey(($, key) => {
                                    return ['local', Type2Namespace(
                                        $.type,
                                        {
                                            'path': $p.path + key + "$",
                                            'type': $p.type,
                                        }
                                    )]
                                })))
                                case 'nothing': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                                case 'optional': return pl.ss($, ($) => pm.wrapRawDictionary({
                                    "O": ['local', Type2Namespace(
                                        $.type,
                                        {
                                            'path': $p.path + "O$",
                                            'type': $p.type,
                                        }
                                    )]
                                }))
                                case 'resolved reference': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                                case 'state group': return pl.ss($, ($) => rekey(
                                    $.states.__mapWithKey(($, key) => {
                                        return ['local', Type2Namespace(
                                            $.type,
                                            {
                                                'path': $p.path + key + "$",
                                                'type': $p.type,
                                            }
                                        )]
                                    })
                                ))
                                default: return pl.au($[0])
                            }
                        }),
                        'keyValuePair': {
                            'key': "Flat",
                            'value': ['parent sibling', {
                                'namespace': {
                                    'annotation': null,
                                    'key': "Flat",
                                }
                            }]
                        }
                    }),
                },
                'parameters': {
                    'local': {
                        'annotation': null,
                        'dictionary': pm.wrapRawDictionary({}),
                    },
                    'aggregated': {
                        'annotation': null,
                        'dictionary': pm.wrapRawDictionary({}),
                    }
                },
                'types': {
                    'annotation': null,
                    'dictionary': pm.wrapRawDictionary({
                        "$": ['type reference', ['external', {
                            'namespaces': {
                                'namespace': {
                                    'annotation': null,
                                    'key': "Flat",
                                },
                                'arguments': {
                                    'annotation': null,
                                    'dictionary': pm.wrapRawDictionary({})
                                },
                                'tail': [false]
                            },
                            'type': {
                                'annotation': null,
                                'key': $p.path
                            }
                        }]]
                    })
                },
            }
        }

        const Atom2Type = (
            $: g_in.T.Atom,
            $p: {
                'atom mappings': g_this.T.MapParameters.atom__mappings
            },
        ): g_out.T.Type<null> => {
            return pl.cc($p['atom mappings'].__unsafeGetEntry($.type.key), ($) => {
                switch ($[0]) {
                    case 'boolean': return pl.ss($, ($) => ['boolean', null])
                    case 'number': return pl.ss($, ($) => ['number', null])
                    case 'string': return pl.ss($, ($) => ['string', null])
                    default: return pl.au($[0])
                }
            })
        }

        const TypeLibrary2MainNamespace = (
            $: g_in.T.Type__Library,
            $p: {
                'atom mappings': g_this.T.MapParameters.atom__mappings,
            }
        ): g_out.T.Local__Namespace<null> => {
            return {
                'parameters': {
                    'local': {
                        'annotation': null,
                        'dictionary': pm.wrapRawDictionary({
                        }),
                    },
                    'aggregated': {
                        'annotation': null,
                        'dictionary': pm.wrapRawDictionary({}),
                    }
                },
                'namespaces': {
                    'annotation': null,
                    'dictionary': pm.wrapRawDictionary({
                        "Unresolved": ['local', TypeLibrary2Namespace($, {
                            'atom mappings': $p['atom mappings'],
                            'type': ['unresolved', null],
                        })],
                        "Resolved": ['local', TypeLibrary2Namespace($, {
                            'atom mappings': $p['atom mappings'],
                            'type': ['resolved', null],
                        })],
                        "Resolve": ['local', {
                            'parameters': {
                                'local': {
                                    'annotation': null,
                                    'dictionary': pm.wrapRawDictionary({
                                        "Annotation": null
                                    }),
                                },
                                'aggregated': {
                                    'annotation': null,
                                    'dictionary': pm.wrapRawDictionary({}),
                                }
                            },
                            'namespaces': {
                                'annotation': null,
                                'dictionary': pm.wrapRawDictionary({
                                    "Resolved": ['parent sibling', {
                                        'namespace': {
                                            'annotation': null,
                                            'key': "Resolved",
                                        }
                                    }],
                                    "Unresolved": ['parent sibling', {
                                        'namespace': {
                                            'annotation': null,
                                            'key': "Unresolved",
                                        }
                                    }]
                                })
                            },
                            'types': {
                                'annotation': null,
                                'dictionary': $['global types'].__mapWithKey(($, key): g_out.T.Type<null> => {
                                    return ['value function', {
                                        'declaration': {

                                            'context': ['type reference', ['external', {
                                                'namespaces': {
                                                    'namespace': {
                                                        'annotation': null,
                                                        'key': "Unresolved",
                                                    },
                                                    'arguments': {
                                                        'annotation': null,
                                                        'dictionary': pm.wrapRawDictionary({
                                                            "Annotation": {
                                                                'annotation': null,
                                                                'content': {
                                                                    'type': ['type parameter', {
                                                                        'annotation': null,
                                                                        'key': "Annotation"
                                                                    }]
                                                                }
                                                            }
                                                        })
                                                    },
                                                    'tail': [true, {
                                                        'namespace': {
                                                            'annotation': null,
                                                            'key': "Flat",
                                                        },
                                                        'arguments': {
                                                            'annotation': null,
                                                            'dictionary': pm.wrapRawDictionary({
                                                            })
                                                        },
                                                        'tail': [false]
                                                    }]
                                                },
                                                'type': {
                                                    'annotation': null,
                                                    'key': key + "$"
                                                }
                                            }]],
                                            'parameters': {
                                                'annotation': null,
                                                'dictionary': pm.wrapRawDictionary({})
                                            },
                                            'type parameters': {
                                                'local': {
                                                    'annotation': null,
                                                    'dictionary': pm.wrapRawDictionary({})
                                                },
                                                'aggregated': {
                                                    'annotation': null,
                                                    'dictionary': pm.wrapRawDictionary({})
                                                },
                                            },
                                        },
                                        //'return type': ['boolean', null],
                                        'return type': ['type reference', ['external', {
                                            'namespaces': {
                                                'namespace': {
                                                    'annotation': null,
                                                    'key': "Resolved",
                                                },
                                                'arguments': {
                                                    'annotation': null,
                                                    'dictionary': pm.wrapRawDictionary({})
                                                },
                                                'tail': [true, {
                                                    'namespace': {
                                                        'annotation': null,
                                                        'key': "Flat",
                                                    },
                                                    'arguments': {
                                                        'annotation': null,
                                                        'dictionary': pm.wrapRawDictionary({
                                                        })
                                                    },
                                                    'tail': [false]
                                                }]
                                            },
                                            'type': {
                                                'annotation': null,
                                                'key': key + "$"
                                            }
                                        }]]
                                    }]
                                }),
                            },

                        }]
                    }),
                },
                'types': {
                    'annotation': null,
                    'dictionary': pm.wrapRawDictionary({
                    })
                },
            }
        }

        const TypeLibrary2Namespace = (
            $: g_in.T.Type__Library,
            $p: {
                'atom mappings': g_this.T.MapParameters.atom__mappings,
                'type': NSType
            }
        ): g_out.T.Local__Namespace<null> => {

            return {
                'parameters': {
                    'local': {
                        'annotation': null,
                        'dictionary': pl.cc($p.type, ($) => {
                            switch ($[0]) {
                                case 'resolved': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                                case 'unresolved': return pl.ss($, ($) => pm.wrapRawDictionary({
                                    "Annotation": null
                                }))
                                default: return pl.au($[0])
                            }
                        }),
                    },
                    'aggregated': {
                        'annotation': null,
                        'dictionary': pm.wrapRawDictionary({}),
                    }
                },
                'namespaces': {
                    'annotation': null,
                    'dictionary': pm.wrapRawDictionary<g_out.T.Local__Namespace.namespaces.dictionary.D<null>>({
                        "Flat": ['local', {
                            'parameters': {
                                'local': {
                                    'annotation': null,
                                    'dictionary': pm.wrapRawDictionary({
                                    })
                                },
                                'aggregated': {
                                    'annotation': null,
                                    'dictionary': pm.wrapRawDictionary({}),
                                }
                            },
                            'namespaces': {
                                'annotation': null,
                                'dictionary': pm.wrapRawDictionary({}),
                            },
                            'types': {
                                'annotation': null,
                                'dictionary': $d.mergeDictionaries({
                                    'dictionaries': $['global types'].map(($) => {
                                        return flatten($.type)
                                    }),
                                    'escape': "_",
                                    'separator': "$",
                                }).__mapWithKey<g_out.T.Type<null>>(($, key) => {
                                    return pl.cc($.type, ($) => {
                                        switch ($[0]) {
                                            case 'array': return pl.ss($, ($): g_out.T.Type<null> => ['array', ['type reference', ['sibling', {
                                                'annotation': null,
                                                'key': key + "A$"
                                            }]]])
                                            case 'atom': return pl.ss($, ($) => Atom2Type($.atom, $p))
                                            case 'component': return pl.ss($, ($) => Global__Type__Selection2Type($.type))
                                            case 'constraint': return pl.ss($, ($) => pl.cc($, ($) => {
                                                const $x = $
                                                return pl.cc($p.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'resolved': return pl.ss($, ($) => Type__Selection2Type($x))
                                                        case 'unresolved': return pl.ss($, ($) => ['type parameter', {
                                                            'annotation': null,
                                                            'key': "Annotation"
                                                        }])
                                                        default: return pl.au($[0])
                                                    }
                                                })
                                            }))
                                            case 'cyclic reference': return pl.ss($, ($): g_out.T.Type<null> => ['group', {
                                                'annotation': null,
                                                'dictionary': pm.wrapRawDictionary({
                                                    "key": Atom2Type($.atom, $p),
                                                    "referent": pl.cc($, ($) => {
                                                        const $x = $
                                                        return pl.cc($p.type, ($) => {
                                                            switch ($[0]) {
                                                                case 'resolved': return pl.ss($, ($) => ['computed', Global__Type__Selection2Type($x.sibling)])
                                                                case 'unresolved': return pl.ss($, ($) => ['type parameter', {
                                                                    'annotation': null,
                                                                    'key': "Annotation"
                                                                }])
                                                                default: return pl.au($[0])
                                                            }
                                                        })
                                                    })
                                                })
                                            }])

                                            case 'dictionary': return pl.ss($, ($): g_out.T.Type<null> => ['dictionary', ['type reference', ['sibling', {
                                                'annotation': null,
                                                'key': key + "D$"
                                            }]]])
                                            case 'group': return pl.ss($, ($): g_out.T.Type<null> => ['group', {
                                                'annotation': null,
                                                'dictionary': $.properties.__mapWithKey(($, propkey) => {
                                                    return ['type reference', ['sibling', {
                                                        'annotation': null,
                                                        'key': key + propkey + "$"
                                                    }]]
                                                })
                                            }])
                                            case 'nothing': return pl.ss($, ($) => ['null', null])
                                            case 'optional': return pl.ss($, ($): g_out.T.Type<null> => ['optional', ['type reference', ['sibling', {
                                                'annotation': null,
                                                'key': key + "O$"
                                            }]]])
                                            case 'resolved reference': return pl.ss($, ($): g_out.T.Type<null> => ['group', {
                                                'annotation': null,
                                                'dictionary': pm.wrapRawDictionary({
                                                    "key": Atom2Type($.atom, $p),
                                                    "referent": pl.cc($, ($) => {
                                                        const $x = $
                                                        return pl.cc($p.type, ($) => {
                                                            switch ($[0]) {
                                                                case 'resolved': return pl.ss($, ($) => pl.cc($x.value, ($) => {
                                                                    switch ($[0]) {
                                                                        case 'dictionary': return pl.ss($, ($) => Dictionary__Selection2Type($))
                                                                        case 'lookup': return pl.ss($, ($) => Global__Type__Selection2Type($))
                                                                        default: return pl.au($[0])
                                                                    }
                                                                }))
                                                                case 'unresolved': return pl.ss($, ($) => ['type parameter', {
                                                                    'annotation': null,
                                                                    'key': "Annotation"
                                                                }])
                                                                default: return pl.au($[0])
                                                            }
                                                        })
                                                    })
                                                })
                                            }])

                                            case 'state group': return pl.ss($, ($): g_out.T.Type<null> => ['tagged union', {
                                                'annotation': null,
                                                'dictionary': $.states.__mapWithKey(($, statekey) => {
                                                    return ['type reference', ['sibling', {
                                                        'annotation': null,
                                                        'key': key + statekey + "$"
                                                    }]]
                                                })
                                            }])
                                            default: return pl.au($[0])
                                        }
                                    })
                                }),
                            },
                        }],
                        "T": ['local', {
                            'parameters': {
                                'local': {
                                    'annotation': null,
                                    'dictionary': pm.wrapRawDictionary({
                                    })
                                },
                                'aggregated': {
                                    'annotation': null,
                                    'dictionary': pm.wrapRawDictionary({}),
                                }
                            },
                            'namespaces': {
                                'annotation': null,
                                'dictionary': $d.addEntry({
                                    'dictionary': rekey($['global types'].__mapWithKey(($, key) => {
                                        return ['local', Type2Namespace(
                                            $.type,
                                            {
                                                'path': key + "$",
                                                'type': $p.type,
                                            }
                                        )]
                                    })),
                                    'keyValuePair': {
                                        'key': "Flat",
                                        'value': ['parent sibling', {
                                            'namespace': {
                                                'annotation': null,
                                                'key': "Flat",
                                            }
                                        }]
                                    }
                                })
                            },
                            'types': {
                                'annotation': null,
                                'dictionary': pm.wrapRawDictionary({}),
                            },
                        }]
                    })
                },
                'types': {
                    'annotation': null,
                    'dictionary': pm.wrapRawDictionary({}),
                }
            }
        }
        return TypeLibrary2MainNamespace(
            $.data,
            {
                'atom mappings': $['atom mappings']
            }
        )
    }
}