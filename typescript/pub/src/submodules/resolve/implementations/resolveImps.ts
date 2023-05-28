import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'

import * as Resolve from "./Resolve"

import * as select from "./selectImp"

import * as g_resolve from "res-pareto-resolve"
import * as g_this from "../glossary"

import * as g_out from "../../resolved"

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

export function resolve<Annotation>(
    $d: {
        readonly resolveDictionary: g_resolve.SYNC.A.F.SafeResolveDictionary;
    },
    $se: {
        readonly 'onError': g_this.SYNC.I.OnError<Annotation>
    }
): Resolve.Resolve<Annotation> {

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
                return pl.panic(`No Such EntryXX: ${key}`)
            }
        )
    }

    function getAnnotatedEntry<T>($: pt.Lookup<T>, key: {
        'annotation': Annotation,
        'key': string
    }): Reference<T> {
        return {
            'key': key.key,
            'referent': getEntry($, key.key, key.annotation)
        }
    }

    ///////////////////////////////////////////////////////////////


    const Atom: Resolve.Atom<Annotation> = ($, $p) => ({
        'type': getAnnotatedEntry($p['atom types'], $.type)
    })

    const Dictionary__Selection: Resolve.Dictionary__Selection<Annotation> = ($, $p) => {
        const x = $

        const v_type = Type__Selection($.type, $p)
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
                    })
                    pl.panic(`not a dictionary`)
                }
                return $.type[1]
            }),

        }
    }

    const Global__Type__Selection: Resolve.Global__Type__Selection<Annotation> = ($, $p) => {
        switch ($[0]) {
            case 'cyclic sibling': return pl.ss($, ($) => {
                const v_type = getAnnotatedEntry($p['cyclic sibling global types'], $.type)
                return ['cyclic sibling', {
                    'type': v_type,
                }]
            })
            case 'import': return pl.ss($, ($) => {
                const v_library = getAnnotatedEntry($p.imports, $.library)
                const v_type = getAnnotatedEntry(v_library.referent.library.referent['global types'].definitions, $.type)
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

    const Model: Resolve.Model<Annotation> = ($, $p) => {
        const tl = Type__Library($['type library'], $p)
        return {
            'type library': tl,
            'root': getAnnotatedEntry(tl['global types'].definitions, $.root)
        }
    }

    const Root: Resolve.Root<Annotation> = ($, $p) => {
        return Project($, $p)
    }
    const Type: Resolve.Type<Annotation> = ($, $p) => {
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
                    case 'dictionary': return pl.ss($, ($): g_out.T.Type._ltype => ['dictionary', {
                        'constraints': $.constraints.dictionary.map<g_out.T.Type._ltype.dictionary.constraints.D>(($) => pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'lookup': return pl.ss($, ($): g_out.T.Type._ltype.dictionary.constraints.D => {
                                    const v_gts = Global__Type__Selection($, $p)
                                    return ['lookup', v_gts]
                                })
                                case 'dictionary': return pl.ss($, ($): g_out.T.Type._ltype.dictionary.constraints.D => {
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
                            'properties': $.properties.dictionary.map(($) => {
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
                            'states': $d.resolveDictionary($.states.dictionary, {
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
    const Type__Selection: Resolve.Type__Selection<Annotation> = ($, $p) => {

        const v_import = mapOptional(
            $.import,
            ($) => getAnnotatedEntry($p.imports, $)
        )

        const v_global_type = getAnnotatedEntry(
            pl.optional(
                v_import,
                ($) => $.referent.library.referent['global types'].definitions,
                () => $p['sibling global types']
            ),
            $['global type'],
        )
        const v_tail = mapOptional(
            $.tail,
            ($) => Type__Selection__Tail($, {
                'context': v_global_type.referent.type
            }),
        )
        return {
            'import': v_import,
            'global type': v_global_type,
            'tail': v_tail,
        }
    }
    const Type__Selection__Tail: Resolve.Type__Selection__Tail<Annotation> = ($, $p) => {
        const v_step_type = pl.cc($['step type'], ($): g_out.T.Type__Selection__Tail.step__type => {
            switch ($[0]) {
                case 'array': return pl.ss($, ($): g_out.T.Type__Selection__Tail.step__type => {
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
                    const v_tail = mapOptional(
                        $.tail,
                        ($) => {
                            return Type__Selection__Tail($, {
                                'context': v_array.type
                            })
                        },
                    )
                    return ['array', {
                        'array': v_array,
                        'tail': v_tail
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
                    const v_tail = mapOptional(
                        $.tail,
                        ($) => {
                            return Type__Selection__Tail($, {
                                'context': v_dictionary.type
                            })
                        },
                    )
                    return ['dictionary', {
                        'dictionary': v_dictionary,
                        'tail': v_tail
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
                    const v_tail = mapOptional(
                        $.tail,
                        ($) => {
                            return Type__Selection__Tail($, {
                                'context': v_property.referent.type
                            })
                        },
                    )
                    return ['group', {
                        'group': v_group,
                        'property': v_property,
                        'tail': v_tail
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
                    const v_tail = mapOptional(
                        $.tail,
                        ($) => {
                            return Type__Selection__Tail($, {
                                'context': v_optional.type
                            })
                        },
                    )
                    return ['optional', {
                        'optional': v_optional,
                        'tail': v_tail
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

                    const v_tail = mapOptional(
                        $.tail,
                        ($) => {
                            return Type__Selection__Tail($, {
                                'context': v_state.referent.type
                            })
                        },
                    )
                    return ['state group', {
                        'state group': v_state_group,
                        'state': v_state,
                        'tail': v_tail
                    }]
                })
                default: return pl.au($[0])
            }
        })
        return {
            'step type': v_step_type,
        }
    }

    const Project: Resolve.Project<Annotation> = ($, $p) => {
        return {
            'type libraries': $d.resolveDictionary(
                $['type libraries'].dictionary,
                {
                    'map': ($, $l) => Type__Library($.value, {
                        'external type libraries': $l['non circular siblings']
                    })
                })
        }
    }

    const Type__Library: Resolve.Type__Library<Annotation> = ($, $p) => {
        const imports = $.imports.dictionary.__mapWithKey(($, key) => {
            return {
                'library': getAnnotatedEntry($p['external type libraries'], $.library)
            }
        })
        const v_atom__types = $['atom types'].dictionary.map(($) => null)
        const v_decl: g_out.T.Global__Type__Declarations = $d.resolveDictionary( $['global types'].declarations.dictionary, { 'map': (($, $l) => {
            return {
                'parameters': $d.resolveDictionary($.value.parameters.dictionary, { 'map' : (($): g_out.T.Global__Type__Declaration.parameters.D => {
                    return {
                        'optional': $.value.optional,
                        'type': pl.cc($.value.type, ($) => {
                            switch ($[0]) {
                                case 'resolved value': return pl.ss($, ($) => {
                                    const xxx = getAnnotatedEntry($l['all siblings'], $)
    
                                    return ['resolved value', xxx]
                                })
                                case 'cyclic sibling lookup': return pl.ss($, ($) => {
                                    const xxx = getAnnotatedEntry($l['all siblings'], $)
    
                                    return ['cyclic sibling lookup', xxx]
                                })
                                case 'sibling lookup': return pl.ss($, ($) => {
                                    const xxx = getAnnotatedEntry($l['all siblings'], $)
    
                                    return ['sibling lookup', xxx]
                                })
                                default: return pl.au($[0])
                            }
                        })
                    }
                })}),
                'result': mapOptional(
                    $.value.result,
                    ($) => getAnnotatedEntry($l['all siblings'], $)
                ),
            }
        })})
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
                        }
                    })
                })
            }
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
