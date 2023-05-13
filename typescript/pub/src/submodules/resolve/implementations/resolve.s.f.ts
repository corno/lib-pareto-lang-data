import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"
import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"

import { A, D } from "../api.generated"

// function mapResultOptional<T, RT, Result>(
//     $: pt.OptionalValue<T>,
//     res: Result,
//     a: ($: ReturningType<T, Result>) => ReturningType<RT, Result>,
// ): ReturningType<pt.OptionalValue<RT>, Result> {
//     return pl.optional(
//         $,
//         ($): ReturningType<pt.OptionalValue<RT>, Result> => {
//             const out = a({
//                 'content': $,
//                 'result': res,
//             })
//             return {
//                 'content': [true, out.content],
//                 'result': out.result
//             }
//         },
//         () => ({
//             'result': res,
//             'content': [false]
//         })
//     )
// }

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

type Reference<T> = {
    'referent': T,
    'key': string
}

// type ReturningType<T, RT> = {
//     'content': T,
//     'result': RT,
// }

namespace Resolve {

    export type Atom<Annotation> = (
        $: g_in.T.Atom<Annotation>,
        $p: {
            'atom types': g_out.T.Atom__Types,
        }
    ) => g_out.T.Atom

    export type Dictionary__Selection<Annotation> = (
        $: g_in.T.Dictionary__Selection<Annotation>,
        $p: {
            'annotation': Annotation,
            'imports': g_out.T.Imports,
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
            'cyclic sibling global types': pt.Lookup<() => g_out.T.Global__Types.D>,
        },
    ) => g_out.T.Dictionary__Selection

    export type Global__Type__Selection<Annotation> = (
        $: g_in.T.Global__Type__Selection<Annotation>,
        $p: {
            'imports': g_out.T.Imports,
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
            'cyclic sibling global types': pt.Lookup<() => g_out.T.Global__Types.D>,
        },
    ) => g_out.T.Global__Type__Selection

    export type Model<Annotation> = (
        $: g_in.T.Model<Annotation>,
        $p: {
            'imports': pt.Lookup<g_out.T.Type__Library>,
        }
    ) => g_out.T.Model

    export type Root<Annotation> = (
        $: g_in.T.Root<Annotation>,
        $p: {
            'imports': pt.Lookup<g_out.T.Type__Library>,
        }
    ) => g_out.T.Root

    export type Type<Annotation> = (
        $: g_in.T.Type<Annotation>,
        $p: {
            'atom types': g_out.T.Atom__Types,
            'imports': g_out.T.Imports,
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>,
            'cyclic sibling global types': pt.Lookup<() => g_out.T.Global__Types.D>,
        }
    ) => g_out.T.Type

    export type Type__Selection<Annotation> = (
        $: g_in.T.Type__Selection<Annotation>,
        $p: {
            'imports': g_out.T.Imports,
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
        },
    ) => g_out.T.Type__Selection

    export type Type__Selection__Tail<Annotation> = (
        $: g_in.T.Type__Selection__Tail<Annotation>,
        $p: {
            'context': g_out.T.Type,
            // 'imports': g_out.T.Imports,
            // 'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
        },
    ) => g_out.T.Type__Selection__Tail

    export type Type__Library<Annotation> = (
        $: g_in.T.Type__Library<Annotation>,
        $p: {
            'imports': pt.Lookup<g_out.T.Type__Library>,
        }
    ) => g_out.T.Type__Library
}

namespace Select {
    export type Type__Selection__Tail__Step__Type = ($: g_out.T.Type__Selection__Tail.step__type) => g_out.T.Type
    export type Type__Selection__Tail = ($: g_out.T.Type__Selection__Tail) => g_out.T.Type
    export type Type__Selection = ($: g_out.T.Type__Selection) => g_out.T.Type
}


