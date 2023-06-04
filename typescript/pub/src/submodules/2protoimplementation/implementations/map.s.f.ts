import * as pl from 'pareto-core-lib'
import * as pv from 'pareto-core-dev'
import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"
import * as g_in from "../../resolved"
import * as g_out from "lib-proto-implementation/dist/submodules/unresolved"

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

import { A } from "../api.generated"

export const $$: A.map = ($d,) => {


    const type2resolveInitializationOrSelection = (
        $: g_in.T.Type,
        $p: {
            'type library name': string,
            'type path': string,
        }
    ): g_out.T.Initialization__Or__Selection<pd.SourceLocation> => {
        return pl.cc($.type, ($) => {
            switch ($[0]) {
                case 'array': return pl.ss($, ($) => ['initialization', ['array map', {
                    'definition': pd.getLocationInfo(0),
                    'source': {
                        'start': ['context', null],
                        'tail': [false]
                    },
                    'initialization': type2resolveInitializationOrSelection(
                        $.type,
                        {
                            'type library name': $p['type library name'],
                            'type path': $p['type path'] + "A$"
                        },
                    )

                }]])
                case 'atom': return pl.ss($, ($): g_out.T.Initialization__Or__Selection<pd.SourceLocation> => ['selection', {
                    'selection': {
                        'start': ['context', null],
                        'tail': [false],
                        // 'source': x,
                        // 'string': pd.getLocationInfo(0),
                    },
                }])
                case 'component': return pl.ss($, ($) => ['selection', {
                    'selection': {
                        'start': ['variable', pl.cc($.type, ($): Reference => {
                            switch ($[0]) {
                                case 'cyclic sibling': return pl.ss($, ($) => ref($.type.key))
                                case 'import': return pl.ss($, ($) => ref("FOOO"))
                                case 'resolved sibling': return pl.ss($, ($) => ref($.type.key))
                                default: return pl.au($[0])
                            }
                        })],
                        'tail': [true, {
                            'step': ['call', {
                                'address function': pd.getLocationInfo(0),
                                'type arguments': rawDict({}),
                                'context': ['selection', {
                                    'selection': {
                                        'start': ['context', null],
                                        'tail': [false]
                                    },
                                }],
                                'arguments': dict($.arguments.map(($) => ({
                                    'annotation': pd.getLocationInfo(0),
                                    'content':  ['initialization', ['implement me', "ARGS"]]
                                }))),
                            }],
                            'tail': [false]
                        }],
                    }
                }])
                case 'constraint': return pl.ss($, ($) => ['initialization', ['implement me', "CONSTRAINT"]])
                case 'cyclic reference': return pl.ss($, ($) => ['initialization', ['implement me', "CyCLIC REFERENCE"]])
                case 'dictionary': return pl.ss($, ($) => ['initialization', ['dictionary map', {
                    'definition': pd.getLocationInfo(0),
                    'source': {
                        'start': ['context', null],
                        'tail': [false]
                    },
                    'initialization': type2resolveInitializationOrSelection(
                        $.type,
                        {
                            'type library name': $p['type library name'],
                            'type path': $p['type path'] + "D$"
                        },
                    )

                }]])
                case 'group': return pl.ss($, ($): g_out.T.Initialization__Or__Selection<pd.SourceLocation> => ['initialization', ['variables', {
                    'variables': {
                        'local': dict($.properties.__mapWithKey(($, key) => {
                            return {
                                'type': ['child namespace', {
                                    'namespacex': ref($p['type library name']),
                                    'selection': ['child namespace', {
                                        'namespacex': ref("Resolved"),
                                        'selection': ['child namespace', {
                                            'namespacex': ref("Flat"),
                                            'selection': ['current namespaceXXXXX', ref($p['type path'] + key + "$")]
                                        }]
                                    }]
                                }],
                                'initialization': ['change context', {
                                    'source': {
                                        'start': ['context', null],
                                        'tail': [true, {
                                            'step': ['property', {
                                                'group': pd.getLocationInfo(0),
                                                'property': ref(key)
                                            }],
                                            'tail': [false]
                                        }]
                                    },
                                    'initialization': type2resolveInitializationOrSelection(
                                        $.type,
                                        {
                                            'type library name': $p['type library name'],
                                            'type path': $p['type path'] + key + "$"
                                        },
                                    )
                                }]
                            }
                        })),
                        'aggregated': rawDict({}),
                    },
                    'initialization': ['initialization', ['group literal', {
                        'definition': pd.getLocationInfo(0),
                        'properties': dict($.properties.__mapWithKey(($, key) => {
                            return {
                                'annotation': pd.getLocationInfo(0),
                                'content': ['selection', {
                                    'selection': {
                                        'start': ['variable', ref(key)],
                                        'tail': [false],
                                    }
                                }]
                            }
                        }))
                    }]]
                }]])
                case 'nothing': return pl.ss($, ($) => ['initialization', ['null', {
                    'definition': pd.getLocationInfo(0),
                }]])
                case 'optional': return pl.ss($, ($) => ['initialization', ['implement me', "OPTIONAL"]])
                case 'resolved reference': return pl.ss($, ($) => ['initialization', ['implement me', "RESOLVED REFERENCE"]])
                case 'state group': return pl.ss($, ($) => ['initialization', ['switch', {
                    'definition': pd.getLocationInfo(0),
                    'temp type': ['child namespace', {
                        'namespacex': ref($p['type library name']),
                        'selection': ['child namespace', {
                            'namespacex': ref("Resolved"),
                            'selection': ['child namespace', {
                                'namespacex': ref("Flat"),
                                'selection': ['current namespaceXXXXX', ref($p['type path'])]
                            }]
                        }]
                    }],
                    'source': {
                        'start': ['context', null],
                        'tail': [false]
                    },
                    'cases': {
                        'annotation': pd.getLocationInfo(0),
                        'dictionary': $.states.__mapWithKey(($, key): g_out.T.Initialization__Or__Selection<pd.SourceLocation> => ['initialization', ['tagged union literal', {
                            'definition': pd.getLocationInfo(0),
                            'state': ref(key),
                            'initialization': type2resolveInitializationOrSelection(
                                $.type,
                                {
                                    'type library name': $p['type library name'],
                                    'type path': $p['type path'] + key + "$"
                                },
                            )
                        }]]),
                    },
                    'default': [false],
                }]])
                default: return pl.au($[0])
            }
        })
    }
    const project2SourceFile = ($: g_in.T.Project): g_out.T.Source__File<pd.SourceLocation> => {
        return {
            'type': ['current namespaceXXXXX', {
                'annotation': pd.getLocationInfo(0),
                'key': "$",
            }],
            'initialization': ['group literal', {
                'definition': pd.getLocationInfo(0),
                'properties': dict($['type libraries'].__mapWithKey(($, key) => {
                    const tlKey = key
                    return {
                        'annotation': pd.getLocationInfo(0),
                        'content': ['initialization', ['group literal', {
                            'definition': pd.getLocationInfo(0),
                            'properties': rawDict({
                                "Resolve": {
                                    'annotation': pd.getLocationInfo(0),
                                    'content': ['initialization', ['value function', {
                                        'definition': pd.getLocationInfo(0),
                                        'temp has parameters': [false],
                                        'variables': rawDict({}),
                                        'initialization': ['initialization', ['variables', {
                                            'variables': {
                                                'local': dict($['global types'].definitions.__mapWithKey(($, key) => {
                                                    return {
                                                        'type': ['child namespace', {
                                                            'namespacex': ref(tlKey),
                                                            'selection': ['child namespace', {
                                                                'namespacex': ref("Resolve"),
                                                                'selection': ['current namespaceXXXXX', ref(key)]
                                                            }]
                                                        }],
                                                        'initialization': ['value function', {
                                                            'definition': pd.getLocationInfo(0),
                                                            'temp has parameters': [false],
                                                            'variables': rawDict({}),
                                                            'initialization': type2resolveInitializationOrSelection(
                                                                $.type,
                                                                {
                                                                    'type library name': tlKey,
                                                                    'type path': key + "$"
                                                                },
                                                            )
                                                        }]
                                                    }
                                                })),
                                                'aggregated': rawDict({}),
                                            },
                                            'initialization': ['initialization', ['group literal', {
                                                'definition': pd.getLocationInfo(0),
                                                'properties': dict($['global types'].definitions.__mapWithKey(($, key) => {
                                                    return {
                                                        'annotation': pd.getLocationInfo(0),
                                                        'content': ['selection', {
                                                            'selection': {
                                                                'start': ['variable', ref(key)],
                                                                'tail': [false],
                                                            }
                                                        }]
                                                    }
                                                }))
                                            }]]
                                        }]]
                                    }]]
                                },
                                "Serialize": {
                                    'annotation': pd.getLocationInfo(0),
                                    'content': ['initialization', ['value function', {
                                        'definition': pd.getLocationInfo(0),
                                        'temp has parameters': [false],
                                        'variables': rawDict({}),
                                        'initialization': ['initialization', ['group literal', {
                                            'definition': pd.getLocationInfo(0),
                                            'properties': dict($['global types'].definitions.map(($) => {
                                                return {
                                                    'annotation': pd.getLocationInfo(0),
                                                    'content': ['initialization', ['procedure', {
                                                        'definition': pd.getLocationInfo(0),
                                                        'temp has parameters': [false],
                                                        'variables': rawDict({}),
                                                        'block': {
                                                            'variables': {
                                                                'local': rawDict({}),
                                                                'aggregated': rawDict({}),
                                                            },
                                                            'statements': pd.a([]),
                                                        }
                                                    }]]
                                                }
                                            }))
                                        }]]
                                    }]]
                                }
                            })
                        }]]
                    }
                }))
            }]
        }
    }
    return ($) => {
        return project2SourceFile($.data)
    }
}