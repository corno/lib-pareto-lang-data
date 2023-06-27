import * as _pt from 'pareto-core-types'
import * as _pl from 'pareto-core-lib'
import * as _pm from 'pareto-core-map'
import * as _pd from 'pareto-core-dev'
import * as _ from './typesystem'

export const $: _.$ = {
    'pareto lang data': {
        'createResolveContext': ($) => _pl.cc($, ($) => {
            const r_$Atom__Types: _.pareto__lang__data.Resolve.resolvers.Atom__Types = ($) => $.map(($) => _pl.cc($, ($) => {
                return null
            }))
            const r_$Atom: _.pareto__lang__data.Resolve.resolvers.Atom = ($) => _pl.cc($, ($) => {
                const _ltype: _.pareto__lang__data.Resolved.Flat.Atom$type$ = _pl.cc($['type'], ($) => _pd.implementMe("RESOLVED REFERENCE"))
                return {
                    'type': _ltype,
                }
            })
            const r_$Property: _.pareto__lang__data.Resolve.resolvers.Property = ($) => _pl.cc($, ($) => {
                const _ltype: _.pareto__lang__data.Resolved.Flat.Property$type$ = _pl.cc($['type'], ($) => r_$Type(
                    $,
                    {
                        'atom types': _pd.implementMe("ARGS"),
                        'cyclic sibling global types': _pd.implementMe("ARGS"),
                        'imports': _pd.implementMe("ARGS"),
                        'sibling global types': _pd.implementMe("ARGS"),
                    }
                ))
                return {
                    'type': _ltype,
                }
            })
            const r_$PropertyResolver: _.pareto__lang__data.Resolve.resolvers.PropertyResolver = ($) => _pl.cc($, ($) => {
                const _ltype: _.pareto__lang__data.Resolved.Flat.PropertyResolver$type$ = _pl.cc($['type'], ($) => r_$TypeResolver(
                    $,
                    {
                        'atom types': _pd.implementMe("ARGS"),
                        'cyclic sibling global types': _pd.implementMe("ARGS"),
                        'imports': _pd.implementMe("ARGS"),
                        'sibling global types': _pd.implementMe("ARGS"),
                    }
                ))
                return {
                    'type': _ltype,
                }
            })
            const r_$Type: _.pareto__lang__data.Resolve.resolvers.Type = ($) => _pl.cc($, ($) => {
                const _ltype: _.pareto__lang__data.Resolved.Flat.Type$type$ = _pl.cc($['type'], ($) => _pl.cc($, ($): _.pareto__lang__data.Resolved.Flat.Type$type$ => {
                    switch ($[0]) {
                        case 'array': return _pl.ss($, ($) => ['array', _pl.cc($, ($) => {
                            const _ltype: _.pareto__lang__data.Resolved.Flat.Type$type$array$type$ = _pl.cc($['type'], ($) => r_$Type(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }
                            ))
                            return {
                                'type': _ltype,
                            }
                        })])
                        case 'atom': return _pl.ss($, ($) => ['atom', _pl.cc($, ($) => {
                            const atom: _.pareto__lang__data.Resolved.Flat.Type$type$atom$atom$ = _pl.cc($['atom'], ($) => r_$Atom(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                }
                            ))
                            return {
                                'atom': atom,
                            }
                        })])
                        case 'component': return _pl.ss($, ($) => ['component', _pl.cc($, ($) => {
                            const _ltype: _.pareto__lang__data.Resolved.Flat.Type$type$component$type$ = _pl.cc($['type'], ($) => r_$Global__Type__Selection(
                                $,
                                {
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }
                            ))
                            return {
                                'type': _ltype,
                            }
                        })])
                        case 'constraint': return _pl.ss($, ($) => ['constraint', r_$Type__Selection(
                            $,
                            {
                                'imports': _pd.implementMe("ARGS"),
                                'sibling global types': _pd.implementMe("ARGS"),
                            }
                        )])
                        case 'cyclic reference': return _pl.ss($, ($) => ['cyclic reference', _pl.cc($, ($) => {
                            const atom: _.pareto__lang__data.Resolved.Flat.Type$type$cyclic__reference$atom$ = _pl.cc($['atom'], ($) => r_$Atom(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                }
                            ))
                            const sibling: _.pareto__lang__data.Resolved.Flat.Type$type$cyclic__reference$sibling$ = _pl.cc($['sibling'], ($) => r_$Global__Type__Selection(
                                $,
                                {
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }
                            ))
                            return {
                                'atom': atom,
                                'sibling': sibling,
                            }
                        })])
                        case 'dictionary': return _pl.ss($, ($) => ['dictionary', _pl.cc($, ($) => {
                            const key: _.pareto__lang__data.Resolved.Flat.Type$type$dictionary$key$ = _pl.cc($['key'], ($) => r_$Atom(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                }
                            ))
                            const constraints: _.pareto__lang__data.Resolved.Flat.Type$type$dictionary$constraints$ = _pl.cc($['constraints'], ($) => $.map(($) => _pl.cc($, ($): _.pareto__lang__data.Resolved.Flat.Type$type$dictionary$constraints$D$ => {
                                switch ($[0]) {
                                    case 'dictionary': return _pl.ss($, ($) => ['dictionary', _pl.cc($, ($) => {
                                        const dictionary: _.pareto__lang__data.Resolved.Flat.Type$type$dictionary$constraints$D$dictionary$dictionary$ = _pl.cc($['dictionary'], ($) => r_$Dictionary__Selection(
                                            $,
                                            {
                                                'cyclic sibling global types': _pd.implementMe("ARGS"),
                                                'imports': _pd.implementMe("ARGS"),
                                                'sibling global types': _pd.implementMe("ARGS"),
                                            }
                                        ))
                                        const dense: _.pareto__lang__data.Resolved.Flat.Type$type$dictionary$constraints$D$dictionary$dense$ = _pl.cc($['dense'], ($) => _pl.cc($, ($): _.pareto__lang__data.Resolved.Flat.Type$type$dictionary$constraints$D$dictionary$dense$ => {
                                            switch ($[0]) {
                                                case 'no': return _pl.ss($, ($) => ['no', _pl.cc($, ($) => {
                                                    return null
                                                })])
                                                case 'yes': return _pl.ss($, ($) => ['yes', _pl.cc($, ($) => {
                                                    return null
                                                })])
                                                default: return _pl.au($[0])
                                            }
                                        }))
                                        return {
                                            'dense': dense,
                                            'dictionary': dictionary,
                                        }
                                    })])
                                    case 'lookup': return _pl.ss($, ($) => ['lookup', r_$Global__Type__Selection(
                                        $,
                                        {
                                            'cyclic sibling global types': _pd.implementMe("ARGS"),
                                            'imports': _pd.implementMe("ARGS"),
                                            'sibling global types': _pd.implementMe("ARGS"),
                                        }
                                    )])
                                    default: return _pl.au($[0])
                                }
                            })))
                            const _ltype: _.pareto__lang__data.Resolved.Flat.Type$type$dictionary$type$ = _pl.cc($['type'], ($) => r_$Type(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }
                            ))
                            return {
                                'constraints': constraints,
                                'key': key,
                                'type': _ltype,
                            }
                        })])
                        case 'group': return _pl.ss($, ($) => ['group', _pl.cc($, ($) => {
                            const properties: _.pareto__lang__data.Resolved.Flat.Type$type$group$properties$ = _pl.cc($['properties'], ($) => $.map(($) => r_$Property(
                                $,
                            )))
                            return {
                                'properties': properties,
                            }
                        })])
                        case 'nothing': return _pl.ss($, ($) => ['nothing', _pl.cc($, ($) => {
                            return null
                        })])
                        case 'optional': return _pl.ss($, ($) => ['optional', _pl.cc($, ($) => {
                            const _ltype: _.pareto__lang__data.Resolved.Flat.Type$type$optional$type$ = _pl.cc($['type'], ($) => r_$Type(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }
                            ))
                            return {
                                'type': _ltype,
                            }
                        })])
                        case 'resolved reference': return _pl.ss($, ($) => ['resolved reference', _pl.cc($, ($) => {
                            const atom: _.pareto__lang__data.Resolved.Flat.Type$type$resolved__reference$atom$ = _pl.cc($['atom'], ($) => r_$Atom(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                }
                            ))
                            const value: _.pareto__lang__data.Resolved.Flat.Type$type$resolved__reference$value$ = _pl.cc($['value'], ($) => _pl.cc($, ($): _.pareto__lang__data.Resolved.Flat.Type$type$resolved__reference$value$ => {
                                switch ($[0]) {
                                    case 'dictionary': return _pl.ss($, ($) => ['dictionary', r_$Dictionary__Selection(
                                        $,
                                        {
                                            'cyclic sibling global types': _pd.implementMe("ARGS"),
                                            'imports': _pd.implementMe("ARGS"),
                                            'sibling global types': _pd.implementMe("ARGS"),
                                        }
                                    )])
                                    case 'lookup': return _pl.ss($, ($) => ['lookup', r_$Global__Type__Selection(
                                        $,
                                        {
                                            'cyclic sibling global types': _pd.implementMe("ARGS"),
                                            'imports': _pd.implementMe("ARGS"),
                                            'sibling global types': _pd.implementMe("ARGS"),
                                        }
                                    )])
                                    default: return _pl.au($[0])
                                }
                            }))
                            return {
                                'atom': atom,
                                'value': value,
                            }
                        })])
                        case 'state group': return _pl.ss($, ($) => ['state group', _pl.cc($, ($) => {
                            const states: _.pareto__lang__data.Resolved.Flat.Type$type$state__group$states$ = _pl.cc($['states'], ($) => $.map(($) => _pl.cc($, ($) => {
                                const _ltype: _.pareto__lang__data.Resolved.Flat.Type$type$state__group$states$D$type$ = _pl.cc($['type'], ($) => r_$Type(
                                    $,
                                    {
                                        'atom types': _pd.implementMe("ARGS"),
                                        'cyclic sibling global types': _pd.implementMe("ARGS"),
                                        'imports': _pd.implementMe("ARGS"),
                                        'sibling global types': _pd.implementMe("ARGS"),
                                    }
                                ))
                                return {
                                    'type': _ltype,
                                }
                            })))
                            return {
                                'states': states,
                            }
                        })])
                        default: return _pl.au($[0])
                    }
                }))
                return {
                    'type': _ltype,
                }
            })
            const r_$TypeResolver: _.pareto__lang__data.Resolve.resolvers.TypeResolver = ($) => _pl.cc($, ($) => {
                const _ltype: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$ = _pl.cc($['type'], ($) => _pl.cc($, ($): _.pareto__lang__data.Resolved.Flat.TypeResolver$type$ => {
                    switch ($[0]) {
                        case 'array': return _pl.ss($, ($) => ['array', _pl.cc($, ($) => {
                            const _ltype: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$array$type$ = _pl.cc($['type'], ($) => r_$TypeResolver(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }
                            ))
                            return {
                                'type': _ltype,
                            }
                        })])
                        case 'atom': return _pl.ss($, ($) => ['atom', _pl.cc($, ($) => {
                            const atom: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$atom$atom$ = _pl.cc($['atom'], ($) => r_$Atom(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                }
                            ))
                            return {
                                'atom': atom,
                            }
                        })])
                        case 'component': return _pl.ss($, ($) => ['component', _pl.cc($, ($) => {
                            const _ltype: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$component$type$ = _pl.cc($['type'], ($) => r_$Global__Type__Selection(
                                $,
                                {
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }
                            ))
                            const _larguments: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$component$arguments$ = _pl.cc($['arguments'], ($) => $.map(($) => _pl.cc($, ($) => {
                                return null
                            })))
                            return {
                                'arguments': _larguments,
                                'type': _ltype,
                            }
                        })])
                        case 'constraint': return _pl.ss($, ($) => ['constraint', r_$Type__Selection(
                            $,
                            {
                                'imports': _pd.implementMe("ARGS"),
                                'sibling global types': _pd.implementMe("ARGS"),
                            }
                        )])
                        case 'cyclic reference': return _pl.ss($, ($) => ['cyclic reference', _pl.cc($, ($) => {
                            const atom: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$cyclic__reference$atom$ = _pl.cc($['atom'], ($) => r_$Atom(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                }
                            ))
                            const sibling: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$cyclic__reference$sibling$ = _pl.cc($['sibling'], ($) => r_$Global__Type__Selection(
                                $,
                                {
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }
                            ))
                            return {
                                'atom': atom,
                                'sibling': sibling,
                            }
                        })])
                        case 'dictionary': return _pl.ss($, ($) => ['dictionary', _pl.cc($, ($) => {
                            const key: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$dictionary$key$ = _pl.cc($['key'], ($) => r_$Atom(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                }
                            ))
                            const constraints: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$dictionary$constraints$ = _pl.cc($['constraints'], ($) => $.map(($) => _pl.cc($, ($): _.pareto__lang__data.Resolved.Flat.TypeResolver$type$dictionary$constraints$D$ => {
                                switch ($[0]) {
                                    case 'dictionary': return _pl.ss($, ($) => ['dictionary', _pl.cc($, ($) => {
                                        const dictionary: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$dictionary$constraints$D$dictionary$dictionary$ = _pl.cc($['dictionary'], ($) => r_$Dictionary__Selection(
                                            $,
                                            {
                                                'cyclic sibling global types': _pd.implementMe("ARGS"),
                                                'imports': _pd.implementMe("ARGS"),
                                                'sibling global types': _pd.implementMe("ARGS"),
                                            }
                                        ))
                                        const dense: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$dictionary$constraints$D$dictionary$dense$ = _pl.cc($['dense'], ($) => _pl.cc($, ($): _.pareto__lang__data.Resolved.Flat.TypeResolver$type$dictionary$constraints$D$dictionary$dense$ => {
                                            switch ($[0]) {
                                                case 'no': return _pl.ss($, ($) => ['no', _pl.cc($, ($) => {
                                                    return null
                                                })])
                                                case 'yes': return _pl.ss($, ($) => ['yes', _pl.cc($, ($) => {
                                                    return null
                                                })])
                                                default: return _pl.au($[0])
                                            }
                                        }))
                                        return {
                                            'dense': dense,
                                            'dictionary': dictionary,
                                        }
                                    })])
                                    case 'lookup': return _pl.ss($, ($) => ['lookup', r_$Global__Type__Selection(
                                        $,
                                        {
                                            'cyclic sibling global types': _pd.implementMe("ARGS"),
                                            'imports': _pd.implementMe("ARGS"),
                                            'sibling global types': _pd.implementMe("ARGS"),
                                        }
                                    )])
                                    default: return _pl.au($[0])
                                }
                            })))
                            const _ltype: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$dictionary$type$ = _pl.cc($['type'], ($) => r_$TypeResolver(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }
                            ))
                            return {
                                'constraints': constraints,
                                'key': key,
                                'type': _ltype,
                            }
                        })])
                        case 'group': return _pl.ss($, ($) => ['group', _pl.cc($, ($) => {
                            const properties: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$group$properties$ = _pl.cc($['properties'], ($) => $.map(($) => r_$PropertyResolver(
                                $,
                            )))
                            return {
                                'properties': properties,
                            }
                        })])
                        case 'nothing': return _pl.ss($, ($) => ['nothing', _pl.cc($, ($) => {
                            return null
                        })])
                        case 'optional': return _pl.ss($, ($) => ['optional', _pl.cc($, ($) => {
                            const _ltype: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$optional$type$ = _pl.cc($['type'], ($) => r_$TypeResolver(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                    'cyclic sibling global types': _pd.implementMe("ARGS"),
                                    'imports': _pd.implementMe("ARGS"),
                                    'sibling global types': _pd.implementMe("ARGS"),
                                }
                            ))
                            return {
                                'type': _ltype,
                            }
                        })])
                        case 'resolved reference': return _pl.ss($, ($) => ['resolved reference', _pl.cc($, ($) => {
                            const atom: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$resolved__reference$atom$ = _pl.cc($['atom'], ($) => r_$Atom(
                                $,
                                {
                                    'atom types': _pd.implementMe("ARGS"),
                                }
                            ))
                            const value: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$resolved__reference$value$ = _pl.cc($['value'], ($) => _pl.cc($, ($): _.pareto__lang__data.Resolved.Flat.TypeResolver$type$resolved__reference$value$ => {
                                switch ($[0]) {
                                    case 'dictionary': return _pl.ss($, ($) => ['dictionary', r_$Dictionary__Selection(
                                        $,
                                        {
                                            'cyclic sibling global types': _pd.implementMe("ARGS"),
                                            'imports': _pd.implementMe("ARGS"),
                                            'sibling global types': _pd.implementMe("ARGS"),
                                        }
                                    )])
                                    case 'lookup': return _pl.ss($, ($) => ['lookup', r_$Global__Type__Selection(
                                        $,
                                        {
                                            'cyclic sibling global types': _pd.implementMe("ARGS"),
                                            'imports': _pd.implementMe("ARGS"),
                                            'sibling global types': _pd.implementMe("ARGS"),
                                        }
                                    )])
                                    default: return _pl.au($[0])
                                }
                            }))
                            return {
                                'atom': atom,
                                'value': value,
                            }
                        })])
                        case 'state group': return _pl.ss($, ($) => ['state group', _pl.cc($, ($) => {
                            const states: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$state__group$states$ = _pl.cc($['states'], ($) => $.map(($) => _pl.cc($, ($) => {
                                const _ltype: _.pareto__lang__data.Resolved.Flat.TypeResolver$type$state__group$states$D$type$ = _pl.cc($['type'], ($) => r_$TypeResolver(
                                    $,
                                    {
                                        'atom types': _pd.implementMe("ARGS"),
                                        'cyclic sibling global types': _pd.implementMe("ARGS"),
                                        'imports': _pd.implementMe("ARGS"),
                                        'sibling global types': _pd.implementMe("ARGS"),
                                    }
                                ))
                                return {
                                    'type': _ltype,
                                }
                            })))
                            return {
                                'states': states,
                            }
                        })])
                        default: return _pl.au($[0])
                    }
                }))
                return {
                    'type': _ltype,
                }
            })
            const r_$Imports: _.pareto__lang__data.Resolve.resolvers.Imports = ($) => $.map(($) => _pl.cc($, ($) => {
                const library: _.pareto__lang__data.Resolved.Flat.Imports$D$library$ = _pl.cc($['library'], ($) => _pd.implementMe("RESOLVED REFERENCE"))
                return {
                    'library': library,
                }
            }))
            const r_$Parameters: _.pareto__lang__data.Resolve.resolvers.Parameters = ($) => $.map(($) => _pl.cc($, ($) => {
                const _ltype: _.pareto__lang__data.Resolved.Flat.Parameters$D$type$ = _pl.cc($['type'], ($) => _pl.cc($, ($): _.pareto__lang__data.Resolved.Flat.Parameters$D$type$ => {
                    switch ($[0]) {
                        case 'resolved value': return _pl.ss($, ($) => ['resolved value', _pd.implementMe("CyCLIC REFERENCE")])
                        case 'sibling lookup': return _pl.ss($, ($) => ['sibling lookup', _pd.implementMe("CyCLIC REFERENCE")])
                        case 'cyclic sibling lookup': return _pl.ss($, ($) => ['cyclic sibling lookup', _pd.implementMe("CyCLIC REFERENCE")])
                        case 'key': return _pl.ss($, ($) => ['key', _pl.cc($, ($) => {
                            return null
                        })])
                        default: return _pl.au($[0])
                    }
                }))
                const optional: _.pareto__lang__data.Resolved.Flat.Parameters$D$optional$ = _pl.cc($['optional'], ($) => _pd.implementMe("OPTIONAL"))
                return {
                    'optional': optional,
                    'type': _ltype,
                }
            }))
            const r_$Global__Type__Resolver__Declaration: _.pareto__lang__data.Resolve.resolvers.Global__Type__Resolver__Declaration = ($) => _pl.cc($, ($) => {
                const parameters: _.pareto__lang__data.Resolved.Flat.Global__Type__Resolver__Declaration$parameters$ = _pl.cc($['parameters'], ($) => r_$Parameters(
                    $,
                ))
                const result: _.pareto__lang__data.Resolved.Flat.Global__Type__Resolver__Declaration$result$ = _pl.cc($['result'], ($) => _pd.implementMe("OPTIONAL"))
                return {
                    'parameters': parameters,
                    'result': result,
                }
            })
            const r_$Global__Type__Resolver__Declarations: _.pareto__lang__data.Resolve.resolvers.Global__Type__Resolver__Declarations = ($) => $.map(($) => r_$Global__Type__Resolver__Declaration(
                $,
                {
                    'all siblings': _pd.implementMe("ARGS"),
                }
            ))
            const r_$Variable: _.pareto__lang__data.Resolve.resolvers.Variable = ($) => _pl.cc($, ($): _.pareto__lang__data.Resolved.Flat.Variable$ => {
                switch ($[0]) {
                    case 'parameter': return _pl.ss($, ($) => ['parameter', _pl.cc($, ($) => {
                        const parameter: _.pareto__lang__data.Resolved.Flat.Variable$parameter$parameter$ = _pl.cc($['parameter'], ($) => _pd.implementMe("RESOLVED REFERENCE"))
                        const resolved__value: _.pareto__lang__data.Resolved.Flat.Variable$parameter$resolved__value$ = _pl.cc($['resolved value'], ($) => _pd.implementMe("CONSTRAINT"))
                        return {
                            'parameter': parameter,
                            'resolved value': resolved__value,
                        }
                    })])
                    case 'parent variable': return _pl.ss($, ($) => ['parent variable', _pd.implementMe("RESOLVED REFERENCE")])
                    default: return _pl.au($[0])
                }
            })
            const r_$Variables: _.pareto__lang__data.Resolve.resolvers.Variables = ($) => $.map(($) => r_$Variable(
                $,
            ))
            const r_$Global__Type__Resolver__Implementation: _.pareto__lang__data.Resolve.resolvers.Global__Type__Resolver__Implementation = ($) => _pl.cc($, ($) => {
                const variables: _.pareto__lang__data.Resolved.Flat.Global__Type__Resolver__Implementation$variables$ = _pl.cc($['variables'], ($) => r_$Variables(
                    $,
                ))
                const _ltype: _.pareto__lang__data.Resolved.Flat.Global__Type__Resolver__Implementation$type$ = _pl.cc($['type'], ($) => r_$TypeResolver(
                    $,
                    {
                        'atom types': _pd.implementMe("ARGS"),
                        'cyclic sibling global types': _pd.implementMe("ARGS"),
                        'imports': _pd.implementMe("ARGS"),
                        'sibling global types': _pd.implementMe("ARGS"),
                    }
                ))
                const result: _.pareto__lang__data.Resolved.Flat.Global__Type__Resolver__Implementation$result$ = _pl.cc($['result'], ($) => _pd.implementMe("OPTIONAL"))
                return {
                    'result': result,
                    'type': _ltype,
                    'variables': variables,
                }
            })
            const r_$Global__Type__Definition: _.pareto__lang__data.Resolve.resolvers.Global__Type__Definition = ($) => _pl.cc($, ($) => {
                const _ltype: _.pareto__lang__data.Resolved.Flat.Global__Type__Definition$type$ = _pl.cc($['type'], ($) => r_$Type(
                    $,
                    {
                        'atom types': _pd.implementMe("ARGS"),
                        'cyclic sibling global types': _pd.implementMe("ARGS"),
                        'imports': _pd.implementMe("ARGS"),
                        'sibling global types': _pd.implementMe("ARGS"),
                    }
                ))
                return {
                    'type': _ltype,
                }
            })
            const r_$Type__Selection__Tail: _.pareto__lang__data.Resolve.resolvers.Type__Selection__Tail = ($) => _pl.cc($, ($) => {
                const step__type: _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$ = _pl.cc($['step type'], ($) => _pl.cc($, ($): _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$ => {
                    switch ($[0]) {
                        case 'dictionary': return _pl.ss($, ($) => ['dictionary', _pl.cc($, ($) => {
                            const dictionary: _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$dictionary$dictionary$ = _pl.cc($['dictionary'], ($) => _pd.implementMe("CONSTRAINT"))
                            const tail: _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$dictionary$tail$ = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"))
                            return {
                                'dictionary': dictionary,
                                'tail': tail,
                            }
                        })])
                        case 'optional': return _pl.ss($, ($) => ['optional', _pl.cc($, ($) => {
                            const optional: _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$optional$optional$ = _pl.cc($['optional'], ($) => _pd.implementMe("CONSTRAINT"))
                            const tail: _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$optional$tail$ = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"))
                            return {
                                'optional': optional,
                                'tail': tail,
                            }
                        })])
                        case 'array': return _pl.ss($, ($) => ['array', _pl.cc($, ($) => {
                            const array: _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$array$array$ = _pl.cc($['array'], ($) => _pd.implementMe("CONSTRAINT"))
                            const tail: _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$array$tail$ = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"))
                            return {
                                'array': array,
                                'tail': tail,
                            }
                        })])
                        case 'group': return _pl.ss($, ($) => ['group', _pl.cc($, ($) => {
                            const group: _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$group$group$ = _pl.cc($['group'], ($) => _pd.implementMe("CONSTRAINT"))
                            const property: _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$group$property$ = _pl.cc($['property'], ($) => _pd.implementMe("RESOLVED REFERENCE"))
                            const tail: _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$group$tail$ = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"))
                            return {
                                'group': group,
                                'property': property,
                                'tail': tail,
                            }
                        })])
                        case 'state group': return _pl.ss($, ($) => ['state group', _pl.cc($, ($) => {
                            const state__group: _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$state__group$state__group$ = _pl.cc($['state group'], ($) => _pd.implementMe("CONSTRAINT"))
                            const state: _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$state__group$state$ = _pl.cc($['state'], ($) => _pd.implementMe("RESOLVED REFERENCE"))
                            const tail: _.pareto__lang__data.Resolved.Flat.Type__Selection__Tail$step__type$state__group$tail$ = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"))
                            return {
                                'state': state,
                                'state group': state__group,
                                'tail': tail,
                            }
                        })])
                        default: return _pl.au($[0])
                    }
                }))
                return {
                    'step type': step__type,
                }
            })
            const r_$Type__Selection: _.pareto__lang__data.Resolve.resolvers.Type__Selection = ($) => _pl.cc($, ($) => {
                const _limport: _.pareto__lang__data.Resolved.Flat.Type__Selection$import$ = _pl.cc($['import'], ($) => _pd.implementMe("OPTIONAL"))
                const global__type: _.pareto__lang__data.Resolved.Flat.Type__Selection$global__type$ = _pl.cc($['global type'], ($) => _pd.implementMe("RESOLVED REFERENCE"))
                const tail: _.pareto__lang__data.Resolved.Flat.Type__Selection$tail$ = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"))
                return {
                    'global type': global__type,
                    'import': _limport,
                    'tail': tail,
                }
            })
            const r_$Dictionary__Selection: _.pareto__lang__data.Resolve.resolvers.Dictionary__Selection = ($) => _pl.cc($, ($) => {
                const _ltype: _.pareto__lang__data.Resolved.Flat.Dictionary__Selection$type$ = _pl.cc($['type'], ($) => r_$Type__Selection(
                    $,
                    {
                        'imports': _pd.implementMe("ARGS"),
                        'sibling global types': _pd.implementMe("ARGS"),
                    }
                ))
                const dictionary: _.pareto__lang__data.Resolved.Flat.Dictionary__Selection$dictionary$ = _pl.cc($['dictionary'], ($) => _pd.implementMe("CONSTRAINT"))
                return {
                    'dictionary': dictionary,
                    'type': _ltype,
                }
            })
            const r_$Type__Library: _.pareto__lang__data.Resolve.resolvers.Type__Library = ($) => _pl.cc($, ($) => {
                const imports: _.pareto__lang__data.Resolved.Flat.Type__Library$imports$ = _pl.cc($['imports'], ($) => r_$Imports(
                    $,
                    {
                        'external type libraries': _pd.implementMe("ARGS"),
                    }
                ))
                const atom__types: _.pareto__lang__data.Resolved.Flat.Type__Library$atom__types$ = _pl.cc($['atom types'], ($) => r_$Atom__Types(
                    $,
                ))
                const global__types: _.pareto__lang__data.Resolved.Flat.Type__Library$global__types$ = _pl.cc($['global types'], ($) => _pl.cc($, ($) => {
                    const definitions: _.pareto__lang__data.Resolved.Flat.Type__Library$global__types$definitions$ = _pl.cc($['definitions'], ($) => $.map(($) => r_$Global__Type__Definition(
                        $,
                        {
                            'all siblings': _pd.implementMe("ARGS"),
                            'atom types': _pd.implementMe("ARGS"),
                            'imports': _pd.implementMe("ARGS"),
                            'key': _pd.implementMe("ARGS"),
                            'non cyclic siblings': _pd.implementMe("ARGS"),
                        }
                    )))
                    const declarations: _.pareto__lang__data.Resolved.Flat.Type__Library$global__types$declarations$ = _pl.cc($['declarations'], ($) => r_$Global__Type__Resolver__Declarations(
                        $,
                    ))
                    const implementations: _.pareto__lang__data.Resolved.Flat.Type__Library$global__types$implementations$ = _pl.cc($['implementations'], ($) => $.map(($) => r_$Global__Type__Resolver__Implementation(
                        $,
                        {
                            'all siblings': _pd.implementMe("ARGS"),
                            'atom types': _pd.implementMe("ARGS"),
                            'imports': _pd.implementMe("ARGS"),
                            'key': _pd.implementMe("ARGS"),
                            'non cyclic siblings': _pd.implementMe("ARGS"),
                        }
                    )))
                    return {
                        'declarations': declarations,
                        'definitions': definitions,
                        'implementations': implementations,
                    }
                }))
                return {
                    'atom types': atom__types,
                    'global types': global__types,
                    'imports': imports,
                }
            })
            const r_$Merged__Type__Library: _.pareto__lang__data.Resolve.resolvers.Merged__Type__Library = ($) => _pl.cc($, ($) => {
                const imports: _.pareto__lang__data.Resolved.Flat.Merged__Type__Library$imports$ = _pl.cc($['imports'], ($) => r_$Imports(
                    $,
                    {
                        'external type libraries': _pd.implementMe("ARGS"),
                    }
                ))
                const atom__types: _.pareto__lang__data.Resolved.Flat.Merged__Type__Library$atom__types$ = _pl.cc($['atom types'], ($) => r_$Atom__Types(
                    $,
                ))
                const global__types: _.pareto__lang__data.Resolved.Flat.Merged__Type__Library$global__types$ = _pl.cc($['global types'], ($) => $.map(($) => _pl.cc($, ($) => {
                    const declaration: _.pareto__lang__data.Resolved.Flat.Merged__Type__Library$global__types$D$declaration$ = _pl.cc($['declaration'], ($) => r_$Global__Type__Resolver__Declaration(
                        $,
                    ))
                    const definition: _.pareto__lang__data.Resolved.Flat.Merged__Type__Library$global__types$D$definition$ = _pl.cc($['definition'], ($) => r_$Global__Type__Resolver__Implementation(
                        $,
                        {
                            'all siblings': _pd.implementMe("ARGS"),
                            'atom types': _pd.implementMe("ARGS"),
                            'imports': _pd.implementMe("ARGS"),
                            'key': _pd.implementMe("ARGS"),
                            'non cyclic siblings': _pd.implementMe("ARGS"),
                        }
                    ))
                    return {
                        'declaration': declaration,
                        'definition': definition,
                    }
                })))
                return {
                    'atom types': atom__types,
                    'global types': global__types,
                    'imports': imports,
                }
            })
            const r_$Global__Type__Selection: _.pareto__lang__data.Resolve.resolvers.Global__Type__Selection = ($) => _pl.cc($, ($): _.pareto__lang__data.Resolved.Flat.Global__Type__Selection$ => {
                switch ($[0]) {
                    case 'resolved sibling': return _pl.ss($, ($) => ['resolved sibling', _pl.cc($, ($) => {
                        const _ltype: _.pareto__lang__data.Resolved.Flat.Global__Type__Selection$resolved__sibling$type$ = _pl.cc($['type'], ($) => _pd.implementMe("RESOLVED REFERENCE"))
                        return {
                            'type': _ltype,
                        }
                    })])
                    case 'import': return _pl.ss($, ($) => ['import', _pl.cc($, ($) => {
                        const library: _.pareto__lang__data.Resolved.Flat.Global__Type__Selection$import$library$ = _pl.cc($['library'], ($) => _pd.implementMe("RESOLVED REFERENCE"))
                        const _ltype: _.pareto__lang__data.Resolved.Flat.Global__Type__Selection$import$type$ = _pl.cc($['type'], ($) => _pd.implementMe("RESOLVED REFERENCE"))
                        return {
                            'library': library,
                            'type': _ltype,
                        }
                    })])
                    case 'cyclic sibling': return _pl.ss($, ($) => ['cyclic sibling', _pl.cc($, ($) => {
                        const _ltype: _.pareto__lang__data.Resolved.Flat.Global__Type__Selection$cyclic__sibling$type$ = _pl.cc($['type'], ($) => _pd.implementMe("CyCLIC REFERENCE"))
                        return {
                            'type': _ltype,
                        }
                    })])
                    default: return _pl.au($[0])
                }
            })
            const r_$Model: _.pareto__lang__data.Resolve.resolvers.Model = ($) => _pl.cc($, ($) => {
                const type__library: _.pareto__lang__data.Resolved.Flat.Model$type__library$ = _pl.cc($['type library'], ($) => r_$Type__Library(
                    $,
                    {
                        'external type libraries': _pd.implementMe("ARGS"),
                    }
                ))
                const root: _.pareto__lang__data.Resolved.Flat.Model$root$ = _pl.cc($['root'], ($) => _pd.implementMe("RESOLVED REFERENCE"))
                return {
                    'root': root,
                    'type library': type__library,
                }
            })
            const r_$Project: _.pareto__lang__data.Resolve.resolvers.Project = ($) => _pl.cc($, ($) => {
                const type__libraries: _.pareto__lang__data.Resolved.Flat.Project$type__libraries$ = _pl.cc($['type libraries'], ($) => $.map(($) => r_$Type__Library(
                    $,
                    {
                        'external type libraries': _pd.implementMe("ARGS"),
                    }
                )))
                return {
                    'type libraries': type__libraries,
                }
            })
            const r_$Merged__Project: _.pareto__lang__data.Resolve.resolvers.Merged__Project = ($) => _pl.cc($, ($) => {
                const type__libraries: _.pareto__lang__data.Resolved.Flat.Merged__Project$type__libraries$ = _pl.cc($['type libraries'], ($) => $.map(($) => r_$Merged__Type__Library(
                    $,
                    {
                        'external type libraries': _pd.implementMe("ARGS"),
                    }
                )))
                return {
                    'type libraries': type__libraries,
                }
            })
            const r_$Root: _.pareto__lang__data.Resolve.resolvers.Root = ($) => r_$Project(
                $,
            )
            const r_$Value__Selection__Tail: _.pareto__lang__data.Resolve.resolvers.Value__Selection__Tail = ($) => _pl.cc($, ($): _.pareto__lang__data.Resolved.Flat.Value__Selection__Tail$ => {
                switch ($[0]) {
                    case 'reference': return _pl.ss($, ($) => ['reference', _pl.cc($, ($) => {
                        const reference: _.pareto__lang__data.Resolved.Flat.Value__Selection__Tail$reference$reference$ = _pl.cc($['reference'], ($) => _pd.implementMe("CONSTRAINT"))
                        const tail: _.pareto__lang__data.Resolved.Flat.Value__Selection__Tail$reference$tail$ = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"))
                        return {
                            'reference': reference,
                            'tail': tail,
                        }
                    })])
                    case 'component': return _pl.ss($, ($) => ['component', _pl.cc($, ($) => {
                        const component: _.pareto__lang__data.Resolved.Flat.Value__Selection__Tail$component$component$ = _pl.cc($['component'], ($) => _pd.implementMe("CONSTRAINT"))
                        const tail: _.pareto__lang__data.Resolved.Flat.Value__Selection__Tail$component$tail$ = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"))
                        return {
                            'component': component,
                            'tail': tail,
                        }
                    })])
                    case 'state group': return _pl.ss($, ($) => ['state group', _pl.cc($, ($) => {
                        const state__group: _.pareto__lang__data.Resolved.Flat.Value__Selection__Tail$state__group$state__group$ = _pl.cc($['state group'], ($) => _pd.implementMe("CONSTRAINT"))
                        const result__type: _.pareto__lang__data.Resolved.Flat.Value__Selection__Tail$state__group$result__type$ = _pl.cc($['result type'], ($) => r_$Global__Type__Selection(
                            $,
                            {
                                'cyclic sibling global types': _pd.implementMe("ARGS"),
                                'imports': _pd.implementMe("ARGS"),
                                'sibling global types': _pd.implementMe("ARGS"),
                            }
                        ))
                        const states: _.pareto__lang__data.Resolved.Flat.Value__Selection__Tail$state__group$states$ = _pl.cc($['states'], ($) => $.map(($) => r_$Any__Value__Selection(
                            $,
                        )))
                        return {
                            'result type': result__type,
                            'state group': state__group,
                            'states': states,
                        }
                    })])
                    case 'group': return _pl.ss($, ($) => ['group', _pl.cc($, ($) => {
                        const group: _.pareto__lang__data.Resolved.Flat.Value__Selection__Tail$group$group$ = _pl.cc($['group'], ($) => _pd.implementMe("CONSTRAINT"))
                        const property: _.pareto__lang__data.Resolved.Flat.Value__Selection__Tail$group$property$ = _pl.cc($['property'], ($) => _pd.implementMe("RESOLVED REFERENCE"))
                        const tail: _.pareto__lang__data.Resolved.Flat.Value__Selection__Tail$group$tail$ = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"))
                        return {
                            'group': group,
                            'property': property,
                            'tail': tail,
                        }
                    })])
                    default: return _pl.au($[0])
                }
            })
            const r_$Any__Value__Selection: _.pareto__lang__data.Resolve.resolvers.Any__Value__Selection = ($) => _pl.cc($, ($) => {
                const start: _.pareto__lang__data.Resolved.Flat.Any__Value__Selection$start$ = _pl.cc($['start'], ($) => _pd.implementMe("OPTIONAL"))
                const tail: _.pareto__lang__data.Resolved.Flat.Any__Value__Selection$tail$ = _pl.cc($['tail'], ($) => _pd.implementMe("OPTIONAL"))
                return {
                    'start': start,
                    'tail': tail,
                }
            })
            return {
                'Any Value Selection': r_$Any__Value__Selection,
                'Atom': r_$Atom,
                'Atom Types': r_$Atom__Types,
                'Dictionary Selection': r_$Dictionary__Selection,
                'Global Type Definition': r_$Global__Type__Definition,
                'Global Type Resolver Declaration': r_$Global__Type__Resolver__Declaration,
                'Global Type Resolver Declarations': r_$Global__Type__Resolver__Declarations,
                'Global Type Resolver Implementation': r_$Global__Type__Resolver__Implementation,
                'Global Type Selection': r_$Global__Type__Selection,
                'Imports': r_$Imports,
                'Merged Project': r_$Merged__Project,
                'Merged Type Library': r_$Merged__Type__Library,
                'Model': r_$Model,
                'Parameters': r_$Parameters,
                'Project': r_$Project,
                'Property': r_$Property,
                'PropertyResolver': r_$PropertyResolver,
                'Root': r_$Root,
                'Type': r_$Type,
                'Type Library': r_$Type__Library,
                'Type Selection': r_$Type__Selection,
                'Type Selection Tail': r_$Type__Selection__Tail,
                'TypeResolver': r_$TypeResolver,
                'Value Selection Tail': r_$Value__Selection__Tail,
                'Variable': r_$Variable,
                'Variables': r_$Variables,
            }
        }),
        'createSerializeContext': ($) => ({
            'Any Value Selection': ($) => {},
            'Atom': ($) => {},
            'Atom Types': ($) => {},
            'Dictionary Selection': ($) => {},
            'Global Type Definition': ($) => {},
            'Global Type Resolver Declaration': ($) => {},
            'Global Type Resolver Declarations': ($) => {},
            'Global Type Resolver Implementation': ($) => {},
            'Global Type Selection': ($) => {},
            'Imports': ($) => {},
            'Merged Project': ($) => {},
            'Merged Type Library': ($) => {},
            'Model': ($) => {},
            'Parameters': ($) => {},
            'Project': ($) => {},
            'Property': ($) => {},
            'PropertyResolver': ($) => {},
            'Root': ($) => {},
            'Type': ($) => {},
            'Type Library': ($) => {},
            'Type Selection': ($) => {},
            'Type Selection Tail': ($) => {},
            'TypeResolver': ($) => {},
            'Value Selection Tail': ($) => {},
            'Variable': ($) => {},
            'Variables': ($) => {},
        }),
    },
}