export const $$: A.resolve = <Annotation>($d: D.resolve<Annotation>, $se: {
    readonly 'onError': g_this.SYNC.I.OnError<Annotation>
}) => {
    function getEntry<T>($: pt.Lookup<T>, key: string, annotation: Annotation): T {
        return $.__getEntry(
            key,
            ($) => $,
            () => {
                // let keys = ""
                // $.__forEach(() => false, ($, key) => {
                //     keys += `${key}, `
                // })
                //pl.panic(`No Such Entry: ${key} (${keys})`)
                $se.onError({
                    'annotation': annotation,
                    'message': ['no such entry', {
                        'key': key
                    }]
                })
                return pl.panic(`No Such Entry: ${key}`)
            }
        )
    }


    function getAnnotatedEntry<T>($: pt.Lookup<T>, key: {
        'annotation': Annotation,
        'key': string
    }): Reference<T> {
        return $.__getEntry(
            key.key,
            ($) => {
                return {
                    'key': key.key,
                    'referent': $
                }
            },
            () => {
                // let keys = ""
                // $.__forEach(() => false, ($, key) => {
                //     keys += `${key}, `
                // })
                //pl.panic(`No Such Entry: ${key} (${keys})`)
                $se.onError({
                    'annotation': key.annotation,
                    'message': ['no such entry', {
                        'key': key.key
                    }]
                })
                return pl.panic(`No Such Entry: ${key.key}`)
            }
        )
    }

    const select_Type__Selection: Select.Type__Selection = ($) => {
        return pl.optional(
            $.tail,
            ($) => select_Type__Selection__Tail($),
            () => $['global type'].referent.type
        )
    }

    const select_Type__Selection__Tail__Step__Type: Select.Type__Selection__Tail__Step__Type = ($) => {
        switch ($[0]) {
            case 'array': return pl.ss($, ($) => $.array.type)
            case 'dictionary': return pl.ss($, ($) => $.dictionary.type)
            case 'group': return pl.ss($, ($) => $.property.referent.type)
            case 'optional': return pl.ss($, ($) => $.optional.type)
            case 'state group': return pl.ss($, ($) => $.state.referent.type)
            default: return pl.au($[0])
        }
    }

    const select_Type__Selection__Tail: Select.Type__Selection__Tail = ($) => {
        return pl.optional(
            $.tail,
            ($) => select_Type__Selection__Tail($),
            () => pl.cc($['step type'], ($) => select_Type__Selection__Tail__Step__Type($))
        )
    }

    const resolve_Atom: Resolve.Atom<Annotation> = ($, $p) => ({
        'type': getAnnotatedEntry($p['atom types'], $.type)
    })

    const resolve_Dictionary__Selection: Resolve.Dictionary__Selection<Annotation> = ($, $p) => {
        const x = $

        const v_type = resolve_Type__Selection($.type, $p)
        return {
            'type': v_type,
            'dictionary': pl.cc(select_Type__Selection(v_type), ($) => {
                if ($.type[0] !== 'dictionary') {

                    $se.onError({
                        'annotation': $p.annotation,
                        'message': ['not the right state', {
                            'found': $.type[0],
                            'expected': `dictionary`
                        }]
                    })
                    pl.panic(`not a dictionary`)
                }
                return $.type[1]
            }),

        }
    }

    const resolve_Global__Type__Selection: Resolve.Global__Type__Selection<Annotation> = ($, $p) => {
        switch ($[0]) {
            case 'cyclic sibling': return pl.ss($, ($) => {
                const v_type = getAnnotatedEntry($p['cyclic sibling global types'], $.type)
                return ['cyclic sibling', {
                    'type': v_type,//FIX ME; don't call
                }]
            })
            case 'import': return pl.ss($, ($) => {
                const v_library = getAnnotatedEntry($p.imports, $.library)
                const v_type = getAnnotatedEntry(v_library.referent.constraints.library['global types'], $.type)
                return ['import', {
                    'library': v_library,
                    'type': v_type,
                }]
            })
            case 'resolved sibling': return pl.ss($, ($) => {
                const v_type = getAnnotatedEntry($p['sibling global types'], $.type)
                return ['resolved sibling', {
                    'type': v_type,
                }]
            })
            default: return pl.au($[0])
        }
    }

    const resolve_Model: Resolve.Model<Annotation> = ($, $p) => {
        const tl = resolve_Type__Library($['type library'], $p)
        return {
            'type library': tl,
            'root': getAnnotatedEntry(tl['global types'], $.root)
        }
    }

    const resolve_Root: Resolve.Root<Annotation> = ($, $p) => {
        return resolve_Model($, $p)
    }
    const resolve_Type: Resolve.Type<Annotation> = ($, $p) => {
        return {
            'type': pl.cc($.type, ($) => {
                switch ($[0]) {
                    case 'array': return pl.ss($, ($) => ['array', {
                        'type': resolve_Type($.type, $p)
                    }])
                    case 'component': return pl.ss($, ($) => {
                        return ['component', {
                            'type': resolve_Global__Type__Selection($.type, $p)
                        }]
                    })
                    case 'constraint': return pl.ss($, ($) => ['constraint', resolve_Type__Selection($, $p)])
                    case 'dictionary': return pl.ss($, ($): g_out.T.Type._ltype => ['dictionary', {
                        'constraints': $.constraints.map<g_out.T.Type._ltype.dictionary.constraints.D>(($) => pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'lookup': return pl.ss($, ($) => {
                                    const v_gts = resolve_Global__Type__Selection($, $p)
                                    return ['lookup', v_gts]
                                })
                                case 'dictionary': return pl.ss($, ($) => {
                                    return ['dictionary', {
                                        'dictionary': resolve_Dictionary__Selection($.dictionary, {
                                            'annotation': $.dictionary.type['global type'].annotation,
                                            'cyclic sibling global types': $p['cyclic sibling global types'],
                                            'imports': $p.imports,
                                            'sibling global types': $p['sibling global types']
                                        }),
                                        'dense': $.dense,
                                    }]
                                })
                                default: return pl.au($[0])
                            }
                        })),
                        'key': resolve_Atom($.key, { 'atom types': $p['atom types'] }),
                        'type': resolve_Type($.type, $p)
                    }])
                    case 'group': return pl.ss($, ($) => {
                        return ['group', {
                            'properties': $.properties.map(($) => {
                                return {
                                    'type': resolve_Type($.type, $p)
                                }
                            })
                        }]
                    })
                    case 'nothing': return pl.ss($, ($) => ['nothing', null])
                    case 'optional': return pl.ss($, ($) => ['optional', {
                        'type': resolve_Type($.type, $p),
                    }])
                    case 'state group': return pl.ss($, ($) => {
                        return ['state group', {
                            'states': $d.resolveDictionary($.states, {
                                'map': ($, $l) => {
                                    return {
                                        'type': resolve_Type($.value.type, $p),
                                    }
                                }
                            }),
                        }]
                    })
                    case 'cyclic reference': return pl.ss($, ($) => {
                        return ['cyclic reference', {
                            'atom': resolve_Atom($.atom, { 'atom types': $p['atom types'] }),
                            'sibling': resolve_Global__Type__Selection($.sibling, $p)
                        }]
                    })
                    case 'resolved reference': return pl.ss($, ($) => {
                        return ['resolved reference', {
                            'atom': resolve_Atom($.atom, { 'atom types': $p['atom types'] }),
                            'value': pl.cc($.value, ($) => {
                                switch ($[0]) {
                                    case 'lookup': return pl.ss($, ($) => {
                                        const v_gts = resolve_Global__Type__Selection($, $p)
                                        return ['lookup', v_gts]
                                    })
                                    case 'dictionary': return pl.ss($, ($) => {
                                        return ['dictionary', resolve_Dictionary__Selection($, {
                                            'annotation': $.type['global type'].annotation,
                                            'cyclic sibling global types': $p['cyclic sibling global types'],
                                            'imports': $p.imports,
                                            'sibling global types': $p['sibling global types']
                                        })]
                                    })
                                    default: return pl.au($[0])
                                }
                            })
                        }]
                    })
                    case 'atom': return pl.ss($, ($) => {
                        return ['atom', {
                            'atom': resolve_Atom($.atom, { 'atom types': $p['atom types'] }),
                        }]
                    })
                    default: return pl.au($[0])
                }
            })
        }
    }
    const resolve_Type__Selection: Resolve.Type__Selection<Annotation> = ($, $p) => {

        const v_import = mapOptional(
            $.import,
            ($) => getAnnotatedEntry($p.imports, $)
        )

        const v_global_type = getAnnotatedEntry(
            pl.optional(
                v_import,
                ($) => $.referent.constraints.library['global types'],
                () => $p['sibling global types']
            ),
            $['global type'],
        )
        const v_tail = mapOptional(
            $.tail,
            ($) => resolve_Type__Selection__Tail($, {
                'context': v_global_type.referent.type,
            }),
        )
        return {
            'import': v_import,
            'global type': v_global_type,
            'tail': v_tail,
        }
    }
    const resolve_Type__Selection__Tail: Resolve.Type__Selection__Tail<Annotation> = ($, $p) => {
        const v_step_type = pl.cc($['step type'], ($): g_out.T.Type__Selection__Tail.step__type => {
            switch ($[0]) {
                case 'array': return pl.ss($, ($):g_out.T.Type__Selection__Tail.step__type => {
                    const x = $
                    const v_array = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'array') {
                            // $se.onError({
                            //     'annotation': undefined,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `array`
                            //     }]
                            // })
                            pl.panic(`not an array`)
                        }
                        return $[1]
                    })
                    return ['array', {
                        'array': v_array,
                    }]
                })
                case 'dictionary': return pl.ss($, ($) => {
                    const x = $

                    const v_dictionary = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'dictionary') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `dictionary`
                            //     }]
                            // })
                            pl.panic(`not a dictionary`)
                        }
                        return $[1]
                    })
                    return ['dictionary', {
                        'dictionary': v_dictionary,
                    }]
                })
                case 'group': return pl.ss($, ($) => {
                    const x = $

                    const v_group = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'group') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `group`
                            //     }]
                            // })
                            pl.panic(`not a group`)
                        }
                        return $[1]
                    })
                    const v_property = getAnnotatedEntry(v_group.properties, $.property)
                    return ['group', {
                        'group': v_group,
                        'property': v_property
                    }]
                })
                case 'optional': return pl.ss($, ($) => {
                    const x = $

                    const v_optional = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'optional') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `optional`
                            //     }]
                            // })
                            pl.panic(`not an optional`)
                        }
                        return $[1]
                    })
                    return ['optional', {
                        'optional': v_optional,
                    }]
                })
                case 'state group': return pl.ss($, ($) => {
                    const x = $

                    const v_state_group = pl.cc($p.context.type, ($) => {
                        if ($[0] !== 'state group') {
                            // $se.onError({
                            //     'annotation': x.annotation,
                            //     'message': ['not the right state', {
                            //         'found': $[0],
                            //         'expected': `state group`
                            //     }]
                            // })
                            pl.panic(`not a state group`)
                        }
                        return $[1]
                    })
                    const v_state = getAnnotatedEntry(v_state_group.states, $.state)

                    return ['state group', {
                        'state group': v_state_group,
                        'state': v_state
                    }]
                })
                default: return pl.au($[0])
            }
        })
        const v_tail = mapOptional(
            $.tail,
            ($) => {
                return resolve_Type__Selection__Tail($, {
                    'context': select_Type__Selection__Tail__Step__Type(v_step_type)
                })
            },
        )
        return {
            'step type': v_step_type,
            'tail': v_tail
        }
    }

    const resolve_Type__Library: Resolve.Type__Library<Annotation> = ($, $p) => {
        const imports = $.imports.__mapWithKey(($, key) => {
            return {
                'constraints': {
                    'library': getEntry($p.imports, key, $.annotation)
                },
                'content': null
            }
        })
        const v_atom__types = $['atom types'].map(($) => null)
        return {
            'imports': imports,
            'atom types': v_atom__types,
            'global types': $d.resolveDictionary($['global types'], {
                'map': (($, $l) => {
                    return {
                        'type': resolve_Type($.value.type, {
                            'atom types': v_atom__types,
                            'imports': imports,
                            'sibling global types': $l['non circular siblings'],
                            'cyclic sibling global types': $l['all siblings'],
                        }),
                    }
                })
            })
        }
    }
    return ($: g_this.T.Resolve__Parameters<Annotation>) => {
        return resolve_Root($.root, {
            'imports': $.imports,
        })
    }
}