
import * as _pt from 'pareto-core-types'

namespace _ {
    
    export type Address<T> = { get: () => T, set: ($: T) => void } 
}

export namespace pareto__lang__data {
    
    export namespace Unresolved {
        
        export namespace Flat {
            
            export type Atom__Types$D$<_TAnnotation> = null
            
            export type Atom__Types$<_TAnnotation> = _pt.Dictionary<Atom__Types$D$<_TAnnotation>>
            
            export type Atom$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Atom$<_TAnnotation> = {
                readonly 'type': Atom$type$<_TAnnotation>
            }
            
            export type Type$type$array$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$array$<_TAnnotation> = {
                readonly 'type': Type$type$array$type$<_TAnnotation>
            }
            
            export type Type$type$atom$atom$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type Type$type$atom$<_TAnnotation> = {
                readonly 'atom': Type$type$atom$atom$<_TAnnotation>
            }
            
            export type Type$type$component$type$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type Type$type$component$<_TAnnotation> = {
                readonly 'type': Type$type$component$type$<_TAnnotation>
            }
            
            export type Type$type$constraint$<_TAnnotation> = Type__Selection$<_TAnnotation>
            
            export type Type$type$cyclic__reference$atom$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type Type$type$cyclic__reference$sibling$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type Type$type$cyclic__reference$<_TAnnotation> = {
                readonly 'atom': Type$type$cyclic__reference$atom$<_TAnnotation>
                readonly 'sibling': Type$type$cyclic__reference$sibling$<_TAnnotation>
            }
            
            export type Type$type$dictionary$key$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation> = Dictionary__Selection$<_TAnnotation>
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation> = null
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation> = null
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation> = 
                | ['no', Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation>]
                | ['yes', Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation>]
            
            export type Type$type$dictionary$constraints$D$dictionary$<_TAnnotation> = {
                readonly 'dense': Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation>
                readonly 'dictionary': Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation>
            }
            
            export type Type$type$dictionary$constraints$D$lookup$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type Type$type$dictionary$constraints$D$<_TAnnotation> = 
                | ['dictionary', Type$type$dictionary$constraints$D$dictionary$<_TAnnotation>]
                | ['lookup', Type$type$dictionary$constraints$D$lookup$<_TAnnotation>]
            
            export type Type$type$dictionary$constraints$<_TAnnotation> = _pt.Dictionary<Type$type$dictionary$constraints$D$<_TAnnotation>>
            
            export type Type$type$dictionary$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$dictionary$<_TAnnotation> = {
                readonly 'constraints': Type$type$dictionary$constraints$<_TAnnotation>
                readonly 'key': Type$type$dictionary$key$<_TAnnotation>
                readonly 'type': Type$type$dictionary$type$<_TAnnotation>
            }
            
            export type Type$type$group$properties$D$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$group$properties$D$<_TAnnotation> = {
                readonly 'type': Type$type$group$properties$D$type$<_TAnnotation>
            }
            
            export type Type$type$group$properties$<_TAnnotation> = _pt.Dictionary<Type$type$group$properties$D$<_TAnnotation>>
            
            export type Type$type$group$<_TAnnotation> = {
                readonly 'properties': Type$type$group$properties$<_TAnnotation>
            }
            
            export type Type$type$nothing$<_TAnnotation> = null
            
            export type Type$type$optional$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$optional$<_TAnnotation> = {
                readonly 'type': Type$type$optional$type$<_TAnnotation>
            }
            
            export type Type$type$resolved__reference$atom$<_TAnnotation> = Atom$<_TAnnotation>
            
            export type Type$type$resolved__reference$value$dictionary$<_TAnnotation> = Dictionary__Selection$<_TAnnotation>
            
            export type Type$type$resolved__reference$value$lookup$<_TAnnotation> = Global__Type__Selection$<_TAnnotation>
            
            export type Type$type$resolved__reference$value$<_TAnnotation> = 
                | ['dictionary', Type$type$resolved__reference$value$dictionary$<_TAnnotation>]
                | ['lookup', Type$type$resolved__reference$value$lookup$<_TAnnotation>]
            
            export type Type$type$resolved__reference$<_TAnnotation> = {
                readonly 'atom': Type$type$resolved__reference$atom$<_TAnnotation>
                readonly 'value': Type$type$resolved__reference$value$<_TAnnotation>
            }
            
            export type Type$type$state__group$states$D$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$type$state__group$states$D$<_TAnnotation> = {
                readonly 'type': Type$type$state__group$states$D$type$<_TAnnotation>
            }
            
            export type Type$type$state__group$states$<_TAnnotation> = _pt.Dictionary<Type$type$state__group$states$D$<_TAnnotation>>
            
            export type Type$type$state__group$<_TAnnotation> = {
                readonly 'states': Type$type$state__group$states$<_TAnnotation>
            }
            
            export type Type$type$<_TAnnotation> = 
                | ['array', Type$type$array$<_TAnnotation>]
                | ['atom', Type$type$atom$<_TAnnotation>]
                | ['component', Type$type$component$<_TAnnotation>]
                | ['constraint', Type$type$constraint$<_TAnnotation>]
                | ['cyclic reference', Type$type$cyclic__reference$<_TAnnotation>]
                | ['dictionary', Type$type$dictionary$<_TAnnotation>]
                | ['group', Type$type$group$<_TAnnotation>]
                | ['nothing', Type$type$nothing$<_TAnnotation>]
                | ['optional', Type$type$optional$<_TAnnotation>]
                | ['resolved reference', Type$type$resolved__reference$<_TAnnotation>]
                | ['state group', Type$type$state__group$<_TAnnotation>]
            
            export type Type$<_TAnnotation> = {
                readonly 'type': Type$type$<_TAnnotation>
            }
            
            export type Imports$D$library$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Imports$D$<_TAnnotation> = {
                readonly 'library': Imports$D$library$<_TAnnotation>
            }
            
            export type Imports$<_TAnnotation> = _pt.Dictionary<Imports$D$<_TAnnotation>>
            
