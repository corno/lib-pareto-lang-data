import * as pl from 'pareto-core-lib'
import * as pv from 'pareto-core-dev'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'
import * as pd from 'pareto-core-data'

import * as g_this from "../glossary"
import * as g_in from "../../resolved"
import * as g_out from "lib-proto-typesystem/dist/submodules/unresolved"

import { A } from "../api.generated"

type Reference = {
    'annotation': pd.SourceLocation,
    'key': string
}

type Dictionary<T> = {
    'annotation': pd.SourceLocation,
    'dictionary': pt.Dictionary<T>
}

type ConstrainedDictionaryEntry<T> = {
    'annotation': pd.SourceLocation,
    'content': T
}

function ref($: string): Reference {
    return {
        'annotation': pd.getLocationInfo(1),
        'key': $
    }
}

function dict<T>($: pt.Dictionary<T>): Dictionary<T> {
    return {
        'annotation': pd.getLocationInfo(1),
        'dictionary': $
    }
}

function constrainedDictionaryEntry<T>($: T): ConstrainedDictionaryEntry<T> {

    return {
        'annotation': pd.getLocationInfo(1),
        'content': $
    }
}


function emptyDict<T>(): Dictionary<T> {
    return {
        'annotation': pd.getLocationInfo(1),
        'dictionary': pd.d({})
    }
}

