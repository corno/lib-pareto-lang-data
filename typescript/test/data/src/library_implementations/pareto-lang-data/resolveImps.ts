import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'

import * as select from "./selectImp"

import * as g_resolve from "res-pareto-resolve"

import * as xx from "./Resolve"


import * as g_this from "../../ts"

import In = g_this.pareto__lang__data.Unresolved.T
import Out = g_this.pareto__lang__data.Resolved.T
import Resolve = g_this.pareto__lang__data.Resolve

type Reference<T> = {
    'referent': T,
    'key': string
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


export type Error = {
    //readonly 'annotation': GAnnotation
    readonly 'message': 
        | ['no such entry', {
            readonly 'key': string
        }]
        | ['not the right state', {
            readonly 'expected': string
            readonly 'found': string
        }]
}

export function resolved(
    $d: {
        readonly resolveDictionary: g_resolve.SYNC.A.F.SafeResolveDictionary;
    },
    $se: {
        readonly 'onError': ($: Error) => void
    }
): xx.Resolve {

    function getEntry<T, Annotation>($: pt.Lookup<T>, key: string, annotation: Annotation): T {
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
                    //'annotation': annotation,
                    'message': ['no such entry', {
                        'key': key
                    }]
                })
                return pl.panic(`No Such EntryXX: ${key}`)
            }
        )
    }

    function getAnnotatedEntry<T, Annotation>($: pt.Lookup<T>, key: {
        'referent': Annotation,
        'key': string
    }): Reference<T> {
        return {
            'key': key.key,
            'referent': getEntry($, key.key, key.referent)
        }
    }

    ///////////////////////////////////////////////////////////////


    const Atom: Resolve.Atom = ($, $p) => ({
        'type': getAnnotatedEntry($p['atom types'], $.type)
    })

    const Dictionary__Selection: Resolve.Dictionary__Selection= ($, $p) => {
        const x = $

        const v_type = Type__Selection($.type, $p)
        return {
            'type': v_type,
            'dictionary': pl.cc(select.Type__Selection(v_type), ($) => {
                if ($.type[0] !== 'dictionary') {

                    $se.onError({
                        //'annotation': x.dictionary,
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

    const Global__Type__Selection: Resolve.Global__Type__Selection = ($, $p) => {
        switch ($[0]) {
            case 'cyclic sibling': return pl.ss($, ($) => {
                const v_type = getAnnotatedEntry($p['cyclic sibling global types'], $.type)
                return ['cyclic sibling', {
                    'type': v_type,
                }]
            })
            case 'import': return pl.ss($, ($) => {
                const v_library = getAnnotatedEntry($p.imports, $.library)
                const v_type = getAnnotatedEntry(v_library.referent.library.referent['global types'], $.type)
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

    const Model: Resolve.Model = ($, $p) => {
        const tl = Type__Library($['type library'], $p)
        return {
            'type library': tl,
            'root': getAnnotatedEntry(tl['global types'], $.root)
        }
    }

    const Root: Resolve.Root = ($) => {
        return Project($)
    }
    const Type: Resolve.Type = ($, $p) => {
        return {
            'type': pl.cc($.type, ($) => {
                switch ($[0]) {
                    case 'array': return pl.ss($, ($) => ['array', {
                        'type': Type($.type, $p)
                    }])
                    case 'component': return pl.ss($, ($) => {
                        return ['component', {
                            'type': Global__Type__Selection($.type, $p)
                        }]
                    })
                    case 'constraint': return pl.ss($, ($) => ['constraint', Type__Selection($, $p)])
                    case 'dictionary': return pl.ss($, ($): Out.TType._ltype.$ => ['dictionary', {
                        'constraints': $.constraints.map<Out.TType._ltype.dictionary.constraints.D.$>(($) => pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'lookup': return pl.ss($, ($): Out.TType._ltype.dictionary.constraints.D.$ => {
                                    const v_gts = Global__Type__Selection($, $p)
                                    return ['lookup', v_gts]
                                })
                                case 'dictionary': return pl.ss($, ($): Out.TType._ltype.dictionary.constraints.D.$ => {
                                    return ['dictionary', {
                                        'dictionary': Dictionary__Selection($.dictionary, {
                                            'cyclic sibling global types': $p['cyclic sibling global types'],
                                            'imports': $p.imports,
                                            'sibling global types': $p['sibling global types']
                                        }),
                                        'dense': pl.cc($.dense, ($) => {
                                            switch ($[0]) {
                                                case 'no': return pl.ss($, ($) => ['no', null])
                                                case 'yes': return pl.ss($, ($) => ['yes', null])
                                                default: return pl.au($[0])
                                            }
                                        }),
                                    }]
                                })
                                default: return pl.au($[0])
                            }
                        })),
                        'key': Atom($.key, { 'atom types': $p['atom types'] }),
                        'type': Type($.type, $p)
                    }])
                    case 'group': return pl.ss($, ($) => {
                        return ['group', {
                            'properties': $.properties.map(($) => {
                                return {
                                    'type': Type($.type, $p)
                                }
                            })
                        }]
                    })
                    case 'nothing': return pl.ss($, ($) => ['nothing', null])
                    case 'optional': return pl.ss($, ($) => ['optional', {
                        'type': Type($.type, $p),
                    }])
                    case 'state group': return pl.ss($, ($) => {
                        return ['state group', {
                            'states': $d.resolveDictionary($.states, {
                                'map': ($, $l) => {
                                    return {
                                        'type': Type($.value.type, $p),
                                    }
                                }
                            }),
                        }]
                    })
                    case 'cyclic reference': return pl.ss($, ($) => {
                        return ['cyclic reference', {
                            'atom': Atom($.atom, { 'atom types': $p['atom types'] }),
                            'sibling': Global__Type__Selection($.sibling, $p)
                        }]
                    })
                    case 'resolved reference': return pl.ss($, ($) => {
                        return ['resolved reference', {
                            'atom': Atom($.atom, { 'atom types': $p['atom types'] }),
                            'value': pl.cc($.value, ($) => {
                                switch ($[0]) {
                                    case 'lookup': return pl.ss($, ($) => {
                                        const v_gts = Global__Type__Selection($, $p)
                                        return ['lookup', v_gts]
                                    })
                                    case 'dictionary': return pl.ss($, ($) => {
                                        return ['dictionary', Dictionary__Selection($, {
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
                            'atom': Atom($.atom, { 'atom types': $p['atom types'] }),
                        }]
                    })
                    default: return pl.au($[0])
                }
            })
        }
    }
    const Type__Selection: Resolve.Type__Selection = ($, $p) => {

        const v_import = mapOptional(
            $.import,
            ($) => getAnnotatedEntry($p.imports, $)
        )

        const v_global_type = getAnnotatedEntry(
            pl.optional(
                v_import,
                ($) => $.referent.library.referent['global types'],
                () => $p['sibling global types']
            ),
            $['global type'],
        )
        const v_tail = mapOptional(
            $.tail,
            ($) => Type__Selection__Tail($, {
                'context': v_global_type.referent.type,
            }),
        )
        return {
            'import': v_import,
            'global type': v_global_type,
            'tail': v_tail,
        }
    }
    const Type__Selection__Tail: Resolve.Type__Selection__Tail = ($, $p) => {
        const v_step_type = pl.cc($['step type'], ($): Out.TType__Selection__Tail.step__type.$ => {
            switch ($[0]) {
                case 'array': return pl.ss($, ($): Out.TType__Selection__Tail.step__type.$ => {
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
                return Type__Selection__Tail($, {
                    'context': select.Type__Selection__Tail__Step__Type(v_step_type)
                })
            },
        )
        return {
            'step type': v_step_type,
            'tail': v_tail
        }
    }

    const Project: Resolve.Project = ($) => {
        return {
            'type libraries': $d.resolveDictionary(
                $['type libraries'],
                {
                    'map': ($, $l) => Type__Library($.value, {
                        'external type libraries': $l['non circular siblings']
                    })
                })
        }
    }

    const Type__Library: Resolve.Type__Library = ($, $p) => {
        const imports = $.imports.__mapWithKey(($, key) => {
            return {
                'library': getAnnotatedEntry($p['external type libraries'], $.library)
            }
        })
        const v_atom__types = $['atom types'].map(($) => null)
        return {
            'imports': imports,
            'atom types': v_atom__types,
            'global types': $d.resolveDictionary($['global types'], {
                'map': (($, $l) => {
                    return {
                        'type': Type($.value.type, {
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
    }
}