            export type Global__Type$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Global__Type$<_TAnnotation> = {
                readonly 'type': Global__Type$type$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$dictionary$<_TAnnotation> = {
                readonly 'dictionary': Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$optional$optional$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$optional$<_TAnnotation> = {
                readonly 'optional': Type__Selection__Tail$step__type$optional$optional$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$array$array$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$array$<_TAnnotation> = {
                readonly 'array': Type__Selection__Tail$step__type$array$array$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$group$group$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$group$property$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection__Tail$step__type$group$<_TAnnotation> = {
                readonly 'group': Type__Selection__Tail$step__type$group$group$<_TAnnotation>
                readonly 'property': Type__Selection__Tail$step__type$group$property$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation> = _TAnnotation
            
            export type Type__Selection__Tail$step__type$state__group$state$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection__Tail$step__type$state__group$<_TAnnotation> = {
                readonly 'state': Type__Selection__Tail$step__type$state__group$state$<_TAnnotation>
                readonly 'state group': Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation>
            }
            
            export type Type__Selection__Tail$step__type$<_TAnnotation> = 
                | ['array', Type__Selection__Tail$step__type$array$<_TAnnotation>]
                | ['dictionary', Type__Selection__Tail$step__type$dictionary$<_TAnnotation>]
                | ['group', Type__Selection__Tail$step__type$group$<_TAnnotation>]
                | ['optional', Type__Selection__Tail$step__type$optional$<_TAnnotation>]
                | ['state group', Type__Selection__Tail$step__type$state__group$<_TAnnotation>]
            
            export type Type__Selection__Tail$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection__Tail$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection__Tail$tail$O$<_TAnnotation>>
            
            export type Type__Selection__Tail$<_TAnnotation> = {
                readonly 'step type': Type__Selection__Tail$step__type$<_TAnnotation>
                readonly 'tail': Type__Selection__Tail$tail$<_TAnnotation>
            }
            
            export type Type__Selection$import$O$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection$import$<_TAnnotation> = _pt.OptionalValue<Type__Selection$import$O$<_TAnnotation>>
            
            export type Type__Selection$global__type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type__Selection$tail$O$<_TAnnotation> = Type__Selection__Tail$<_TAnnotation>
            
            export type Type__Selection$tail$<_TAnnotation> = _pt.OptionalValue<Type__Selection$tail$O$<_TAnnotation>>
            
            export type Type__Selection$<_TAnnotation> = {
                readonly 'global type': Type__Selection$global__type$<_TAnnotation>
                readonly 'import': Type__Selection$import$<_TAnnotation>
                readonly 'tail': Type__Selection$tail$<_TAnnotation>
            }
            
            export type Dictionary__Selection$type$<_TAnnotation> = Type__Selection$<_TAnnotation>
            
            export type Dictionary__Selection$dictionary$<_TAnnotation> = _TAnnotation
            
            export type Dictionary__Selection$<_TAnnotation> = {
                readonly 'dictionary': Dictionary__Selection$dictionary$<_TAnnotation>
                readonly 'type': Dictionary__Selection$type$<_TAnnotation>
            }
            
            export type Type__Library$imports$<_TAnnotation> = Imports$<_TAnnotation>
            
            export type Type__Library$atom__types$<_TAnnotation> = Atom__Types$<_TAnnotation>
            
            export type Type__Library$global__types$D$<_TAnnotation> = Global__Type$<_TAnnotation>
            
            export type Type__Library$global__types$<_TAnnotation> = _pt.Dictionary<Type__Library$global__types$D$<_TAnnotation>>
            
            export type Type__Library$<_TAnnotation> = {
                readonly 'atom types': Type__Library$atom__types$<_TAnnotation>
                readonly 'global types': Type__Library$global__types$<_TAnnotation>
                readonly 'imports': Type__Library$imports$<_TAnnotation>
            }
            
            export type Global__Type__Selection$resolved__sibling$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Selection$resolved__sibling$<_TAnnotation> = {
                readonly 'type': Global__Type__Selection$resolved__sibling$type$<_TAnnotation>
            }
            
            export type Global__Type__Selection$import$library$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Selection$import$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Selection$import$<_TAnnotation> = {
                readonly 'library': Global__Type__Selection$import$library$<_TAnnotation>
                readonly 'type': Global__Type__Selection$import$type$<_TAnnotation>
            }
            
            export type Global__Type__Selection$cyclic__sibling$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Global__Type__Selection$cyclic__sibling$<_TAnnotation> = {
                readonly 'type': Global__Type__Selection$cyclic__sibling$type$<_TAnnotation>
            }
            
            export type Global__Type__Selection$<_TAnnotation> = 
                | ['cyclic sibling', Global__Type__Selection$cyclic__sibling$<_TAnnotation>]
                | ['import', Global__Type__Selection$import$<_TAnnotation>]
                | ['resolved sibling', Global__Type__Selection$resolved__sibling$<_TAnnotation>]
            
            export type Model$type__library$<_TAnnotation> = Type__Library$<_TAnnotation>
            
            export type Model$root$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Model$<_TAnnotation> = {
                readonly 'root': Model$root$<_TAnnotation>
                readonly 'type library': Model$type__library$<_TAnnotation>
            }
            
            export type Project$type__libraries$D$<_TAnnotation> = Type__Library$<_TAnnotation>
            
            export type Project$type__libraries$<_TAnnotation> = _pt.Dictionary<Project$type__libraries$D$<_TAnnotation>>
            
            export type Project$<_TAnnotation> = {
                readonly 'type libraries': Project$type__libraries$<_TAnnotation>
            }
            
            export type Root$<_TAnnotation> = Project$<_TAnnotation>
        }
        
        export namespace T {
            
            import _IFlat = Flat
            
            export namespace Atom__Types {
                
                import _IFlat = Flat
                
                export namespace D {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Atom__Types$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Atom__Types$<_TAnnotation>
            }
            
            export namespace Atom {
                
                import _IFlat = Flat
                
                export namespace _ltype {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Atom$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Atom$<_TAnnotation>
            }
            
            export namespace TType {
                
                import _IFlat = Flat
                
                export namespace _ltype {
                    
                    import _IFlat = Flat
                    
                    export namespace array {
                        
                        import _IFlat = Flat
                        
                        export namespace _ltype {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$array$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$array$<_TAnnotation>
                    }
                    
                    export namespace atom {
                        
                        import _IFlat = Flat
                        
                        export namespace atom {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$atom$atom$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$atom$<_TAnnotation>
                    }
                    
                    export namespace component {
                        
                        import _IFlat = Flat
                        
                        export namespace _ltype {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$component$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$component$<_TAnnotation>
                    }
                    
                    export namespace constraint {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$constraint$<_TAnnotation>
                    }
                    
                    export namespace cyclic__reference {
                        
                        import _IFlat = Flat
                        
                        export namespace atom {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$atom$<_TAnnotation>
                        }
                        
                        export namespace sibling {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$sibling$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$cyclic__reference$<_TAnnotation>
                    }
                    
                    export namespace dictionary {
                        
                        import _IFlat = Flat
                        
                        export namespace key {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$key$<_TAnnotation>
                        }
                        
                        export namespace constraints {
                            
                            import _IFlat = Flat
                            
                            export namespace D {
                                
                                import _IFlat = Flat
                                
                                export namespace dictionary {
                                    
                                    import _IFlat = Flat
                                    
                                    export namespace dictionary {
                                        
                                        import _IFlat = Flat
                                        
                                        export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dictionary$<_TAnnotation>
                                    }
                                    
                                    export namespace dense {
                                        
                                        import _IFlat = Flat
                                        
                                        export namespace no {
                                            
                                            import _IFlat = Flat
                                            
                                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$no$<_TAnnotation>
                                        }
                                        
                                        export namespace yes {
                                            
                                            import _IFlat = Flat
                                            
                                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$yes$<_TAnnotation>
                                        }
                                        
                                        export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$<_TAnnotation>
                                    }
                                    
                                    export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$dictionary$<_TAnnotation>
                                }
                                
                                export namespace lookup {
                                    
                                    import _IFlat = Flat
                                    
                                    export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$lookup$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$constraints$<_TAnnotation>
                        }
                        
                        export namespace _ltype {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$dictionary$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$dictionary$<_TAnnotation>
                    }
                    
                    export namespace group {
                        
                        import _IFlat = Flat
                        
                        export namespace properties {
                            
                            import _IFlat = Flat
                            
                            export namespace D {
                                
                                import _IFlat = Flat
                                
                                export namespace _ltype {
                                    
                                    import _IFlat = Flat
                                    
                                    export type $<_TAnnotation> = _IFlat.Type$type$group$properties$D$type$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$group$properties$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$group$properties$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$group$<_TAnnotation>
                    }
                    
                    export namespace nothing {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$nothing$<_TAnnotation>
                    }
                    
                    export namespace optional {
                        
                        import _IFlat = Flat
                        
                        export namespace _ltype {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$optional$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$optional$<_TAnnotation>
                    }
                    
                    export namespace resolved__reference {
                        
                        import _IFlat = Flat
                        
                        export namespace atom {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$atom$<_TAnnotation>
                        }
                        
                        export namespace value {
                            
                            import _IFlat = Flat
                            
                            export namespace dictionary {
                                
                                import _IFlat = Flat
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$dictionary$<_TAnnotation>
                            }
                            
                            export namespace lookup {
                                
                                import _IFlat = Flat
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$lookup$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$value$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$resolved__reference$<_TAnnotation>
                    }
                    
                    export namespace state__group {
                        
                        import _IFlat = Flat
                        
                        export namespace states {
                            
                            import _IFlat = Flat
                            
                            export namespace D {
                                
                                import _IFlat = Flat
                                
                                export namespace _ltype {
                                    
                                    import _IFlat = Flat
                                    
                                    export type $<_TAnnotation> = _IFlat.Type$type$state__group$states$D$type$<_TAnnotation>
                                }
                                
                                export type $<_TAnnotation> = _IFlat.Type$type$state__group$states$D$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$type$state__group$states$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type$state__group$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type$<_TAnnotation>
            }
            
            export namespace Imports {
                
                import _IFlat = Flat
                
                export namespace D {
                    
                    import _IFlat = Flat
                    
                    export namespace library {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Imports$D$library$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Imports$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Imports$<_TAnnotation>
            }
            
            export namespace Global__Type {
                
                import _IFlat = Flat
                
                export namespace _ltype {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type$type$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Global__Type$<_TAnnotation>
            }
            
            export namespace TType__Selection__Tail {
                
                import _IFlat = Flat
                
                export namespace step__type {
                    
                    import _IFlat = Flat
                    
                    export namespace dictionary {
                        
                        import _IFlat = Flat
                        
                        export namespace dictionary {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$dictionary$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$dictionary$<_TAnnotation>
                    }
                    
                    export namespace optional {
                        
                        import _IFlat = Flat
                        
                        export namespace optional {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$optional$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$optional$<_TAnnotation>
                    }
                    
                    export namespace array {
                        
                        import _IFlat = Flat
                        
                        export namespace array {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$array$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$array$<_TAnnotation>
                    }
                    
                    export namespace group {
                        
                        import _IFlat = Flat
                        
                        export namespace group {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$group$<_TAnnotation>
                        }
                        
                        export namespace property {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$property$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$group$<_TAnnotation>
                    }
                    
                    export namespace state__group {
                        
                        import _IFlat = Flat
                        
                        export namespace state__group {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$state__group$<_TAnnotation>
                        }
                        
                        export namespace state {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$state$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$state__group$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$step__type$<_TAnnotation>
                }
                
                export namespace tail {
                    
                    import _IFlat = Flat
                    
                    export namespace O {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$tail$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$tail$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Selection__Tail$<_TAnnotation>
            }
            
            export namespace TType__Selection {
                
                import _IFlat = Flat
                
                export namespace _limport {
                    
                    import _IFlat = Flat
                    
                    export namespace O {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection$import$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection$import$<_TAnnotation>
                }
                
                export namespace global__type {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection$global__type$<_TAnnotation>
                }
                
                export namespace tail {
                    
                    import _IFlat = Flat
                    
                    export namespace O {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type__Selection$tail$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Selection$tail$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Selection$<_TAnnotation>
            }
            
            export namespace Dictionary__Selection {
                
                import _IFlat = Flat
                
                export namespace _ltype {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Dictionary__Selection$type$<_TAnnotation>
                }
                
                export namespace dictionary {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Dictionary__Selection$dictionary$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Dictionary__Selection$<_TAnnotation>
            }
            
            export namespace TType__Library {
                
                import _IFlat = Flat
                
                export namespace imports {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Type__Library$imports$<_TAnnotation>
                }
                
                export namespace atom__types {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Type__Library$atom__types$<_TAnnotation>
                }
                
                export namespace global__types {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type__Library$global__types$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Library$global__types$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Library$<_TAnnotation>
            }
            
            export namespace Global__Type__Selection {
                
                import _IFlat = Flat
                
                export namespace resolved__sibling {
                    
                    import _IFlat = Flat
                    
                    export namespace _ltype {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Selection$resolved__sibling$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Selection$resolved__sibling$<_TAnnotation>
                }
                
                export namespace _limport {
                    
                    import _IFlat = Flat
                    
                    export namespace library {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$library$<_TAnnotation>
                    }
                    
                    export namespace _ltype {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Selection$import$<_TAnnotation>
                }
                
                export namespace cyclic__sibling {
                    
                    import _IFlat = Flat
                    
                    export namespace _ltype {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Global__Type__Selection$cyclic__sibling$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Global__Type__Selection$cyclic__sibling$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Global__Type__Selection$<_TAnnotation>
            }
            
            export namespace Model {
                
                import _IFlat = Flat
                
                export namespace type__library {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Model$type__library$<_TAnnotation>
                }
                
                export namespace root {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Model$root$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Model$<_TAnnotation>
            }
            
            export namespace Project {
                
                import _IFlat = Flat
                
                export namespace type__libraries {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Project$type__libraries$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Project$type__libraries$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Project$<_TAnnotation>
            }
            
            export namespace Root {
                
                import _IFlat = Flat
                
                export type $<_TAnnotation> = _IFlat.Root$<_TAnnotation>
            }
        }
    }
    
    export namespace Resolved {
        
        export namespace Flat {
            
            export type Atom__Types$D$ = null
            
            export type Atom__Types$ = _pt.Dictionary<Atom__Types$D$>
            
            export type Atom$type$ = {
                readonly 'key': string
                readonly 'referent': Atom__Types$
            }
            
            export type Atom$ = {
                readonly 'type': Atom$type$
            }
            
            export type Type$type$array$type$ = Type$
            
            export type Type$type$array$ = {
                readonly 'type': Type$type$array$type$
            }
            
            export type Type$type$atom$atom$ = Atom$
            
            export type Type$type$atom$ = {
                readonly 'atom': Type$type$atom$atom$
            }
            
            export type Type$type$component$type$ = Global__Type__Selection$
            
            export type Type$type$component$ = {
                readonly 'type': Type$type$component$type$
            }
            
            export type Type$type$constraint$ = Type__Selection$
            
            export type Type$type$cyclic__reference$atom$ = Atom$
            
            export type Type$type$cyclic__reference$sibling$ = Global__Type__Selection$
            
            export type Type$type$cyclic__reference$ = {
                readonly 'atom': Type$type$cyclic__reference$atom$
                readonly 'sibling': Type$type$cyclic__reference$sibling$
            }
            
            export type Type$type$dictionary$key$ = Atom$
            
            export type Type$type$dictionary$constraints$D$dictionary$dictionary$ = Dictionary__Selection$
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$no$ = null
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$yes$ = null
            
            export type Type$type$dictionary$constraints$D$dictionary$dense$ = 
                | ['no', Type$type$dictionary$constraints$D$dictionary$dense$no$]
                | ['yes', Type$type$dictionary$constraints$D$dictionary$dense$yes$]
            
            export type Type$type$dictionary$constraints$D$dictionary$ = {
                readonly 'dense': Type$type$dictionary$constraints$D$dictionary$dense$
                readonly 'dictionary': Type$type$dictionary$constraints$D$dictionary$dictionary$
            }
            
            export type Type$type$dictionary$constraints$D$lookup$ = Global__Type__Selection$
            
            export type Type$type$dictionary$constraints$D$ = 
                | ['dictionary', Type$type$dictionary$constraints$D$dictionary$]
                | ['lookup', Type$type$dictionary$constraints$D$lookup$]
            
            export type Type$type$dictionary$constraints$ = _pt.Dictionary<Type$type$dictionary$constraints$D$>
            
            export type Type$type$dictionary$type$ = Type$
            
            export type Type$type$dictionary$ = {
                readonly 'constraints': Type$type$dictionary$constraints$
                readonly 'key': Type$type$dictionary$key$
                readonly 'type': Type$type$dictionary$type$
            }
            
            export type Type$type$group$properties$D$type$ = Type$
            
            export type Type$type$group$properties$D$ = {
                readonly 'type': Type$type$group$properties$D$type$
            }
            
            export type Type$type$group$properties$ = _pt.Dictionary<Type$type$group$properties$D$>
            
            export type Type$type$group$ = {
                readonly 'properties': Type$type$group$properties$
            }
            
            export type Type$type$nothing$ = null
            
            export type Type$type$optional$type$ = Type$
            
            export type Type$type$optional$ = {
                readonly 'type': Type$type$optional$type$
            }
            
            export type Type$type$resolved__reference$atom$ = Atom$
            
            export type Type$type$resolved__reference$value$dictionary$ = Dictionary__Selection$
            
            export type Type$type$resolved__reference$value$lookup$ = Global__Type__Selection$
            
            export type Type$type$resolved__reference$value$ = 
                | ['dictionary', Type$type$resolved__reference$value$dictionary$]
                | ['lookup', Type$type$resolved__reference$value$lookup$]
            
            export type Type$type$resolved__reference$ = {
                readonly 'atom': Type$type$resolved__reference$atom$
                readonly 'value': Type$type$resolved__reference$value$
            }
            
            export type Type$type$state__group$states$D$type$ = Type$
            
            export type Type$type$state__group$states$D$ = {
                readonly 'type': Type$type$state__group$states$D$type$
            }
            
            export type Type$type$state__group$states$ = _pt.Dictionary<Type$type$state__group$states$D$>
            
            export type Type$type$state__group$ = {
                readonly 'states': Type$type$state__group$states$
            }
            
            export type Type$type$ = 
                | ['array', Type$type$array$]
                | ['atom', Type$type$atom$]
                | ['component', Type$type$component$]
                | ['constraint', Type$type$constraint$]
                | ['cyclic reference', Type$type$cyclic__reference$]
                | ['dictionary', Type$type$dictionary$]
                | ['group', Type$type$group$]
                | ['nothing', Type$type$nothing$]
                | ['optional', Type$type$optional$]
                | ['resolved reference', Type$type$resolved__reference$]
                | ['state group', Type$type$state__group$]
            
            export type Type$ = {
                readonly 'type': Type$type$
            }
            
            export type Imports$D$library$ = {
                readonly 'key': string
                readonly 'referent': Type__Library$
            }
            
            export type Imports$D$ = {
                readonly 'library': Imports$D$library$
            }
            
            export type Imports$ = _pt.Dictionary<Imports$D$>
            
            export type Global__Type$type$ = Type$
            
            export type Global__Type$ = {
                readonly 'type': Global__Type$type$
            }
            
            export type Type__Selection__Tail$step__type$dictionary$dictionary$ = Type$type$dictionary$
            
            export type Type__Selection__Tail$step__type$dictionary$ = {
                readonly 'dictionary': Type__Selection__Tail$step__type$dictionary$dictionary$
            }
            
            export type Type__Selection__Tail$step__type$optional$optional$ = Type$type$optional$
            
            export type Type__Selection__Tail$step__type$optional$ = {
                readonly 'optional': Type__Selection__Tail$step__type$optional$optional$
            }
            
            export type Type__Selection__Tail$step__type$array$array$ = Type$type$array$
            
            export type Type__Selection__Tail$step__type$array$ = {
                readonly 'array': Type__Selection__Tail$step__type$array$array$
            }
            
            export type Type__Selection__Tail$step__type$group$group$ = Type$type$group$
            
            export type Type__Selection__Tail$step__type$group$property$ = {
                readonly 'key': string
                readonly 'referent': Type$type$group$properties$
            }
            
            export type Type__Selection__Tail$step__type$group$ = {
                readonly 'group': Type__Selection__Tail$step__type$group$group$
                readonly 'property': Type__Selection__Tail$step__type$group$property$
            }
            
            export type Type__Selection__Tail$step__type$state__group$state__group$ = Type$type$state__group$
            
            export type Type__Selection__Tail$step__type$state__group$state$ = {
                readonly 'key': string
                readonly 'referent': Type$type$state__group$states$
            }
            
            export type Type__Selection__Tail$step__type$state__group$ = {
                readonly 'state': Type__Selection__Tail$step__type$state__group$state$
                readonly 'state group': Type__Selection__Tail$step__type$state__group$state__group$
            }
            
            export type Type__Selection__Tail$step__type$ = 
                | ['array', Type__Selection__Tail$step__type$array$]
                | ['dictionary', Type__Selection__Tail$step__type$dictionary$]
                | ['group', Type__Selection__Tail$step__type$group$]
                | ['optional', Type__Selection__Tail$step__type$optional$]
                | ['state group', Type__Selection__Tail$step__type$state__group$]
            
            export type Type__Selection__Tail$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection__Tail$tail$ = _pt.OptionalValue<Type__Selection__Tail$tail$O$>
            
            export type Type__Selection__Tail$ = {
                readonly 'step type': Type__Selection__Tail$step__type$
                readonly 'tail': Type__Selection__Tail$tail$
            }
            
            export type Type__Selection$import$O$ = {
                readonly 'key': string
                readonly 'referent': Imports$
            }
            
            export type Type__Selection$import$ = _pt.OptionalValue<Type__Selection$import$O$>
            
            export type Type__Selection$global__type$ = {
                readonly 'key': string
                readonly 'referent': Global__Type$
            }
            
            export type Type__Selection$tail$O$ = Type__Selection__Tail$
            
            export type Type__Selection$tail$ = _pt.OptionalValue<Type__Selection$tail$O$>
            
            export type Type__Selection$ = {
                readonly 'global type': Type__Selection$global__type$
                readonly 'import': Type__Selection$import$
                readonly 'tail': Type__Selection$tail$
            }
            
            export type Dictionary__Selection$type$ = Type__Selection$
            
            export type Dictionary__Selection$dictionary$ = Type$type$dictionary$
            
            export type Dictionary__Selection$ = {
                readonly 'dictionary': Dictionary__Selection$dictionary$
                readonly 'type': Dictionary__Selection$type$
            }
            
            export type Type__Library$imports$ = Imports$
            
            export type Type__Library$atom__types$ = Atom__Types$
            
            export type Type__Library$global__types$D$ = Global__Type$
            
            export type Type__Library$global__types$ = _pt.Dictionary<Type__Library$global__types$D$>
            
            export type Type__Library$ = {
                readonly 'atom types': Type__Library$atom__types$
                readonly 'global types': Type__Library$global__types$
                readonly 'imports': Type__Library$imports$
            }
            
            export type Global__Type__Selection$resolved__sibling$type$ = {
                readonly 'key': string
                readonly 'referent': Global__Type$
            }
            
            export type Global__Type__Selection$resolved__sibling$ = {
                readonly 'type': Global__Type__Selection$resolved__sibling$type$
            }
            
            export type Global__Type__Selection$import$library$ = {
                readonly 'key': string
                readonly 'referent': Imports$
            }
            
            export type Global__Type__Selection$import$type$ = {
                readonly 'key': string
                readonly 'referent': Type__Library$global__types$
            }
            
            export type Global__Type__Selection$import$ = {
                readonly 'library': Global__Type__Selection$import$library$
                readonly 'type': Global__Type__Selection$import$type$
            }
            
            export type Global__Type__Selection$cyclic__sibling$type$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Global__Type$>
            }
            
            export type Global__Type__Selection$cyclic__sibling$ = {
                readonly 'type': Global__Type__Selection$cyclic__sibling$type$
            }
            
            export type Global__Type__Selection$ = 
                | ['cyclic sibling', Global__Type__Selection$cyclic__sibling$]
                | ['import', Global__Type__Selection$import$]
                | ['resolved sibling', Global__Type__Selection$resolved__sibling$]
            
            export type Model$type__library$ = Type__Library$
            
            export type Model$root$ = {
                readonly 'key': string
                readonly 'referent': Type__Library$global__types$
            }
            
            export type Model$ = {
                readonly 'root': Model$root$
                readonly 'type library': Model$type__library$
            }
            
            export type Project$type__libraries$D$ = Type__Library$
            
            export type Project$type__libraries$ = _pt.Dictionary<Project$type__libraries$D$>
            
            export type Project$ = {
                readonly 'type libraries': Project$type__libraries$
            }
            
            export type Root$ = Project$
        }
        
        export namespace T {
            
            import _IFlat = Flat
            
            export namespace Atom__Types {
                
                import _IFlat = Flat
                
                export namespace D {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Atom__Types$D$
                }
                
                export type $ = _IFlat.Atom__Types$
            }
            
            export namespace Atom {
                
                import _IFlat = Flat
                
                export namespace _ltype {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Atom$type$
                }
                
                export type $ = _IFlat.Atom$
            }
            
            export namespace TType {
                
                import _IFlat = Flat
                
                export namespace _ltype {
                    
                    import _IFlat = Flat
                    
                    export namespace array {
                        
                        import _IFlat = Flat
                        
                        export namespace _ltype {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type$type$array$type$
                        }
                        
                        export type $ = _IFlat.Type$type$array$
                    }
                    
                    export namespace atom {
                        
                        import _IFlat = Flat
                        
                        export namespace atom {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type$type$atom$atom$
                        }
                        
                        export type $ = _IFlat.Type$type$atom$
                    }
                    
                    export namespace component {
                        
                        import _IFlat = Flat
                        
                        export namespace _ltype {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type$type$component$type$
                        }
                        
                        export type $ = _IFlat.Type$type$component$
                    }
                    
                    export namespace constraint {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type$type$constraint$
                    }
                    
                    export namespace cyclic__reference {
                        
                        import _IFlat = Flat
                        
                        export namespace atom {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type$type$cyclic__reference$atom$
                        }
                        
                        export namespace sibling {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type$type$cyclic__reference$sibling$
                        }
                        
                        export type $ = _IFlat.Type$type$cyclic__reference$
                    }
                    
                    export namespace dictionary {
                        
                        import _IFlat = Flat
                        
                        export namespace key {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type$type$dictionary$key$
                        }
                        
                        export namespace constraints {
                            
                            import _IFlat = Flat
                            
                            export namespace D {
                                
                                import _IFlat = Flat
                                
                                export namespace dictionary {
                                    
                                    import _IFlat = Flat
                                    
                                    export namespace dictionary {
                                        
                                        import _IFlat = Flat
                                        
                                        export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dictionary$
                                    }
                                    
                                    export namespace dense {
                                        
                                        import _IFlat = Flat
                                        
                                        export namespace no {
                                            
                                            import _IFlat = Flat
                                            
                                            export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$no$
                                        }
                                        
                                        export namespace yes {
                                            
                                            import _IFlat = Flat
                                            
                                            export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$yes$
                                        }
                                        
                                        export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$dense$
                                    }
                                    
                                    export type $ = _IFlat.Type$type$dictionary$constraints$D$dictionary$
                                }
                                
                                export namespace lookup {
                                    
                                    import _IFlat = Flat
                                    
                                    export type $ = _IFlat.Type$type$dictionary$constraints$D$lookup$
                                }
                                
                                export type $ = _IFlat.Type$type$dictionary$constraints$D$
                            }
                            
                            export type $ = _IFlat.Type$type$dictionary$constraints$
                        }
                        
                        export namespace _ltype {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type$type$dictionary$type$
                        }
                        
                        export type $ = _IFlat.Type$type$dictionary$
                    }
                    
                    export namespace group {
                        
                        import _IFlat = Flat
                        
                        export namespace properties {
                            
                            import _IFlat = Flat
                            
                            export namespace D {
                                
                                import _IFlat = Flat
                                
                                export namespace _ltype {
                                    
                                    import _IFlat = Flat
                                    
                                    export type $ = _IFlat.Type$type$group$properties$D$type$
                                }
                                
                                export type $ = _IFlat.Type$type$group$properties$D$
                            }
                            
                            export type $ = _IFlat.Type$type$group$properties$
                        }
                        
                        export type $ = _IFlat.Type$type$group$
                    }
                    
                    export namespace nothing {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type$type$nothing$
                    }
                    
                    export namespace optional {
                        
                        import _IFlat = Flat
                        
                        export namespace _ltype {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type$type$optional$type$
                        }
                        
                        export type $ = _IFlat.Type$type$optional$
                    }
                    
                    export namespace resolved__reference {
                        
                        import _IFlat = Flat
                        
                        export namespace atom {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type$type$resolved__reference$atom$
                        }
                        
                        export namespace value {
                            
                            import _IFlat = Flat
                            
                            export namespace dictionary {
                                
                                import _IFlat = Flat
                                
                                export type $ = _IFlat.Type$type$resolved__reference$value$dictionary$
                            }
                            
                            export namespace lookup {
                                
                                import _IFlat = Flat
                                
                                export type $ = _IFlat.Type$type$resolved__reference$value$lookup$
                            }
                            
                            export type $ = _IFlat.Type$type$resolved__reference$value$
                        }
                        
                        export type $ = _IFlat.Type$type$resolved__reference$
                    }
                    
                    export namespace state__group {
                        
                        import _IFlat = Flat
                        
                        export namespace states {
                            
                            import _IFlat = Flat
                            
                            export namespace D {
                                
                                import _IFlat = Flat
                                
                                export namespace _ltype {
                                    
                                    import _IFlat = Flat
                                    
                                    export type $ = _IFlat.Type$type$state__group$states$D$type$
                                }
                                
                                export type $ = _IFlat.Type$type$state__group$states$D$
                            }
                            
                            export type $ = _IFlat.Type$type$state__group$states$
                        }
                        
                        export type $ = _IFlat.Type$type$state__group$
                    }
                    
                    export type $ = _IFlat.Type$type$
                }
                
                export type $ = _IFlat.Type$
            }
            
            export namespace Imports {
                
                import _IFlat = Flat
                
                export namespace D {
                    
                    import _IFlat = Flat
                    
                    export namespace library {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Imports$D$library$
                    }
                    
                    export type $ = _IFlat.Imports$D$
                }
                
                export type $ = _IFlat.Imports$
            }
            
            export namespace Global__Type {
                
                import _IFlat = Flat
                
                export namespace _ltype {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Global__Type$type$
                }
                
                export type $ = _IFlat.Global__Type$
            }
            
            export namespace TType__Selection__Tail {
                
                import _IFlat = Flat
                
                export namespace step__type {
                    
                    import _IFlat = Flat
                    
                    export namespace dictionary {
                        
                        import _IFlat = Flat
                        
                        export namespace dictionary {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$dictionary$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$dictionary$
                    }
                    
                    export namespace optional {
                        
                        import _IFlat = Flat
                        
                        export namespace optional {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$optional$optional$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$optional$
                    }
                    
                    export namespace array {
                        
                        import _IFlat = Flat
                        
                        export namespace array {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$array$array$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$array$
                    }
                    
                    export namespace group {
                        
                        import _IFlat = Flat
                        
                        export namespace group {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$group$group$
                        }
                        
                        export namespace property {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$group$property$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$group$
                    }
                    
                    export namespace state__group {
                        
                        import _IFlat = Flat
                        
                        export namespace state__group {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$state__group$
                        }
                        
                        export namespace state {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$state$
                        }
                        
                        export type $ = _IFlat.Type__Selection__Tail$step__type$state__group$
                    }
                    
                    export type $ = _IFlat.Type__Selection__Tail$step__type$
                }
                
                export namespace tail {
                    
                    import _IFlat = Flat
                    
                    export namespace O {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type__Selection__Tail$tail$O$
                    }
                    
                    export type $ = _IFlat.Type__Selection__Tail$tail$
                }
                
                export type $ = _IFlat.Type__Selection__Tail$
            }
            
            export namespace TType__Selection {
                
                import _IFlat = Flat
                
                export namespace _limport {
                    
                    import _IFlat = Flat
                    
                    export namespace O {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type__Selection$import$O$
                    }
                    
                    export type $ = _IFlat.Type__Selection$import$
                }
                
                export namespace global__type {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Type__Selection$global__type$
                }
                
                export namespace tail {
                    
                    import _IFlat = Flat
                    
                    export namespace O {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type__Selection$tail$O$
                    }
                    
                    export type $ = _IFlat.Type__Selection$tail$
                }
                
                export type $ = _IFlat.Type__Selection$
            }
            
            export namespace Dictionary__Selection {
                
                import _IFlat = Flat
                
                export namespace _ltype {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Dictionary__Selection$type$
                }
                
                export namespace dictionary {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Dictionary__Selection$dictionary$
                }
                
                export type $ = _IFlat.Dictionary__Selection$
            }
            
            export namespace TType__Library {
                
                import _IFlat = Flat
                
                export namespace imports {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Type__Library$imports$
                }
                
                export namespace atom__types {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Type__Library$atom__types$
                }
                
                export namespace global__types {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type__Library$global__types$D$
                    }
                    
                    export type $ = _IFlat.Type__Library$global__types$
                }
                
                export type $ = _IFlat.Type__Library$
            }
            
            export namespace Global__Type__Selection {
                
                import _IFlat = Flat
                
                export namespace resolved__sibling {
                    
                    import _IFlat = Flat
                    
                    export namespace _ltype {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Global__Type__Selection$resolved__sibling$type$
                    }
                    
                    export type $ = _IFlat.Global__Type__Selection$resolved__sibling$
                }
                
                export namespace _limport {
                    
                    import _IFlat = Flat
                    
                    export namespace library {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Global__Type__Selection$import$library$
                    }
                    
                    export namespace _ltype {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Global__Type__Selection$import$type$
                    }
                    
                    export type $ = _IFlat.Global__Type__Selection$import$
                }
                
                export namespace cyclic__sibling {
                    
                    import _IFlat = Flat
                    
                    export namespace _ltype {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Global__Type__Selection$cyclic__sibling$type$
                    }
                    
                    export type $ = _IFlat.Global__Type__Selection$cyclic__sibling$
                }
                
                export type $ = _IFlat.Global__Type__Selection$
            }
            
            export namespace Model {
                
                import _IFlat = Flat
                
                export namespace type__library {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Model$type__library$
                }
                
                export namespace root {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Model$root$
                }
                
                export type $ = _IFlat.Model$
            }
            
            export namespace Project {
                
                import _IFlat = Flat
                
                export namespace type__libraries {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Project$type__libraries$D$
                    }
                    
                    export type $ = _IFlat.Project$type__libraries$
                }
                
                export type $ = _IFlat.Project$
            }
            
            export namespace Root {
                
                import _IFlat = Flat
                
                export type $ = _IFlat.Root$
            }
        }
    }
    
    export namespace Resolve {
        
        import _IResolved = Resolved
        
        import _IUnresolved = Unresolved
        
        export type Atom__Types = <_TAnnotation>(
            $: _IUnresolved.Flat.Atom__Types$<_TAnnotation>,
        ) => _IResolved.Flat.Atom__Types$
        
        export type Atom = <_TAnnotation>(
            $: _IUnresolved.Flat.Atom$<_TAnnotation>,
            $p: {
                readonly 'atom types': _IResolved.Flat.Atom__Types$
            }
        ) => _IResolved.Flat.Atom$
        
        export type Dictionary__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Dictionary__Selection$<_TAnnotation>,
            $p: {
                readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type$>>
                readonly 'imports': _IResolved.Flat.Imports$
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type$>
            }
        ) => _IResolved.Flat.Dictionary__Selection$
        
        export type Global__Type__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Global__Type__Selection$<_TAnnotation>,
            $p: {
                readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type$>>
                readonly 'imports': _IResolved.Flat.Imports$
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type$>
            }
        ) => _IResolved.Flat.Global__Type__Selection$
        
        export type Global__Type = <_TAnnotation>(
            $: _IUnresolved.Flat.Global__Type$<_TAnnotation>,
        ) => _IResolved.Flat.Global__Type$
        
        export type Imports = <_TAnnotation>(
            $: _IUnresolved.Flat.Imports$<_TAnnotation>,
        ) => _IResolved.Flat.Imports$
        
        export type Model = <_TAnnotation>(
            $: _IUnresolved.Flat.Model$<_TAnnotation>,
            $p: {
                readonly 'external type libraries': _pt.Lookup<_IResolved.Flat.Type__Library$>
            }
        ) => _IResolved.Flat.Model$
        
        export type Project = <_TAnnotation>(
            $: _IUnresolved.Flat.Project$<_TAnnotation>,
        ) => _IResolved.Flat.Project$
        
        export type Root = <_TAnnotation>(
            $: _IUnresolved.Flat.Root$<_TAnnotation>,
        ) => _IResolved.Flat.Root$
        
        export type Type__Library = <_TAnnotation>(
            $: _IUnresolved.Flat.Type__Library$<_TAnnotation>,
            $p: {
                readonly 'external type libraries': _pt.Lookup<_IResolved.Flat.Type__Library$>
            }
        ) => _IResolved.Flat.Type__Library$
        
        export type Type__Selection__Tail = <_TAnnotation>(
            $: _IUnresolved.Flat.Type__Selection__Tail$<_TAnnotation>,
            $p: {
                readonly 'context': _IResolved.Flat.Type$
            }
        ) => _IResolved.Flat.Type__Selection__Tail$
        
        export type Type__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Type__Selection$<_TAnnotation>,
            $p: {
                readonly 'imports': _IResolved.Flat.Imports$
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type$>
            }
        ) => _IResolved.Flat.Type__Selection$
        
        export type Type = <_TAnnotation>(
            $: _IUnresolved.Flat.Type$<_TAnnotation>,
            $p: {
                readonly 'atom types': _IResolved.Flat.Atom__Types$
                readonly 'cyclic sibling global types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Global__Type$>>
                readonly 'imports': _IResolved.Flat.Imports$
                readonly 'sibling global types': _pt.Lookup<_IResolved.Flat.Global__Type$>
            }
        ) => _IResolved.Flat.Type$
    }
    
    export namespace Serialize {
        
        import _IResolved = Resolved
        
        export type Atom__Types = (
            $: _IResolved.Flat.Atom__Types$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Atom = (
            $: _IResolved.Flat.Atom$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type = (
            $: _IResolved.Flat.Type$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Imports = (
            $: _IResolved.Flat.Imports$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Global__Type = (
            $: _IResolved.Flat.Global__Type$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type__Selection__Tail = (
            $: _IResolved.Flat.Type__Selection__Tail$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type__Selection = (
            $: _IResolved.Flat.Type__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Dictionary__Selection = (
            $: _IResolved.Flat.Dictionary__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type__Library = (
            $: _IResolved.Flat.Type__Library$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Global__Type__Selection = (
            $: _IResolved.Flat.Global__Type__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Model = (
            $: _IResolved.Flat.Model$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Project = (
            $: _IResolved.Flat.Project$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Root = (
            $: _IResolved.Flat.Root$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
    }
    
    export namespace Select {
        
        import _IResolved = Resolved
        
        export type Type__Selection__Tail = (
            $: _IResolved.Flat.Type__Selection__Tail$,
        ) => _IResolved.Flat.Type$
        
        export type Type__Selection = (
            $: _IResolved.Flat.Type__Selection$,
        ) => _IResolved.Flat.Type$
    }
    
    export type _$ = (
        $: null,
    ) => {
        readonly 'Atom': {
            readonly 'Resolve': Resolve.Atom
            readonly 'Serialize': Serialize.Atom
        }
        readonly 'Atom Types': {
            readonly 'Resolve': Resolve.Atom__Types
            readonly 'Serialize': Serialize.Atom__Types
        }
        readonly 'Dictionary Selection': {
            readonly 'Resolve': Resolve.Dictionary__Selection
            readonly 'Serialize': Serialize.Dictionary__Selection
        }
        readonly 'Global Type': {
            readonly 'Resolve': Resolve.Global__Type
            readonly 'Serialize': Serialize.Global__Type
        }
        readonly 'Global Type Selection': {
            readonly 'Resolve': Resolve.Global__Type__Selection
            readonly 'Serialize': Serialize.Global__Type__Selection
        }
        readonly 'Imports': {
            readonly 'Resolve': Resolve.Imports
            readonly 'Serialize': Serialize.Imports
        }
        readonly 'Model': {
            readonly 'Resolve': Resolve.Model
            readonly 'Serialize': Serialize.Model
        }
        readonly 'Project': {
            readonly 'Resolve': Resolve.Project
            readonly 'Serialize': Serialize.Project
        }
        readonly 'Root': {
            readonly 'Resolve': Resolve.Root
            readonly 'Serialize': Serialize.Root
        }
        readonly 'Type': {
            readonly 'Resolve': Resolve.Type
            readonly 'Serialize': Serialize.Type
        }
        readonly 'Type Library': {
            readonly 'Resolve': Resolve.Type__Library
            readonly 'Serialize': Serialize.Type__Library
        }
        readonly 'Type Selection': {
            readonly 'Resolve': Resolve.Type__Selection
            readonly 'Serialize': Serialize.Type__Selection
        }
        readonly 'Type Selection Tail': {
            readonly 'Resolve': Resolve.Type__Selection__Tail
            readonly 'Serialize': Serialize.Type__Selection__Tail
        }
    }
}

export namespace proto__typesystem {
    
    export namespace Unresolved {
        
        export namespace Flat {
            
            export type Aggregated__Type__Parameters$D$<_TAnnotation> = null
            
            export type Aggregated__Type__Parameters$<_TAnnotation> = _pt.Dictionary<Aggregated__Type__Parameters$D$<_TAnnotation>>
            
            export type Type__Parameters$local$D$<_TAnnotation> = null
            
            export type Type__Parameters$local$<_TAnnotation> = _pt.Dictionary<Type__Parameters$local$D$<_TAnnotation>>
            
            export type Type__Parameters$aggregated$<_TAnnotation> = Aggregated__Type__Parameters$<_TAnnotation>
            
            export type Type__Parameters$<_TAnnotation> = {
                readonly 'aggregated': Type__Parameters$aggregated$<_TAnnotation>
                readonly 'local': Type__Parameters$local$<_TAnnotation>
            }
            
            export type Function__Declaration$type__parameters$<_TAnnotation> = Type__Parameters$<_TAnnotation>
            
            export type Function__Declaration$context$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Function__Declaration$parameters$D$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Function__Declaration$parameters$<_TAnnotation> = _pt.Dictionary<Function__Declaration$parameters$D$<_TAnnotation>>
            
            export type Function__Declaration$<_TAnnotation> = {
                readonly 'context': Function__Declaration$context$<_TAnnotation>
                readonly 'parameters': Function__Declaration$parameters$<_TAnnotation>
                readonly 'type parameters': Function__Declaration$type__parameters$<_TAnnotation>
            }
            
            export type Namespace__2$parent__sibling$namespace$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Namespace__2$parent__sibling$<_TAnnotation> = {
                readonly 'namespace': Namespace__2$parent__sibling$namespace$<_TAnnotation>
            }
            
            export type Namespace__2$local$<_TAnnotation> = Local__Namespace$<_TAnnotation>
            
            export type Namespace__2$<_TAnnotation> = 
                | ['local', Namespace__2$local$<_TAnnotation>]
                | ['parent sibling', Namespace__2$parent__sibling$<_TAnnotation>]
            
            export type Local__Namespace$namespaces$D$<_TAnnotation> = Namespace__2$<_TAnnotation>
            
            export type Local__Namespace$namespaces$<_TAnnotation> = _pt.Dictionary<Local__Namespace$namespaces$D$<_TAnnotation>>
            
            export type Local__Namespace$parameters$<_TAnnotation> = Type__Parameters$<_TAnnotation>
            
            export type Local__Namespace$types$D$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Local__Namespace$types$<_TAnnotation> = _pt.Dictionary<Local__Namespace$types$D$<_TAnnotation>>
            
            export type Local__Namespace$<_TAnnotation> = {
                readonly 'namespaces': Local__Namespace$namespaces$<_TAnnotation>
                readonly 'parameters': Local__Namespace$parameters$<_TAnnotation>
                readonly 'types': Local__Namespace$types$<_TAnnotation>
            }
            
            export type Type$address__function$declaration$<_TAnnotation> = Function__Declaration$<_TAnnotation>
            
            export type Type$address__function$return__type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$address__function$<_TAnnotation> = {
                readonly 'declaration': Type$address__function$declaration$<_TAnnotation>
                readonly 'return type': Type$address__function$return__type$<_TAnnotation>
            }
            
            export type Type$array$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$boolean$<_TAnnotation> = null
            
            export type Type$computed$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$dictionary$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$group$D$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$group$D$mutable$O$<_TAnnotation> = null
            
            export type Type$group$D$mutable$<_TAnnotation> = _pt.OptionalValue<Type$group$D$mutable$O$<_TAnnotation>>
            
            export type Type$group$D$<_TAnnotation> = {
                readonly 'mutable': Type$group$D$mutable$<_TAnnotation>
                readonly 'type': Type$group$D$type$<_TAnnotation>
            }
            
            export type Type$group$<_TAnnotation> = _pt.Dictionary<Type$group$D$<_TAnnotation>>
            
            export type Type$null$<_TAnnotation> = null
            
            export type Type$number$<_TAnnotation> = null
            
            export type Type$optional$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$procedure$declaration$<_TAnnotation> = Function__Declaration$<_TAnnotation>
            
            export type Type$procedure$<_TAnnotation> = {
                readonly 'declaration': Type$procedure$declaration$<_TAnnotation>
            }
            
            export type Type$string$<_TAnnotation> = null
            
            export type Type$tagged__union$D$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$tagged__union$<_TAnnotation> = _pt.Dictionary<Type$tagged__union$D$<_TAnnotation>>
            
            export type Type$type__parameter$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type$type__reference$external$namespaces$<_TAnnotation> = Namespace__Selection$<_TAnnotation>
            
            export type Type$type__reference$external$type$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type$type__reference$external$<_TAnnotation> = {
                readonly 'namespaces': Type$type__reference$external$namespaces$<_TAnnotation>
                readonly 'type': Type$type__reference$external$type$<_TAnnotation>
            }
            
            export type Type$type__reference$sibling$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type$type__reference$cyclic__sibling$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Type$type__reference$<_TAnnotation> = 
                | ['cyclic sibling', Type$type__reference$cyclic__sibling$<_TAnnotation>]
                | ['external', Type$type__reference$external$<_TAnnotation>]
                | ['sibling', Type$type__reference$sibling$<_TAnnotation>]
            
            export type Type$value__function$declaration$<_TAnnotation> = Function__Declaration$<_TAnnotation>
            
            export type Type$value__function$return__type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type$value__function$<_TAnnotation> = {
                readonly 'declaration': Type$value__function$declaration$<_TAnnotation>
                readonly 'return type': Type$value__function$return__type$<_TAnnotation>
            }
            
            export type Type$<_TAnnotation> = 
                | ['address function', Type$address__function$<_TAnnotation>]
                | ['array', Type$array$<_TAnnotation>]
                | ['boolean', Type$boolean$<_TAnnotation>]
                | ['computed', Type$computed$<_TAnnotation>]
                | ['dictionary', Type$dictionary$<_TAnnotation>]
                | ['group', Type$group$<_TAnnotation>]
                | ['null', Type$null$<_TAnnotation>]
                | ['number', Type$number$<_TAnnotation>]
                | ['optional', Type$optional$<_TAnnotation>]
                | ['procedure', Type$procedure$<_TAnnotation>]
                | ['string', Type$string$<_TAnnotation>]
                | ['tagged union', Type$tagged__union$<_TAnnotation>]
                | ['type parameter', Type$type__parameter$<_TAnnotation>]
                | ['type reference', Type$type__reference$<_TAnnotation>]
                | ['value function', Type$value__function$<_TAnnotation>]
            
            export type Type__Arguments$D$type$<_TAnnotation> = Type$<_TAnnotation>
            
            export type Type__Arguments$D$<_TAnnotation> = {
                readonly 'type': Type__Arguments$D$type$<_TAnnotation>
            }
            
            export type Type__Arguments$<_TAnnotation> = _pt.Dictionary<Type__Arguments$D$<_TAnnotation>>
            
            export type Namespace__Selection$namespace$<_TAnnotation> = {
                readonly 'key': string
                readonly 'referent': _TAnnotation
            }
            
            export type Namespace__Selection$arguments$<_TAnnotation> = Type__Arguments$<_TAnnotation>
            
            export type Namespace__Selection$tail$O$<_TAnnotation> = Namespace__Selection$<_TAnnotation>
            
            export type Namespace__Selection$tail$<_TAnnotation> = _pt.OptionalValue<Namespace__Selection$tail$O$<_TAnnotation>>
            
            export type Namespace__Selection$<_TAnnotation> = {
                readonly 'arguments': Namespace__Selection$arguments$<_TAnnotation>
                readonly 'namespace': Namespace__Selection$namespace$<_TAnnotation>
                readonly 'tail': Namespace__Selection$tail$<_TAnnotation>
            }
            
            export type Root$<_TAnnotation> = Local__Namespace$<_TAnnotation>
        }
        
        export namespace T {
            
            import _IFlat = Flat
            
            export namespace Aggregated__Type__Parameters {
                
                import _IFlat = Flat
                
                export namespace D {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Aggregated__Type__Parameters$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Aggregated__Type__Parameters$<_TAnnotation>
            }
            
            export namespace TType__Parameters {
                
                import _IFlat = Flat
                
                export namespace local {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type__Parameters$local$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Parameters$local$<_TAnnotation>
                }
                
                export namespace aggregated {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Type__Parameters$aggregated$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Parameters$<_TAnnotation>
            }
            
            export namespace Function__Declaration {
                
                import _IFlat = Flat
                
                export namespace type__parameters {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Function__Declaration$type__parameters$<_TAnnotation>
                }
                
                export namespace context {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Function__Declaration$context$<_TAnnotation>
                }
                
                export namespace parameters {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Function__Declaration$parameters$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Function__Declaration$parameters$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Function__Declaration$<_TAnnotation>
            }
            
            export namespace Namespace__2 {
                
                import _IFlat = Flat
                
                export namespace parent__sibling {
                    
                    import _IFlat = Flat
                    
                    export namespace namespace {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Namespace__2$parent__sibling$namespace$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__2$parent__sibling$<_TAnnotation>
                }
                
                export namespace local {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__2$local$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Namespace__2$<_TAnnotation>
            }
            
            export namespace Local__Namespace {
                
                import _IFlat = Flat
                
                export namespace namespaces {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Local__Namespace$namespaces$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Local__Namespace$namespaces$<_TAnnotation>
                }
                
                export namespace parameters {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Local__Namespace$parameters$<_TAnnotation>
                }
                
                export namespace types {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Local__Namespace$types$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Local__Namespace$types$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Local__Namespace$<_TAnnotation>
            }
            
            export namespace TType {
                
                import _IFlat = Flat
                
                export namespace address__function {
                    
                    import _IFlat = Flat
                    
                    export namespace declaration {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type$address__function$declaration$<_TAnnotation>
                    }
                    
                    export namespace return__type {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type$address__function$return__type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$address__function$<_TAnnotation>
                }
                
                export namespace array {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Type$array$<_TAnnotation>
                }
                
                export namespace _lboolean {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Type$boolean$<_TAnnotation>
                }
                
                export namespace computed {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Type$computed$<_TAnnotation>
                }
                
                export namespace dictionary {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Type$dictionary$<_TAnnotation>
                }
                
                export namespace group {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export namespace _ltype {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type$group$D$type$<_TAnnotation>
                        }
                        
                        export namespace mutable {
                            
                            import _IFlat = Flat
                            
                            export namespace O {
                                
                                import _IFlat = Flat
                                
                                export type $<_TAnnotation> = _IFlat.Type$group$D$mutable$O$<_TAnnotation>
                            }
                            
                            export type $<_TAnnotation> = _IFlat.Type$group$D$mutable$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$group$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$group$<_TAnnotation>
                }
                
                export namespace _lnull {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Type$null$<_TAnnotation>
                }
                
                export namespace _lnumber {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Type$number$<_TAnnotation>
                }
                
                export namespace optional {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Type$optional$<_TAnnotation>
                }
                
                export namespace procedure {
                    
                    import _IFlat = Flat
                    
                    export namespace declaration {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type$procedure$declaration$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$procedure$<_TAnnotation>
                }
                
                export namespace _lstring {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Type$string$<_TAnnotation>
                }
                
                export namespace tagged__union {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type$tagged__union$D$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$tagged__union$<_TAnnotation>
                }
                
                export namespace type__parameter {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Type$type__parameter$<_TAnnotation>
                }
                
                export namespace type__reference {
                    
                    import _IFlat = Flat
                    
                    export namespace external {
                        
                        import _IFlat = Flat
                        
                        export namespace namespaces {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type$type__reference$external$namespaces$<_TAnnotation>
                        }
                        
                        export namespace _ltype {
                            
                            import _IFlat = Flat
                            
                            export type $<_TAnnotation> = _IFlat.Type$type__reference$external$type$<_TAnnotation>
                        }
                        
                        export type $<_TAnnotation> = _IFlat.Type$type__reference$external$<_TAnnotation>
                    }
                    
                    export namespace sibling {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type$type__reference$sibling$<_TAnnotation>
                    }
                    
                    export namespace cyclic__sibling {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type$type__reference$cyclic__sibling$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$type__reference$<_TAnnotation>
                }
                
                export namespace value__function {
                    
                    import _IFlat = Flat
                    
                    export namespace declaration {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type$value__function$declaration$<_TAnnotation>
                    }
                    
                    export namespace return__type {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type$value__function$return__type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type$value__function$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type$<_TAnnotation>
            }
            
            export namespace TType__Arguments {
                
                import _IFlat = Flat
                
                export namespace D {
                    
                    import _IFlat = Flat
                    
                    export namespace _ltype {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Type__Arguments$D$type$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Type__Arguments$D$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Type__Arguments$<_TAnnotation>
            }
            
            export namespace Namespace__Selection {
                
                import _IFlat = Flat
                
                export namespace namespace {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__Selection$namespace$<_TAnnotation>
                }
                
                export namespace arguments {
                    
                    import _IFlat = Flat
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__Selection$arguments$<_TAnnotation>
                }
                
                export namespace tail {
                    
                    import _IFlat = Flat
                    
                    export namespace O {
                        
                        import _IFlat = Flat
                        
                        export type $<_TAnnotation> = _IFlat.Namespace__Selection$tail$O$<_TAnnotation>
                    }
                    
                    export type $<_TAnnotation> = _IFlat.Namespace__Selection$tail$<_TAnnotation>
                }
                
                export type $<_TAnnotation> = _IFlat.Namespace__Selection$<_TAnnotation>
            }
            
            export namespace Root {
                
                import _IFlat = Flat
                
                export type $<_TAnnotation> = _IFlat.Root$<_TAnnotation>
            }
        }
    }
    
    export namespace Resolved {
        
        export namespace Flat {
            
            export type Aggregated__Type__Parameters$D$ = null
            
            export type Aggregated__Type__Parameters$ = _pt.Dictionary<Aggregated__Type__Parameters$D$>
            
            export type Type__Parameters$local$D$ = null
            
            export type Type__Parameters$local$ = _pt.Dictionary<Type__Parameters$local$D$>
            
            export type Type__Parameters$aggregated$ = Aggregated__Type__Parameters$
            
            export type Type__Parameters$ = {
                readonly 'aggregated': Type__Parameters$aggregated$
                readonly 'local': Type__Parameters$local$
            }
            
            export type Function__Declaration$type__parameters$ = Type__Parameters$
            
            export type Function__Declaration$context$ = Type$
            
            export type Function__Declaration$parameters$D$ = Type$
            
            export type Function__Declaration$parameters$ = _pt.Dictionary<Function__Declaration$parameters$D$>
            
            export type Function__Declaration$ = {
                readonly 'context': Function__Declaration$context$
                readonly 'parameters': Function__Declaration$parameters$
                readonly 'type parameters': Function__Declaration$type__parameters$
            }
            
            export type Namespace__2$parent__sibling$namespace$ = {
                readonly 'key': string
                readonly 'referent': Namespace__2$
            }
            
            export type Namespace__2$parent__sibling$ = {
                readonly 'namespace': Namespace__2$parent__sibling$namespace$
            }
            
            export type Namespace__2$local$ = Local__Namespace$
            
            export type Namespace__2$ = 
                | ['local', Namespace__2$local$]
                | ['parent sibling', Namespace__2$parent__sibling$]
            
            export type Local__Namespace$namespaces$D$ = Namespace__2$
            
            export type Local__Namespace$namespaces$ = _pt.Dictionary<Local__Namespace$namespaces$D$>
            
            export type Local__Namespace$parameters$ = Type__Parameters$
            
            export type Local__Namespace$types$D$ = Type$
            
            export type Local__Namespace$types$ = _pt.Dictionary<Local__Namespace$types$D$>
            
            export type Local__Namespace$ = {
                readonly 'namespaces': Local__Namespace$namespaces$
                readonly 'parameters': Local__Namespace$parameters$
                readonly 'types': Local__Namespace$types$
            }
            
            export type Type$address__function$declaration$ = Function__Declaration$
            
            export type Type$address__function$return__type$ = Type$
            
            export type Type$address__function$ = {
                readonly 'declaration': Type$address__function$declaration$
                readonly 'return type': Type$address__function$return__type$
            }
            
            export type Type$array$ = Type$
            
            export type Type$boolean$ = null
            
            export type Type$computed$ = Type$
            
            export type Type$dictionary$ = Type$
            
            export type Type$group$D$type$ = Type$
            
            export type Type$group$D$mutable$O$ = null
            
            export type Type$group$D$mutable$ = _pt.OptionalValue<Type$group$D$mutable$O$>
            
            export type Type$group$D$ = {
                readonly 'mutable': Type$group$D$mutable$
                readonly 'type': Type$group$D$type$
            }
            
            export type Type$group$ = _pt.Dictionary<Type$group$D$>
            
            export type Type$null$ = null
            
            export type Type$number$ = null
            
            export type Type$optional$ = Type$
            
            export type Type$procedure$declaration$ = Function__Declaration$
            
            export type Type$procedure$ = {
                readonly 'declaration': Type$procedure$declaration$
            }
            
            export type Type$string$ = null
            
            export type Type$tagged__union$D$ = Type$
            
            export type Type$tagged__union$ = _pt.Dictionary<Type$tagged__union$D$>
            
            export type Type$type__parameter$ = {
                readonly 'key': string
                readonly 'referent': Aggregated__Type__Parameters$
            }
            
            export type Type$type__reference$external$namespaces$ = Namespace__Selection$
            
            export type Type$type__reference$external$type$ = {
                readonly 'key': string
                readonly 'referent': Local__Namespace$types$
            }
            
            export type Type$type__reference$external$ = {
                readonly 'namespaces': Type$type__reference$external$namespaces$
                readonly 'type': Type$type__reference$external$type$
            }
            
            export type Type$type__reference$sibling$ = {
                readonly 'key': string
                readonly 'referent': Type$
            }
            
            export type Type$type__reference$cyclic__sibling$ = {
                readonly 'key': string
                readonly 'referent': _pt.ComputedValue<Type$>
            }
            
            export type Type$type__reference$ = 
                | ['cyclic sibling', Type$type__reference$cyclic__sibling$]
                | ['external', Type$type__reference$external$]
                | ['sibling', Type$type__reference$sibling$]
            
            export type Type$value__function$declaration$ = Function__Declaration$
            
            export type Type$value__function$return__type$ = Type$
            
            export type Type$value__function$ = {
                readonly 'declaration': Type$value__function$declaration$
                readonly 'return type': Type$value__function$return__type$
            }
            
            export type Type$ = 
                | ['address function', Type$address__function$]
                | ['array', Type$array$]
                | ['boolean', Type$boolean$]
                | ['computed', Type$computed$]
                | ['dictionary', Type$dictionary$]
                | ['group', Type$group$]
                | ['null', Type$null$]
                | ['number', Type$number$]
                | ['optional', Type$optional$]
                | ['procedure', Type$procedure$]
                | ['string', Type$string$]
                | ['tagged union', Type$tagged__union$]
                | ['type parameter', Type$type__parameter$]
                | ['type reference', Type$type__reference$]
                | ['value function', Type$value__function$]
            
            export type Type__Arguments$D$type$ = Type$
            
            export type Type__Arguments$D$ = {
                readonly 'type': Type__Arguments$D$type$
            }
            
            export type Type__Arguments$ = _pt.Dictionary<Type__Arguments$D$>
            
            export type Namespace__Selection$namespace$ = {
                readonly 'key': string
                readonly 'referent': Local__Namespace$namespaces$
            }
            
            export type Namespace__Selection$arguments$ = Type__Arguments$
            
            export type Namespace__Selection$tail$O$ = Namespace__Selection$
            
            export type Namespace__Selection$tail$ = _pt.OptionalValue<Namespace__Selection$tail$O$>
            
            export type Namespace__Selection$ = {
                readonly 'arguments': Namespace__Selection$arguments$
                readonly 'namespace': Namespace__Selection$namespace$
                readonly 'tail': Namespace__Selection$tail$
            }
            
            export type Root$ = Local__Namespace$
        }
        
        export namespace T {
            
            import _IFlat = Flat
            
            export namespace Aggregated__Type__Parameters {
                
                import _IFlat = Flat
                
                export namespace D {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Aggregated__Type__Parameters$D$
                }
                
                export type $ = _IFlat.Aggregated__Type__Parameters$
            }
            
            export namespace TType__Parameters {
                
                import _IFlat = Flat
                
                export namespace local {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type__Parameters$local$D$
                    }
                    
                    export type $ = _IFlat.Type__Parameters$local$
                }
                
                export namespace aggregated {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Type__Parameters$aggregated$
                }
                
                export type $ = _IFlat.Type__Parameters$
            }
            
            export namespace Function__Declaration {
                
                import _IFlat = Flat
                
                export namespace type__parameters {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Function__Declaration$type__parameters$
                }
                
                export namespace context {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Function__Declaration$context$
                }
                
                export namespace parameters {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Function__Declaration$parameters$D$
                    }
                    
                    export type $ = _IFlat.Function__Declaration$parameters$
                }
                
                export type $ = _IFlat.Function__Declaration$
            }
            
            export namespace Namespace__2 {
                
                import _IFlat = Flat
                
                export namespace parent__sibling {
                    
                    import _IFlat = Flat
                    
                    export namespace namespace {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Namespace__2$parent__sibling$namespace$
                    }
                    
                    export type $ = _IFlat.Namespace__2$parent__sibling$
                }
                
                export namespace local {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Namespace__2$local$
                }
                
                export type $ = _IFlat.Namespace__2$
            }
            
            export namespace Local__Namespace {
                
                import _IFlat = Flat
                
                export namespace namespaces {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Local__Namespace$namespaces$D$
                    }
                    
                    export type $ = _IFlat.Local__Namespace$namespaces$
                }
                
                export namespace parameters {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Local__Namespace$parameters$
                }
                
                export namespace types {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Local__Namespace$types$D$
                    }
                    
                    export type $ = _IFlat.Local__Namespace$types$
                }
                
                export type $ = _IFlat.Local__Namespace$
            }
            
            export namespace TType {
                
                import _IFlat = Flat
                
                export namespace address__function {
                    
                    import _IFlat = Flat
                    
                    export namespace declaration {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type$address__function$declaration$
                    }
                    
                    export namespace return__type {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type$address__function$return__type$
                    }
                    
                    export type $ = _IFlat.Type$address__function$
                }
                
                export namespace array {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Type$array$
                }
                
                export namespace _lboolean {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Type$boolean$
                }
                
                export namespace computed {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Type$computed$
                }
                
                export namespace dictionary {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Type$dictionary$
                }
                
                export namespace group {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export namespace _ltype {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type$group$D$type$
                        }
                        
                        export namespace mutable {
                            
                            import _IFlat = Flat
                            
                            export namespace O {
                                
                                import _IFlat = Flat
                                
                                export type $ = _IFlat.Type$group$D$mutable$O$
                            }
                            
                            export type $ = _IFlat.Type$group$D$mutable$
                        }
                        
                        export type $ = _IFlat.Type$group$D$
                    }
                    
                    export type $ = _IFlat.Type$group$
                }
                
                export namespace _lnull {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Type$null$
                }
                
                export namespace _lnumber {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Type$number$
                }
                
                export namespace optional {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Type$optional$
                }
                
                export namespace procedure {
                    
                    import _IFlat = Flat
                    
                    export namespace declaration {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type$procedure$declaration$
                    }
                    
                    export type $ = _IFlat.Type$procedure$
                }
                
                export namespace _lstring {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Type$string$
                }
                
                export namespace tagged__union {
                    
                    import _IFlat = Flat
                    
                    export namespace D {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type$tagged__union$D$
                    }
                    
                    export type $ = _IFlat.Type$tagged__union$
                }
                
                export namespace type__parameter {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Type$type__parameter$
                }
                
                export namespace type__reference {
                    
                    import _IFlat = Flat
                    
                    export namespace external {
                        
                        import _IFlat = Flat
                        
                        export namespace namespaces {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type$type__reference$external$namespaces$
                        }
                        
                        export namespace _ltype {
                            
                            import _IFlat = Flat
                            
                            export type $ = _IFlat.Type$type__reference$external$type$
                        }
                        
                        export type $ = _IFlat.Type$type__reference$external$
                    }
                    
                    export namespace sibling {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type$type__reference$sibling$
                    }
                    
                    export namespace cyclic__sibling {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type$type__reference$cyclic__sibling$
                    }
                    
                    export type $ = _IFlat.Type$type__reference$
                }
                
                export namespace value__function {
                    
                    import _IFlat = Flat
                    
                    export namespace declaration {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type$value__function$declaration$
                    }
                    
                    export namespace return__type {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type$value__function$return__type$
                    }
                    
                    export type $ = _IFlat.Type$value__function$
                }
                
                export type $ = _IFlat.Type$
            }
            
            export namespace TType__Arguments {
                
                import _IFlat = Flat
                
                export namespace D {
                    
                    import _IFlat = Flat
                    
                    export namespace _ltype {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Type__Arguments$D$type$
                    }
                    
                    export type $ = _IFlat.Type__Arguments$D$
                }
                
                export type $ = _IFlat.Type__Arguments$
            }
            
            export namespace Namespace__Selection {
                
                import _IFlat = Flat
                
                export namespace namespace {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Namespace__Selection$namespace$
                }
                
                export namespace arguments {
                    
                    import _IFlat = Flat
                    
                    export type $ = _IFlat.Namespace__Selection$arguments$
                }
                
                export namespace tail {
                    
                    import _IFlat = Flat
                    
                    export namespace O {
                        
                        import _IFlat = Flat
                        
                        export type $ = _IFlat.Namespace__Selection$tail$O$
                    }
                    
                    export type $ = _IFlat.Namespace__Selection$tail$
                }
                
                export type $ = _IFlat.Namespace__Selection$
            }
            
            export namespace Root {
                
                import _IFlat = Flat
                
                export type $ = _IFlat.Root$
            }
        }
    }
    
    export namespace Resolve {
        
        import _IResolved = Resolved
        
        import _IUnresolved = Unresolved
        
        export type Aggregated__Type__Parameters = <_TAnnotation>(
            $: _IUnresolved.Flat.Aggregated__Type__Parameters$<_TAnnotation>,
        ) => _IResolved.Flat.Aggregated__Type__Parameters$
        
        export type Function__Declaration = <_TAnnotation>(
            $: _IUnresolved.Flat.Function__Declaration$<_TAnnotation>,
            $p: {
                readonly 'cyclic sibling types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Type$>>
                readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Namespace__2$>
                readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>
                readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$
            }
        ) => _IResolved.Flat.Function__Declaration$
        
        export type Local__Namespace = <_TAnnotation>(
            $: _IUnresolved.Flat.Local__Namespace$<_TAnnotation>,
            $p: {
                readonly 'parent type parameters': _pt.OptionalValue<_IResolved.Flat.Aggregated__Type__Parameters$>
                readonly 'resolved sibling namespaces': _pt.OptionalValue<_pt.Lookup<_IResolved.Flat.Namespace__2$>>
            }
        ) => _IResolved.Flat.Local__Namespace$
        
        export type Namespace__2 = <_TAnnotation>(
            $: _IUnresolved.Flat.Namespace__2$<_TAnnotation>,
            $p: {
                readonly 'resolved parent sibling namespaces': _pt.OptionalValue<_pt.Lookup<_IResolved.Flat.Namespace__2$>>
            }
        ) => _IResolved.Flat.Namespace__2$
        
        export type Namespace__Selection = <_TAnnotation>(
            $: _IUnresolved.Flat.Namespace__Selection$<_TAnnotation>,
            $p: {
                readonly 'cyclic sibling types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Type$>>
                readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Namespace__2$>
                readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>
                readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$
            }
        ) => _IResolved.Flat.Namespace__Selection$
        
        export type Root = <_TAnnotation>(
            $: _IUnresolved.Flat.Root$<_TAnnotation>,
        ) => _IResolved.Flat.Root$
        
        export type Type__Arguments = <_TAnnotation>(
            $: _IUnresolved.Flat.Type__Arguments$<_TAnnotation>,
        ) => _IResolved.Flat.Type__Arguments$
        
        export type Type__Parameters = <_TAnnotation>(
            $: _IUnresolved.Flat.Type__Parameters$<_TAnnotation>,
            $p: {
                readonly 'parent type parameters': _pt.OptionalValue<_IResolved.Flat.Aggregated__Type__Parameters$>
            }
        ) => _IResolved.Flat.Type__Parameters$
        
        export type Type = <_TAnnotation>(
            $: _IUnresolved.Flat.Type$<_TAnnotation>,
            $p: {
                readonly 'cyclic sibling types': _pt.Lookup<_pt.ComputedValue<_IResolved.Flat.Type$>>
                readonly 'resolved namespaces': _pt.Lookup<_IResolved.Flat.Namespace__2$>
                readonly 'resolved sibling types': _pt.Lookup<_IResolved.Flat.Type$>
                readonly 'type parameters': _IResolved.Flat.Aggregated__Type__Parameters$
            }
        ) => _IResolved.Flat.Type$
    }
    
    export namespace Serialize {
        
        import _IResolved = Resolved
        
        export type Aggregated__Type__Parameters = (
            $: _IResolved.Flat.Aggregated__Type__Parameters$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type__Parameters = (
            $: _IResolved.Flat.Type__Parameters$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Function__Declaration = (
            $: _IResolved.Flat.Function__Declaration$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Namespace__2 = (
            $: _IResolved.Flat.Namespace__2$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Local__Namespace = (
            $: _IResolved.Flat.Local__Namespace$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type = (
            $: _IResolved.Flat.Type$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Type__Arguments = (
            $: _IResolved.Flat.Type__Arguments$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Namespace__Selection = (
            $: _IResolved.Flat.Namespace__Selection$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
        
        export type Root = (
            $: _IResolved.Flat.Root$,
            $p: {
                readonly 'out': boolean
            }
        ) => void
    }
    
    export namespace Select {
        
        import _IResolved = Resolved
        
        export type Namespace__2 = (
            $: _IResolved.Flat.Namespace__2$,
        ) => _IResolved.Flat.Local__Namespace$
        
        export type Namespace__Selection = (
            $: _IResolved.Flat.Namespace__Selection$,
        ) => _IResolved.Flat.Namespace__2$
    }
    
    export type _$ = (
        $: null,
    ) => {
        readonly 'Aggregated Type Parameters': {
            readonly 'Resolve': Resolve.Aggregated__Type__Parameters
            readonly 'Serialize': Serialize.Aggregated__Type__Parameters
        }
        readonly 'Function Declaration': {
            readonly 'Resolve': Resolve.Function__Declaration
            readonly 'Serialize': Serialize.Function__Declaration
        }
        readonly 'Local Namespace': {
            readonly 'Resolve': Resolve.Local__Namespace
            readonly 'Serialize': Serialize.Local__Namespace
        }
        readonly 'Namespace 2': {
            readonly 'Resolve': Resolve.Namespace__2
            readonly 'Serialize': Serialize.Namespace__2
        }
        readonly 'Namespace Selection': {
            readonly 'Resolve': Resolve.Namespace__Selection
            readonly 'Serialize': Serialize.Namespace__Selection
        }
        readonly 'Root': {
            readonly 'Resolve': Resolve.Root
            readonly 'Serialize': Serialize.Root
        }
        readonly 'Type': {
            readonly 'Resolve': Resolve.Type
            readonly 'Serialize': Serialize.Type
        }
        readonly 'Type Arguments': {
            readonly 'Resolve': Resolve.Type__Arguments
            readonly 'Serialize': Serialize.Type__Arguments
        }
        readonly 'Type Parameters': {
            readonly 'Resolve': Resolve.Type__Parameters
            readonly 'Serialize': Serialize.Type__Parameters
        }
    }
}

export namespace proto__implementation {
    
    export namespace Unresolved {
        
        export namespace Flat {}
        
        export namespace T {
            
            import _IFlat = Flat
        }
    }
    
    export namespace Resolved {
        
        export namespace Flat {}
        
        export namespace T {
            
            import _IFlat = Flat
        }
    }
    
    export namespace Resolve {
        
        import _IResolved = Resolved
        
        import _IUnresolved = Unresolved
    }
    
    export namespace Serialize {
        
        import _IResolved = Resolved
    }
    
    export namespace Select {
        
        import _IResolved = Resolved
    }
    
    export type _$ = (
        $: null,
    ) => null
}