function rawDict<T>($: { [key: string]: T }): Dictionary<T> {
    return {
        'annotation': pd.getLocationInfo(1),
        'dictionary': pd.d($)
    }
}


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

        function rekey($: g_out.T.Local__Namespace.namespaces.dictionary<pd.SourceLocation>) {
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


        const Dictionary__Selection2Type = ($: g_in.T.Dictionary__Selection): g_out.T.Type<pd.SourceLocation> => {

            const tail = $.type.tail
            return pl.optional(
                $.type.import,
                ($) => {
                    return pv.implementMe(`XXXXX`)
                },
                () => {

                    return ['type reference', ['sibling', ref(Type__Selection2Path($.type) + "D$")]]
                }
            )
        }
        const Type__Selection2Type = ($: g_in.T.Type__Selection): g_out.T.Type<pd.SourceLocation> => {


            const tail = $.tail
            return pl.optional(
                $.import,
                ($) => {
                    return pv.implementMe(`XXXXX`)
                },
                () => {

                    return ['type reference', ['sibling', ref(Type__Selection2Path($))]]
                }
            )
        }

        const Global__Type__Selection2Type = ($: g_in.T.Global__Type__Selection): g_out.T.Type<pd.SourceLocation> => {
            switch ($[0]) {
                case 'cyclic sibling': return pl.ss($, ($) => ['type reference', ['cyclic sibling', ref($.type.key + "$")]])
                case 'import': return pl.ss($, ($) => pv.implementMe("IMPORT"))
                case 'resolved sibling': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['type reference', ['sibling', ref($.type.key + "$")]])
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
        ): g_out.T.Local__Namespace<pd.SourceLocation> => {
            return {
                'namespaces': dict($d.addEntry({
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
                            'namespace': ref("Flat",)
                        }]
                    }
                })),
                'parameters': {
                    'local': rawDict({}),
                    'aggregated': rawDict({})
                },
                'types': rawDict({
                    "$": ['type reference', ['external', {
                        'namespaces': {
                            'namespace': ref("Flat",),
                            'arguments': rawDict({}),
                            'tail': [false]
                        },
                        'type': ref($p.path)
                    }]]
                }),
            }
        }

        const Atom2Type = (
            $: g_in.T.Atom,
            $p: {
                'atom mappings': g_this.T.MapParameters.atom__mappings
            },
        ): g_out.T.Type<pd.SourceLocation> => {
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
        ): g_out.T.Local__Namespace<pd.SourceLocation> => {
            return {
                'parameters': {
                    'local': rawDict({}),
                    'aggregated': rawDict({})
                },
                'namespaces': rawDict({
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
                            'local': rawDict({
                            }),
                            'aggregated': rawDict({})
                        },
                        'namespaces': rawDict({
                            "Resolved": ['parent sibling', {
                                'namespace': ref("Resolved",)
                            }],
                            "Unresolved": ['parent sibling', {
                                'namespace': ref("Unresolved",)
                            }]
                        }),
                        'types': dict($['global types'].__mapWithKey(($, key): g_out.T.Type<pd.SourceLocation> => {
                            return ['value function', {
                                'declaration': {

                                    'context': ['type reference', ['external', {
                                        'namespaces': {
                                            'namespace': ref("Unresolved",),
                                            'arguments': rawDict({
                                                "Annotation": constrainedDictionaryEntry({
                                                    'type': ['type parameter', ref("Annotation")]
                                                })
                                            }),
                                            'tail': [true, {
                                                'namespace': ref("Flat",),
                                                'arguments': rawDict({}),
                                                'tail': [false]
                                            }]
                                        },
                                        'type': ref(key + "$")
                                    }]],
                                    'parameters': rawDict({}),
                                    'type parameters': {
                                        'local': rawDict({
                                            "Annotation": null
                                        }),
                                        'aggregated': rawDict({}),
                                    },
                                },
                                //'return type': ['boolean', null],
                                'return type': ['type reference', ['external', {
                                    'namespaces': {
                                        'namespace': ref("Resolved",),
                                        'arguments': rawDict({}),
                                        'tail': [true, {
                                            'namespace': ref("Flat",),
                                            'arguments': rawDict({}),
                                            'tail': [false]
                                        }]
                                    },
                                    'type': ref(key + "$")
                                }]]
                            }]
                        })),

                    }],

                    "Serialize": ['local', {
                        'parameters': {
                            'local': rawDict({
                            }),
                            'aggregated': rawDict({})
                        },
                        'namespaces': rawDict({
                            "Resolved": ['parent sibling', {
                                'namespace': ref("Resolved",)
                            }],
                        }),
                        'types': dict($['global types'].__mapWithKey(($, key): g_out.T.Type<pd.SourceLocation> => {
                            return ['procedure', {
                                'declaration': {

                                    'context': ['type reference', ['external', {
                                        'namespaces': {
                                            'namespace': ref("Resolved",),
                                            'arguments': rawDict({
                                            }),
                                            'tail': [true, {
                                                'namespace': ref("Flat",),
                                                'arguments': rawDict({}),
                                                'tail': [false]
                                            }]
                                        },
                                        'type': ref(key + "$")
                                    }]],
                                    'parameters': rawDict({
                                        "out": ['boolean', null]
                                    }),
                                    'type parameters': {
                                        'local': rawDict({}),
                                        'aggregated': rawDict({}),
                                    },
                                },
                            }]
                        })),

                    }],

                }),
                'types': rawDict({
                    "_": ['value function', {
                        'declaration': {

                            'context': ['null', null],
                            'parameters': rawDict({}),
                            'type parameters': {
                                'local': rawDict({}),
                                'aggregated': rawDict({}),
                            },
                        },
                        'return type': ['group', dict($['global types'].__mapWithKey(($, key) => {
                            return {
                                'mutable': [false],
                                'type': ['group', rawDict({
                                    "Serialize": {
                                        'mutable': [false],
                                        'type': ['type reference', ['external', {
                                            'namespaces': {
                                                'namespace': ref("Serialize",),
                                                'arguments': rawDict({
                                                }),
                                                'tail': [false],

                                            },
                                            'type': ref(key)
                                        }]]
                                    },
                                    "Resolve": {
                                        'mutable': [false],
                                        'type': ['type reference', ['external', {
                                            'namespaces': {
                                                'namespace': ref("Resolve",),
                                                'arguments': rawDict({
                                                }),
                                                'tail': [false],

                                            },
                                            'type': ref(key)
                                        }]]
                                    }
                                })]
                            }
                        }))]
                    }]
                }),
            }
        }

        const TypeLibrary2Namespace = (
            $: g_in.T.Type__Library,
            $p: {
                'atom mappings': g_this.T.MapParameters.atom__mappings,
                'type': NSType
            }
        ): g_out.T.Local__Namespace<pd.SourceLocation> => {

            return {
                'parameters': {
                    'local': dict(pl.cc($p.type, ($) => {
                        switch ($[0]) {
                            case 'resolved': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                            case 'unresolved': return pl.ss($, ($) => pm.wrapRawDictionary({
                                "Annotation": null
                            }))
                            default: return pl.au($[0])
                        }
                    })),
                    'aggregated': rawDict({})
                },
                'namespaces': rawDict({
                    "Flat": ['local', {
                        'parameters': {
                            'local': rawDict({}),
                            'aggregated': rawDict({})
                        },
                        'namespaces': rawDict({}),
                        'types': dict($d.mergeDictionaries({
                            'dictionaries': $['global types'].map(($) => {
                                return flatten($.type)
                            }),
                            'escape': "_",
                            'separator': "$",
                        }).__mapWithKey<g_out.T.Type<pd.SourceLocation>>(($, key) => {
                            return pl.cc($.type, ($) => {
                                switch ($[0]) {
                                    case 'array': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['array', ['type reference', ['sibling', ref(key + "A$")]]])
                                    case 'atom': return pl.ss($, ($) => Atom2Type($.atom, $p))
                                    case 'component': return pl.ss($, ($) => Global__Type__Selection2Type($.type))
                                    case 'constraint': return pl.ss($, ($) => pl.cc($, ($) => {
                                        const $x = $
                                        return pl.cc($p.type, ($) => {
                                            switch ($[0]) {
                                                case 'resolved': return pl.ss($, ($) => Type__Selection2Type($x))
                                                case 'unresolved': return pl.ss($, ($) => ['type parameter', ref("Annotation")])
                                                default: return pl.au($[0])
                                            }
                                        })
                                    }))
                                    case 'cyclic reference': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['group', rawDict({
                                        "key": {
                                            'mutable': [false],
                                            'type': Atom2Type($.atom, $p)
                                        },
                                        "referent": {
                                            'mutable': [false],
                                            'type': pl.cc($, ($) => {
                                                const $x = $
                                                return pl.cc($p.type, ($) => {
                                                    switch ($[0]) {
                                                        case 'resolved': return pl.ss($, ($) => ['computed', Global__Type__Selection2Type($x.sibling)])
                                                        case 'unresolved': return pl.ss($, ($) => ['type parameter', ref("Annotation")])
                                                        default: return pl.au($[0])
                                                    }
                                                })
                                            })
                                        }
                                    })])

                                    case 'dictionary': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['dictionary', ['type reference', ['sibling', ref(key + "D$")]]])
                                    case 'group': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['group', dict($.properties.__mapWithKey(($, propkey) => {
                                        return {
                                            'mutable': [false],
                                            'type': ['type reference', ['sibling', ref(key + propkey + "$")]]
                                        }
                                    }))])
                                    case 'nothing': return pl.ss($, ($) => ['null', null])
                                    case 'optional': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['optional', ['type reference', ['sibling', ref(key + "O$")]]])
                                    case 'resolved reference': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['group', rawDict({
                                        "key": {
                                            'mutable': [false],
                                            'type': Atom2Type($.atom, $p),
                                        },
                                        "referent": {
                                            'mutable': [false],
                                            'type': pl.cc($, ($) => {
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
                                                        case 'unresolved': return pl.ss($, ($) => ['type parameter', ref("Annotation")])
                                                        default: return pl.au($[0])
                                                    }
                                                })
                                            })
                                        },
                                    })])

                                    case 'state group': return pl.ss($, ($): g_out.T.Type<pd.SourceLocation> => ['tagged union', dict($.states.__mapWithKey(($, statekey): g_out.T.Type<pd.SourceLocation> => {
                                        return ['type reference', ['sibling', ref(key + statekey + "$")]]
                                    }))])
                                    default: return pl.au($[0])
                                }
                            })
                        })),
                    }],
                    "T": ['local', {
                        'parameters': {
                            'local': rawDict({}),
                            'aggregated': rawDict({})
                        },
                        'namespaces': dict($d.addEntry({
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
                                    'namespace': ref("Flat",)
                                }]
                            }
                        })),
                        'types': rawDict({}),
                    }]
                }),
                'types': rawDict({})
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